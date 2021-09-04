resource "aws_apigatewayv2_api" "dotdev-api" {
  name = "dotdev-api"
  description = "Main dotdev backend API"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "aws-lambda" {
  api_id = aws_apigatewayv2_api.dotdev-api.id
  name = "$default"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "github-activity-stream-integration" {
  api_id = aws_apigatewayv2_api.dotdev-api.id
  integration_type = "AWS_PROXY"
  integration_method = "POST"
  integration_uri = aws_lambda_function.github_activity_stream.invoke_arn
}

resource "aws_apigatewayv2_route" "get-github-activity-stream" {
  api_id = aws_apigatewayv2_api.dotdev-api.id
  route_key = "GET /v1/github-activity"
  target = "integrations/${aws_apigatewayv2_integration.github-activity-stream-integration.id}"
}

resource "aws_apigatewayv2_domain_name" "api-supergrecko-dev" {
  domain_name = "api.supergrecko.dev"
  domain_name_configuration {
    certificate_arn = aws_acm_certificate.api-supergrecko-dev.arn
    endpoint_type = "REGIONAL"
    security_policy = "TLS_1_2"
  }
}

resource "aws_apigatewayv2_api_mapping" "get-github-activity-stream" {
  api_id      = aws_apigatewayv2_api.dotdev-api.id
  domain_name = aws_apigatewayv2_domain_name.api-supergrecko-dev.id
  stage       = aws_apigatewayv2_stage.aws-lambda.id
}
