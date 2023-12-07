// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/data/core/v3/health_check_event.proto (package envoy.data.core.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Address } from "../../../config/core/v3/address_pb.js";
import { Locality, Metadata } from "../../../config/core/v3/base_pb.js";

/**
 * @generated from enum envoy.data.core.v3.HealthCheckFailureType
 */
export const HealthCheckFailureType = proto3.makeEnum(
  "envoy.data.core.v3.HealthCheckFailureType",
  [
    {no: 0, name: "ACTIVE"},
    {no: 1, name: "PASSIVE"},
    {no: 2, name: "NETWORK"},
    {no: 3, name: "NETWORK_TIMEOUT"},
  ],
);

/**
 * @generated from enum envoy.data.core.v3.HealthCheckerType
 */
export const HealthCheckerType = proto3.makeEnum(
  "envoy.data.core.v3.HealthCheckerType",
  [
    {no: 0, name: "HTTP"},
    {no: 1, name: "TCP"},
    {no: 2, name: "GRPC"},
    {no: 3, name: "REDIS"},
    {no: 4, name: "THRIFT"},
  ],
);

/**
 * [#next-free-field: 12]
 *
 * @generated from message envoy.data.core.v3.HealthCheckEvent
 */
export const HealthCheckEvent = proto3.makeMessageType(
  "envoy.data.core.v3.HealthCheckEvent",
  () => [
    { no: 1, name: "health_checker_type", kind: "enum", T: proto3.getEnumType(HealthCheckerType) },
    { no: 2, name: "host", kind: "message", T: Address },
    { no: 3, name: "cluster_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "eject_unhealthy_event", kind: "message", T: HealthCheckEjectUnhealthy, oneof: "event" },
    { no: 5, name: "add_healthy_event", kind: "message", T: HealthCheckAddHealthy, oneof: "event" },
    { no: 7, name: "health_check_failure_event", kind: "message", T: HealthCheckFailure, oneof: "event" },
    { no: 8, name: "degraded_healthy_host", kind: "message", T: DegradedHealthyHost, oneof: "event" },
    { no: 9, name: "no_longer_degraded_host", kind: "message", T: NoLongerDegradedHost, oneof: "event" },
    { no: 6, name: "timestamp", kind: "message", T: Timestamp },
    { no: 10, name: "metadata", kind: "message", T: Metadata },
    { no: 11, name: "locality", kind: "message", T: Locality },
  ],
);

/**
 * @generated from message envoy.data.core.v3.HealthCheckEjectUnhealthy
 */
export const HealthCheckEjectUnhealthy = proto3.makeMessageType(
  "envoy.data.core.v3.HealthCheckEjectUnhealthy",
  () => [
    { no: 1, name: "failure_type", kind: "enum", T: proto3.getEnumType(HealthCheckFailureType) },
  ],
);

/**
 * @generated from message envoy.data.core.v3.HealthCheckAddHealthy
 */
export const HealthCheckAddHealthy = proto3.makeMessageType(
  "envoy.data.core.v3.HealthCheckAddHealthy",
  () => [
    { no: 1, name: "first_check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message envoy.data.core.v3.HealthCheckFailure
 */
export const HealthCheckFailure = proto3.makeMessageType(
  "envoy.data.core.v3.HealthCheckFailure",
  () => [
    { no: 1, name: "failure_type", kind: "enum", T: proto3.getEnumType(HealthCheckFailureType) },
    { no: 2, name: "first_check", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message envoy.data.core.v3.DegradedHealthyHost
 */
export const DegradedHealthyHost = proto3.makeMessageType(
  "envoy.data.core.v3.DegradedHealthyHost",
  [],
);

/**
 * @generated from message envoy.data.core.v3.NoLongerDegradedHost
 */
export const NoLongerDegradedHost = proto3.makeMessageType(
  "envoy.data.core.v3.NoLongerDegradedHost",
  [],
);
