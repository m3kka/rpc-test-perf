// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/core/v3/grpc_method_list.proto (package envoy.config.core.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * A list of gRPC methods which can be used as an allowlist, for example.
 *
 * @generated from message envoy.config.core.v3.GrpcMethodList
 */
export declare class GrpcMethodList extends Message<GrpcMethodList> {
  /**
   * @generated from field: repeated envoy.config.core.v3.GrpcMethodList.Service services = 1;
   */
  services: GrpcMethodList_Service[];

  constructor(data?: PartialMessage<GrpcMethodList>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.core.v3.GrpcMethodList";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GrpcMethodList;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GrpcMethodList;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GrpcMethodList;

  static equals(a: GrpcMethodList | PlainMessage<GrpcMethodList> | undefined, b: GrpcMethodList | PlainMessage<GrpcMethodList> | undefined): boolean;
}

/**
 * @generated from message envoy.config.core.v3.GrpcMethodList.Service
 */
export declare class GrpcMethodList_Service extends Message<GrpcMethodList_Service> {
  /**
   * The name of the gRPC service.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The names of the gRPC methods in this service.
   *
   * @generated from field: repeated string method_names = 2;
   */
  methodNames: string[];

  constructor(data?: PartialMessage<GrpcMethodList_Service>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.core.v3.GrpcMethodList.Service";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GrpcMethodList_Service;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GrpcMethodList_Service;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GrpcMethodList_Service;

  static equals(a: GrpcMethodList_Service | PlainMessage<GrpcMethodList_Service> | undefined, b: GrpcMethodList_Service | PlainMessage<GrpcMethodList_Service> | undefined): boolean;
}

