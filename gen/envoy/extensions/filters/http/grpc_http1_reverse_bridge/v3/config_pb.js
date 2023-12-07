// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/grpc_http1_reverse_bridge/v3/config.proto (package envoy.extensions.filters.http.grpc_http1_reverse_bridge.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * gRPC reverse bridge filter configuration
 *
 * @generated from message envoy.extensions.filters.http.grpc_http1_reverse_bridge.v3.FilterConfig
 */
export const FilterConfig = proto3.makeMessageType(
  "envoy.extensions.filters.http.grpc_http1_reverse_bridge.v3.FilterConfig",
  () => [
    { no: 1, name: "content_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "withhold_grpc_frames", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "response_size_header", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * gRPC reverse bridge filter configuration per virtualhost/route/weighted-cluster level.
 *
 * @generated from message envoy.extensions.filters.http.grpc_http1_reverse_bridge.v3.FilterConfigPerRoute
 */
export const FilterConfigPerRoute = proto3.makeMessageType(
  "envoy.extensions.filters.http.grpc_http1_reverse_bridge.v3.FilterConfigPerRoute",
  () => [
    { no: 1, name: "disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

