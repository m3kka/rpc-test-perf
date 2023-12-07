// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/admin/v2alpha/memory.proto (package envoy.admin.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Proto representation of the internal memory consumption of an Envoy instance. These represent
 * values extracted from an internal TCMalloc instance. For more information, see the section of the
 * docs entitled ["Generic Tcmalloc Status"](https://gperftools.github.io/gperftools/tcmalloc.html).
 * [#next-free-field: 7]
 *
 * @generated from message envoy.admin.v2alpha.Memory
 */
export const Memory = proto3.makeMessageType(
  "envoy.admin.v2alpha.Memory",
  () => [
    { no: 1, name: "allocated", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "heap_size", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "pageheap_unmapped", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "pageheap_free", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "total_thread_cache", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "total_physical_bytes", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

