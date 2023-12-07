// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/network/dubbo_proxy/v2alpha1/dubbo_proxy.proto (package envoy.config.filter.network.dubbo_proxy.v2alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, proto3 } from "@bufbuild/protobuf";
import { RouteConfiguration } from "./route_pb.js";

/**
 * Dubbo Protocol types supported by Envoy.
 *
 * @generated from enum envoy.config.filter.network.dubbo_proxy.v2alpha1.ProtocolType
 */
export const ProtocolType = proto3.makeEnum(
  "envoy.config.filter.network.dubbo_proxy.v2alpha1.ProtocolType",
  [
    {no: 0, name: "Dubbo"},
  ],
);

/**
 * Dubbo Serialization types supported by Envoy.
 *
 * @generated from enum envoy.config.filter.network.dubbo_proxy.v2alpha1.SerializationType
 */
export const SerializationType = proto3.makeEnum(
  "envoy.config.filter.network.dubbo_proxy.v2alpha1.SerializationType",
  [
    {no: 0, name: "Hessian2"},
  ],
);

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.config.filter.network.dubbo_proxy.v2alpha1.DubboProxy
 */
export const DubboProxy = proto3.makeMessageType(
  "envoy.config.filter.network.dubbo_proxy.v2alpha1.DubboProxy",
  () => [
    { no: 1, name: "stat_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "protocol_type", kind: "enum", T: proto3.getEnumType(ProtocolType) },
    { no: 3, name: "serialization_type", kind: "enum", T: proto3.getEnumType(SerializationType) },
    { no: 4, name: "route_config", kind: "message", T: RouteConfiguration, repeated: true },
    { no: 5, name: "dubbo_filters", kind: "message", T: DubboFilter, repeated: true },
  ],
);

/**
 * DubboFilter configures a Dubbo filter.
 *
 * @generated from message envoy.config.filter.network.dubbo_proxy.v2alpha1.DubboFilter
 */
export const DubboFilter = proto3.makeMessageType(
  "envoy.config.filter.network.dubbo_proxy.v2alpha1.DubboFilter",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "config", kind: "message", T: Any },
  ],
);

