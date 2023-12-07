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
export declare const ExtensionConfigDiscoveryService: {
  readonly typeName: "envoy.service.extension.v3.ExtensionConfigDiscoveryService",
  readonly methods: {
    /**
     * @generated from rpc envoy.service.extension.v3.ExtensionConfigDiscoveryService.StreamExtensionConfigs
     */
    readonly streamExtensionConfigs: {
      readonly name: "StreamExtensionConfigs",
      readonly I: typeof DiscoveryRequest,
      readonly O: typeof DiscoveryResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.service.extension.v3.ExtensionConfigDiscoveryService.DeltaExtensionConfigs
     */
    readonly deltaExtensionConfigs: {
      readonly name: "DeltaExtensionConfigs",
      readonly I: typeof DeltaDiscoveryRequest,
      readonly O: typeof DeltaDiscoveryResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.service.extension.v3.ExtensionConfigDiscoveryService.FetchExtensionConfigs
     */
    readonly fetchExtensionConfigs: {
      readonly name: "FetchExtensionConfigs",
      readonly I: typeof DiscoveryRequest,
      readonly O: typeof DiscoveryResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

