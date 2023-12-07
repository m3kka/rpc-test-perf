// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/transport_sockets/proxy_protocol/v3/upstream_proxy_protocol.proto (package envoy.extensions.transport_sockets.proxy_protocol.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ProxyProtocolConfig } from "../../../../config/core/v3/proxy_protocol_pb.js";
import type { TransportSocket } from "../../../../config/core/v3/base_pb.js";

/**
 * Configuration for PROXY protocol socket
 *
 * @generated from message envoy.extensions.transport_sockets.proxy_protocol.v3.ProxyProtocolUpstreamTransport
 */
export declare class ProxyProtocolUpstreamTransport extends Message<ProxyProtocolUpstreamTransport> {
  /**
   * The PROXY protocol settings
   *
   * @generated from field: envoy.config.core.v3.ProxyProtocolConfig config = 1;
   */
  config?: ProxyProtocolConfig;

  /**
   * The underlying transport socket being wrapped.
   *
   * @generated from field: envoy.config.core.v3.TransportSocket transport_socket = 2;
   */
  transportSocket?: TransportSocket;

  constructor(data?: PartialMessage<ProxyProtocolUpstreamTransport>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.transport_sockets.proxy_protocol.v3.ProxyProtocolUpstreamTransport";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProxyProtocolUpstreamTransport;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProxyProtocolUpstreamTransport;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProxyProtocolUpstreamTransport;

  static equals(a: ProxyProtocolUpstreamTransport | PlainMessage<ProxyProtocolUpstreamTransport> | undefined, b: ProxyProtocolUpstreamTransport | PlainMessage<ProxyProtocolUpstreamTransport> | undefined): boolean;
}

