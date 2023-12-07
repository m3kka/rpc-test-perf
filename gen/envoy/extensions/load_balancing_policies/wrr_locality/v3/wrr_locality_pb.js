// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/load_balancing_policies/wrr_locality/v3/wrr_locality.proto (package envoy.extensions.load_balancing_policies.wrr_locality.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { LoadBalancingPolicy } from "../../../../config/cluster/v3/cluster_pb.js";

/**
 * Configuration for the wrr_locality LB policy. See the :ref:`load balancing architecture overview
 * <arch_overview_load_balancing_types>` for more information.
 *
 * @generated from message envoy.extensions.load_balancing_policies.wrr_locality.v3.WrrLocality
 */
export const WrrLocality = proto3.makeMessageType(
  "envoy.extensions.load_balancing_policies.wrr_locality.v3.WrrLocality",
  () => [
    { no: 1, name: "endpoint_picking_policy", kind: "message", T: LoadBalancingPolicy },
  ],
);

