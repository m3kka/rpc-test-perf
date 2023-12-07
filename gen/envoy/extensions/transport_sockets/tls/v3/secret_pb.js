// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/transport_sockets/tls/v3/secret.proto (package envoy.extensions.transport_sockets.tls.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { DataSource } from "../../../../config/core/v3/base_pb.js";
import { ConfigSource } from "../../../../config/core/v3/config_source_pb.js";
import { CertificateValidationContext, TlsCertificate, TlsSessionTicketKeys } from "./common_pb.js";

/**
 * @generated from message envoy.extensions.transport_sockets.tls.v3.GenericSecret
 */
export const GenericSecret = proto3.makeMessageType(
  "envoy.extensions.transport_sockets.tls.v3.GenericSecret",
  () => [
    { no: 1, name: "secret", kind: "message", T: DataSource },
  ],
);

/**
 * @generated from message envoy.extensions.transport_sockets.tls.v3.SdsSecretConfig
 */
export const SdsSecretConfig = proto3.makeMessageType(
  "envoy.extensions.transport_sockets.tls.v3.SdsSecretConfig",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "sds_config", kind: "message", T: ConfigSource },
  ],
);

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.transport_sockets.tls.v3.Secret
 */
export const Secret = proto3.makeMessageType(
  "envoy.extensions.transport_sockets.tls.v3.Secret",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "tls_certificate", kind: "message", T: TlsCertificate, oneof: "type" },
    { no: 3, name: "session_ticket_keys", kind: "message", T: TlsSessionTicketKeys, oneof: "type" },
    { no: 4, name: "validation_context", kind: "message", T: CertificateValidationContext, oneof: "type" },
    { no: 5, name: "generic_secret", kind: "message", T: GenericSecret, oneof: "type" },
  ],
);
