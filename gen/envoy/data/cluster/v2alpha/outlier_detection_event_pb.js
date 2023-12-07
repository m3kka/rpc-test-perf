// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/data/cluster/v2alpha/outlier_detection_event.proto (package envoy.data.cluster.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp, UInt64Value } from "@bufbuild/protobuf";

/**
 * Type of ejection that took place
 *
 * @generated from enum envoy.data.cluster.v2alpha.OutlierEjectionType
 */
export const OutlierEjectionType = proto3.makeEnum(
  "envoy.data.cluster.v2alpha.OutlierEjectionType",
  [
    {no: 0, name: "CONSECUTIVE_5XX"},
    {no: 1, name: "CONSECUTIVE_GATEWAY_FAILURE"},
    {no: 2, name: "SUCCESS_RATE"},
    {no: 3, name: "CONSECUTIVE_LOCAL_ORIGIN_FAILURE"},
    {no: 4, name: "SUCCESS_RATE_LOCAL_ORIGIN"},
    {no: 5, name: "FAILURE_PERCENTAGE"},
    {no: 6, name: "FAILURE_PERCENTAGE_LOCAL_ORIGIN"},
  ],
);

/**
 * Represents possible action applied to upstream host
 *
 * @generated from enum envoy.data.cluster.v2alpha.Action
 */
export const Action = proto3.makeEnum(
  "envoy.data.cluster.v2alpha.Action",
  [
    {no: 0, name: "EJECT"},
    {no: 1, name: "UNEJECT"},
  ],
);

/**
 * [#next-free-field: 12]
 *
 * @generated from message envoy.data.cluster.v2alpha.OutlierDetectionEvent
 */
export const OutlierDetectionEvent = proto3.makeMessageType(
  "envoy.data.cluster.v2alpha.OutlierDetectionEvent",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(OutlierEjectionType) },
    { no: 2, name: "timestamp", kind: "message", T: Timestamp },
    { no: 3, name: "secs_since_last_action", kind: "message", T: UInt64Value },
    { no: 4, name: "cluster_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "upstream_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "action", kind: "enum", T: proto3.getEnumType(Action) },
    { no: 7, name: "num_ejections", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 8, name: "enforced", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "eject_success_rate_event", kind: "message", T: OutlierEjectSuccessRate, oneof: "event" },
    { no: 10, name: "eject_consecutive_event", kind: "message", T: OutlierEjectConsecutive, oneof: "event" },
    { no: 11, name: "eject_failure_percentage_event", kind: "message", T: OutlierEjectFailurePercentage, oneof: "event" },
  ],
);

/**
 * @generated from message envoy.data.cluster.v2alpha.OutlierEjectSuccessRate
 */
export const OutlierEjectSuccessRate = proto3.makeMessageType(
  "envoy.data.cluster.v2alpha.OutlierEjectSuccessRate",
  () => [
    { no: 1, name: "host_success_rate", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "cluster_average_success_rate", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "cluster_success_rate_ejection_threshold", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message envoy.data.cluster.v2alpha.OutlierEjectConsecutive
 */
export const OutlierEjectConsecutive = proto3.makeMessageType(
  "envoy.data.cluster.v2alpha.OutlierEjectConsecutive",
  [],
);

/**
 * @generated from message envoy.data.cluster.v2alpha.OutlierEjectFailurePercentage
 */
export const OutlierEjectFailurePercentage = proto3.makeMessageType(
  "envoy.data.cluster.v2alpha.OutlierEjectFailurePercentage",
  () => [
    { no: 1, name: "host_success_rate", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

