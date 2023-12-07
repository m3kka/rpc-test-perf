// @generated by protoc-gen-connect-es v1.1.4
// @generated from file envoy/api/v2/eds.proto (package envoy.api.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeltaDiscoveryRequest, DeltaDiscoveryResponse, DiscoveryRequest, DiscoveryResponse } from "./discovery_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service envoy.api.v2.EndpointDiscoveryService
 */
export declare const EndpointDiscoveryService: {
  readonly typeName: "envoy.api.v2.EndpointDiscoveryService",
  readonly methods: {
    /**
     * The resource_names field in DiscoveryRequest specifies a list of clusters
     * to subscribe to updates for.
     *
     * @generated from rpc envoy.api.v2.EndpointDiscoveryService.StreamEndpoints
     */
    readonly streamEndpoints: {
      readonly name: "StreamEndpoints",
      readonly I: typeof DiscoveryRequest,
      readonly O: typeof DiscoveryResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.api.v2.EndpointDiscoveryService.DeltaEndpoints
     */
    readonly deltaEndpoints: {
      readonly name: "DeltaEndpoints",
      readonly I: typeof DeltaDiscoveryRequest,
      readonly O: typeof DeltaDiscoveryResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.api.v2.EndpointDiscoveryService.FetchEndpoints
     */
    readonly fetchEndpoints: {
      readonly name: "FetchEndpoints",
      readonly I: typeof DiscoveryRequest,
      readonly O: typeof DiscoveryResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};
