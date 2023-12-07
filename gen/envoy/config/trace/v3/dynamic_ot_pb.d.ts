// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/trace/v3/dynamic_ot.proto (package envoy.config.trace.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Struct } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * DynamicOtConfig is used to dynamically load a tracer from a shared library
 * that implements the `OpenTracing dynamic loading API
 * <https://github.com/opentracing/opentracing-cpp>`_.
 * [#extension: envoy.tracers.dynamic_ot]
 *
 * @generated from message envoy.config.trace.v3.DynamicOtConfig
 */
export declare class DynamicOtConfig extends Message<DynamicOtConfig> {
  /**
   * Dynamic library implementing the `OpenTracing API
   * <https://github.com/opentracing/opentracing-cpp>`_.
   *
   * @generated from field: string library = 1;
   */
  library: string;

  /**
   * The configuration to use when creating a tracer from the given dynamic
   * library.
   *
   * @generated from field: google.protobuf.Struct config = 2;
   */
  config?: Struct;

  constructor(data?: PartialMessage<DynamicOtConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.trace.v3.DynamicOtConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DynamicOtConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DynamicOtConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DynamicOtConfig;

  static equals(a: DynamicOtConfig | PlainMessage<DynamicOtConfig> | undefined, b: DynamicOtConfig | PlainMessage<DynamicOtConfig> | undefined): boolean;
}

