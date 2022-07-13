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

eksctl create cluster --name=capstone-georgelee --region=us-east-2