// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/admin/v3/init_dump.proto (package envoy.admin.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Dumps of unready targets of envoy init managers. Envoy's admin fills this message with init managers,
 * which provides the information of their unready targets.
 * The :ref:`/init_dump <operations_admin_interface_init_dump>` will dump all unready targets information.
 *
 * @generated from message envoy.admin.v3.UnreadyTargetsDumps
 */
export declare class UnreadyTargetsDumps extends Message<UnreadyTargetsDumps> {
  /**
   * You can choose specific component to dump unready targets with mask query parameter.
   * See :ref:`/init_dump?mask={} <operations_admin_interface_init_dump_by_mask>` for more information.
   * The dumps of unready targets of all init managers.
   *
   * @generated from field: repeated envoy.admin.v3.UnreadyTargetsDumps.UnreadyTargetsDump unready_targets_dumps = 1;
   */
  unreadyTargetsDumps: UnreadyTargetsDumps_UnreadyTargetsDump[];

  constructor(data?: PartialMessage<UnreadyTargetsDumps>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v3.UnreadyTargetsDumps";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnreadyTargetsDumps;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnreadyTargetsDumps;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnreadyTargetsDumps;

  static equals(a: UnreadyTargetsDumps | PlainMessage<UnreadyTargetsDumps> | undefined, b: UnreadyTargetsDumps | PlainMessage<UnreadyTargetsDumps> | undefined): boolean;
}

/**
 * Message of unready targets information of an init manager.
 *
 * @generated from message envoy.admin.v3.UnreadyTargetsDumps.UnreadyTargetsDump
 */
export declare class UnreadyTargetsDumps_UnreadyTargetsDump extends Message<UnreadyTargetsDumps_UnreadyTargetsDump> {
  /**
   * Name of the init manager. Example: "init_manager_xxx".
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Names of unready targets of the init manager. Example: "target_xxx".
   *
   * @generated from field: repeated string target_names = 2;
   */
  targetNames: string[];

  constructor(data?: PartialMessage<UnreadyTargetsDumps_UnreadyTargetsDump>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v3.UnreadyTargetsDumps.UnreadyTargetsDump";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnreadyTargetsDumps_UnreadyTargetsDump;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnreadyTargetsDumps_UnreadyTargetsDump;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnreadyTargetsDumps_UnreadyTargetsDump;

  static equals(a: UnreadyTargetsDumps_UnreadyTargetsDump | PlainMessage<UnreadyTargetsDumps_UnreadyTargetsDump> | undefined, b: UnreadyTargetsDumps_UnreadyTargetsDump | PlainMessage<UnreadyTargetsDumps_UnreadyTargetsDump> | undefined): boolean;
}

