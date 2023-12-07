// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/http/gzip/v2/gzip.proto (package envoy.config.filter.http.gzip.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, UInt32Value } from "@bufbuild/protobuf";
import { Compressor } from "../../compressor/v2/compressor_pb.js";

/**
 * [#next-free-field: 11]
 *
 * @generated from message envoy.config.filter.http.gzip.v2.Gzip
 */
export const Gzip = proto3.makeMessageType(
  "envoy.config.filter.http.gzip.v2.Gzip",
  () => [
    { no: 1, name: "memory_level", kind: "message", T: UInt32Value },
    { no: 2, name: "content_length", kind: "message", T: UInt32Value },
    { no: 3, name: "compression_level", kind: "enum", T: proto3.getEnumType(Gzip_CompressionLevel_Enum) },
    { no: 4, name: "compression_strategy", kind: "enum", T: proto3.getEnumType(Gzip_CompressionStrategy) },
    { no: 6, name: "content_type", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "disable_on_etag_header", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "remove_accept_encoding_header", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "window_bits", kind: "message", T: UInt32Value },
    { no: 10, name: "compressor", kind: "message", T: Compressor },
  ],
);

/**
 * @generated from enum envoy.config.filter.http.gzip.v2.Gzip.CompressionStrategy
 */
export const Gzip_CompressionStrategy = proto3.makeEnum(
  "envoy.config.filter.http.gzip.v2.Gzip.CompressionStrategy",
  [
    {no: 0, name: "DEFAULT"},
    {no: 1, name: "FILTERED"},
    {no: 2, name: "HUFFMAN"},
    {no: 3, name: "RLE"},
  ],
);

/**
 * @generated from message envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel
 */
export const Gzip_CompressionLevel = proto3.makeMessageType(
  "envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel",
  [],
  {localName: "Gzip_CompressionLevel"},
);

/**
 * @generated from enum envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.Enum
 */
export const Gzip_CompressionLevel_Enum = proto3.makeEnum(
  "envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.Enum",
  [
    {no: 0, name: "DEFAULT"},
    {no: 1, name: "BEST"},
    {no: 2, name: "SPEED"},
  ],
);
