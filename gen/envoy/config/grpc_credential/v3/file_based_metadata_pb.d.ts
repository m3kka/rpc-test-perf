// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/grpc_credential/v3/file_based_metadata.proto (package envoy.config.grpc_credential.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { DataSource } from "../../core/v3/base_pb.js";

/**
 * @generated from message envoy.config.grpc_credential.v3.FileBasedMetadataConfig
 */
export declare class FileBasedMetadataConfig extends Message<FileBasedMetadataConfig> {
  /**
   * Location or inline data of secret to use for authentication of the Google gRPC connection
   * this secret will be attached to a header of the gRPC connection
   *
   * @generated from field: envoy.config.core.v3.DataSource secret_data = 1;
   */
  secretData?: DataSource;

  /**
   * Metadata header key to use for sending the secret data
   * if no header key is set, "authorization" header will be used
   *
   * @generated from field: string header_key = 2;
   */
  headerKey: string;

  /**
   * Prefix to prepend to the secret in the metadata header
   * if no prefix is set, the default is to use no prefix
   *
   * @generated from field: string header_prefix = 3;
   */
  headerPrefix: string;

  constructor(data?: PartialMessage<FileBasedMetadataConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.grpc_credential.v3.FileBasedMetadataConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileBasedMetadataConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileBasedMetadataConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileBasedMetadataConfig;

  static equals(a: FileBasedMetadataConfig | PlainMessage<FileBasedMetadataConfig> | undefined, b: FileBasedMetadataConfig | PlainMessage<FileBasedMetadataConfig> | undefined): boolean;
}
