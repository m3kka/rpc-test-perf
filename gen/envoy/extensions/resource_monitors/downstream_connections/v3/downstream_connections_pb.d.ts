// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/resource_monitors/downstream_connections/v3/downstream_connections.proto (package envoy.extensions.resource_monitors.downstream_connections.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * The downstream connections resource monitor tracks the global number of open downstream connections.
 *
 * @generated from message envoy.extensions.resource_monitors.downstream_connections.v3.DownstreamConnectionsConfig
 */
export declare class DownstreamConnectionsConfig extends Message<DownstreamConnectionsConfig> {
  /**
   * Maximum threshold for global open downstream connections, defaults to 0.
   * If monitor is enabled in Overload manager api, this field should be explicitly configured with value greater than 0.
   *
   * @generated from field: int64 max_active_downstream_connections = 1;
   */
  maxActiveDownstreamConnections: bigint;

  constructor(data?: PartialMessage<DownstreamConnectionsConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.resource_monitors.downstream_connections.v3.DownstreamConnectionsConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownstreamConnectionsConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownstreamConnectionsConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownstreamConnectionsConfig;

  static equals(a: DownstreamConnectionsConfig | PlainMessage<DownstreamConnectionsConfig> | undefined, b: DownstreamConnectionsConfig | PlainMessage<DownstreamConnectionsConfig> | undefined): boolean;
}

