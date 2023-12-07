// @generated by protoc-gen-connect-es v1.1.4
// @generated from file envoy/service/extension/v3/config_discovery.proto (package envoy.service.extension.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeltaDiscoveryRequest, DeltaDiscoveryResponse, DiscoveryRequest, DiscoveryResponse } from "../../discovery/v3/discovery_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Return extension configurations.
 *
 * @generated from service envoy.service.extension.v3.ExtensionConfigDiscoveryService
 */
export const ExtensionConfigDiscoveryService = {
  typeName: "envoy.service.extension.v3.ExtensionConfigDiscoveryService",
  methods: {
    /**
     * @generated from rpc envoy.service.extension.v3.ExtensionConfigDiscoveryService.StreamExtensionConfigs
     */
    streamExtensionConfigs: {
      name: "StreamExtensionConfigs",
      I: DiscoveryRequest,
      O: DiscoveryResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.service.extension.v3.ExtensionConfigDiscoveryService.DeltaExtensionConfigs
     */
    deltaExtensionConfigs: {
      name: "DeltaExtensionConfigs",
      I: DeltaDiscoveryRequest,
      O: DeltaDiscoveryResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.service.extension.v3.ExtensionConfigDiscoveryService.FetchExtensionConfigs
     */
    fetchExtensionConfigs: {
      name: "FetchExtensionConfigs",
      I: DiscoveryRequest,
      O: DiscoveryResponse,
      kind: MethodKind.Unary,
    },
  }
};

