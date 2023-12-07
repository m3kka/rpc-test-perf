// @generated by protoc-gen-connect-es v1.1.4
// @generated from file envoy/service/health/v3/hds.proto (package envoy.service.health.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { HealthCheckRequestOrEndpointHealthResponse, HealthCheckSpecifier } from "./hds_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * HDS is Health Discovery Service. It compliments Envoy’s health checking
 * service by designating this Envoy to be a healthchecker for a subset of hosts
 * in the cluster. The status of these health checks will be reported to the
 * management server, where it can be aggregated etc and redistributed back to
 * Envoy through EDS.
 *
 * @generated from service envoy.service.health.v3.HealthDiscoveryService
 */
export declare const HealthDiscoveryService: {
  readonly typeName: "envoy.service.health.v3.HealthDiscoveryService",
  readonly methods: {
    /**
     * 1. Envoy starts up and if its can_healthcheck option in the static
     *    bootstrap config is enabled, sends HealthCheckRequest to the management
     *    server. It supplies its capabilities (which protocol it can health check
     *    with, what zone it resides in, etc.).
     * 2. In response to (1), the management server designates this Envoy as a
     *    healthchecker to health check a subset of all upstream hosts for a given
     *    cluster (for example upstream Host 1 and Host 2). It streams
     *    HealthCheckSpecifier messages with cluster related configuration for all
     *    clusters this Envoy is designated to health check. Subsequent
     *    HealthCheckSpecifier message will be sent on changes to:
     *    a. Endpoints to health checks
     *    b. Per cluster configuration change
     * 3. Envoy creates a health probe based on the HealthCheck config and sends
     *    it to endpoint(ip:port) of Host 1 and 2. Based on the HealthCheck
     *    configuration Envoy waits upon the arrival of the probe response and
     *    looks at the content of the response to decide whether the endpoint is
     *    healthy or not. If a response hasn't been received within the timeout
     *    interval, the endpoint health status is considered TIMEOUT.
     * 4. Envoy reports results back in an EndpointHealthResponse message.
     *    Envoy streams responses as often as the interval configured by the
     *    management server in HealthCheckSpecifier.
     * 5. The management Server collects health statuses for all endpoints in the
     *    cluster (for all clusters) and uses this information to construct
     *    EndpointDiscoveryResponse messages.
     * 6. Once Envoy has a list of upstream endpoints to send traffic to, it load
     *    balances traffic to them without additional health checking. It may
     *    use inline healthcheck (i.e. consider endpoint UNHEALTHY if connection
     *    failed to a particular endpoint to account for health status propagation
     *    delay between HDS and EDS).
     * By default, can_healthcheck is true. If can_healthcheck is false, Cluster
     * configuration may not contain HealthCheck message.
     * TODO(htuch): How is can_healthcheck communicated to CDS to ensure the above
     * invariant?
     * TODO(htuch): Add @amb67's diagram.
     *
     * @generated from rpc envoy.service.health.v3.HealthDiscoveryService.StreamHealthCheck
     */
    readonly streamHealthCheck: {
      readonly name: "StreamHealthCheck",
      readonly I: typeof HealthCheckRequestOrEndpointHealthResponse,
      readonly O: typeof HealthCheckSpecifier,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * TODO(htuch): Unlike the gRPC version, there is no stream-based binding of
     * request/response. Should we add an identifier to the HealthCheckSpecifier
     * to bind with the response?
     *
     * @generated from rpc envoy.service.health.v3.HealthDiscoveryService.FetchHealthCheck
     */
    readonly fetchHealthCheck: {
      readonly name: "FetchHealthCheck",
      readonly I: typeof HealthCheckRequestOrEndpointHealthResponse,
      readonly O: typeof HealthCheckSpecifier,
      readonly kind: MethodKind.Unary,
    },
  }
};
