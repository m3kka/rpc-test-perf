// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/transport_sockets/tls/v3/common.proto (package envoy.extensions.transport_sockets.tls.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Any, BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { DataSource, WatchedDirectory } from "../../../../config/core/v3/base_pb.js";
import type { StringMatcher } from "../../../../type/matcher/v3/string_pb.js";
import type { TypedExtensionConfig } from "../../../../config/core/v3/extension_pb.js";

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.extensions.transport_sockets.tls.v3.TlsParameters
 */
export declare class TlsParameters extends Message<TlsParameters> {
  /**
   * Minimum TLS protocol version. By default, it's ``TLSv1_2`` for both clients and servers.
   *
   * TLS protocol versions below TLSv1_2 require setting compatible ciphers with the
   * ``cipher_suites`` setting as the default ciphers no longer include compatible ciphers.
   *
   * .. attention::
   *
   *   Using TLS protocol versions below TLSv1_2 has serious security considerations and risks.
   *
   * @generated from field: envoy.extensions.transport_sockets.tls.v3.TlsParameters.TlsProtocol tls_minimum_protocol_version = 1;
   */
  tlsMinimumProtocolVersion: TlsParameters_TlsProtocol;

  /**
   * Maximum TLS protocol version. By default, it's ``TLSv1_2`` for clients and ``TLSv1_3`` for
   * servers.
   *
   * @generated from field: envoy.extensions.transport_sockets.tls.v3.TlsParameters.TlsProtocol tls_maximum_protocol_version = 2;
   */
  tlsMaximumProtocolVersion: TlsParameters_TlsProtocol;

  /**
   * If specified, the TLS listener will only support the specified `cipher list
   * <https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration>`_
   * when negotiating TLS 1.0-1.2 (this setting has no effect when negotiating TLS 1.3).
   *
   * If not specified, a default list will be used. Defaults are different for server (downstream) and
   * client (upstream) TLS configurations.
   * Defaults will change over time in response to security considerations; If you care, configure
   * it instead of using the default.
   *
   * In non-FIPS builds, the default server cipher list is:
   *
   * .. code-block:: none
   *
   *   [ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305]
   *   [ECDHE-RSA-AES128-GCM-SHA256|ECDHE-RSA-CHACHA20-POLY1305]
   *   ECDHE-ECDSA-AES256-GCM-SHA384
   *   ECDHE-RSA-AES256-GCM-SHA384
   *
   * In builds using :ref:`BoringSSL FIPS <arch_overview_ssl_fips>`, the default server cipher list is:
   *
   * .. code-block:: none
   *
   *   ECDHE-ECDSA-AES128-GCM-SHA256
   *   ECDHE-RSA-AES128-GCM-SHA256
   *   ECDHE-ECDSA-AES256-GCM-SHA384
   *   ECDHE-RSA-AES256-GCM-SHA384
   *
   * In non-FIPS builds, the default client cipher list is:
   *
   * .. code-block:: none
   *
   *   [ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305]
   *   [ECDHE-RSA-AES128-GCM-SHA256|ECDHE-RSA-CHACHA20-POLY1305]
   *   ECDHE-ECDSA-AES256-GCM-SHA384
   *   ECDHE-RSA-AES256-GCM-SHA384
   *
   * In builds using :ref:`BoringSSL FIPS <arch_overview_ssl_fips>`, the default client cipher list is:
   *
   * .. code-block:: none
   *
   *   ECDHE-ECDSA-AES128-GCM-SHA256
   *   ECDHE-RSA-AES128-GCM-SHA256
   *   ECDHE-ECDSA-AES256-GCM-SHA384
   *   ECDHE-RSA-AES256-GCM-SHA384
   *
   * @generated from field: repeated string cipher_suites = 3;
   */
  cipherSuites: string[];

  /**
   * If specified, the TLS connection will only support the specified ECDH
   * curves. If not specified, the default curves will be used.
   *
   * In non-FIPS builds, the default curves are:
   *
   * .. code-block:: none
   *
   *   X25519
   *   P-256
   *
   * In builds using :ref:`BoringSSL FIPS <arch_overview_ssl_fips>`, the default curve is:
   *
   * .. code-block:: none
   *
   *   P-256
   *
   * @generated from field: repeated string ecdh_curves = 4;
   */
  ecdhCurves: string[];

