#!/usr/bin/env bash

eksctl create cluster \
--region us-east-2 \
--name=capstone-georgelee-cluster \
--nodegroup-name cgc-worker-nodes \
--nodes=3 \
--nodes-min=1 \
--nodes-max=5 \
--node-type t2.medium \
--asg-access 


aws eks update-kubeconfig --name capstone-georgelee-cluster --region us-east-1