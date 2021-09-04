resource "aws_acm_certificate" "api-supergrecko-dev" {
  domain_name = "api.supergrecko.dev"
  validation_method = "DNS"
}