  /**
   * If specified, the TLS connection will only support the specified signature algorithms.
   * The list is ordered by preference.
   * If not specified, the default signature algorithms defined by BoringSSL will be used.
   *
   * Default signature algorithms selected by BoringSSL (may be out of date):
   *
   * .. code-block:: none
   *
   *   ecdsa_secp256r1_sha256
   *   rsa_pss_rsae_sha256
   *   rsa_pkcs1_sha256
   *   ecdsa_secp384r1_sha384
   *   rsa_pss_rsae_sha384
   *   rsa_pkcs1_sha384
   *   rsa_pss_rsae_sha512
   *   rsa_pkcs1_sha512
   *   rsa_pkcs1_sha1
   *
   * Signature algorithms supported by BoringSSL (may be out of date):
   *
   * .. code-block:: none
   *
   *   rsa_pkcs1_sha256
   *   rsa_pkcs1_sha384
   *   rsa_pkcs1_sha512
   *   ecdsa_secp256r1_sha256
   *   ecdsa_secp384r1_sha384
   *   ecdsa_secp521r1_sha512
   *   rsa_pss_rsae_sha256
   *   rsa_pss_rsae_sha384
   *   rsa_pss_rsae_sha512
   *   ed25519
   *   rsa_pkcs1_sha1
   *   ecdsa_sha1
   *
   * @generated from field: repeated string signature_algorithms = 5;
   */
  signatureAlgorithms: string[];

  constructor(data?: PartialMessage<TlsParameters>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.transport_sockets.tls.v3.TlsParameters";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TlsParameters;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TlsParameters;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TlsParameters;

  static equals(a: TlsParameters | PlainMessage<TlsParameters> | undefined, b: TlsParameters | PlainMessage<TlsParameters> | undefined): boolean;
}

/**
 * @generated from enum envoy.extensions.transport_sockets.tls.v3.TlsParameters.TlsProtocol
 */
export declare enum TlsParameters_TlsProtocol {
  /**
   * Envoy will choose the optimal TLS version.
   *
   * @generated from enum value: TLS_AUTO = 0;
   */
  TLS_AUTO = 0,

  /**
   * TLS 1.0
   *
   * @generated from enum value: TLSv1_0 = 1;
   */
  TLSv1_0 = 1,

  /**
   * TLS 1.1
   *
   * @generated from enum value: TLSv1_1 = 2;
   */
  TLSv1_1 = 2,

  /**
   * TLS 1.2
   *
   * @generated from enum value: TLSv1_2 = 3;
   */
  TLSv1_2 = 3,

  /**
   * TLS 1.3
   *
   * @generated from enum value: TLSv1_3 = 4;
   */
  TLSv1_3 = 4,
}

/**
 * BoringSSL private key method configuration. The private key methods are used for external
 * (potentially asynchronous) signing and decryption operations. Some use cases for private key
 * methods would be TPM support and TLS acceleration.
 *
 * @generated from message envoy.extensions.transport_sockets.tls.v3.PrivateKeyProvider
 */
export declare class PrivateKeyProvider extends Message<PrivateKeyProvider> {
  /**
   * Private key method provider name. The name must match a
   * supported private key method provider type.
   *
   * @generated from field: string provider_name = 1;
   */
  providerName: string;

  /**
   * Private key method provider specific configuration.
   *
   * @generated from oneof envoy.extensions.transport_sockets.tls.v3.PrivateKeyProvider.config_type
   */
  configType: {
    /**
     * @generated from field: google.protobuf.Any typed_config = 3;
     */
    value: Any;
    case: "typedConfig";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<PrivateKeyProvider>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.transport_sockets.tls.v3.PrivateKeyProvider";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrivateKeyProvider;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrivateKeyProvider;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrivateKeyProvider;

  static equals(a: PrivateKeyProvider | PlainMessage<PrivateKeyProvider> | undefined, b: PrivateKeyProvider | PlainMessage<PrivateKeyProvider> | undefined): boolean;
}

/**
 * [#not-implemented-hide:]
 * Provides a list of private key providers. Envoy will find out an available private
 * key provider from the list on order. If there is none of available private key provider,
 * it may fallback to BoringSSL default implementation based on the `fallback` fallback.
 *
 * @generated from message envoy.extensions.transport_sockets.tls.v3.PrivateKeyProviderList
 */
export declare class PrivateKeyProviderList extends Message<PrivateKeyProviderList> {
  /**
   * A list of private key providers, and at least one private key provider provided.
   *
   * @generated from field: repeated envoy.extensions.transport_sockets.tls.v3.PrivateKeyProvider private_key_provider = 1;
   */
  privateKeyProvider: PrivateKeyProvider[];

