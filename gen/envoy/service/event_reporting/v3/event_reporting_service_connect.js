// @generated by protoc-gen-connect-es v1.1.4
// @generated from file envoy/service/event_reporting/v3/event_reporting_service.proto (package envoy.service.event_reporting.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { StreamEventsRequest, StreamEventsResponse } from "./event_reporting_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * [#not-implemented-hide:]
 * Service for streaming different types of events from Envoy to a server. The examples of
 * such events may be health check or outlier detection events.
 *
 * @generated from service envoy.service.event_reporting.v3.EventReportingService
 */
export const EventReportingService = {
  typeName: "envoy.service.event_reporting.v3.EventReportingService",
  methods: {
    /**
     * Envoy will connect and send StreamEventsRequest messages forever.
     * The management server may send StreamEventsResponse to configure event stream. See below.
     * This API is designed for high throughput with the expectation that it might be lossy.
     *
     * @generated from rpc envoy.service.event_reporting.v3.EventReportingService.StreamEvents
     */
    streamEvents: {
      name: "StreamEvents",
      I: StreamEventsRequest,
      O: StreamEventsResponse,
      kind: MethodKind.BiDiStreaming,
    },
  }
};

