// @generated by protoc-gen-connect-es v1.1.4
// @generated from file envoy/service/status/v3/csds.proto (package envoy.service.status.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ClientStatusRequest, ClientStatusResponse } from "./csds_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * CSDS is Client Status Discovery Service. It can be used to get the status of
 * an xDS-compliant client from the management server's point of view. It can
 * also be used to get the current xDS states directly from the client.
 *
 * @generated from service envoy.service.status.v3.ClientStatusDiscoveryService
 */
export declare const ClientStatusDiscoveryService: {
  readonly typeName: "envoy.service.status.v3.ClientStatusDiscoveryService",
  readonly methods: {
    /**
     * @generated from rpc envoy.service.status.v3.ClientStatusDiscoveryService.StreamClientStatus
     */
    readonly streamClientStatus: {
      readonly name: "StreamClientStatus",
      readonly I: typeof ClientStatusRequest,
      readonly O: typeof ClientStatusResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc envoy.service.status.v3.ClientStatusDiscoveryService.FetchClientStatus
     */
    readonly fetchClientStatus: {
      readonly name: "FetchClientStatus",
      readonly I: typeof ClientStatusRequest,
      readonly O: typeof ClientStatusResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};