  /**
   * If there is no available private key provider from the list, Envoy will fallback to
   * the BoringSSL default implementation when the `fallback` is true. The default value
   * is `false`.
   *
   * @generated from field: bool fallback = 2;
   */
  fallback: boolean;

  constructor(data?: PartialMessage<PrivateKeyProviderList>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.transport_sockets.tls.v3.PrivateKeyProviderList";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrivateKeyProviderList;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrivateKeyProviderList;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrivateKeyProviderList;

  static equals(a: PrivateKeyProviderList | PlainMessage<PrivateKeyProviderList> | undefined, b: PrivateKeyProviderList | PlainMessage<PrivateKeyProviderList> | undefined): boolean;
}

/**
 * [#next-free-field: 10]
 *
 * @generated from message envoy.extensions.transport_sockets.tls.v3.TlsCertificate
 */
export declare class TlsCertificate extends Message<TlsCertificate> {
  /**
   * The TLS certificate chain.
   *
   * If ``certificate_chain`` is a filesystem path, a watch will be added to the
   * parent directory for any file moves to support rotation. This currently
   * only applies to dynamic secrets, when the ``TlsCertificate`` is delivered via
   * SDS.
   *
   * @generated from field: envoy.config.core.v3.DataSource certificate_chain = 1;
   */
  certificateChain?: DataSource;

  /**
   * The TLS private key.
   *
   * If ``private_key`` is a filesystem path, a watch will be added to the parent
   * directory for any file moves to support rotation. This currently only
   * applies to dynamic secrets, when the ``TlsCertificate`` is delivered via SDS.
   *
   * @generated from field: envoy.config.core.v3.DataSource private_key = 2;
   */
  privateKey?: DataSource;

  /**
   * ``Pkcs12`` data containing TLS certificate, chain, and private key.
   *
   * If ``pkcs12`` is a filesystem path, the file will be read, but no watch will
   * be added to the parent directory, since ``pkcs12`` isn't used by SDS.
   * This field is mutually exclusive with ``certificate_chain``, ``private_key`` and ``private_key_provider``.
   * This can't be marked as ``oneof`` due to API compatibility reasons. Setting
   * both :ref:`private_key <envoy_v3_api_field_extensions.transport_sockets.tls.v3.TlsCertificate.private_key>`,
   * :ref:`certificate_chain <envoy_v3_api_field_extensions.transport_sockets.tls.v3.TlsCertificate.certificate_chain>`,
   * or :ref:`private_key_provider <envoy_v3_api_field_extensions.transport_sockets.tls.v3.TlsCertificate.private_key_provider>`
   * and :ref:`pkcs12 <envoy_v3_api_field_extensions.transport_sockets.tls.v3.TlsCertificate.pkcs12>`
   * fields will result in an error. Use :ref:`password
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.TlsCertificate.password>`
   * to specify the password to unprotect the ``PKCS12`` data, if necessary.
   *
   * @generated from field: envoy.config.core.v3.DataSource pkcs12 = 8;
   */
  pkcs12?: DataSource;

  /**
   * If specified, updates of file-based ``certificate_chain`` and ``private_key``
   * sources will be triggered by this watch. The certificate/key pair will be
   * read together and validated for atomic read consistency (i.e. no
   * intervening modification occurred between cert/key read, verified by file
   * hash comparisons). This allows explicit control over the path watched, by
   * default the parent directories of the filesystem paths in
   * ``certificate_chain`` and ``private_key`` are watched if this field is not
   * specified. This only applies when a ``TlsCertificate`` is delivered by SDS
   * with references to filesystem paths. See the :ref:`SDS key rotation
   * <sds_key_rotation>` documentation for further details.
   *
   * @generated from field: envoy.config.core.v3.WatchedDirectory watched_directory = 7;
   */
  watchedDirectory?: WatchedDirectory;

