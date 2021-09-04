terraform {
  required_version = "~> 1.0.5"
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 3.56.0"
    }
  }
  backend "s3" {
    bucket = "supergrecko"
    key = "terraform/dotdev.tfstate"
    region = "eu-west-2"
  }
}

provider "aws" {
  region = "eu-west-2"
  default_tags {
    tags = {
      site = "dotdev"
    }
  }
}

module "route53" {
  source = "./route53"
}