// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/compression/zstd/compressor/v3/zstd.proto (package envoy.extensions.compression.zstd.compressor.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, UInt32Value } from "@bufbuild/protobuf";
import { DataSource } from "../../../../../config/core/v3/base_pb.js";

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.compression.zstd.compressor.v3.Zstd
 */
export const Zstd = proto3.makeMessageType(
  "envoy.extensions.compression.zstd.compressor.v3.Zstd",
  () => [
    { no: 1, name: "compression_level", kind: "message", T: UInt32Value },
    { no: 2, name: "enable_checksum", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "strategy", kind: "enum", T: proto3.getEnumType(Zstd_Strategy) },
    { no: 4, name: "dictionary", kind: "message", T: DataSource },
    { no: 5, name: "chunk_size", kind: "message", T: UInt32Value },
  ],
);

/**
 * Reference to http://facebook.github.io/zstd/zstd_manual.html
 *
 * @generated from enum envoy.extensions.compression.zstd.compressor.v3.Zstd.Strategy
 */
export const Zstd_Strategy = proto3.makeEnum(
  "envoy.extensions.compression.zstd.compressor.v3.Zstd.Strategy",
  [
    {no: 0, name: "DEFAULT"},
    {no: 1, name: "FAST"},
    {no: 2, name: "DFAST"},
    {no: 3, name: "GREEDY"},
    {no: 4, name: "LAZY"},
    {no: 5, name: "LAZY2"},
    {no: 6, name: "BTLAZY2"},
    {no: 7, name: "BTOPT"},
    {no: 8, name: "BTULTRA"},
    {no: 9, name: "BTULTRA2"},
  ],
);