  /**
   * BoringSSL private key method provider. This is an alternative to :ref:`private_key
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.TlsCertificate.private_key>` field. This can't be
   * marked as ``oneof`` due to API compatibility reasons. Setting both :ref:`private_key
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.TlsCertificate.private_key>` and
   * :ref:`private_key_provider
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.TlsCertificate.private_key_provider>` fields will result in an
   * error.
   *
   * @generated from field: envoy.extensions.transport_sockets.tls.v3.PrivateKeyProvider private_key_provider = 6;
   */
  privateKeyProvider?: PrivateKeyProvider;

  /**
   * [#not-implemented-hide:]
   * This provides a list of BoringSSL private key method provider. Envoy will find out
   * an available private key method provider. It may fallback to BoringSSL default implementation
   * when there is no available one. All the private key provider will share the same private key
   * in the :ref:`private_key <envoy_v3_api_field_extensions.transport_sockets.tls.v3.TlsCertificate.private_key>` field,
   * so the :ref:`private_key <envoy_v3_api_field_extensions.transport_sockets.tls.v3.TlsCertificate.private_key>` field
   * must be specified when the `proviate_key_provider_list` field is used. The old :ref:`private_key_provider
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.TlsCertificate.private_key_provider>` field will be
   * deprecated. If both :ref:`private_key_provider <envoy_v3_api_field_extensions.transport_sockets.tls.v3.TlsCertificate.private_key_provider>`
   * and `private_key_provider_list` are provided, the old
   * :ref:`private_key_provider <envoy_v3_api_field_extensions.transport_sockets.tls.v3.TlsCertificate.private_key_provider>` will be ignored.
   *
   * @generated from field: envoy.extensions.transport_sockets.tls.v3.PrivateKeyProviderList private_key_provider_list = 9;
   */
  privateKeyProviderList?: PrivateKeyProviderList;

  /**
   * The password to decrypt the TLS private key. If this field is not set, it is assumed that the
   * TLS private key is not password encrypted.
   *
   * @generated from field: envoy.config.core.v3.DataSource password = 3;
   */
  password?: DataSource;

  /**
   * The OCSP response to be stapled with this certificate during the handshake.
   * The response must be DER-encoded and may only be  provided via ``filename`` or
   * ``inline_bytes``. The response may pertain to only one certificate.
   *
   * @generated from field: envoy.config.core.v3.DataSource ocsp_staple = 4;
   */
  ocspStaple?: DataSource;

  /**
   * [#not-implemented-hide:]
   *
   * @generated from field: repeated envoy.config.core.v3.DataSource signed_certificate_timestamp = 5;
   */
  signedCertificateTimestamp: DataSource[];

  constructor(data?: PartialMessage<TlsCertificate>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.transport_sockets.tls.v3.TlsCertificate";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TlsCertificate;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TlsCertificate;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TlsCertificate;

  static equals(a: TlsCertificate | PlainMessage<TlsCertificate> | undefined, b: TlsCertificate | PlainMessage<TlsCertificate> | undefined): boolean;
}

/**
 * @generated from message envoy.extensions.transport_sockets.tls.v3.TlsSessionTicketKeys
 */
export declare class TlsSessionTicketKeys extends Message<TlsSessionTicketKeys> {
  /**
   * Keys for encrypting and decrypting TLS session tickets. The
   * first key in the array contains the key to encrypt all new sessions created by this context.
   * All keys are candidates for decrypting received tickets. This allows for easy rotation of keys
   * by, for example, putting the new key first, and the previous key second.
   *
   * If :ref:`session_ticket_keys <envoy_v3_api_field_extensions.transport_sockets.tls.v3.DownstreamTlsContext.session_ticket_keys>`
   * is not specified, the TLS library will still support resuming sessions via tickets, but it will
   * use an internally-generated and managed key, so sessions cannot be resumed across hot restarts
   * or on different hosts.
   *
   * Each key must contain exactly 80 bytes of cryptographically-secure random data. For
   * example, the output of ``openssl rand 80``.
   *
   * .. attention::
   *
   *   Using this feature has serious security considerations and risks. Improper handling of keys
   *   may result in loss of secrecy in connections, even if ciphers supporting perfect forward
   *   secrecy are used. See https://www.imperialviolet.org/2013/06/27/botchingpfs.html for some
   *   discussion. To minimize the risk, you must:
   *
   *   * Keep the session ticket keys at least as secure as your TLS certificate private keys
   *   * Rotate session ticket keys at least daily, and preferably hourly
   *   * Always generate keys using a cryptographically-secure random data source
   *
   * @generated from field: repeated envoy.config.core.v3.DataSource keys = 1;
   */
  keys: DataSource[];

