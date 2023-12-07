// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/api/v2/endpoint/endpoint_components.proto (package envoy.api.v2.endpoint, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, UInt32Value } from "@bufbuild/protobuf";
import { Address } from "../core/address_pb.js";
import { HealthStatus } from "../core/health_check_pb.js";
import { Locality, Metadata } from "../core/base_pb.js";

/**
 * Upstream host identifier.
 *
 * @generated from message envoy.api.v2.endpoint.Endpoint
 */
export const Endpoint = proto3.makeMessageType(
  "envoy.api.v2.endpoint.Endpoint",
  () => [
    { no: 1, name: "address", kind: "message", T: Address },
    { no: 2, name: "health_check_config", kind: "message", T: Endpoint_HealthCheckConfig },
    { no: 3, name: "hostname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * The optional health check configuration.
 *
 * @generated from message envoy.api.v2.endpoint.Endpoint.HealthCheckConfig
 */
export const Endpoint_HealthCheckConfig = proto3.makeMessageType(
  "envoy.api.v2.endpoint.Endpoint.HealthCheckConfig",
  () => [
    { no: 1, name: "port_value", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "hostname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Endpoint_HealthCheckConfig"},
);

/**
 * An Endpoint that Envoy can route traffic to.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.api.v2.endpoint.LbEndpoint
 */
export const LbEndpoint = proto3.makeMessageType(
  "envoy.api.v2.endpoint.LbEndpoint",
  () => [
    { no: 1, name: "endpoint", kind: "message", T: Endpoint, oneof: "host_identifier" },
    { no: 5, name: "endpoint_name", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "host_identifier" },
    { no: 2, name: "health_status", kind: "enum", T: proto3.getEnumType(HealthStatus) },
    { no: 3, name: "metadata", kind: "message", T: Metadata },
    { no: 4, name: "load_balancing_weight", kind: "message", T: UInt32Value },
  ],
);

/**
 * A group of endpoints belonging to a Locality.
 * One can have multiple LocalityLbEndpoints for a locality, but this is
 * generally only done if the different groups need to have different load
 * balancing weights or different priorities.
 * [#next-free-field: 7]
 *
 * @generated from message envoy.api.v2.endpoint.LocalityLbEndpoints
 */
export const LocalityLbEndpoints = proto3.makeMessageType(
  "envoy.api.v2.endpoint.LocalityLbEndpoints",
  () => [
    { no: 1, name: "locality", kind: "message", T: Locality },
    { no: 2, name: "lb_endpoints", kind: "message", T: LbEndpoint, repeated: true },
    { no: 3, name: "load_balancing_weight", kind: "message", T: UInt32Value },
    { no: 5, name: "priority", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "proximity", kind: "message", T: UInt32Value },
  ],
);
