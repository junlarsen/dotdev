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
