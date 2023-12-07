// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/http/header_to_metadata/v2/header_to_metadata.proto (package envoy.config.filter.http.header_to_metadata.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.config.filter.http.header_to_metadata.v2.Config
 */
export declare class Config extends Message<Config> {
  /**
   * The list of rules to apply to requests.
   *
   * @generated from field: repeated envoy.config.filter.http.header_to_metadata.v2.Config.Rule request_rules = 1;
   */
  requestRules: Config_Rule[];

  /**
   * The list of rules to apply to responses.
   *
   * @generated from field: repeated envoy.config.filter.http.header_to_metadata.v2.Config.Rule response_rules = 2;
   */
  responseRules: Config_Rule[];

  constructor(data?: PartialMessage<Config>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.http.header_to_metadata.v2.Config";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config;

  static equals(a: Config | PlainMessage<Config> | undefined, b: Config | PlainMessage<Config> | undefined): boolean;
}

/**
 * @generated from enum envoy.config.filter.http.header_to_metadata.v2.Config.ValueType
 */
export declare enum Config_ValueType {
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
 * @generated from enum envoy.config.filter.http.header_to_metadata.v2.Config.ValueEncode
 */
export declare enum Config_ValueEncode {
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
 * [#next-free-field: 6]
 *
 * @generated from message envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair
 */
export declare class Config_KeyValuePair extends Message<Config_KeyValuePair> {
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
   * The value to pair with the given key.
   *
   * When used for a `on_header_present` case, if value is non-empty it'll be used
   * instead of the header value. If both are empty, no metadata is added.
   *
   * When used for a `on_header_missing` case, a non-empty value must be provided
   * otherwise no metadata is added.
   *
   * @generated from field: string value = 3;
   */
  value: string;

  /**
   * The value's type — defaults to string.
   *
   * @generated from field: envoy.config.filter.http.header_to_metadata.v2.Config.ValueType type = 4;
   */
  type: Config_ValueType;

  /**
   * How is the value encoded, default is NONE (not encoded).
   * The value will be decoded accordingly before storing to metadata.
   *
   * @generated from field: envoy.config.filter.http.header_to_metadata.v2.Config.ValueEncode encode = 5;
   */
  encode: Config_ValueEncode;

  constructor(data?: PartialMessage<Config_KeyValuePair>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config_KeyValuePair;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config_KeyValuePair;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config_KeyValuePair;

  static equals(a: Config_KeyValuePair | PlainMessage<Config_KeyValuePair> | undefined, b: Config_KeyValuePair | PlainMessage<Config_KeyValuePair> | undefined): boolean;
}

/**
 * A Rule defines what metadata to apply when a header is present or missing.
 *
 * @generated from message envoy.config.filter.http.header_to_metadata.v2.Config.Rule
 */
export declare class Config_Rule extends Message<Config_Rule> {
  /**
   * The header that triggers this rule — required.
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
   * @generated from field: envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair on_header_present = 2;
   */
  onHeaderPresent?: Config_KeyValuePair;

  /**
   * If the header is not present, apply this metadata KeyValuePair.
   *
   * The value in the KeyValuePair must be set, since it'll be used in lieu
   * of the missing header value.
   *
   * @generated from field: envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair on_header_missing = 3;
   */
  onHeaderMissing?: Config_KeyValuePair;

  /**
   * Whether or not to remove the header after a rule is applied.
   *
   * This prevents headers from leaking.
   *
   * @generated from field: bool remove = 4;
   */
  remove: boolean;

  constructor(data?: PartialMessage<Config_Rule>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.http.header_to_metadata.v2.Config.Rule";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config_Rule;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config_Rule;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config_Rule;

  static equals(a: Config_Rule | PlainMessage<Config_Rule> | undefined, b: Config_Rule | PlainMessage<Config_Rule> | undefined): boolean;
}
