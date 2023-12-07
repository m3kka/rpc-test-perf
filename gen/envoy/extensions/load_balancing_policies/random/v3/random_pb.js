// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/load_balancing_policies/random/v3/random.proto (package envoy.extensions.load_balancing_policies.random.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { LocalityLbConfig } from "../../common/v3/common_pb.js";

/**
 * This configuration allows the built-in Random LB policy to be configured via the LB policy
 * extension point. See the :ref:`load balancing architecture overview
 * <arch_overview_load_balancing_types>` for more information.
 *
 * @generated from message envoy.extensions.load_balancing_policies.random.v3.Random
 */
export const Random = proto3.makeMessageType(
  "envoy.extensions.load_balancing_policies.random.v3.Random",
  () => [
    { no: 1, name: "locality_lb_config", kind: "message", T: LocalityLbConfig },
  ],
);

