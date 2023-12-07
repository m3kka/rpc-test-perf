// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/grpc_credential/v2alpha/aws_iam.proto (package envoy.config.grpc_credential.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.config.grpc_credential.v2alpha.AwsIamConfig
 */
export declare class AwsIamConfig extends Message<AwsIamConfig> {
  /**
   * The `service namespace
   * <https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces>`_
   * of the Grpc endpoint.
   *
   * Example: appmesh
   *
   * @generated from field: string service_name = 1;
   */
  serviceName: string;

  /**
   * The `region <https://docs.aws.amazon.com/general/latest/gr/rande.html>`_ hosting the Grpc
   * endpoint. If unspecified, the extension will use the value in the ``AWS_REGION`` environment
   * variable.
   *
   * Example: us-west-2
   *
   * @generated from field: string region = 2;
   */
  region: string;

  constructor(data?: PartialMessage<AwsIamConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.grpc_credential.v2alpha.AwsIamConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AwsIamConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AwsIamConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AwsIamConfig;

  static equals(a: AwsIamConfig | PlainMessage<AwsIamConfig> | undefined, b: AwsIamConfig | PlainMessage<AwsIamConfig> | undefined): boolean;
}
