// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/resource_monitors/injected_resource/v3/injected_resource.proto (package envoy.extensions.resource_monitors.injected_resource.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * The injected resource monitor allows injecting a synthetic resource pressure into Envoy
 * via a text file, which must contain a floating-point number in the range [0..1] representing
 * the resource pressure and be updated atomically by a symbolic link swap.
 * This is intended primarily for integration tests to force Envoy into an overloaded state.
 *
 * @generated from message envoy.extensions.resource_monitors.injected_resource.v3.InjectedResourceConfig
 */
export declare class InjectedResourceConfig extends Message<InjectedResourceConfig> {
  /**
   * @generated from field: string filename = 1;
   */
  filename: string;

  constructor(data?: PartialMessage<InjectedResourceConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.resource_monitors.injected_resource.v3.InjectedResourceConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InjectedResourceConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InjectedResourceConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InjectedResourceConfig;

  static equals(a: InjectedResourceConfig | PlainMessage<InjectedResourceConfig> | undefined, b: InjectedResourceConfig | PlainMessage<InjectedResourceConfig> | undefined): boolean;
}

