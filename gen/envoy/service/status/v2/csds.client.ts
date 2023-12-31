// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/status/v2/csds.proto" (package "envoy.service.status.v2", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ClientStatusDiscoveryService } from "./csds";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ClientStatusResponse } from "./csds";
import type { ClientStatusRequest } from "./csds";
import type { DuplexStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// [#protodoc-title: Client Status Discovery Service (CSDS)]

/**
 * CSDS is Client Status Discovery Service. It can be used to get the status of
 * an xDS-compliant client from the management server's point of view. In the
 * future, it can potentially be used as an interface to get the current
 * state directly from the client.
 *
 * @generated from protobuf service envoy.service.status.v2.ClientStatusDiscoveryService
 */
export interface IClientStatusDiscoveryServiceClient {
    /**
     * @generated from protobuf rpc: StreamClientStatus(stream envoy.service.status.v2.ClientStatusRequest) returns (stream envoy.service.status.v2.ClientStatusResponse);
     */
    streamClientStatus(options?: RpcOptions): DuplexStreamingCall<ClientStatusRequest, ClientStatusResponse>;
    /**
     * @generated from protobuf rpc: FetchClientStatus(envoy.service.status.v2.ClientStatusRequest) returns (envoy.service.status.v2.ClientStatusResponse);
     */
    fetchClientStatus(input: ClientStatusRequest, options?: RpcOptions): UnaryCall<ClientStatusRequest, ClientStatusResponse>;
}
// [#protodoc-title: Client Status Discovery Service (CSDS)]

/**
 * CSDS is Client Status Discovery Service. It can be used to get the status of
 * an xDS-compliant client from the management server's point of view. In the
 * future, it can potentially be used as an interface to get the current
 * state directly from the client.
 *
 * @generated from protobuf service envoy.service.status.v2.ClientStatusDiscoveryService
 */
export class ClientStatusDiscoveryServiceClient implements IClientStatusDiscoveryServiceClient, ServiceInfo {
    typeName = ClientStatusDiscoveryService.typeName;
    methods = ClientStatusDiscoveryService.methods;
    options = ClientStatusDiscoveryService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: StreamClientStatus(stream envoy.service.status.v2.ClientStatusRequest) returns (stream envoy.service.status.v2.ClientStatusResponse);
     */
    streamClientStatus(options?: RpcOptions): DuplexStreamingCall<ClientStatusRequest, ClientStatusResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<ClientStatusRequest, ClientStatusResponse>("duplex", this._transport, method, opt);
    }
    /**
     * @generated from protobuf rpc: FetchClientStatus(envoy.service.status.v2.ClientStatusRequest) returns (envoy.service.status.v2.ClientStatusResponse);
     */
    fetchClientStatus(input: ClientStatusRequest, options?: RpcOptions): UnaryCall<ClientStatusRequest, ClientStatusResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ClientStatusRequest, ClientStatusResponse>("unary", this._transport, method, opt, input);
    }
}
