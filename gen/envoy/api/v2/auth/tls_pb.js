// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/api/v2/auth/tls.proto (package envoy.api.v2.auth, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BoolValue, Duration, proto3, UInt32Value } from "@bufbuild/protobuf";
import { CertificateValidationContext, TlsCertificate, TlsParameters, TlsSessionTicketKeys } from "./common_pb.js";
import { SdsSecretConfig } from "./secret_pb.js";

/**
 * @generated from message envoy.api.v2.auth.UpstreamTlsContext
 */
export const UpstreamTlsContext = proto3.makeMessageType(
  "envoy.api.v2.auth.UpstreamTlsContext",
  () => [
    { no: 1, name: "common_tls_context", kind: "message", T: CommonTlsContext },
    { no: 2, name: "sni", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "allow_renegotiation", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "max_session_keys", kind: "message", T: UInt32Value },
  ],
);

/**
 * [#next-free-field: 8]
 *
 * @generated from message envoy.api.v2.auth.DownstreamTlsContext
 */
export const DownstreamTlsContext = proto3.makeMessageType(
  "envoy.api.v2.auth.DownstreamTlsContext",
  () => [
    { no: 1, name: "common_tls_context", kind: "message", T: CommonTlsContext },
    { no: 2, name: "require_client_certificate", kind: "message", T: BoolValue },
    { no: 3, name: "require_sni", kind: "message", T: BoolValue },
    { no: 4, name: "session_ticket_keys", kind: "message", T: TlsSessionTicketKeys, oneof: "session_ticket_keys_type" },
    { no: 5, name: "session_ticket_keys_sds_secret_config", kind: "message", T: SdsSecretConfig, oneof: "session_ticket_keys_type" },
    { no: 7, name: "disable_stateless_session_resumption", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "session_ticket_keys_type" },
    { no: 6, name: "session_timeout", kind: "message", T: Duration },
  ],
);

/**
 * TLS context shared by both client and server TLS contexts.
 * [#next-free-field: 9]
 *
 * @generated from message envoy.api.v2.auth.CommonTlsContext
 */
export const CommonTlsContext = proto3.makeMessageType(
  "envoy.api.v2.auth.CommonTlsContext",
  () => [
    { no: 1, name: "tls_params", kind: "message", T: TlsParameters },
    { no: 2, name: "tls_certificates", kind: "message", T: TlsCertificate, repeated: true },
    { no: 6, name: "tls_certificate_sds_secret_configs", kind: "message", T: SdsSecretConfig, repeated: true },
    { no: 3, name: "validation_context", kind: "message", T: CertificateValidationContext, oneof: "validation_context_type" },
    { no: 7, name: "validation_context_sds_secret_config", kind: "message", T: SdsSecretConfig, oneof: "validation_context_type" },
    { no: 8, name: "combined_validation_context", kind: "message", T: CommonTlsContext_CombinedCertificateValidationContext, oneof: "validation_context_type" },
    { no: 4, name: "alpn_protocols", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message envoy.api.v2.auth.CommonTlsContext.CombinedCertificateValidationContext
 */
export const CommonTlsContext_CombinedCertificateValidationContext = proto3.makeMessageType(
  "envoy.api.v2.auth.CommonTlsContext.CombinedCertificateValidationContext",
  () => [
    { no: 1, name: "default_validation_context", kind: "message", T: CertificateValidationContext },
    { no: 2, name: "validation_context_sds_secret_config", kind: "message", T: SdsSecretConfig },
  ],
  {localName: "CommonTlsContext_CombinedCertificateValidationContext"},
);

