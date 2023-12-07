// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/resource_monitors/fixed_heap/v3/fixed_heap.proto (package envoy.extensions.resource_monitors.fixed_heap.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * The fixed heap resource monitor reports the Envoy process memory pressure, computed as a
 * fraction of currently reserved heap memory divided by a statically configured maximum
 * specified in the FixedHeapConfig.
 *
 * @generated from message envoy.extensions.resource_monitors.fixed_heap.v3.FixedHeapConfig
 */
export declare class FixedHeapConfig extends Message<FixedHeapConfig> {
  /**
   * @generated from field: uint64 max_heap_size_bytes = 1;
   */
  maxHeapSizeBytes: bigint;

  constructor(data?: PartialMessage<FixedHeapConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.resource_monitors.fixed_heap.v3.FixedHeapConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FixedHeapConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FixedHeapConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FixedHeapConfig;

  static equals(a: FixedHeapConfig | PlainMessage<FixedHeapConfig> | undefined, b: FixedHeapConfig | PlainMessage<FixedHeapConfig> | undefined): boolean;
}

