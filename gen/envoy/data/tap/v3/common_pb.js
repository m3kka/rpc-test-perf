// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/data/tap/v3/common.proto (package envoy.data.tap.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Wrapper for tapped body data. This includes HTTP request/response body, transport socket received
 * and transmitted data, etc.
 *
 * @generated from message envoy.data.tap.v3.Body
 */
export const Body = proto3.makeMessageType(
  "envoy.data.tap.v3.Body",
  () => [
    { no: 1, name: "as_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "body_type" },
    { no: 2, name: "as_string", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "body_type" },
    { no: 3, name: "truncated", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

