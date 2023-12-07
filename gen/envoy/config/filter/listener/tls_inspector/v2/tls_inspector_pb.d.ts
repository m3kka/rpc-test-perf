// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/listener/tls_inspector/v2/tls_inspector.proto (package envoy.config.filter.listener.tls_inspector.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.config.filter.listener.tls_inspector.v2.TlsInspector
 */
export declare class TlsInspector extends Message<TlsInspector> {
  constructor(data?: PartialMessage<TlsInspector>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.listener.tls_inspector.v2.TlsInspector";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TlsInspector;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TlsInspector;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TlsInspector;

  static equals(a: TlsInspector | PlainMessage<TlsInspector> | undefined, b: TlsInspector | PlainMessage<TlsInspector> | undefined): boolean;
}
