data "aws_iam_policy_document" "dotdev_trust_policy" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      identifiers = ["lambda.amazonaws.com"]
      type = "Service"
    }
  }
}

data "aws_iam_policy_document" "dotdev-api-v1-github-activity-stream" {
  statement {
    sid = "GitHub Activty Stream Lambda Execution"
    actions = ["lambda:InvokeFunction"]
  }
}

data "aws_iam_policy_document" "supergrecko_dotdev_bucket" {
  statement {
    sid = "AccessLambdaBucket"
    actions = [
      "s3:PutObject",
      "s3:GetObject",
    ]
    resources = [
      "${aws_s3_bucket.supergrecko_dotdev.arn}/*"
    ]
  }
}

resource "aws_iam_role" "dotdev_iam" {
  name = "dotdev_iam"
  assume_role_policy = data.aws_iam_policy_document.dotdev_trust_policy.json

  inline_policy {
    name = "supergrecko_dotdev_bucket"
    policy = data.aws_iam_policy_document.supergrecko_dotdev_bucket.json
  }
}