  constructor(data?: PartialMessage<TlsSessionTicketKeys>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.transport_sockets.tls.v3.TlsSessionTicketKeys";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TlsSessionTicketKeys;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TlsSessionTicketKeys;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TlsSessionTicketKeys;

  static equals(a: TlsSessionTicketKeys | PlainMessage<TlsSessionTicketKeys> | undefined, b: TlsSessionTicketKeys | PlainMessage<TlsSessionTicketKeys> | undefined): boolean;
}

/**
 * Indicates a certificate to be obtained from a named CertificateProvider plugin instance.
 * The plugin instances are defined in the client's bootstrap file.
 * The plugin allows certificates to be fetched/refreshed over the network asynchronously with
 * respect to the TLS handshake.
 * [#not-implemented-hide:]
 *
 * @generated from message envoy.extensions.transport_sockets.tls.v3.CertificateProviderPluginInstance
 */
export declare class CertificateProviderPluginInstance extends Message<CertificateProviderPluginInstance> {
  /**
   * Provider instance name. If not present, defaults to "default".
   *
   * Instance names should generally be defined not in terms of the underlying provider
   * implementation (e.g., "file_watcher") but rather in terms of the function of the
   * certificates (e.g., "foo_deployment_identity").
   *
   * @generated from field: string instance_name = 1;
   */
  instanceName: string;

  /**
   * Opaque name used to specify certificate instances or types. For example, "ROOTCA" to specify
   * a root-certificate (validation context) or "example.com" to specify a certificate for a
   * particular domain. Not all provider instances will actually use this field, so the value
   * defaults to the empty string.
   *
   * @generated from field: string certificate_name = 2;
   */
  certificateName: string;

  constructor(data?: PartialMessage<CertificateProviderPluginInstance>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.transport_sockets.tls.v3.CertificateProviderPluginInstance";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CertificateProviderPluginInstance;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CertificateProviderPluginInstance;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CertificateProviderPluginInstance;

  static equals(a: CertificateProviderPluginInstance | PlainMessage<CertificateProviderPluginInstance> | undefined, b: CertificateProviderPluginInstance | PlainMessage<CertificateProviderPluginInstance> | undefined): boolean;
}

/**
 * Matcher for subject alternative names, to match both type and value of the SAN.
 *
 * @generated from message envoy.extensions.transport_sockets.tls.v3.SubjectAltNameMatcher
 */
export declare class SubjectAltNameMatcher extends Message<SubjectAltNameMatcher> {
  /**
   * Specification of type of SAN. Note that the default enum value is an invalid choice.
   *
   * @generated from field: envoy.extensions.transport_sockets.tls.v3.SubjectAltNameMatcher.SanType san_type = 1;
   */
  sanType: SubjectAltNameMatcher_SanType;

  /**
   * Matcher for SAN value.
   *
   * @generated from field: envoy.type.matcher.v3.StringMatcher matcher = 2;
   */
  matcher?: StringMatcher;

  constructor(data?: PartialMessage<SubjectAltNameMatcher>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.transport_sockets.tls.v3.SubjectAltNameMatcher";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubjectAltNameMatcher;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubjectAltNameMatcher;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubjectAltNameMatcher;

  static equals(a: SubjectAltNameMatcher | PlainMessage<SubjectAltNameMatcher> | undefined, b: SubjectAltNameMatcher | PlainMessage<SubjectAltNameMatcher> | undefined): boolean;
}

/**
 * Indicates the choice of GeneralName as defined in section 4.2.1.5 of RFC 5280 to match
 * against.
 *
 * @generated from enum envoy.extensions.transport_sockets.tls.v3.SubjectAltNameMatcher.SanType
 */
export declare enum SubjectAltNameMatcher_SanType {
  /**
   * @generated from enum value: SAN_TYPE_UNSPECIFIED = 0;
   */
  SAN_TYPE_UNSPECIFIED = 0,

  /**
   * @generated from enum value: EMAIL = 1;
   */
  EMAIL = 1,

  /**
   * @generated from enum value: DNS = 2;
   */
  DNS = 2,

  /**
   * @generated from enum value: URI = 3;
   */
  URI = 3,

