// @generated by protoc-gen-es v1.5.1
// @generated from file contrib/envoy/extensions/filters/network/generic_proxy/codecs/dubbo/v3/dubbo.proto (package envoy.extensions.filters.network.generic_proxy.codecs.dubbo.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.extensions.filters.network.generic_proxy.codecs.dubbo.v3.DubboCodecConfig
 */
export declare class DubboCodecConfig extends Message<DubboCodecConfig> {
  constructor(data?: PartialMessage<DubboCodecConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.generic_proxy.codecs.dubbo.v3.DubboCodecConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DubboCodecConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DubboCodecConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DubboCodecConfig;

  static equals(a: DubboCodecConfig | PlainMessage<DubboCodecConfig> | undefined, b: DubboCodecConfig | PlainMessage<DubboCodecConfig> | undefined): boolean;
}
