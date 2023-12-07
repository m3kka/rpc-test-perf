// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/common/key_value/v3/config.proto (package envoy.config.common.key_value.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TypedExtensionConfig } from "../../../core/v3/extension_pb.js";

/**
 * This shared configuration for Envoy key value stores.
 *
 * @generated from message envoy.config.common.key_value.v3.KeyValueStoreConfig
 */
export declare class KeyValueStoreConfig extends Message<KeyValueStoreConfig> {
  /**
   * [#extension-category: envoy.common.key_value]
   *
   * @generated from field: envoy.config.core.v3.TypedExtensionConfig config = 1;
   */
  config?: TypedExtensionConfig;

  constructor(data?: PartialMessage<KeyValueStoreConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.common.key_value.v3.KeyValueStoreConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KeyValueStoreConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KeyValueStoreConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KeyValueStoreConfig;

  static equals(a: KeyValueStoreConfig | PlainMessage<KeyValueStoreConfig> | undefined, b: KeyValueStoreConfig | PlainMessage<KeyValueStoreConfig> | undefined): boolean;
}
