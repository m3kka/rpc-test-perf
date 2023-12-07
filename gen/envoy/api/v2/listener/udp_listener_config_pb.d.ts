// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/api/v2/listener/udp_listener_config.proto (package envoy.api.v2.listener, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Any, BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Struct } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.api.v2.listener.UdpListenerConfig
 */
export declare class UdpListenerConfig extends Message<UdpListenerConfig> {
  /**
   * Used to look up UDP listener factory, matches "raw_udp_listener" or
   * "quic_listener" to create a specific udp listener.
   * If not specified, treat as "raw_udp_listener".
   *
   * @generated from field: string udp_listener_name = 1;
   */
  udpListenerName: string;

  /**
   * Used to create a specific listener factory. To some factory, e.g.
   * "raw_udp_listener", config is not needed.
   *
   * @generated from oneof envoy.api.v2.listener.UdpListenerConfig.config_type
   */
  configType: {
    /**
     * @generated from field: google.protobuf.Struct config = 2 [deprecated = true];
     * @deprecated
     */
    value: Struct;
    case: "config";
  } | {
    /**
     * @generated from field: google.protobuf.Any typed_config = 3;
     */
    value: Any;
    case: "typedConfig";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<UdpListenerConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.api.v2.listener.UdpListenerConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UdpListenerConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UdpListenerConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UdpListenerConfig;

  static equals(a: UdpListenerConfig | PlainMessage<UdpListenerConfig> | undefined, b: UdpListenerConfig | PlainMessage<UdpListenerConfig> | undefined): boolean;
}

/**
 * @generated from message envoy.api.v2.listener.ActiveRawUdpListenerConfig
 */
export declare class ActiveRawUdpListenerConfig extends Message<ActiveRawUdpListenerConfig> {
  constructor(data?: PartialMessage<ActiveRawUdpListenerConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.api.v2.listener.ActiveRawUdpListenerConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveRawUdpListenerConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveRawUdpListenerConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveRawUdpListenerConfig;

  static equals(a: ActiveRawUdpListenerConfig | PlainMessage<ActiveRawUdpListenerConfig> | undefined, b: ActiveRawUdpListenerConfig | PlainMessage<ActiveRawUdpListenerConfig> | undefined): boolean;
}

