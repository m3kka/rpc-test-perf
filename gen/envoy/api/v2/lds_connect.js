// @generated by protoc-gen-connect-es v1.1.4
// @generated from file envoy/api/v2/lds.proto (package envoy.api.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeltaDiscoveryRequest, DeltaDiscoveryResponse, DiscoveryRequest, DiscoveryResponse } from "./discovery_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * The Envoy instance initiates an RPC at startup to discover a list of
 * listeners. Updates are delivered via streaming from the LDS server and
 * consist of a complete update of all listeners. Existing connections will be
 * allowed to drain from listeners that are no longer present.
 *
 * @generated from service envoy.api.v2.ListenerDiscoveryService
 */
export const ListenerDiscoveryService = {
  typeName: "envoy.api.v2.ListenerDiscoveryService",
  methods: {
    /**
     * @generated from rpc envoy.api.v2.ListenerDiscoveryService.DeltaListeners
     */
    deltaListeners: {
      name: "DeltaListeners",
      I: DeltaDiscoveryRequest,
      O: DeltaDiscoveryResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.api.v2.ListenerDiscoveryService.StreamListeners
     */
    streamListeners: {
      name: "StreamListeners",
      I: DiscoveryRequest,
      O: DiscoveryResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.api.v2.ListenerDiscoveryService.FetchListeners
     */
    fetchListeners: {
      name: "FetchListeners",
      I: DiscoveryRequest,
      O: DiscoveryResponse,
      kind: MethodKind.Unary,
    },
  }
};

