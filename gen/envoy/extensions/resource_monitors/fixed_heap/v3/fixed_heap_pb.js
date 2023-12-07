// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/resource_monitors/fixed_heap/v3/fixed_heap.proto (package envoy.extensions.resource_monitors.fixed_heap.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * The fixed heap resource monitor reports the Envoy process memory pressure, computed as a
 * fraction of currently reserved heap memory divided by a statically configured maximum
 * specified in the FixedHeapConfig.
 *
 * @generated from message envoy.extensions.resource_monitors.fixed_heap.v3.FixedHeapConfig
 */
export const FixedHeapConfig = proto3.makeMessageType(
  "envoy.extensions.resource_monitors.fixed_heap.v3.FixedHeapConfig",
  () => [
    { no: 1, name: "max_heap_size_bytes", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

