// @generated by protoc-gen-connect-es v1.1.4
// @generated from file envoy/api/v2/eds.proto (package envoy.api.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeltaDiscoveryRequest, DeltaDiscoveryResponse, DiscoveryRequest, DiscoveryResponse } from "./discovery_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service envoy.api.v2.EndpointDiscoveryService
 */
export const EndpointDiscoveryService = {
  typeName: "envoy.api.v2.EndpointDiscoveryService",
  methods: {
    /**
     * The resource_names field in DiscoveryRequest specifies a list of clusters
     * to subscribe to updates for.
     *
     * @generated from rpc envoy.api.v2.EndpointDiscoveryService.StreamEndpoints
     */
    streamEndpoints: {
      name: "StreamEndpoints",
      I: DiscoveryRequest,
      O: DiscoveryResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.api.v2.EndpointDiscoveryService.DeltaEndpoints
     */
    deltaEndpoints: {
      name: "DeltaEndpoints",
      I: DeltaDiscoveryRequest,
      O: DeltaDiscoveryResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.api.v2.EndpointDiscoveryService.FetchEndpoints
     */
    fetchEndpoints: {
      name: "FetchEndpoints",
      I: DiscoveryRequest,
      O: DiscoveryResponse,
      kind: MethodKind.Unary,
    },
  }
};

