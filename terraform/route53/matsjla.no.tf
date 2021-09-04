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
