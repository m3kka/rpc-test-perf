// @generated by protoc-gen-connect-es v1.1.4
// @generated from file envoy/service/trace/v2/trace_service.proto (package envoy.service.trace.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { StreamTracesMessage, StreamTracesResponse } from "./trace_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Service for streaming traces to server that consumes the trace data. It
 * uses OpenCensus data model as a standard to represent trace information.
 *
 * @generated from service envoy.service.trace.v2.TraceService
 */
export declare const TraceService: {
  readonly typeName: "envoy.service.trace.v2.TraceService",
  readonly methods: {
    /**
     * Envoy will connect and send StreamTracesMessage messages forever. It does
     * not expect any response to be sent as nothing would be done in the case
     * of failure.
     *
     * @generated from rpc envoy.service.trace.v2.TraceService.StreamTraces
     */
    readonly streamTraces: {
      readonly name: "StreamTraces",
      readonly I: typeof StreamTracesMessage,
      readonly O: typeof StreamTracesResponse,
      readonly kind: MethodKind.ClientStreaming,
    },
  }
};

