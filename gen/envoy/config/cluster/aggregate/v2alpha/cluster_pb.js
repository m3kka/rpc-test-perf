// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/cluster/aggregate/v2alpha/cluster.proto (package envoy.config.cluster.aggregate.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Configuration for the aggregate cluster. See the :ref:`architecture overview
 * <arch_overview_aggregate_cluster>` for more information.
 * [#extension: envoy.clusters.aggregate]
 *
 * @generated from message envoy.config.cluster.aggregate.v2alpha.ClusterConfig
 */
export const ClusterConfig = proto3.makeMessageType(
  "envoy.config.cluster.aggregate.v2alpha.ClusterConfig",
  () => [
    { no: 1, name: "clusters", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

