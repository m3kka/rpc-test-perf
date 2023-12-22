# Define variables
K6_MANAGER_IMAGE := mvisinti/k6-manager
K6_RUNNER_IMAGE := mvisinti/k6-runner
K6_STARTER_IMAGE := mvisinti/k6-starter
K6_OPERATOR_SRC := k6-operator
TAG := latest

# k6-operator
build-push-manager:
	docker buildx build \
		-f ${K6_OPERATOR_SRC}/Dockerfile.runner \
		-t $(K6_MANAGER_IMAGE):$(TAG) \
		--platform linux/amd64,linux/arm64 \
		--build-arg ARCH=$(TARGET_ARCH) \
		--push ${K6_OPERATOR_SRC}

deploy-manager:
	make -C ${K6_OPERATOR_SRC} deploy IMG_NAME="$(K6_MANAGER_IMAGE)" IMG_TAG="$(TAG)"

update-manager: build-push-manager deploy-manager