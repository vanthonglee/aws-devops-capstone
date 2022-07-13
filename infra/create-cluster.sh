#!/usr/bin/env bash

eksctl create cluster \
--name capstone-georgelee \
--version 1.22 \
--region us-east-1 \
--account udacity-lab3
--nodegroup-name cgc-linux-nodes \
--node-type t2.micro \
--nodes-min=1 \
--nodes-max=3

eksctl create cluster   

aws eks describe-cluster --name capstone-georgelee-cluster --query cluster.identity.oidc.issuer --output text

https://oidc.eks.us-east-1.amazonaws.com/id/9A6D21BF28C145600EF4F839A6FABE4F

aws eks update-kubeconfig --region us-east-1 --name capstone-georgelee-clusterkubectl get svc