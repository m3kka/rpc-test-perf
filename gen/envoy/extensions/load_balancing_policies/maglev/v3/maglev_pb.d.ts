// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/load_balancing_policies/maglev/v3/maglev.proto (package envoy.extensions.load_balancing_policies.maglev.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ConsistentHashingLbConfig, LocalityLbConfig_LocalityWeightedLbConfig } from "../../common/v3/common_pb.js";

/**
 * This configuration allows the built-in Maglev LB policy to be configured via the LB policy
 * extension point. See the :ref:`load balancing architecture overview
 * <arch_overview_load_balancing_types>` and :ref:`Maglev<arch_overview_load_balancing_types_maglev>` for more information.
 *
 * @generated from message envoy.extensions.load_balancing_policies.maglev.v3.Maglev
 */
export declare class Maglev extends Message<Maglev> {
  /**
   * The table size for Maglev hashing. Maglev aims for "minimal disruption" rather than an absolute guarantee.
   * Minimal disruption means that when the set of upstream hosts change, a connection will likely be sent to the same
   * upstream as it was before. Increasing the table size reduces the amount of disruption.
   * The table size must be prime number limited to 5000011. If it is not specified, the default is 65537.
   *
   * @generated from field: google.protobuf.UInt64Value table_size = 1;
   */
  tableSize?: bigint;

  /**
   * Common configuration for hashing-based load balancing policies.
   *
   * @generated from field: envoy.extensions.load_balancing_policies.common.v3.ConsistentHashingLbConfig consistent_hashing_lb_config = 2;
   */
  consistentHashingLbConfig?: ConsistentHashingLbConfig;

  /**
   * Enable locality weighted load balancing for maglev lb explicitly.
   *
   * @generated from field: envoy.extensions.load_balancing_policies.common.v3.LocalityLbConfig.LocalityWeightedLbConfig locality_weighted_lb_config = 3;
   */
  localityWeightedLbConfig?: LocalityLbConfig_LocalityWeightedLbConfig;

  constructor(data?: PartialMessage<Maglev>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.load_balancing_policies.maglev.v3.Maglev";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Maglev;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Maglev;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Maglev;

  static equals(a: Maglev | PlainMessage<Maglev> | undefined, b: Maglev | PlainMessage<Maglev> | undefined): boolean;
}

