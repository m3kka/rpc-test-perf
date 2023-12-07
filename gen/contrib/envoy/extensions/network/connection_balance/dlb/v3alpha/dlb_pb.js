// @generated by protoc-gen-es v1.5.1
// @generated from file contrib/envoy/extensions/network/connection_balance/dlb/v3alpha/dlb.proto (package envoy.extensions.network.connection_balance.dlb.v3alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * The Dlb is a hardware managed system of queues and arbiters connecting producers and consumers. It is a PCIE device
 * in the CPU package. It interacts with software running on cores and potentially other devices. The Dlb implements the
 * following balancing features:
 *
 * -  Lock-free multi-producer/multi-consumer operation.
 * -  Multiple priorities for varying traffic types.
 * -  Various distribution schemes.
 *
 * Dlb connection balancer uses Dlb hardware to balance connections, and can significantly reduce latency.
 *
 * As the Dlb connection balancer provides assistance from dedicated Dlb hardware, it can be used for a proxy with a large number of connections
 * (e.g., a gateway).
 *
 * @generated from message envoy.extensions.network.connection_balance.dlb.v3alpha.Dlb
 */
export const Dlb = proto3.makeMessageType(
  "envoy.extensions.network.connection_balance.dlb.v3alpha.Dlb",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "max_retries", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "fallback_policy", kind: "enum", T: proto3.getEnumType(Dlb_FallbackPolicy) },
  ],
);

/**
 * The fallback policy if any error occurs.
 * The default policy is None.
 *
 * @generated from enum envoy.extensions.network.connection_balance.dlb.v3alpha.Dlb.FallbackPolicy
 */
export const Dlb_FallbackPolicy = proto3.makeEnum(
  "envoy.extensions.network.connection_balance.dlb.v3alpha.Dlb.FallbackPolicy",
  [
    {no: 0, name: "None"},
    {no: 1, name: "NopConnectionBalance"},
    {no: 2, name: "ExactConnectionBalance"},
  ],
);