  /**
   * @generated from enum value: IP_ADDRESS = 4;
   */
  IP_ADDRESS = 4,
}

/**
 * [#next-free-field: 17]
 *
 * @generated from message envoy.extensions.transport_sockets.tls.v3.CertificateValidationContext
 */
export declare class CertificateValidationContext extends Message<CertificateValidationContext> {
  /**
   * TLS certificate data containing certificate authority certificates to use in verifying
   * a presented peer certificate (e.g. server certificate for clusters or client certificate
   * for listeners). If not specified and a peer certificate is presented it will not be
   * verified. By default, a client certificate is optional, unless one of the additional
   * options (:ref:`require_client_certificate
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.DownstreamTlsContext.require_client_certificate>`,
   * :ref:`verify_certificate_spki
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.verify_certificate_spki>`,
   * :ref:`verify_certificate_hash
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.verify_certificate_hash>`, or
   * :ref:`match_typed_subject_alt_names
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.match_typed_subject_alt_names>`) is also
   * specified.
   *
   * It can optionally contain certificate revocation lists, in which case Envoy will verify
   * that the presented peer certificate has not been revoked by one of the included CRLs. Note
   * that if a CRL is provided for any certificate authority in a trust chain, a CRL must be
   * provided for all certificate authorities in that chain. Failure to do so will result in
   * verification failure for both revoked and unrevoked certificates from that chain.
   * The behavior of requiring all certificates to contain CRLs can be altered by
   * setting :ref:`only_verify_leaf_cert_crl <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.only_verify_leaf_cert_crl>`
   * true. If set to true, only the final certificate in the chain undergoes CRL verification.
   *
   * See :ref:`the TLS overview <arch_overview_ssl_enabling_verification>` for a list of common
   * system CA locations.
   *
   * If ``trusted_ca`` is a filesystem path, a watch will be added to the parent
   * directory for any file moves to support rotation. This currently only
   * applies to dynamic secrets, when the ``CertificateValidationContext`` is
   * delivered via SDS.
   *
   * X509_V_FLAG_PARTIAL_CHAIN is set by default, so non-root/intermediate ca certificate in ``trusted_ca``
   * can be treated as trust anchor as well. It allows verification with building valid partial chain instead
   * of a full chain.
   *
   * Only one of ``trusted_ca`` and ``ca_certificate_provider_instance`` may be specified.
   *
   * [#next-major-version: This field and watched_directory below should ideally be moved into a
   * separate sub-message, since there's no point in specifying the latter field without this one.]
   *
   * @generated from field: envoy.config.core.v3.DataSource trusted_ca = 1;
   */
  trustedCa?: DataSource;

  /**
   * Certificate provider instance for fetching TLS certificates.
   *
   * Only one of ``trusted_ca`` and ``ca_certificate_provider_instance`` may be specified.
   * [#not-implemented-hide:]
   *
   * @generated from field: envoy.extensions.transport_sockets.tls.v3.CertificateProviderPluginInstance ca_certificate_provider_instance = 13;
   */
  caCertificateProviderInstance?: CertificateProviderPluginInstance;

  /**
   * If specified, updates of a file-based ``trusted_ca`` source will be triggered
   * by this watch. This allows explicit control over the path watched, by
   * default the parent directory of the filesystem path in ``trusted_ca`` is
   * watched if this field is not specified. This only applies when a
   * ``CertificateValidationContext`` is delivered by SDS with references to
   * filesystem paths. See the :ref:`SDS key rotation <sds_key_rotation>`
   * documentation for further details.
   *
   * @generated from field: envoy.config.core.v3.WatchedDirectory watched_directory = 11;
   */
  watchedDirectory?: WatchedDirectory;

  /**
   * An optional list of base64-encoded SHA-256 hashes. If specified, Envoy will verify that the
   * SHA-256 of the DER-encoded Subject Public Key Information (SPKI) of the presented certificate
   * matches one of the specified values.
   *
   * A base64-encoded SHA-256 of the Subject Public Key Information (SPKI) of the certificate
   * can be generated with the following command:
   *
   * .. code-block:: bash
   *
   *   $ openssl x509 -in path/to/client.crt -noout -pubkey
   *     | openssl pkey -pubin -outform DER
   *     | openssl dgst -sha256 -binary
   *     | openssl enc -base64
   *   NvqYIYSbgK2vCJpQhObf77vv+bQWtc5ek5RIOwPiC9A=
   *
   * This is the format used in HTTP Public Key Pinning.
   *
   * When both:
   * :ref:`verify_certificate_hash
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.verify_certificate_hash>` and
   * :ref:`verify_certificate_spki
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.verify_certificate_spki>` are specified,
   * a hash matching value from either of the lists will result in the certificate being accepted.
   *
   * .. attention::
   *
   *   This option is preferred over :ref:`verify_certificate_hash
   *   <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.verify_certificate_hash>`,
   *   because SPKI is tied to a private key, so it doesn't change when the certificate
   *   is renewed using the same private key.
   *
   * @generated from field: repeated string verify_certificate_spki = 3;
   */
  verifyCertificateSpki: string[];

