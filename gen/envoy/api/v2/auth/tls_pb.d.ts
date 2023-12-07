// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/api/v2/auth/tls.proto (package envoy.api.v2.auth, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { CertificateValidationContext, TlsCertificate, TlsParameters, TlsSessionTicketKeys } from "./common_pb.js";
import type { SdsSecretConfig } from "./secret_pb.js";

/**
 * @generated from message envoy.api.v2.auth.UpstreamTlsContext
 */
export declare class UpstreamTlsContext extends Message<UpstreamTlsContext> {
  /**
   * Common TLS context settings.
   *
   * .. attention::
   *
   *   Server certificate verification is not enabled by default. Configure
   *   :ref:`trusted_ca<envoy_api_field_auth.CertificateValidationContext.trusted_ca>` to enable
   *   verification.
   *
   * @generated from field: envoy.api.v2.auth.CommonTlsContext common_tls_context = 1;
   */
  commonTlsContext?: CommonTlsContext;

  /**
   * SNI string to use when creating TLS backend connections.
   *
   * @generated from field: string sni = 2;
   */
  sni: string;

  /**
   * If true, server-initiated TLS renegotiation will be allowed.
   *
   * .. attention::
   *
   *   TLS renegotiation is considered insecure and shouldn't be used unless absolutely necessary.
   *
   * @generated from field: bool allow_renegotiation = 3;
   */
  allowRenegotiation: boolean;

  /**
   * Maximum number of session keys (Pre-Shared Keys for TLSv1.3+, Session IDs and Session Tickets
   * for TLSv1.2 and older) to store for the purpose of session resumption.
   *
   * Defaults to 1, setting this to 0 disables session resumption.
   *
   * @generated from field: google.protobuf.UInt32Value max_session_keys = 4;
   */
  maxSessionKeys?: number;

  constructor(data?: PartialMessage<UpstreamTlsContext>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.api.v2.auth.UpstreamTlsContext";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpstreamTlsContext;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpstreamTlsContext;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpstreamTlsContext;

  static equals(a: UpstreamTlsContext | PlainMessage<UpstreamTlsContext> | undefined, b: UpstreamTlsContext | PlainMessage<UpstreamTlsContext> | undefined): boolean;
}

/**
 * [#next-free-field: 8]
 *
 * @generated from message envoy.api.v2.auth.DownstreamTlsContext
 */
export declare class DownstreamTlsContext extends Message<DownstreamTlsContext> {
  /**
   * Common TLS context settings.
   *
   * @generated from field: envoy.api.v2.auth.CommonTlsContext common_tls_context = 1;
   */
  commonTlsContext?: CommonTlsContext;

  /**
   * If specified, Envoy will reject connections without a valid client
   * certificate.
   *
   * @generated from field: google.protobuf.BoolValue require_client_certificate = 2;
   */
  requireClientCertificate?: boolean;

  /**
   * If specified, Envoy will reject connections without a valid and matching SNI.
   * [#not-implemented-hide:]
   *
   * @generated from field: google.protobuf.BoolValue require_sni = 3;
   */
  requireSni?: boolean;

  /**
   * @generated from oneof envoy.api.v2.auth.DownstreamTlsContext.session_ticket_keys_type
   */
  sessionTicketKeysType: {
    /**
     * TLS session ticket key settings.
     *
     * @generated from field: envoy.api.v2.auth.TlsSessionTicketKeys session_ticket_keys = 4;
     */
    value: TlsSessionTicketKeys;
    case: "sessionTicketKeys";
  } | {
    /**
     * Config for fetching TLS session ticket keys via SDS API.
     *
     * @generated from field: envoy.api.v2.auth.SdsSecretConfig session_ticket_keys_sds_secret_config = 5;
     */
    value: SdsSecretConfig;
    case: "sessionTicketKeysSdsSecretConfig";
  } | {
    /**
     * Config for controlling stateless TLS session resumption: setting this to true will cause the TLS
     * server to not issue TLS session tickets for the purposes of stateless TLS session resumption.
     * If set to false, the TLS server will issue TLS session tickets and encrypt/decrypt them using
     * the keys specified through either :ref:`session_ticket_keys <envoy_api_field_auth.DownstreamTlsContext.session_ticket_keys>`
     * or :ref:`session_ticket_keys_sds_secret_config <envoy_api_field_auth.DownstreamTlsContext.session_ticket_keys_sds_secret_config>`.
     * If this config is set to false and no keys are explicitly configured, the TLS server will issue
     * TLS session tickets and encrypt/decrypt them using an internally-generated and managed key, with the
     * implication that sessions cannot be resumed across hot restarts or on different hosts.
     *
     * @generated from field: bool disable_stateless_session_resumption = 7;
     */
    value: boolean;
    case: "disableStatelessSessionResumption";
  } | { case: undefined; value?: undefined };

  /**
   * If specified, ``session_timeout`` will change the maximum lifetime (in seconds) of the TLS session.
   * Currently this value is used as a hint for the `TLS session ticket lifetime (for TLSv1.2) <https://tools.ietf.org/html/rfc5077#section-5.6>`_.
   * Only seconds can be specified (fractional seconds are ignored).
   *
   * @generated from field: google.protobuf.Duration session_timeout = 6;
   */
  sessionTimeout?: Duration;

