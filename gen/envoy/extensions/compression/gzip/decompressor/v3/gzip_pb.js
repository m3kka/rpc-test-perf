// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/compression/gzip/decompressor/v3/gzip.proto (package envoy.extensions.compression.gzip.decompressor.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, UInt32Value } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.extensions.compression.gzip.decompressor.v3.Gzip
 */
export const Gzip = proto3.makeMessageType(
  "envoy.extensions.compression.gzip.decompressor.v3.Gzip",
  () => [
    { no: 1, name: "window_bits", kind: "message", T: UInt32Value },
    { no: 2, name: "chunk_size", kind: "message", T: UInt32Value },
    { no: 3, name: "max_inflate_ratio", kind: "message", T: UInt32Value },
  ],
);
