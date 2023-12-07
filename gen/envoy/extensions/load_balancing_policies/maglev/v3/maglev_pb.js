// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/load_balancing_policies/maglev/v3/maglev.proto (package envoy.extensions.load_balancing_policies.maglev.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, UInt64Value } from "@bufbuild/protobuf";
import { ConsistentHashingLbConfig, LocalityLbConfig_LocalityWeightedLbConfig } from "../../common/v3/common_pb.js";

/**
 * This configuration allows the built-in Maglev LB policy to be configured via the LB policy
 * extension point. See the :ref:`load balancing architecture overview
 * <arch_overview_load_balancing_types>` and :ref:`Maglev<arch_overview_load_balancing_types_maglev>` for more information.
 *
 * @generated from message envoy.extensions.load_balancing_policies.maglev.v3.Maglev
 */
export const Maglev = proto3.makeMessageType(
  "envoy.extensions.load_balancing_policies.maglev.v3.Maglev",
  () => [
    { no: 1, name: "table_size", kind: "message", T: UInt64Value },
    { no: 2, name: "consistent_hashing_lb_config", kind: "message", T: ConsistentHashingLbConfig },
    { no: 3, name: "locality_weighted_lb_config", kind: "message", T: LocalityLbConfig_LocalityWeightedLbConfig },
  ],
);

