// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/admin/v2alpha/listeners.proto (package envoy.admin.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Address } from "../../api/v2/core/address_pb.js";

/**
 * Admin endpoint uses this wrapper for `/listeners` to display listener status information.
 * See :ref:`/listeners <operations_admin_interface_listeners>` for more information.
 *
 * @generated from message envoy.admin.v2alpha.Listeners
 */
export declare class Listeners extends Message<Listeners> {
  /**
   * List of listener statuses.
   *
   * @generated from field: repeated envoy.admin.v2alpha.ListenerStatus listener_statuses = 1;
   */
  listenerStatuses: ListenerStatus[];

  constructor(data?: PartialMessage<Listeners>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.Listeners";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Listeners;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Listeners;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Listeners;

  static equals(a: Listeners | PlainMessage<Listeners> | undefined, b: Listeners | PlainMessage<Listeners> | undefined): boolean;
}

/**
 * Details an individual listener's current status.
 *
 * @generated from message envoy.admin.v2alpha.ListenerStatus
 */
export declare class ListenerStatus extends Message<ListenerStatus> {
  /**
   * Name of the listener
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The actual local address that the listener is listening on. If a listener was configured
   * to listen on port 0, then this address has the port that was allocated by the OS.
   *
   * @generated from field: envoy.api.v2.core.Address local_address = 2;
   */
  localAddress?: Address;

  constructor(data?: PartialMessage<ListenerStatus>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v2alpha.ListenerStatus";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListenerStatus;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListenerStatus;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListenerStatus;

  static equals(a: ListenerStatus | PlainMessage<ListenerStatus> | undefined, b: ListenerStatus | PlainMessage<ListenerStatus> | undefined): boolean;
}
