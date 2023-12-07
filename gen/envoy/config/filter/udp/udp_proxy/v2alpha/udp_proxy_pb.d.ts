// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/udp/udp_proxy/v2alpha/udp_proxy.proto (package envoy.config.filter.udp.udp_proxy.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Configuration for the UDP proxy filter.
 *
 * @generated from message envoy.config.filter.udp.udp_proxy.v2alpha.UdpProxyConfig
 */
export declare class UdpProxyConfig extends Message<UdpProxyConfig> {
  /**
   * The stat prefix used when emitting UDP proxy filter stats.
   *
   * @generated from field: string stat_prefix = 1;
   */
  statPrefix: string;

  /**
   * @generated from oneof envoy.config.filter.udp.udp_proxy.v2alpha.UdpProxyConfig.route_specifier
   */
  routeSpecifier: {
    /**
     * The upstream cluster to connect to.
     *
     * @generated from field: string cluster = 2;
     */
    value: string;
    case: "cluster";
  } | { case: undefined; value?: undefined };

  /**
   * The idle timeout for sessions. Idle is defined as no datagrams between received or sent by
   * the session. The default if not specified is 1 minute.
   *
   * @generated from field: google.protobuf.Duration idle_timeout = 3;
   */
  idleTimeout?: Duration;

  constructor(data?: PartialMessage<UdpProxyConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.udp.udp_proxy.v2alpha.UdpProxyConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UdpProxyConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UdpProxyConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UdpProxyConfig;

  static equals(a: UdpProxyConfig | PlainMessage<UdpProxyConfig> | undefined, b: UdpProxyConfig | PlainMessage<UdpProxyConfig> | undefined): boolean;
}
