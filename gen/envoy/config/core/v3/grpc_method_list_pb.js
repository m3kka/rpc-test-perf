// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/core/v3/grpc_method_list.proto (package envoy.config.core.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * A list of gRPC methods which can be used as an allowlist, for example.
 *
 * @generated from message envoy.config.core.v3.GrpcMethodList
 */
export const GrpcMethodList = proto3.makeMessageType(
  "envoy.config.core.v3.GrpcMethodList",
  () => [
    { no: 1, name: "services", kind: "message", T: GrpcMethodList_Service, repeated: true },
  ],
);

/**
 * @generated from message envoy.config.core.v3.GrpcMethodList.Service
 */
export const GrpcMethodList_Service = proto3.makeMessageType(
  "envoy.config.core.v3.GrpcMethodList.Service",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "method_names", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "GrpcMethodList_Service"},
);
