// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/network/thrift_proxy/filters/header_to_metadata/v3/header_to_metadata.proto (package envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { RegexMatchAndSubstitute } from "../../../../../../../type/matcher/v3/regex_pb.js";

/**
 * @generated from message envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3.HeaderToMetadata
 */
export declare class HeaderToMetadata extends Message<HeaderToMetadata> {
  /**
   * The list of rules to apply to requests.
   *
   * @generated from field: repeated envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3.HeaderToMetadata.Rule request_rules = 1;
   */
  requestRules: HeaderToMetadata_Rule[];

  constructor(data?: PartialMessage<HeaderToMetadata>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3.HeaderToMetadata";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HeaderToMetadata;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HeaderToMetadata;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HeaderToMetadata;

  static equals(a: HeaderToMetadata | PlainMessage<HeaderToMetadata> | undefined, b: HeaderToMetadata | PlainMessage<HeaderToMetadata> | undefined): boolean;
}

/**
 * @generated from enum envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3.HeaderToMetadata.ValueType
 */
export declare enum HeaderToMetadata_ValueType {
  /**
   * @generated from enum value: STRING = 0;
   */
  STRING = 0,

  /**
   * @generated from enum value: NUMBER = 1;
   */
  NUMBER = 1,

  /**
   * The value is a serialized `protobuf.Value
   * <https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/struct.proto#L62>`_.
   *
   * @generated from enum value: PROTOBUF_VALUE = 2;
   */
  PROTOBUF_VALUE = 2,
}

/**
 * ValueEncode defines the encoding algorithm.
 *
 * @generated from enum envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3.HeaderToMetadata.ValueEncode
 */
export declare enum HeaderToMetadata_ValueEncode {
  /**
   * The value is not encoded.
   *
   * @generated from enum value: NONE = 0;
   */
  NONE = 0,

  /**
   * The value is encoded in `Base64 <https://tools.ietf.org/html/rfc4648#section-4>`_.
   * Note: this is mostly used for STRING and PROTOBUF_VALUE to escape the
   * non-ASCII characters in the header.
   *
   * @generated from enum value: BASE64 = 1;
   */
  BASE64 = 1,
}

/**
 * [#next-free-field: 7]
 *
 * @generated from message envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3.HeaderToMetadata.KeyValuePair
 */
export declare class HeaderToMetadata_KeyValuePair extends Message<HeaderToMetadata_KeyValuePair> {
  /**
   * The namespace — if this is empty, the filter's namespace will be used.
   *
   * @generated from field: string metadata_namespace = 1;
   */
  metadataNamespace: string;

  /**
   * The key to use within the namespace.
   *
   * @generated from field: string key = 2;
   */
  key: string;

  /**
   * @generated from oneof envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3.HeaderToMetadata.KeyValuePair.value_type
   */
  valueType: {
    /**
     * The value to pair with the given key.
     *
     * When used for on_present case, if value is non-empty it'll be used instead
     * of the header value. If both are empty, the header value is used as-is.
     *
     * When used for on_missing case, a non-empty value must be provided.
     *
     * @generated from field: string value = 3;
     */
    value: string;
    case: "value";
  } | {
    /**
     * If present, the header's value will be matched and substituted with this.
     * If there is no match or substitution, the header value is used as-is.
     *
     * This is only used for on_present.
     *
     * @generated from field: envoy.type.matcher.v3.RegexMatchAndSubstitute regex_value_rewrite = 4;
     */
    value: RegexMatchAndSubstitute;
    case: "regexValueRewrite";
  } | { case: undefined; value?: undefined };

  /**
   * The value's type — defaults to string.
   *
   * @generated from field: envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3.HeaderToMetadata.ValueType type = 5;
   */
  type: HeaderToMetadata_ValueType;

  /**
   * How is the value encoded, default is NONE (not encoded).
   * The value will be decoded accordingly before storing to metadata.
   *
   * @generated from field: envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3.HeaderToMetadata.ValueEncode encode = 6;
   */
  encode: HeaderToMetadata_ValueEncode;

  constructor(data?: PartialMessage<HeaderToMetadata_KeyValuePair>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3.HeaderToMetadata.KeyValuePair";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HeaderToMetadata_KeyValuePair;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HeaderToMetadata_KeyValuePair;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HeaderToMetadata_KeyValuePair;

  static equals(a: HeaderToMetadata_KeyValuePair | PlainMessage<HeaderToMetadata_KeyValuePair> | undefined, b: HeaderToMetadata_KeyValuePair | PlainMessage<HeaderToMetadata_KeyValuePair> | undefined): boolean;
}

/**
 * A Rule defines what metadata to apply when a header is present or missing.
 *
 * @generated from message envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3.HeaderToMetadata.Rule
 */
export declare class HeaderToMetadata_Rule extends Message<HeaderToMetadata_Rule> {
  /**
   * Specifies that a match will be performed on the value of a header.
   *
   * The header to be extracted.
   *
   * @generated from field: string header = 1;
   */
  header: string;

  /**
   * If the header is present, apply this metadata KeyValuePair.
   *
   * If the value in the KeyValuePair is non-empty, it'll be used instead
   * of the header value.
   *
   * @generated from field: envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3.HeaderToMetadata.KeyValuePair on_present = 2;
   */
  onPresent?: HeaderToMetadata_KeyValuePair;

  /**
   * If the header is not present, apply this metadata KeyValuePair.
   *
   * The value in the KeyValuePair must be set, since it'll be used in lieu
   * of the missing header value.
   *
   * @generated from field: envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3.HeaderToMetadata.KeyValuePair on_missing = 3;
   */
  onMissing?: HeaderToMetadata_KeyValuePair;

  /**
   * Whether or not to remove the header after a rule is applied.
   *
   * This prevents headers from leaking.
   *
   * @generated from field: bool remove = 4;
   */
  remove: boolean;

  constructor(data?: PartialMessage<HeaderToMetadata_Rule>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.thrift_proxy.filters.header_to_metadata.v3.HeaderToMetadata.Rule";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HeaderToMetadata_Rule;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HeaderToMetadata_Rule;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HeaderToMetadata_Rule;

  static equals(a: HeaderToMetadata_Rule | PlainMessage<HeaderToMetadata_Rule> | undefined, b: HeaderToMetadata_Rule | PlainMessage<HeaderToMetadata_Rule> | undefined): boolean;
}
