// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/decompressor/v3/decompressor.proto (package envoy.extensions.filters.http.decompressor.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TypedExtensionConfig } from "../../../../../config/core/v3/extension_pb.js";
import type { RuntimeFeatureFlag } from "../../../../../config/core/v3/base_pb.js";

/**
 * @generated from message envoy.extensions.filters.http.decompressor.v3.Decompressor
 */
export declare class Decompressor extends Message<Decompressor> {
  /**
   * A decompressor library to use for both request and response decompression. Currently only
   * :ref:`envoy.compression.gzip.compressor<envoy_v3_api_msg_extensions.compression.gzip.decompressor.v3.Gzip>`
   * is included in Envoy.
   * [#extension-category: envoy.compression.decompressor]
   *
   * @generated from field: envoy.config.core.v3.TypedExtensionConfig decompressor_library = 1;
   */
  decompressorLibrary?: TypedExtensionConfig;

  /**
   * Configuration for request decompression. Decompression is enabled by default if left empty.
   *
   * @generated from field: envoy.extensions.filters.http.decompressor.v3.Decompressor.RequestDirectionConfig request_direction_config = 2;
   */
  requestDirectionConfig?: Decompressor_RequestDirectionConfig;

  /**
   * Configuration for response decompression. Decompression is enabled by default if left empty.
   *
   * @generated from field: envoy.extensions.filters.http.decompressor.v3.Decompressor.ResponseDirectionConfig response_direction_config = 3;
   */
  responseDirectionConfig?: Decompressor_ResponseDirectionConfig;

  constructor(data?: PartialMessage<Decompressor>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.decompressor.v3.Decompressor";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Decompressor;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Decompressor;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Decompressor;

  static equals(a: Decompressor | PlainMessage<Decompressor> | undefined, b: Decompressor | PlainMessage<Decompressor> | undefined): boolean;
}

/**
 * Common configuration for filter behavior on both the request and response direction.
 *
 * @generated from message envoy.extensions.filters.http.decompressor.v3.Decompressor.CommonDirectionConfig
 */
export declare class Decompressor_CommonDirectionConfig extends Message<Decompressor_CommonDirectionConfig> {
  /**
   * Runtime flag that controls whether the filter is enabled for decompression or not. If set to false, the
   * filter will operate as a pass-through filter. If the message is unspecified, the filter will be enabled.
   *
   * @generated from field: envoy.config.core.v3.RuntimeFeatureFlag enabled = 1;
   */
  enabled?: RuntimeFeatureFlag;

  /**
   * If set to true, will decompress response even if a ``no-transform`` cache control header is set.
   *
   * @generated from field: bool ignore_no_transform_header = 2;
   */
  ignoreNoTransformHeader: boolean;

  constructor(data?: PartialMessage<Decompressor_CommonDirectionConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.decompressor.v3.Decompressor.CommonDirectionConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Decompressor_CommonDirectionConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Decompressor_CommonDirectionConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Decompressor_CommonDirectionConfig;

  static equals(a: Decompressor_CommonDirectionConfig | PlainMessage<Decompressor_CommonDirectionConfig> | undefined, b: Decompressor_CommonDirectionConfig | PlainMessage<Decompressor_CommonDirectionConfig> | undefined): boolean;
}

/**
 * Configuration for filter behavior on the request direction.
 *
 * @generated from message envoy.extensions.filters.http.decompressor.v3.Decompressor.RequestDirectionConfig
 */
export declare class Decompressor_RequestDirectionConfig extends Message<Decompressor_RequestDirectionConfig> {
  /**
   * @generated from field: envoy.extensions.filters.http.decompressor.v3.Decompressor.CommonDirectionConfig common_config = 1;
   */
  commonConfig?: Decompressor_CommonDirectionConfig;

  /**
   * If set to true, and response decompression is enabled, the filter modifies the Accept-Encoding
   * request header by appending the decompressor_library's encoding. Defaults to true.
   *
   * @generated from field: google.protobuf.BoolValue advertise_accept_encoding = 2;
   */
  advertiseAcceptEncoding?: boolean;

  constructor(data?: PartialMessage<Decompressor_RequestDirectionConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.decompressor.v3.Decompressor.RequestDirectionConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Decompressor_RequestDirectionConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Decompressor_RequestDirectionConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Decompressor_RequestDirectionConfig;

  static equals(a: Decompressor_RequestDirectionConfig | PlainMessage<Decompressor_RequestDirectionConfig> | undefined, b: Decompressor_RequestDirectionConfig | PlainMessage<Decompressor_RequestDirectionConfig> | undefined): boolean;
}

/**
 * Configuration for filter behavior on the response direction.
 *
 * @generated from message envoy.extensions.filters.http.decompressor.v3.Decompressor.ResponseDirectionConfig
 */
export declare class Decompressor_ResponseDirectionConfig extends Message<Decompressor_ResponseDirectionConfig> {
  /**
   * @generated from field: envoy.extensions.filters.http.decompressor.v3.Decompressor.CommonDirectionConfig common_config = 1;
   */
  commonConfig?: Decompressor_CommonDirectionConfig;

  constructor(data?: PartialMessage<Decompressor_ResponseDirectionConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.decompressor.v3.Decompressor.ResponseDirectionConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Decompressor_ResponseDirectionConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Decompressor_ResponseDirectionConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Decompressor_ResponseDirectionConfig;

  static equals(a: Decompressor_ResponseDirectionConfig | PlainMessage<Decompressor_ResponseDirectionConfig> | undefined, b: Decompressor_ResponseDirectionConfig | PlainMessage<Decompressor_ResponseDirectionConfig> | undefined): boolean;
}

