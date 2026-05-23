output "vpc_id" {
  description = "The ID of the VPC created for the platform."
  value       = aws_vpc.main.id
}
