// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/admin/v3/certs.proto (package envoy.admin.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Proto representation of certificate details. Admin endpoint uses this wrapper for ``/certs`` to
 * display certificate information. See :ref:`/certs <operations_admin_interface_certs>` for more
 * information.
 *
 * @generated from message envoy.admin.v3.Certificates
 */
export declare class Certificates extends Message<Certificates> {
  /**
   * List of certificates known to an Envoy.
   *
   * @generated from field: repeated envoy.admin.v3.Certificate certificates = 1;
   */
  certificates: Certificate[];

  constructor(data?: PartialMessage<Certificates>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v3.Certificates";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Certificates;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Certificates;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Certificates;

  static equals(a: Certificates | PlainMessage<Certificates> | undefined, b: Certificates | PlainMessage<Certificates> | undefined): boolean;
}

/**
 * @generated from message envoy.admin.v3.Certificate
 */
export declare class Certificate extends Message<Certificate> {
  /**
   * Details of CA certificate.
   *
   * @generated from field: repeated envoy.admin.v3.CertificateDetails ca_cert = 1;
   */
  caCert: CertificateDetails[];

  /**
   * Details of Certificate Chain
   *
   * @generated from field: repeated envoy.admin.v3.CertificateDetails cert_chain = 2;
   */
  certChain: CertificateDetails[];

  constructor(data?: PartialMessage<Certificate>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v3.Certificate";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Certificate;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Certificate;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Certificate;

  static equals(a: Certificate | PlainMessage<Certificate> | undefined, b: Certificate | PlainMessage<Certificate> | undefined): boolean;
}

/**
 * [#next-free-field: 8]
 *
 * @generated from message envoy.admin.v3.CertificateDetails
 */
export declare class CertificateDetails extends Message<CertificateDetails> {
  /**
   * Path of the certificate.
   *
   * @generated from field: string path = 1;
   */
  path: string;

  /**
   * Certificate Serial Number.
   *
   * @generated from field: string serial_number = 2;
   */
  serialNumber: string;

  /**
   * List of Subject Alternate names.
   *
   * @generated from field: repeated envoy.admin.v3.SubjectAlternateName subject_alt_names = 3;
   */
  subjectAltNames: SubjectAlternateName[];

  /**
   * Minimum of days until expiration of certificate and it's chain.
   *
   * @generated from field: uint64 days_until_expiration = 4;
   */
  daysUntilExpiration: bigint;

  /**
   * Indicates the time from which the certificate is valid.
   *
   * @generated from field: google.protobuf.Timestamp valid_from = 5;
   */
  validFrom?: Timestamp;

  /**
   * Indicates the time at which the certificate expires.
   *
   * @generated from field: google.protobuf.Timestamp expiration_time = 6;
   */
  expirationTime?: Timestamp;

  /**
   * Details related to the OCSP response associated with this certificate, if any.
   *
   * @generated from field: envoy.admin.v3.CertificateDetails.OcspDetails ocsp_details = 7;
   */
  ocspDetails?: CertificateDetails_OcspDetails;

  constructor(data?: PartialMessage<CertificateDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v3.CertificateDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CertificateDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CertificateDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CertificateDetails;

  static equals(a: CertificateDetails | PlainMessage<CertificateDetails> | undefined, b: CertificateDetails | PlainMessage<CertificateDetails> | undefined): boolean;
}

/**
 * @generated from message envoy.admin.v3.CertificateDetails.OcspDetails
 */
export declare class CertificateDetails_OcspDetails extends Message<CertificateDetails_OcspDetails> {
  /**
   * Indicates the time from which the OCSP response is valid.
   *
   * @generated from field: google.protobuf.Timestamp valid_from = 1;
   */
  validFrom?: Timestamp;

  /**
   * Indicates the time at which the OCSP response expires.
   *
   * @generated from field: google.protobuf.Timestamp expiration = 2;
   */
  expiration?: Timestamp;

  constructor(data?: PartialMessage<CertificateDetails_OcspDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v3.CertificateDetails.OcspDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CertificateDetails_OcspDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CertificateDetails_OcspDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CertificateDetails_OcspDetails;

  static equals(a: CertificateDetails_OcspDetails | PlainMessage<CertificateDetails_OcspDetails> | undefined, b: CertificateDetails_OcspDetails | PlainMessage<CertificateDetails_OcspDetails> | undefined): boolean;
}

/**
 * @generated from message envoy.admin.v3.SubjectAlternateName
 */
export declare class SubjectAlternateName extends Message<SubjectAlternateName> {
  /**
   * Subject Alternate Name.
   *
   * @generated from oneof envoy.admin.v3.SubjectAlternateName.name
   */
  name: {
    /**
     * @generated from field: string dns = 1;
     */
    value: string;
    case: "dns";
  } | {
    /**
     * @generated from field: string uri = 2;
     */
    value: string;
    case: "uri";
  } | {
    /**
     * @generated from field: string ip_address = 3;
     */
    value: string;
    case: "ipAddress";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<SubjectAlternateName>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.admin.v3.SubjectAlternateName";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubjectAlternateName;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubjectAlternateName;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubjectAlternateName;

  static equals(a: SubjectAlternateName | PlainMessage<SubjectAlternateName> | undefined, b: SubjectAlternateName | PlainMessage<SubjectAlternateName> | undefined): boolean;
}

