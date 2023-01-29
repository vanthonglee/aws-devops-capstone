[![CircleCI](https://dl.circleci.com/status-badge/img/gh/vanthonglee/aws-devops-capstone/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/vanthonglee/aws-devops-capstone/tree/main)

# aws-devops-capstone
@ Van Thong (George) Lee

# Scope The project
* Linting, Checking security issue, building image, deployment
* CircleCI 
* Rolling deployment strategy
* Frontend App


# Files Included

* `.circleci` : CircleCI configuration
* `code` : Project output files for docker and kubernetes
    * `frontend` : Run_docker.sh output
* `infra`   
    * `create-cluster.sh` : To create cluster
    * `deployment.yml` : To create/update resources(Deployment, Service, Ingress) in EKS
* `screnshots`  
* `Dickerfile`
* `LICENSE`
* `note.txt` : Note some crucial manual commands 
* `README.md`
* `URLS.txt` Store Github, Result URL
# Setup
### 1. Create the Cluster

```sh
$ ./infra/create-cluster.sh
```

### 2. (Optional)Create a Kubernetes config for Amazon EKS

```sh
$ aws eks update-kubeconfig --name capstone-georgelee-cluster --region us-east-1
```
# Deploying

**Manual deploys**

You can trigger manual deploy using the following command: 

```
$ kubectl apply -f infra/deployment.yml
```

# Verifying

```sh
$ kubectl get svc,po,deploy
```

# Todo in future

- [ ] Automate K8S Deployment

- [ ] Add monitoring

- [ ] Load Testing
