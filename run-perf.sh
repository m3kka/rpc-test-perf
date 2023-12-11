#!/bin/bash

MANAGER_IMAGE="manager-$(uuidgen | tr '[:upper:]' '[:lower:]')"
STARTER_IMAGE="starter-$(uuidgen | tr '[:upper:]' '[:lower:]')"
RUNNER_IMAGE="runner-$(uuidgen | tr '[:upper:]' '[:lower:]')"
TAG="10m"

make -C k6-operator docker-build IMG_NAME="ttl.sh/${MANAGER_IMAGE}" IMG_TAG="${TAG}" GO_BUILDER_IMG="golang:1.19-bullseye"
docker push "ttl.sh/${MANAGER_IMAGE}:${TAG}"
make -C k6-operator deploy IMG_NAME="ttl.sh/${MANAGER_IMAGE}" IMG_TAG="${TAG}"

docker build -f Dockerfile.starter -t "ttl.sh/${STARTER_IMAGE}:${TAG}" .
docker push "ttl.sh/${STARTER_IMAGE}:${TAG}"

docker build -f Dockerfile.runner -t "ttl.sh/${RUNNER_IMAGE}:${TAG}" .
docker push "ttl.sh/${RUNNER_IMAGE}:${TAG}"

kubectl delete -f perf-tr.yaml

sed \
  -e "s|{ STARTER_IMAGE }|ttl.sh/${STARTER_IMAGE}:${TAG}|g" \
  -e "s|{ RUNNER_IMAGE }|ttl.sh/${RUNNER_IMAGE}:${TAG}|g" \
  perf-tr.yaml | kubectl create -f -

kubectl apply -f perf-cm.yaml
