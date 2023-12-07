// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/transport_sockets/tcp_stats/v3/tcp_stats.proto (package envoy.extensions.transport_sockets.tcp_stats.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TransportSocket } from "../../../../config/core/v3/base_pb.js";

/**
 * Configuration for the TCP Stats transport socket wrapper, which wraps another transport socket for
 * all communication, but emits stats about the underlying TCP connection.
 *
 * The stats are documented :ref:`here <config_listener_stats_tcp>` for listeners and
 * :ref:`here <config_cluster_manager_cluster_stats_tcp>` for clusters.
 *
 * This transport socket is currently only supported on Linux.
 *
 * @generated from message envoy.extensions.transport_sockets.tcp_stats.v3.Config
 */
export declare class Config extends Message<Config> {
  /**
   * The underlying transport socket being wrapped.
   *
   * @generated from field: envoy.config.core.v3.TransportSocket transport_socket = 1;
   */
  transportSocket?: TransportSocket;

  /**
   * Period to update stats while the connection is open. If unset, updates only happen when the
   * connection is closed. Stats are always updated one final time when the connection is closed.
   *
   * @generated from field: google.protobuf.Duration update_period = 2;
   */
  updatePeriod?: Duration;

  constructor(data?: PartialMessage<Config>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.transport_sockets.tcp_stats.v3.Config";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config;

  static equals(a: Config | PlainMessage<Config> | undefined, b: Config | PlainMessage<Config> | undefined): boolean;
}
