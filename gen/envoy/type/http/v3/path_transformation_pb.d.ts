// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/type/http/v3/path_transformation.proto (package envoy.type.http.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.type.http.v3.PathTransformation
 */
export declare class PathTransformation extends Message<PathTransformation> {
  /**
   * A list of operations to apply. Transformations will be performed in the order that they appear.
   *
   * @generated from field: repeated envoy.type.http.v3.PathTransformation.Operation operations = 1;
   */
  operations: PathTransformation_Operation[];

  constructor(data?: PartialMessage<PathTransformation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.http.v3.PathTransformation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PathTransformation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PathTransformation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PathTransformation;

  static equals(a: PathTransformation | PlainMessage<PathTransformation> | undefined, b: PathTransformation | PlainMessage<PathTransformation> | undefined): boolean;
}

/**
 * A type of operation to alter text.
 *
 * @generated from message envoy.type.http.v3.PathTransformation.Operation
 */
export declare class PathTransformation_Operation extends Message<PathTransformation_Operation> {
  /**
   * @generated from oneof envoy.type.http.v3.PathTransformation.Operation.operation_specifier
   */
  operationSpecifier: {
    /**
     * Enable path normalization per RFC 3986.
     *
     * @generated from field: envoy.type.http.v3.PathTransformation.Operation.NormalizePathRFC3986 normalize_path_rfc_3986 = 2;
     */
    value: PathTransformation_Operation_NormalizePathRFC3986;
    case: "normalizePathRfc3986";
  } | {
    /**
     * Enable merging adjacent slashes.
     *
     * @generated from field: envoy.type.http.v3.PathTransformation.Operation.MergeSlashes merge_slashes = 3;
     */
    value: PathTransformation_Operation_MergeSlashes;
    case: "mergeSlashes";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<PathTransformation_Operation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.http.v3.PathTransformation.Operation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PathTransformation_Operation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PathTransformation_Operation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PathTransformation_Operation;

  static equals(a: PathTransformation_Operation | PlainMessage<PathTransformation_Operation> | undefined, b: PathTransformation_Operation | PlainMessage<PathTransformation_Operation> | undefined): boolean;
}

/**
 * Should text be normalized according to RFC 3986? This typically is used for path headers
 * before any processing of requests by HTTP filters or routing. This applies percent-encoded
 * normalization and path segment normalization. Fails on characters disallowed in URLs
 * (e.g. NULLs). See `Normalization and Comparison
 * <https://tools.ietf.org/html/rfc3986#section-6>`_ for details of normalization. Note that
 * this options does not perform `case normalization
 * <https://tools.ietf.org/html/rfc3986#section-6.2.2.1>`_
 *
 * @generated from message envoy.type.http.v3.PathTransformation.Operation.NormalizePathRFC3986
 */
export declare class PathTransformation_Operation_NormalizePathRFC3986 extends Message<PathTransformation_Operation_NormalizePathRFC3986> {
  constructor(data?: PartialMessage<PathTransformation_Operation_NormalizePathRFC3986>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.http.v3.PathTransformation.Operation.NormalizePathRFC3986";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PathTransformation_Operation_NormalizePathRFC3986;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PathTransformation_Operation_NormalizePathRFC3986;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PathTransformation_Operation_NormalizePathRFC3986;

  static equals(a: PathTransformation_Operation_NormalizePathRFC3986 | PlainMessage<PathTransformation_Operation_NormalizePathRFC3986> | undefined, b: PathTransformation_Operation_NormalizePathRFC3986 | PlainMessage<PathTransformation_Operation_NormalizePathRFC3986> | undefined): boolean;
}

/**
 * Determines if adjacent slashes are merged into one. A common use case is for a request path
 * header. Using this option in ``:ref: PathNormalizationOptions
 * <envoy_v3_api_msg_extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.PathNormalizationOptions>``
 * will allow incoming requests with path ``//dir///file`` to match against route with ``prefix``
 * match set to ``/dir``. When using for header transformations, note that slash merging is not
 * part of `HTTP spec <https://tools.ietf.org/html/rfc3986>`_ and is provided for convenience.
 *
 * @generated from message envoy.type.http.v3.PathTransformation.Operation.MergeSlashes
 */
export declare class PathTransformation_Operation_MergeSlashes extends Message<PathTransformation_Operation_MergeSlashes> {
  constructor(data?: PartialMessage<PathTransformation_Operation_MergeSlashes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.http.v3.PathTransformation.Operation.MergeSlashes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PathTransformation_Operation_MergeSlashes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PathTransformation_Operation_MergeSlashes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PathTransformation_Operation_MergeSlashes;

  static equals(a: PathTransformation_Operation_MergeSlashes | PlainMessage<PathTransformation_Operation_MergeSlashes> | undefined, b: PathTransformation_Operation_MergeSlashes | PlainMessage<PathTransformation_Operation_MergeSlashes> | undefined): boolean;
}
