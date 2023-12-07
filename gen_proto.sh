#!/bin/bash

PROTO_DIR=./gen

# protoc \
#   -I/Users/mvisinti/Repositories/obj-endpoint/cmd/entrypoint/envoy/api \
#   --plugin=protoc-gen-grpc=/opt/homebrew/bin/protoc-gen-grpc-web \
#   --js_out=import_style=commonjs,binary:${PROTO_DIR} \
#   --grpc-web_out=import_style=typescript,mode=grpcwebtext:${PROTO_DIR} \
#   envoy/service/ratelimit/v3/rls.proto \
#   envoy/config/core/v3/base.proto \
#   envoy/extensions/common/ratelimit/v3/ratelimit.proto \
#   google/protobuf/duration.proto \
#   google/protobuf/struct.proto \
#   google/protobuf/timestamp.proto \
#   udpa/annotations/status.proto \
#   udpa/annotations/versioning.proto \
#   validate/validate.proto \
#   envoy/type/v3/ratelimit_unit.proto \
#   envoy/type/v3/token_bucket.proto

protoc \
  -I/Users/mvisinti/Repositories/obj-endpoint/cmd/entrypoint/envoy/api \
  --plugin=protoc-gen-grpc=/opt/homebrew/bin/protoc-gen-grpc-web \
  --js_out=import_style=commonjs,binary:${PROTO_DIR} \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:${PROTO_DIR} \
  $(find /Users/mvisinti/Repositories/obj-endpoint/cmd/entrypoint/envoy/api -iname "*.proto")
