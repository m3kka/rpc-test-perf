// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/service/trace/v3/trace_service.proto (package envoy.service.trace.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Span } from "../../../../opencensus/proto/trace/v1/trace_pb.js";
import { Node } from "../../../config/core/v3/base_pb.js";

/**
 * @generated from message envoy.service.trace.v3.StreamTracesResponse
 */
export const StreamTracesResponse = proto3.makeMessageType(
  "envoy.service.trace.v3.StreamTracesResponse",
  [],
);

/**
 * @generated from message envoy.service.trace.v3.StreamTracesMessage
 */
export const StreamTracesMessage = proto3.makeMessageType(
  "envoy.service.trace.v3.StreamTracesMessage",
  () => [
    { no: 1, name: "identifier", kind: "message", T: StreamTracesMessage_Identifier },
    { no: 2, name: "spans", kind: "message", T: Span, repeated: true },
  ],
);

/**
 * @generated from message envoy.service.trace.v3.StreamTracesMessage.Identifier
 */
export const StreamTracesMessage_Identifier = proto3.makeMessageType(
  "envoy.service.trace.v3.StreamTracesMessage.Identifier",
  () => [
    { no: 1, name: "node", kind: "message", T: Node },
  ],
  {localName: "StreamTracesMessage_Identifier"},
);

