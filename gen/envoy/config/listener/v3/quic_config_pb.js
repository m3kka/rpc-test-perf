// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/listener/v3/quic_config.proto (package envoy.config.listener.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3, UInt32Value } from "@bufbuild/protobuf";
import { QuicProtocolOptions as QuicProtocolOptions$1 } from "../../core/v3/protocol_pb.js";
import { RuntimeFeatureFlag } from "../../core/v3/base_pb.js";
import { TypedExtensionConfig } from "../../core/v3/extension_pb.js";

/**
 * Configuration specific to the UDP QUIC listener.
 * [#next-free-field: 10]
 *
 * @generated from message envoy.config.listener.v3.QuicProtocolOptions
 */
export const QuicProtocolOptions = proto3.makeMessageType(
  "envoy.config.listener.v3.QuicProtocolOptions",
  () => [
    { no: 1, name: "quic_protocol_options", kind: "message", T: QuicProtocolOptions$1 },
    { no: 2, name: "idle_timeout", kind: "message", T: Duration },
    { no: 3, name: "crypto_handshake_timeout", kind: "message", T: Duration },
    { no: 4, name: "enabled", kind: "message", T: RuntimeFeatureFlag },
    { no: 5, name: "packets_to_read_to_connection_count_ratio", kind: "message", T: UInt32Value },
    { no: 6, name: "crypto_stream_config", kind: "message", T: TypedExtensionConfig },
    { no: 7, name: "proof_source_config", kind: "message", T: TypedExtensionConfig },
    { no: 8, name: "connection_id_generator_config", kind: "message", T: TypedExtensionConfig },
    { no: 9, name: "server_preferred_address_config", kind: "message", T: TypedExtensionConfig },
  ],
);

