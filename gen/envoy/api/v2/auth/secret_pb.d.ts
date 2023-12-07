// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/api/v2/auth/secret.proto (package envoy.api.v2.auth, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { DataSource } from "../core/base_pb.js";
import type { ConfigSource } from "../core/config_source_pb.js";
import type { CertificateValidationContext, TlsCertificate, TlsSessionTicketKeys } from "./common_pb.js";

/**
 * @generated from message envoy.api.v2.auth.GenericSecret
 */
export declare class GenericSecret extends Message<GenericSecret> {
  /**
   * Secret of generic type and is available to filters.
   *
   * @generated from field: envoy.api.v2.core.DataSource secret = 1;
   */
  secret?: DataSource;

  constructor(data?: PartialMessage<GenericSecret>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.api.v2.auth.GenericSecret";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenericSecret;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenericSecret;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenericSecret;

  static equals(a: GenericSecret | PlainMessage<GenericSecret> | undefined, b: GenericSecret | PlainMessage<GenericSecret> | undefined): boolean;
}

/**
 * @generated from message envoy.api.v2.auth.SdsSecretConfig
 */
export declare class SdsSecretConfig extends Message<SdsSecretConfig> {
  /**
   * Name (FQDN, UUID, SPKI, SHA256, etc.) by which the secret can be uniquely referred to.
   * When both name and config are specified, then secret can be fetched and/or reloaded via
   * SDS. When only name is specified, then secret will be loaded from static resources.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: envoy.api.v2.core.ConfigSource sds_config = 2;
   */
  sdsConfig?: ConfigSource;

  constructor(data?: PartialMessage<SdsSecretConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.api.v2.auth.SdsSecretConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SdsSecretConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SdsSecretConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SdsSecretConfig;

  static equals(a: SdsSecretConfig | PlainMessage<SdsSecretConfig> | undefined, b: SdsSecretConfig | PlainMessage<SdsSecretConfig> | undefined): boolean;
}

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.api.v2.auth.Secret
 */
export declare class Secret extends Message<Secret> {
  /**
   * Name (FQDN, UUID, SPKI, SHA256, etc.) by which the secret can be uniquely referred to.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from oneof envoy.api.v2.auth.Secret.type
   */
  type: {
    /**
     * @generated from field: envoy.api.v2.auth.TlsCertificate tls_certificate = 2;
     */
    value: TlsCertificate;
    case: "tlsCertificate";
  } | {
    /**
     * @generated from field: envoy.api.v2.auth.TlsSessionTicketKeys session_ticket_keys = 3;
     */
    value: TlsSessionTicketKeys;
    case: "sessionTicketKeys";
  } | {
    /**
     * @generated from field: envoy.api.v2.auth.CertificateValidationContext validation_context = 4;
     */
    value: CertificateValidationContext;
    case: "validationContext";
  } | {
    /**
     * @generated from field: envoy.api.v2.auth.GenericSecret generic_secret = 5;
     */
    value: GenericSecret;
    case: "genericSecret";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Secret>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.api.v2.auth.Secret";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Secret;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Secret;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Secret;

  static equals(a: Secret | PlainMessage<Secret> | undefined, b: Secret | PlainMessage<Secret> | undefined): boolean;
}
