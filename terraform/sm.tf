resource "aws_secretsmanager_secret" "github_activity_stream_api_key" {
  name = "github_activity_stream_api_key"
  description = "GitHub API key for the ActivityStream API"
}

data "aws_secretsmanager_secret_version" "github_activity_stream_sm" {
  secret_id = aws_secretsmanager_secret.github_activity_stream_api_key.id
}
