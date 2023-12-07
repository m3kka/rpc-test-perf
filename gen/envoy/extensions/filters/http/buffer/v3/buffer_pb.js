// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/buffer/v3/buffer.proto (package envoy.extensions.filters.http.buffer.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, UInt32Value } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.extensions.filters.http.buffer.v3.Buffer
 */
export const Buffer = proto3.makeMessageType(
  "envoy.extensions.filters.http.buffer.v3.Buffer",
  () => [
    { no: 1, name: "max_request_bytes", kind: "message", T: UInt32Value },
  ],
);

/**
 * @generated from message envoy.extensions.filters.http.buffer.v3.BufferPerRoute
 */
export const BufferPerRoute = proto3.makeMessageType(
  "envoy.extensions.filters.http.buffer.v3.BufferPerRoute",
  () => [
    { no: 1, name: "disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "override" },
    { no: 2, name: "buffer", kind: "message", T: Buffer, oneof: "override" },
  ],
);
