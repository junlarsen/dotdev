locals {
  github_activity_stream_secrets = jsondecode(data.aws_secretsmanager_secret_version.github_activity_stream_sm.secret_string)
}

data "aws_s3_bucket_object" "github_activity_stream_zip" {
  bucket = aws_s3_bucket.supergrecko_dotdev.bucket
  key = "lambdas/github-activity-stream.zip"
}

resource "aws_lambda_function" "github_activity_stream" {
  function_name = "github-activity-stream"
  handler = "index.handler"
  role = aws_iam_role.dotdev_iam.arn
  runtime = "nodejs14.x"
  s3_bucket = data.aws_s3_bucket_object.github_activity_stream_zip.bucket
  s3_key = data.aws_s3_bucket_object.github_activity_stream_zip.key
  s3_object_version = data.aws_s3_bucket_object.github_activity_stream_zip.version_id
  environment {
    variables = {
      ACTIVITY_STREAM_API_TOKEN = local.github_activity_stream_secrets.ACTIVITY_STREAM_API_TOKEN
    }
  }
}

resource "aws_lambda_permission" "github-activity-stream-gateway" {
  action = "lambda:InvokeFunction"
  function_name = aws_lambda_function.github_activity_stream.function_name
  principal = "apigateway.amazonaws.com"
  source_arn = "${aws_apigatewayv2_api.dotdev-api.execution_arn}/*/*"
}
