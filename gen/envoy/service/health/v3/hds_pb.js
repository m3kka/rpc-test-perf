// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/service/health/v3/hds.proto (package envoy.service.health.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3 } from "@bufbuild/protobuf";
import { Locality, Node } from "../../../config/core/v3/base_pb.js";
import { Endpoint } from "../../../config/endpoint/v3/endpoint_components_pb.js";
import { HealthCheck, HealthStatus } from "../../../config/core/v3/health_check_pb.js";
import { Cluster_TransportSocketMatch } from "../../../config/cluster/v3/cluster_pb.js";
import { BindConfig } from "../../../config/core/v3/address_pb.js";

/**
 * Defines supported protocols etc, so the management server can assign proper
 * endpoints to healthcheck.
 *
 * @generated from message envoy.service.health.v3.Capability
 */
export const Capability = proto3.makeMessageType(
  "envoy.service.health.v3.Capability",
  () => [
    { no: 1, name: "health_check_protocols", kind: "enum", T: proto3.getEnumType(Capability_Protocol), repeated: true },
  ],
);

/**
 * Different Envoy instances may have different capabilities (e.g. Redis)
 * and/or have ports enabled for different protocols.
 *
 * @generated from enum envoy.service.health.v3.Capability.Protocol
 */
export const Capability_Protocol = proto3.makeEnum(
  "envoy.service.health.v3.Capability.Protocol",
  [
    {no: 0, name: "HTTP"},
    {no: 1, name: "TCP"},
    {no: 2, name: "REDIS"},
  ],
);

/**
 * @generated from message envoy.service.health.v3.HealthCheckRequest
 */
export const HealthCheckRequest = proto3.makeMessageType(
  "envoy.service.health.v3.HealthCheckRequest",
  () => [
    { no: 1, name: "node", kind: "message", T: Node },
    { no: 2, name: "capability", kind: "message", T: Capability },
  ],
);

/**
 * @generated from message envoy.service.health.v3.EndpointHealth
 */
export const EndpointHealth = proto3.makeMessageType(
  "envoy.service.health.v3.EndpointHealth",
  () => [
    { no: 1, name: "endpoint", kind: "message", T: Endpoint },
    { no: 2, name: "health_status", kind: "enum", T: proto3.getEnumType(HealthStatus) },
  ],
);

/**
 * Group endpoint health by locality under each cluster.
 *
 * @generated from message envoy.service.health.v3.LocalityEndpointsHealth
 */
export const LocalityEndpointsHealth = proto3.makeMessageType(
  "envoy.service.health.v3.LocalityEndpointsHealth",
  () => [
    { no: 1, name: "locality", kind: "message", T: Locality },
    { no: 2, name: "endpoints_health", kind: "message", T: EndpointHealth, repeated: true },
  ],
);

/**
 * The health status of endpoints in a cluster. The cluster name and locality
 * should match the corresponding fields in ClusterHealthCheck message.
 *
 * @generated from message envoy.service.health.v3.ClusterEndpointsHealth
 */
export const ClusterEndpointsHealth = proto3.makeMessageType(
  "envoy.service.health.v3.ClusterEndpointsHealth",
  () => [
    { no: 1, name: "cluster_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "locality_endpoints_health", kind: "message", T: LocalityEndpointsHealth, repeated: true },
  ],
);

/**
 * @generated from message envoy.service.health.v3.EndpointHealthResponse
 */
export const EndpointHealthResponse = proto3.makeMessageType(
  "envoy.service.health.v3.EndpointHealthResponse",
  () => [
    { no: 1, name: "endpoints_health", kind: "message", T: EndpointHealth, repeated: true },
    { no: 2, name: "cluster_endpoints_health", kind: "message", T: ClusterEndpointsHealth, repeated: true },
  ],
);

/**
 * @generated from message envoy.service.health.v3.HealthCheckRequestOrEndpointHealthResponse
 */
export const HealthCheckRequestOrEndpointHealthResponse = proto3.makeMessageType(
  "envoy.service.health.v3.HealthCheckRequestOrEndpointHealthResponse",
  () => [
    { no: 1, name: "health_check_request", kind: "message", T: HealthCheckRequest, oneof: "request_type" },
    { no: 2, name: "endpoint_health_response", kind: "message", T: EndpointHealthResponse, oneof: "request_type" },
  ],
);

/**
 * @generated from message envoy.service.health.v3.LocalityEndpoints
 */
export const LocalityEndpoints = proto3.makeMessageType(
  "envoy.service.health.v3.LocalityEndpoints",
  () => [
    { no: 1, name: "locality", kind: "message", T: Locality },
    { no: 2, name: "endpoints", kind: "message", T: Endpoint, repeated: true },
  ],
);

/**
 * The cluster name and locality is provided to Envoy for the endpoints that it
 * health checks to support statistics reporting, logging and debugging by the
 * Envoy instance (outside of HDS). For maximum usefulness, it should match the
 * same cluster structure as that provided by EDS.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.service.health.v3.ClusterHealthCheck
 */
export const ClusterHealthCheck = proto3.makeMessageType(
  "envoy.service.health.v3.ClusterHealthCheck",
  () => [
    { no: 1, name: "cluster_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "health_checks", kind: "message", T: HealthCheck, repeated: true },
    { no: 3, name: "locality_endpoints", kind: "message", T: LocalityEndpoints, repeated: true },
    { no: 4, name: "transport_socket_matches", kind: "message", T: Cluster_TransportSocketMatch, repeated: true },
    { no: 5, name: "upstream_bind_config", kind: "message", T: BindConfig },
  ],
);

/**
 * @generated from message envoy.service.health.v3.HealthCheckSpecifier
 */
export const HealthCheckSpecifier = proto3.makeMessageType(
  "envoy.service.health.v3.HealthCheckSpecifier",
  () => [
    { no: 1, name: "cluster_health_checks", kind: "message", T: ClusterHealthCheck, repeated: true },
    { no: 2, name: "interval", kind: "message", T: Duration },
  ],
);

/**
 * [#not-implemented-hide:] Not configuration. Workaround c++ protobuf issue with importing
 * services: https://github.com/google/protobuf/issues/4221 and protoxform to upgrade the file.
 *
 * @generated from message envoy.service.health.v3.HdsDummy
 */
export const HdsDummy = proto3.makeMessageType(
  "envoy.service.health.v3.HdsDummy",
  [],
);

