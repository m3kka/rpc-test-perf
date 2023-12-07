// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/admin/v2alpha/clusters.proto (package envoy.admin.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Percent } from "../../type/percent_pb.js";
import { Address } from "../../api/v2/core/address_pb.js";
import { SimpleMetric } from "./metrics_pb.js";
import { Locality } from "../../api/v2/core/base_pb.js";
import { HealthStatus } from "../../api/v2/core/health_check_pb.js";

/**
 * Admin endpoint uses this wrapper for `/clusters` to display cluster status information.
 * See :ref:`/clusters <operations_admin_interface_clusters>` for more information.
 *
 * @generated from message envoy.admin.v2alpha.Clusters
 */
export const Clusters = proto3.makeMessageType(
  "envoy.admin.v2alpha.Clusters",
  () => [
    { no: 1, name: "cluster_statuses", kind: "message", T: ClusterStatus, repeated: true },
  ],
);

/**
 * Details an individual cluster's current status.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.admin.v2alpha.ClusterStatus
 */
export const ClusterStatus = proto3.makeMessageType(
  "envoy.admin.v2alpha.ClusterStatus",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "added_via_api", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "success_rate_ejection_threshold", kind: "message", T: Percent },
    { no: 4, name: "host_statuses", kind: "message", T: HostStatus, repeated: true },
    { no: 5, name: "local_origin_success_rate_ejection_threshold", kind: "message", T: Percent },
  ],
);

/**
 * Current state of a particular host.
 * [#next-free-field: 10]
 *
 * @generated from message envoy.admin.v2alpha.HostStatus
 */
export const HostStatus = proto3.makeMessageType(
  "envoy.admin.v2alpha.HostStatus",
  () => [
    { no: 1, name: "address", kind: "message", T: Address },
    { no: 2, name: "stats", kind: "message", T: SimpleMetric, repeated: true },
    { no: 3, name: "health_status", kind: "message", T: HostHealthStatus },
    { no: 4, name: "success_rate", kind: "message", T: Percent },
    { no: 5, name: "weight", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "hostname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "priority", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 8, name: "local_origin_success_rate", kind: "message", T: Percent },
    { no: 9, name: "locality", kind: "message", T: Locality },
  ],
);

/**
 * Health status for a host.
 * [#next-free-field: 7]
 *
 * @generated from message envoy.admin.v2alpha.HostHealthStatus
 */
export const HostHealthStatus = proto3.makeMessageType(
  "envoy.admin.v2alpha.HostHealthStatus",
  () => [
    { no: 1, name: "failed_active_health_check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "failed_outlier_check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "failed_active_degraded_check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "pending_dynamic_removal", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "pending_active_hc", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "eds_health_status", kind: "enum", T: proto3.getEnumType(HealthStatus) },
  ],
);
