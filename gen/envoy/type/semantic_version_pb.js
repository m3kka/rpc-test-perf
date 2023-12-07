// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/type/semantic_version.proto (package envoy.type, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Envoy uses SemVer (https://semver.org/). Major/minor versions indicate
 * expected behaviors and APIs, the patch version field is used only
 * for security fixes and can be generally ignored.
 *
 * @generated from message envoy.type.SemanticVersion
 */
export const SemanticVersion = proto3.makeMessageType(
  "envoy.type.SemanticVersion",
  () => [
    { no: 1, name: "major_number", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "minor_number", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "patch", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

