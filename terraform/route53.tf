# Domain matsjla.no
data "aws_route53_zone" "matsjla_no" {
  name = "matsjla.no"
  private_zone = false
}

resource "aws_route53_record" "matsjla_no_a_vercel" {
  zone_id = data.aws_route53_zone.matsjla_no.zone_id
  name = data.aws_route53_zone.matsjla_no.name
  type = "A"
  ttl = 300
  records = [
    "76.76.21.21"
  ]
}

resource "aws_route53_record" "matsjla_no_cname_vercel" {
  zone_id = data.aws_route53_zone.matsjla_no.zone_id
  name = "www.${data.aws_route53_zone.matsjla_no.name}"
  type = "CNAME"
  ttl = 300
  records = [
    "cname.vercel-dns.com"
  ]
}

# Domain supergrecko.com
data "aws_route53_zone" "supergrecko_com" {
  name = "supergrecko.com"
  private_zone = false
}

resource "aws_route53_record" "supergrecko_com_a_vercel" {
  zone_id = data.aws_route53_zone.supergrecko_com.zone_id
  name = data.aws_route53_zone.supergrecko_com.name
  type = "A"
  ttl = 300
  records = [
    "76.76.21.21"
  ]
}

resource "aws_route53_record" "supergrecko_com_cname_vercel" {
  zone_id = data.aws_route53_zone.supergrecko_com.zone_id
  name = "www.${data.aws_route53_zone.supergrecko_com.name}"
  type = "CNAME"
  ttl = 300
  records = [
    "cname.vercel-dns.com"
  ]
}

resource "aws_route53_record" "supergrecko_com_mx_google" {
  zone_id = data.aws_route53_zone.supergrecko_com.zone_id
  name = data.aws_route53_zone.supergrecko_com.name
  type = "MX"
  ttl = 1800
  records = [
    "1 aspmx.l.google.com",
    "5 alt1.aspmx.l.google.com",
    "5 alt2.aspmx.l.google.com",
    "10 alt3.aspmx.l.google.com",
    "10 alt4.aspmx.l.google.com"
  ]
}

# Domain supergrecko.dev
data "aws_route53_zone" "supergrecko_dev" {
  name = "supergrecko.dev"
  private_zone = false
}

resource "aws_route53_record" "supergrecko_dev_a_vercel" {
  zone_id = data.aws_route53_zone.supergrecko_dev.zone_id
  name = data.aws_route53_zone.supergrecko_dev.name
  type = "A"
  ttl = 300
  records = [
    "76.76.21.21"
  ]
}

resource "aws_route53_record" "api_supergrecko_dev_a" {
  zone_id = data.aws_route53_zone.supergrecko_dev.zone_id
  name = "api.${data.aws_route53_zone.supergrecko_dev.name}"
  type = "A"
  alias {
    evaluate_target_health = false
    name = aws_apigatewayv2_domain_name.api-supergrecko-dev.domain_name_configuration[0].target_domain_name
    zone_id = aws_apigatewayv2_domain_name.api-supergrecko-dev.domain_name_configuration[0].hosted_zone_id
  }
}

resource "aws_route53_record" "supergrecko_dev_cname_vercel" {
  zone_id = data.aws_route53_zone.supergrecko_dev.zone_id
  name = "www.${data.aws_route53_zone.supergrecko_dev.name}"
  type = "CNAME"
  ttl = 300
  records = [
    "cname.vercel-dns.com"
  ]
}

resource "aws_route53_record" "supergrecko_dev_mx_google" {
  zone_id = data.aws_route53_zone.supergrecko_dev.zone_id
  name = data.aws_route53_zone.supergrecko_dev.name
  type = "MX"
  ttl = 1800
  records = [
    "1 aspmx.l.google.com",
    "5 alt1.aspmx.l.google.com",
    "5 alt2.aspmx.l.google.com",
    "10 alt3.aspmx.l.google.com",
    "10 alt4.aspmx.l.google.com"
  ]
}
