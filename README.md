## DotDev

This is the source code for my personal website, found at 
https://supergrecko.dev

It is a full-stack application deployed to Vercel.com and AWS. It is built using
Next.js + React and the entire stack is written using TypeScript.

## Directory Layout

- `/articles`: Blog articles for the blog post feature
- `/components`: React components used for the frontend ui
- `/lambda`: AWS Lambdas used for proxying to third-party APIs
- `/lib`: Next.js build-time libraries for page generation
- `/pages`: Next.js-served React pages
- `/public`: Anything which needs to be publicly available under `/`
- `/scripts`: Utility scripts used for various development lifecycle tasks
- `/terraform`: Terraform files for managing AWS resources
  - `acm.tf`: Amazon Certificate Manager resources
  - `api-gateway.tf` Amazon API Gateway v2 resources for managing `api.supergrecko.dev`
  - `iam.tf`: Amazon IAM roles for various resources (lambda)
  - `lambda.tf`: AWS Lambda resources
  - `route53.tf`: AWS Route53 definitions for all domains used on the site
  - `s3.tf`: AWS S3 buckets
  - `sm.tf`: Amazon Secrets Manager secrets
- `/types`: Common typescript declarations used for both frontend and backend code
