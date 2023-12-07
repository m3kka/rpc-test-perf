// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/gzip/v3/gzip.proto (package envoy.extensions.filters.http.gzip.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Compressor } from "../../compressor/v3/compressor_pb.js";

/**
 * [#next-free-field: 12]
 *
 * @generated from message envoy.extensions.filters.http.gzip.v3.Gzip
 */
export declare class Gzip extends Message<Gzip> {
  /**
   * Value from 1 to 9 that controls the amount of internal memory used by zlib. Higher values
   * use more memory, but are faster and produce better compression results. The default value is 5.
   *
   * @generated from field: google.protobuf.UInt32Value memory_level = 1;
   */
  memoryLevel?: number;

  /**
   * A value used for selecting the zlib compression level. This setting will affect speed and
   * amount of compression applied to the content. "BEST" provides higher compression at the cost of
   * higher latency, "SPEED" provides lower compression with minimum impact on response time.
   * "DEFAULT" provides an optimal result between speed and compression. This field will be set to
   * "DEFAULT" if not specified.
   *
   * @generated from field: envoy.extensions.filters.http.gzip.v3.Gzip.CompressionLevel.Enum compression_level = 3;
   */
  compressionLevel: Gzip_CompressionLevel_Enum;

  /**
   * A value used for selecting the zlib compression strategy which is directly related to the
   * characteristics of the content. Most of the time "DEFAULT" will be the best choice, though
   * there are situations which changing this parameter might produce better results. For example,
   * run-length encoding (RLE) is typically used when the content is known for having sequences
   * which same data occurs many consecutive times. For more information about each strategy, please
   * refer to zlib manual.
   *
   * @generated from field: envoy.extensions.filters.http.gzip.v3.Gzip.CompressionStrategy compression_strategy = 4;
   */
  compressionStrategy: Gzip_CompressionStrategy;

  /**
   * Value from 9 to 15 that represents the base two logarithmic of the compressor's window size.
   * Larger window results in better compression at the expense of memory usage. The default is 12
   * which will produce a 4096 bytes window. For more details about this parameter, please refer to
   * zlib manual > deflateInit2.
   *
   * @generated from field: google.protobuf.UInt32Value window_bits = 9;
   */
  windowBits?: number;

  /**
   * Set of configuration parameters common for all compression filters. You can define
   * ``content_length``, ``content_type`` and other parameters in this field.
   *
   * @generated from field: envoy.extensions.filters.http.compressor.v3.Compressor compressor = 10;
   */
  compressor?: Compressor;

  /**
   * Value for Zlib's next output buffer. If not set, defaults to 4096.
   * See https://www.zlib.net/manual.html for more details. Also see
   * https://github.com/envoyproxy/envoy/issues/8448 for context on this filter's performance.
   *
   * @generated from field: google.protobuf.UInt32Value chunk_size = 11;
   */
  chunkSize?: number;

  constructor(data?: PartialMessage<Gzip>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.gzip.v3.Gzip";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Gzip;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Gzip;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Gzip;

  static equals(a: Gzip | PlainMessage<Gzip> | undefined, b: Gzip | PlainMessage<Gzip> | undefined): boolean;
}

/**
 * @generated from enum envoy.extensions.filters.http.gzip.v3.Gzip.CompressionStrategy
 */
export declare enum Gzip_CompressionStrategy {
  /**
   * @generated from enum value: DEFAULT = 0;
   */
  DEFAULT = 0,

  /**
   * @generated from enum value: FILTERED = 1;
   */
  FILTERED = 1,

  /**
   * @generated from enum value: HUFFMAN = 2;
   */
  HUFFMAN = 2,

  /**
   * @generated from enum value: RLE = 3;
   */
  RLE = 3,
}

/**
 * @generated from message envoy.extensions.filters.http.gzip.v3.Gzip.CompressionLevel
 */
export declare class Gzip_CompressionLevel extends Message<Gzip_CompressionLevel> {
  constructor(data?: PartialMessage<Gzip_CompressionLevel>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.gzip.v3.Gzip.CompressionLevel";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Gzip_CompressionLevel;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Gzip_CompressionLevel;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Gzip_CompressionLevel;

  static equals(a: Gzip_CompressionLevel | PlainMessage<Gzip_CompressionLevel> | undefined, b: Gzip_CompressionLevel | PlainMessage<Gzip_CompressionLevel> | undefined): boolean;
}

/**
 * @generated from enum envoy.extensions.filters.http.gzip.v3.Gzip.CompressionLevel.Enum
 */
export declare enum Gzip_CompressionLevel_Enum {
  /**
   * @generated from enum value: DEFAULT = 0;
   */
  DEFAULT = 0,

  /**
   * @generated from enum value: BEST = 1;
   */
  BEST = 1,

  /**
   * @generated from enum value: SPEED = 2;
   */
  SPEED = 2,
}
