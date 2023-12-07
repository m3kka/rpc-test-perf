// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/wasm/v3/wasm.proto (package envoy.extensions.filters.http.wasm.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { PluginConfig } from "../../../../wasm/v3/wasm_pb.js";

/**
 * @generated from message envoy.extensions.filters.http.wasm.v3.Wasm
 */
export declare class Wasm extends Message<Wasm> {
  /**
   * General Plugin configuration.
   *
   * @generated from field: envoy.extensions.wasm.v3.PluginConfig config = 1;
   */
  config?: PluginConfig;

  constructor(data?: PartialMessage<Wasm>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.wasm.v3.Wasm";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Wasm;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Wasm;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Wasm;

  static equals(a: Wasm | PlainMessage<Wasm> | undefined, b: Wasm | PlainMessage<Wasm> | undefined): boolean;
}
