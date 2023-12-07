// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/grpc_stats/v3/config.proto (package envoy.extensions.filters.http.grpc_stats.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BoolValue, proto3 } from "@bufbuild/protobuf";
import { GrpcMethodList } from "../../../../../config/core/v3/grpc_method_list_pb.js";

/**
 * gRPC statistics filter configuration
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.filters.http.grpc_stats.v3.FilterConfig
 */
export const FilterConfig = proto3.makeMessageType(
  "envoy.extensions.filters.http.grpc_stats.v3.FilterConfig",
  () => [
    { no: 1, name: "emit_filter_state", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "individual_method_stats_allowlist", kind: "message", T: GrpcMethodList, oneof: "per_method_stat_specifier" },
    { no: 3, name: "stats_for_all_methods", kind: "message", T: BoolValue, oneof: "per_method_stat_specifier" },
    { no: 4, name: "enable_upstream_stats", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "replace_dots_in_grpc_service_name", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * gRPC statistics filter state object in protobuf form.
 *
 * @generated from message envoy.extensions.filters.http.grpc_stats.v3.FilterObject
 */
export const FilterObject = proto3.makeMessageType(
  "envoy.extensions.filters.http.grpc_stats.v3.FilterObject",
  () => [
    { no: 1, name: "request_message_count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "response_message_count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);
