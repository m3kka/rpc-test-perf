// @generated by protoc-gen-connect-es v1.1.4
// @generated from file envoy/service/secret/v3/sds.proto (package envoy.service.secret.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeltaDiscoveryRequest, DeltaDiscoveryResponse, DiscoveryRequest, DiscoveryResponse } from "../../discovery/v3/discovery_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service envoy.service.secret.v3.SecretDiscoveryService
 */
export const SecretDiscoveryService = {
  typeName: "envoy.service.secret.v3.SecretDiscoveryService",
  methods: {
    /**
     * @generated from rpc envoy.service.secret.v3.SecretDiscoveryService.DeltaSecrets
     */
    deltaSecrets: {
      name: "DeltaSecrets",
      I: DeltaDiscoveryRequest,
      O: DeltaDiscoveryResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.service.secret.v3.SecretDiscoveryService.StreamSecrets
     */
    streamSecrets: {
      name: "StreamSecrets",
      I: DiscoveryRequest,
      O: DiscoveryResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.service.secret.v3.SecretDiscoveryService.FetchSecrets
     */
    fetchSecrets: {
      name: "FetchSecrets",
      I: DiscoveryRequest,
      O: DiscoveryResponse,
      kind: MethodKind.Unary,
    },
  }
};