  /**
   * An optional list of hex-encoded SHA-256 hashes. If specified, Envoy will verify that
   * the SHA-256 of the DER-encoded presented certificate matches one of the specified values.
   *
   * A hex-encoded SHA-256 of the certificate can be generated with the following command:
   *
   * .. code-block:: bash
   *
   *   $ openssl x509 -in path/to/client.crt -outform DER | openssl dgst -sha256 | cut -d" " -f2
   *   df6ff72fe9116521268f6f2dd4966f51df479883fe7037b39f75916ac3049d1a
   *
   * A long hex-encoded and colon-separated SHA-256 (a.k.a. "fingerprint") of the certificate
   * can be generated with the following command:
   *
   * .. code-block:: bash
   *
   *   $ openssl x509 -in path/to/client.crt -noout -fingerprint -sha256 | cut -d"=" -f2
   *   DF:6F:F7:2F:E9:11:65:21:26:8F:6F:2D:D4:96:6F:51:DF:47:98:83:FE:70:37:B3:9F:75:91:6A:C3:04:9D:1A
   *
   * Both of those formats are acceptable.
   *
   * When both:
   * :ref:`verify_certificate_hash
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.verify_certificate_hash>` and
   * :ref:`verify_certificate_spki
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.verify_certificate_spki>` are specified,
   * a hash matching value from either of the lists will result in the certificate being accepted.
   *
   * @generated from field: repeated string verify_certificate_hash = 2;
   */
  verifyCertificateHash: string[];

  /**
   * An optional list of Subject Alternative name matchers. If specified, Envoy will verify that the
   * Subject Alternative Name of the presented certificate matches one of the specified matchers.
   * The matching uses "any" semantics, that is to say, the SAN is verified if at least one matcher is
   * matched.
   *
   * When a certificate has wildcard DNS SAN entries, to match a specific client, it should be
   * configured with exact match type in the :ref:`string matcher <envoy_v3_api_msg_type.matcher.v3.StringMatcher>`.
   * For example if the certificate has "\*.example.com" as DNS SAN entry, to allow only "api.example.com",
   * it should be configured as shown below.
   *
   * .. code-block:: yaml
   *
   *  match_typed_subject_alt_names:
   *  - san_type: DNS
   *    matcher:
   *      exact: "api.example.com"
   *
   * .. attention::
   *
   *   Subject Alternative Names are easily spoofable and verifying only them is insecure,
   *   therefore this option must be used together with :ref:`trusted_ca
   *   <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.trusted_ca>`.
   *
   * @generated from field: repeated envoy.extensions.transport_sockets.tls.v3.SubjectAltNameMatcher match_typed_subject_alt_names = 15;
   */
  matchTypedSubjectAltNames: SubjectAltNameMatcher[];

  /**
   * This field is deprecated in favor of
   * :ref:`match_typed_subject_alt_names
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.match_typed_subject_alt_names>`.
   * Note that if both this field and :ref:`match_typed_subject_alt_names
   * <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.match_typed_subject_alt_names>`
   * are specified, the former (deprecated field) is ignored.
   *
   * @generated from field: repeated envoy.type.matcher.v3.StringMatcher match_subject_alt_names = 9 [deprecated = true];
   * @deprecated
   */
  matchSubjectAltNames: StringMatcher[];

  /**
   * [#not-implemented-hide:] Must present signed certificate time-stamp.
   *
   * @generated from field: google.protobuf.BoolValue require_signed_certificate_timestamp = 6;
   */
  requireSignedCertificateTimestamp?: boolean;

