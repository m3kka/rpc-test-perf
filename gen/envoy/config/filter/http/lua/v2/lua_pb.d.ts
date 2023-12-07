// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/http/lua/v2/lua.proto (package envoy.config.filter.http.lua.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message envoy.config.filter.http.lua.v2.Lua
 */
export declare class Lua extends Message<Lua> {
  /**
   * The Lua code that Envoy will execute. This can be a very small script that
   * further loads code from disk if desired. Note that if JSON configuration is used, the code must
   * be properly escaped. YAML configuration may be easier to read since YAML supports multi-line
   * strings so complex scripts can be easily expressed inline in the configuration.
   *
   * @generated from field: string inline_code = 1;
   */
  inlineCode: string;

  constructor(data?: PartialMessage<Lua>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.http.lua.v2.Lua";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Lua;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Lua;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Lua;

  static equals(a: Lua | PlainMessage<Lua> | undefined, b: Lua | PlainMessage<Lua> | undefined): boolean;
}
