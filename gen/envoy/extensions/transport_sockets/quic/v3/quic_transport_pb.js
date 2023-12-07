// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/transport_sockets/quic/v3/quic_transport.proto (package envoy.extensions.transport_sockets.quic.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BoolValue, proto3 } from "@bufbuild/protobuf";
import { DownstreamTlsContext, UpstreamTlsContext } from "../../tls/v3/tls_pb.js";

/**
 * Configuration for Downstream QUIC transport socket. This provides Google's implementation of Google QUIC and IETF QUIC to Envoy.
 *
 * @generated from message envoy.extensions.transport_sockets.quic.v3.QuicDownstreamTransport
 */
export const QuicDownstreamTransport = proto3.makeMessageType(
  "envoy.extensions.transport_sockets.quic.v3.QuicDownstreamTransport",
  () => [
    { no: 1, name: "downstream_tls_context", kind: "message", T: DownstreamTlsContext },
    { no: 2, name: "enable_early_data", kind: "message", T: BoolValue },
  ],
);

/**
 * Configuration for Upstream QUIC transport socket. This provides Google's implementation of Google QUIC and IETF QUIC to Envoy.
 *
 * @generated from message envoy.extensions.transport_sockets.quic.v3.QuicUpstreamTransport
 */
export const QuicUpstreamTransport = proto3.makeMessageType(
  "envoy.extensions.transport_sockets.quic.v3.QuicUpstreamTransport",
  () => [
    { no: 1, name: "upstream_tls_context", kind: "message", T: UpstreamTlsContext },
  ],
);
