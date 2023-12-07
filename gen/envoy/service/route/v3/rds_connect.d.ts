// @generated by protoc-gen-connect-es v1.1.4
// @generated from file envoy/service/route/v3/rds.proto (package envoy.service.route.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeltaDiscoveryRequest, DeltaDiscoveryResponse, DiscoveryRequest, DiscoveryResponse } from "../../discovery/v3/discovery_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * The resource_names field in DiscoveryRequest specifies a route configuration.
 * This allows an Envoy configuration with multiple HTTP listeners (and
 * associated HTTP connection manager filters) to use different route
 * configurations. Each listener will bind its HTTP connection manager filter to
 * a route table via this identifier.
 *
 * @generated from service envoy.service.route.v3.RouteDiscoveryService
 */
export declare const RouteDiscoveryService: {
  readonly typeName: "envoy.service.route.v3.RouteDiscoveryService",
  readonly methods: {
    /**
     * @generated from rpc envoy.service.route.v3.RouteDiscoveryService.StreamRoutes
     */
    readonly streamRoutes: {
      readonly name: "StreamRoutes",
      readonly I: typeof DiscoveryRequest,
      readonly O: typeof DiscoveryResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.service.route.v3.RouteDiscoveryService.DeltaRoutes
     */
    readonly deltaRoutes: {
      readonly name: "DeltaRoutes",
      readonly I: typeof DeltaDiscoveryRequest,
      readonly O: typeof DeltaDiscoveryResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.service.route.v3.RouteDiscoveryService.FetchRoutes
     */
    readonly fetchRoutes: {
      readonly name: "FetchRoutes",
      readonly I: typeof DiscoveryRequest,
      readonly O: typeof DiscoveryResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * Virtual Host Discovery Service (VHDS) is used to dynamically update the list of virtual hosts for
 * a given RouteConfiguration. If VHDS is configured a virtual host list update will be triggered
 * during the processing of an HTTP request if a route for the request cannot be resolved. The
 * :ref:`resource_names_subscribe <envoy_v3_api_field_service.discovery.v3.DeltaDiscoveryRequest.resource_names_subscribe>`
 * field contains a list of virtual host names or aliases to track. The contents of an alias would
 * be the contents of a ``host`` or ``authority`` header used to make an http request. An xDS server
 * will match an alias to a virtual host based on the content of :ref:`domains'
 * <envoy_v3_api_field_config.route.v3.VirtualHost.domains>` field. The ``resource_names_unsubscribe`` field
 * contains a list of virtual host names that have been :ref:`unsubscribed
 * <xds_protocol_unsubscribe>` from the routing table associated with the RouteConfiguration.
 *
 * @generated from service envoy.service.route.v3.VirtualHostDiscoveryService
 */
export declare const VirtualHostDiscoveryService: {
  readonly typeName: "envoy.service.route.v3.VirtualHostDiscoveryService",
  readonly methods: {
    /**
     * @generated from rpc envoy.service.route.v3.VirtualHostDiscoveryService.DeltaVirtualHosts
     */
    readonly deltaVirtualHosts: {
      readonly name: "DeltaVirtualHosts",
      readonly I: typeof DeltaDiscoveryRequest,
      readonly O: typeof DeltaDiscoveryResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
  }
};

