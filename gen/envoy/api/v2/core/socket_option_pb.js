// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/api/v2/core/socket_option.proto (package envoy.api.v2.core, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Generic socket option message. This would be used to set socket options that
 * might not exist in upstream kernels or precompiled Envoy binaries.
 * [#next-free-field: 7]
 *
 * @generated from message envoy.api.v2.core.SocketOption
 */
export const SocketOption = proto3.makeMessageType(
  "envoy.api.v2.core.SocketOption",
  () => [
    { no: 1, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "level", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "name", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "int_value", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "value" },
    { no: 5, name: "buf_value", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "value" },
    { no: 6, name: "state", kind: "enum", T: proto3.getEnumType(SocketOption_SocketState) },
  ],
);

/**
 * @generated from enum envoy.api.v2.core.SocketOption.SocketState
 */
export const SocketOption_SocketState = proto3.makeEnum(
  "envoy.api.v2.core.SocketOption.SocketState",
  [
    {no: 0, name: "STATE_PREBIND"},
    {no: 1, name: "STATE_BOUND"},
    {no: 2, name: "STATE_LISTENING"},
  ],
);