  constructor(data?: PartialMessage<DownstreamTlsContext>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.api.v2.auth.DownstreamTlsContext";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownstreamTlsContext;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownstreamTlsContext;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownstreamTlsContext;

  static equals(a: DownstreamTlsContext | PlainMessage<DownstreamTlsContext> | undefined, b: DownstreamTlsContext | PlainMessage<DownstreamTlsContext> | undefined): boolean;
}

/**
 * TLS context shared by both client and server TLS contexts.
 * [#next-free-field: 9]
 *
 * @generated from message envoy.api.v2.auth.CommonTlsContext
 */
export declare class CommonTlsContext extends Message<CommonTlsContext> {
  /**
   * TLS protocol versions, cipher suites etc.
   *
   * @generated from field: envoy.api.v2.auth.TlsParameters tls_params = 1;
   */
  tlsParams?: TlsParameters;

  /**
   * :ref:`Multiple TLS certificates <arch_overview_ssl_cert_select>` can be associated with the
   * same context to allow both RSA and ECDSA certificates.
   *
   * Only a single TLS certificate is supported in client contexts. In server contexts, the first
   * RSA certificate is used for clients that only support RSA and the first ECDSA certificate is
   * used for clients that support ECDSA.
   *
   * @generated from field: repeated envoy.api.v2.auth.TlsCertificate tls_certificates = 2;
   */
  tlsCertificates: TlsCertificate[];

  /**
   * Configs for fetching TLS certificates via SDS API.
   *
   * @generated from field: repeated envoy.api.v2.auth.SdsSecretConfig tls_certificate_sds_secret_configs = 6;
   */
  tlsCertificateSdsSecretConfigs: SdsSecretConfig[];

  /**
   * @generated from oneof envoy.api.v2.auth.CommonTlsContext.validation_context_type
   */
  validationContextType: {
    /**
     * How to validate peer certificates.
     *
     * @generated from field: envoy.api.v2.auth.CertificateValidationContext validation_context = 3;
     */
    value: CertificateValidationContext;
    case: "validationContext";
  } | {
    /**
     * Config for fetching validation context via SDS API.
     *
     * @generated from field: envoy.api.v2.auth.SdsSecretConfig validation_context_sds_secret_config = 7;
     */
    value: SdsSecretConfig;
    case: "validationContextSdsSecretConfig";
  } | {
    /**
     * Combined certificate validation context holds a default CertificateValidationContext
     * and SDS config. When SDS server returns dynamic CertificateValidationContext, both dynamic
     * and default CertificateValidationContext are merged into a new CertificateValidationContext
     * for validation. This merge is done by Message::MergeFrom(), so dynamic
     * CertificateValidationContext overwrites singular fields in default
     * CertificateValidationContext, and concatenates repeated fields to default
     * CertificateValidationContext, and logical OR is applied to boolean fields.
     *
     * @generated from field: envoy.api.v2.auth.CommonTlsContext.CombinedCertificateValidationContext combined_validation_context = 8;
     */
    value: CommonTlsContext_CombinedCertificateValidationContext;
    case: "combinedValidationContext";
  } | { case: undefined; value?: undefined };

  /**
   * Supplies the list of ALPN protocols that the listener should expose. In
   * practice this is likely to be set to one of two values (see the
   * :ref:`codec_type
   * <envoy_api_field_config.filter.network.http_connection_manager.v2.HttpConnectionManager.codec_type>`
   * parameter in the HTTP connection manager for more information):
   *
   * * "h2,http/1.1" If the listener is going to support both HTTP/2 and HTTP/1.1.
   * * "http/1.1" If the listener is only going to support HTTP/1.1.
   *
   * There is no default for this parameter. If empty, Envoy will not expose ALPN.
   *
   * @generated from field: repeated string alpn_protocols = 4;
   */
  alpnProtocols: string[];

  constructor(data?: PartialMessage<CommonTlsContext>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.api.v2.auth.CommonTlsContext";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommonTlsContext;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommonTlsContext;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommonTlsContext;

  static equals(a: CommonTlsContext | PlainMessage<CommonTlsContext> | undefined, b: CommonTlsContext | PlainMessage<CommonTlsContext> | undefined): boolean;
}

/**
 * @generated from message envoy.api.v2.auth.CommonTlsContext.CombinedCertificateValidationContext
 */
export declare class CommonTlsContext_CombinedCertificateValidationContext extends Message<CommonTlsContext_CombinedCertificateValidationContext> {
  /**
   * How to validate peer certificates.
   *
   * @generated from field: envoy.api.v2.auth.CertificateValidationContext default_validation_context = 1;
   */
  defaultValidationContext?: CertificateValidationContext;

  /**
   * Config for fetching validation context via SDS API.
   *
   * @generated from field: envoy.api.v2.auth.SdsSecretConfig validation_context_sds_secret_config = 2;
   */
  validationContextSdsSecretConfig?: SdsSecretConfig;

  constructor(data?: PartialMessage<CommonTlsContext_CombinedCertificateValidationContext>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.api.v2.auth.CommonTlsContext.CombinedCertificateValidationContext";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommonTlsContext_CombinedCertificateValidationContext;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommonTlsContext_CombinedCertificateValidationContext;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommonTlsContext_CombinedCertificateValidationContext;

  static equals(a: CommonTlsContext_CombinedCertificateValidationContext | PlainMessage<CommonTlsContext_CombinedCertificateValidationContext> | undefined, b: CommonTlsContext_CombinedCertificateValidationContext | PlainMessage<CommonTlsContext_CombinedCertificateValidationContext> | undefined): boolean;
}

