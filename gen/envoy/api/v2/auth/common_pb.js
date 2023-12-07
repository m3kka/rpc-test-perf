// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/api/v2/auth/common.proto (package envoy.api.v2.auth, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, BoolValue, proto3, Struct } from "@bufbuild/protobuf";
import { DataSource } from "../core/base_pb.js";
import { StringMatcher } from "../../../type/matcher/string_pb.js";

/**
 * @generated from message envoy.api.v2.auth.TlsParameters
 */
export const TlsParameters = proto3.makeMessageType(
  "envoy.api.v2.auth.TlsParameters",
  () => [
    { no: 1, name: "tls_minimum_protocol_version", kind: "enum", T: proto3.getEnumType(TlsParameters_TlsProtocol) },
    { no: 2, name: "tls_maximum_protocol_version", kind: "enum", T: proto3.getEnumType(TlsParameters_TlsProtocol) },
    { no: 3, name: "cipher_suites", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "ecdh_curves", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from enum envoy.api.v2.auth.TlsParameters.TlsProtocol
 */
export const TlsParameters_TlsProtocol = proto3.makeEnum(
  "envoy.api.v2.auth.TlsParameters.TlsProtocol",
  [
    {no: 0, name: "TLS_AUTO"},
    {no: 1, name: "TLSv1_0"},
    {no: 2, name: "TLSv1_1"},
    {no: 3, name: "TLSv1_2"},
    {no: 4, name: "TLSv1_3"},
  ],
);

/**
 * BoringSSL private key method configuration. The private key methods are used for external
 * (potentially asynchronous) signing and decryption operations. Some use cases for private key
 * methods would be TPM support and TLS acceleration.
 *
 * @generated from message envoy.api.v2.auth.PrivateKeyProvider
 */
export const PrivateKeyProvider = proto3.makeMessageType(
  "envoy.api.v2.auth.PrivateKeyProvider",
  () => [
    { no: 1, name: "provider_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "config", kind: "message", T: Struct, oneof: "config_type" },
    { no: 3, name: "typed_config", kind: "message", T: Any, oneof: "config_type" },
  ],
);

/**
 * [#next-free-field: 7]
 *
 * @generated from message envoy.api.v2.auth.TlsCertificate
 */
export const TlsCertificate = proto3.makeMessageType(
  "envoy.api.v2.auth.TlsCertificate",
  () => [
    { no: 1, name: "certificate_chain", kind: "message", T: DataSource },
    { no: 2, name: "private_key", kind: "message", T: DataSource },
    { no: 6, name: "private_key_provider", kind: "message", T: PrivateKeyProvider },
    { no: 3, name: "password", kind: "message", T: DataSource },
    { no: 4, name: "ocsp_staple", kind: "message", T: DataSource },
    { no: 5, name: "signed_certificate_timestamp", kind: "message", T: DataSource, repeated: true },
  ],
);

/**
 * @generated from message envoy.api.v2.auth.TlsSessionTicketKeys
 */
export const TlsSessionTicketKeys = proto3.makeMessageType(
  "envoy.api.v2.auth.TlsSessionTicketKeys",
  () => [
    { no: 1, name: "keys", kind: "message", T: DataSource, repeated: true },
  ],
);

/**
 * [#next-free-field: 11]
 *
 * @generated from message envoy.api.v2.auth.CertificateValidationContext
 */
export const CertificateValidationContext = proto3.makeMessageType(
  "envoy.api.v2.auth.CertificateValidationContext",
  () => [
    { no: 1, name: "trusted_ca", kind: "message", T: DataSource },
    { no: 3, name: "verify_certificate_spki", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "verify_certificate_hash", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "verify_subject_alt_name", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "match_subject_alt_names", kind: "message", T: StringMatcher, repeated: true },
    { no: 5, name: "require_ocsp_staple", kind: "message", T: BoolValue },
    { no: 6, name: "require_signed_certificate_timestamp", kind: "message", T: BoolValue },
    { no: 7, name: "crl", kind: "message", T: DataSource },
    { no: 8, name: "allow_expired_certificate", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "trust_chain_verification", kind: "enum", T: proto3.getEnumType(CertificateValidationContext_TrustChainVerification) },
  ],
);

/**
 * Peer certificate verification mode.
 *
 * @generated from enum envoy.api.v2.auth.CertificateValidationContext.TrustChainVerification
 */
export const CertificateValidationContext_TrustChainVerification = proto3.makeEnum(
  "envoy.api.v2.auth.CertificateValidationContext.TrustChainVerification",
  [
    {no: 0, name: "VERIFY_TRUST_CHAIN"},
    {no: 1, name: "ACCEPT_UNTRUSTED"},
  ],
);
