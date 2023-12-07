// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/event_reporting/v2alpha/event_reporting_service.proto" (package "envoy.service.event_reporting.v2alpha", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { EventReportingService } from "./event_reporting_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { StreamEventsResponse } from "./event_reporting_service";
import type { StreamEventsRequest } from "./event_reporting_service";
import type { DuplexStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// [#protodoc-title: gRPC Event Reporting Service]

/**
 * [#not-implemented-hide:]
 * Service for streaming different types of events from Envoy to a server. The examples of
 * such events may be health check or outlier detection events.
 *
 * @generated from protobuf service envoy.service.event_reporting.v2alpha.EventReportingService
 */
export interface IEventReportingServiceClient {
    /**
     * Envoy will connect and send StreamEventsRequest messages forever.
     * The management server may send StreamEventsResponse to configure event stream. See below.
     * This API is designed for high throughput with the expectation that it might be lossy.
     *
     * @generated from protobuf rpc: StreamEvents(stream envoy.service.event_reporting.v2alpha.StreamEventsRequest) returns (stream envoy.service.event_reporting.v2alpha.StreamEventsResponse);
     */
    streamEvents(options?: RpcOptions): DuplexStreamingCall<StreamEventsRequest, StreamEventsResponse>;
}
// [#protodoc-title: gRPC Event Reporting Service]

/**
 * [#not-implemented-hide:]
 * Service for streaming different types of events from Envoy to a server. The examples of
 * such events may be health check or outlier detection events.
 *
 * @generated from protobuf service envoy.service.event_reporting.v2alpha.EventReportingService
 */
export class EventReportingServiceClient implements IEventReportingServiceClient, ServiceInfo {
    typeName = EventReportingService.typeName;
    methods = EventReportingService.methods;
    options = EventReportingService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Envoy will connect and send StreamEventsRequest messages forever.
     * The management server may send StreamEventsResponse to configure event stream. See below.
     * This API is designed for high throughput with the expectation that it might be lossy.
     *
     * @generated from protobuf rpc: StreamEvents(stream envoy.service.event_reporting.v2alpha.StreamEventsRequest) returns (stream envoy.service.event_reporting.v2alpha.StreamEventsResponse);
     */
    streamEvents(options?: RpcOptions): DuplexStreamingCall<StreamEventsRequest, StreamEventsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<StreamEventsRequest, StreamEventsResponse>("duplex", this._transport, method, opt);
    }
}