  /**
   * An optional `certificate revocation list
   * <https://en.wikipedia.org/wiki/Certificate_revocation_list>`_
   * (in PEM format). If specified, Envoy will verify that the presented peer
   * certificate has not been revoked by this CRL. If this DataSource contains
   * multiple CRLs, all of them will be used. Note that if a CRL is provided
   * for any certificate authority in a trust chain, a CRL must be provided
   * for all certificate authorities in that chain. Failure to do so will
   * result in verification failure for both revoked and unrevoked certificates
   * from that chain. This default behavior can be altered by setting
   * :ref:`only_verify_leaf_cert_crl <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.only_verify_leaf_cert_crl>` to
   * true.
   *
   * If ``crl`` is a filesystem path, a watch will be added to the parent
   * directory for any file moves to support rotation. This currently only
   * applies to dynamic secrets, when the ``CertificateValidationContext`` is
   * delivered via SDS.
   *
   * @generated from field: envoy.config.core.v3.DataSource crl = 7;
   */
  crl?: DataSource;

  /**
   * If specified, Envoy will not reject expired certificates.
   *
   * @generated from field: bool allow_expired_certificate = 8;
   */
  allowExpiredCertificate: boolean;

  /**
   * Certificate trust chain verification mode.
   *
   * @generated from field: envoy.extensions.transport_sockets.tls.v3.CertificateValidationContext.TrustChainVerification trust_chain_verification = 10;
   */
  trustChainVerification: CertificateValidationContext_TrustChainVerification;

  /**
   * The configuration of an extension specific certificate validator.
   * If specified, all validation is done by the specified validator,
   * and the behavior of all other validation settings is defined by the specified validator (and may be entirely ignored, unused, and unvalidated).
   * Refer to the documentation for the specified validator. If you do not want a custom validation algorithm, do not set this field.
   * [#extension-category: envoy.tls.cert_validator]
   *
   * @generated from field: envoy.config.core.v3.TypedExtensionConfig custom_validator_config = 12;
   */
  customValidatorConfig?: TypedExtensionConfig;

  /**
   * If this option is set to true, only the certificate at the end of the
   * certificate chain will be subject to validation by :ref:`CRL <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.crl>`.
   *
   * @generated from field: bool only_verify_leaf_cert_crl = 14;
   */
  onlyVerifyLeafCertCrl: boolean;

  /**
   * Defines maximum depth of a certificate chain accepted in verification, the default limit is 100, though this can be system-dependent.
   * This number does not include the leaf, so a depth of 1 allows the leaf and one CA certificate. If a trusted issuer appears in the chain,
   * but in a depth larger than configured, the certificate validation will fail.
   * See `BoringSSL SSL_CTX_set_verify_depth <https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#SSL_CTX_set_verify_depth>`
   * If you use OpenSSL, its behavior is different from BoringSSL, this will define a limit on the number of certificates between the end-entity and trust-anchor certificates.
   * Neither the end-entity nor the trust-anchor certificates count against depth.
   * See `OpenSSL SSL set_verify_depth <https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_set_verify_depth.html>`_.
   * Trusted issues are specified by setting :ref:`trusted_ca <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.trusted_ca>`
   *
   * @generated from field: google.protobuf.UInt32Value max_verify_depth = 16;
   */
  maxVerifyDepth?: number;

  constructor(data?: PartialMessage<CertificateValidationContext>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.transport_sockets.tls.v3.CertificateValidationContext";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CertificateValidationContext;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CertificateValidationContext;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CertificateValidationContext;

  static equals(a: CertificateValidationContext | PlainMessage<CertificateValidationContext> | undefined, b: CertificateValidationContext | PlainMessage<CertificateValidationContext> | undefined): boolean;
}

/**
 * Peer certificate verification mode.
 *
 * @generated from enum envoy.extensions.transport_sockets.tls.v3.CertificateValidationContext.TrustChainVerification
 */
export declare enum CertificateValidationContext_TrustChainVerification {
  /**
   * Perform default certificate verification (e.g., against CA / verification lists)
   *
   * @generated from enum value: VERIFY_TRUST_CHAIN = 0;
   */
  VERIFY_TRUST_CHAIN = 0,

  /**
   * Connections where the certificate fails verification will be permitted.
   * For HTTP connections, the result of certificate verification can be used in route matching. (
   * see :ref:`validated <envoy_v3_api_field_config.route.v3.RouteMatch.TlsContextMatchOptions.validated>` ).
   *
   * @generated from enum value: ACCEPT_UNTRUSTED = 1;
   */
  ACCEPT_UNTRUSTED = 1,
}
