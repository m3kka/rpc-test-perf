// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/network/zookeeper_proxy/v3/zookeeper_proxy.proto (package envoy.extensions.filters.network.zookeeper_proxy.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3, UInt32Value } from "@bufbuild/protobuf";

/**
 * [#next-free-field: 7]
 *
 * @generated from message envoy.extensions.filters.network.zookeeper_proxy.v3.ZooKeeperProxy
 */
export const ZooKeeperProxy = proto3.makeMessageType(
  "envoy.extensions.filters.network.zookeeper_proxy.v3.ZooKeeperProxy",
  () => [
    { no: 1, name: "stat_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "access_log", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "max_packet_bytes", kind: "message", T: UInt32Value },
    { no: 4, name: "enable_latency_threshold_metrics", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "default_latency_threshold", kind: "message", T: Duration },
    { no: 6, name: "latency_threshold_overrides", kind: "message", T: LatencyThresholdOverride, repeated: true },
  ],
);

/**
 * @generated from message envoy.extensions.filters.network.zookeeper_proxy.v3.LatencyThresholdOverride
 */
export const LatencyThresholdOverride = proto3.makeMessageType(
  "envoy.extensions.filters.network.zookeeper_proxy.v3.LatencyThresholdOverride",
  () => [
    { no: 1, name: "opcode", kind: "enum", T: proto3.getEnumType(LatencyThresholdOverride_Opcode) },
    { no: 2, name: "threshold", kind: "message", T: Duration },
  ],
);

/**
 * @generated from enum envoy.extensions.filters.network.zookeeper_proxy.v3.LatencyThresholdOverride.Opcode
 */
export const LatencyThresholdOverride_Opcode = proto3.makeEnum(
  "envoy.extensions.filters.network.zookeeper_proxy.v3.LatencyThresholdOverride.Opcode",
  [
    {no: 0, name: "Connect"},
    {no: 1, name: "Create"},
    {no: 2, name: "Delete"},
    {no: 3, name: "Exists"},
    {no: 4, name: "GetData"},
    {no: 5, name: "SetData"},
    {no: 6, name: "GetAcl"},
    {no: 7, name: "SetAcl"},
    {no: 8, name: "GetChildren"},
    {no: 9, name: "Sync"},
    {no: 10, name: "Ping"},
    {no: 11, name: "GetChildren2"},
    {no: 12, name: "Check"},
    {no: 13, name: "Multi"},
    {no: 14, name: "Create2"},
    {no: 15, name: "Reconfig"},
    {no: 16, name: "CheckWatches"},
    {no: 17, name: "RemoveWatches"},
    {no: 18, name: "CreateContainer"},
    {no: 19, name: "CreateTtl"},
    {no: 20, name: "Close"},
    {no: 21, name: "SetAuth"},
    {no: 22, name: "SetWatches"},
    {no: 23, name: "GetEphemerals"},
    {no: 24, name: "GetAllChildrenNumber"},
    {no: 25, name: "SetWatches2"},
    {no: 26, name: "AddWatch"},
  ],
);

