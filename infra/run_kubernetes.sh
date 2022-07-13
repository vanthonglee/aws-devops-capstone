#!/usr/bin/env bash

# This tags and uploads an image to Docker Hub

# Step 1:
# This is your Docker ID/path
# dockerpath=<>
dockerpath="thonglevan131/uda-aws-devops-capstone:latest"

# Step 2
# Run the Docker Hub container with kubernetes
kubectl run capstone-georgelee-fe --image=$dockerpath --port=3000

# Step 3:
# List kubernetes pods
kubectl get pods

# Step 4:
# Forward the container port to a host
kubectl port-forward udacitydevops-lab4 80:3000
