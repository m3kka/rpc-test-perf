// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/type/matcher/struct.proto (package envoy.type.matcher, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ValueMatcher } from "./value_pb.js";

/**
 * StructMatcher provides a general interface to check if a given value is matched in
 * google.protobuf.Struct. It uses `path` to retrieve the value
 * from the struct and then check if it's matched to the specified value.
 *
 * For example, for the following Struct:
 *
 * .. code-block:: yaml
 *
 *        fields:
 *          a:
 *            struct_value:
 *              fields:
 *                b:
 *                  struct_value:
 *                    fields:
 *                      c:
 *                        string_value: pro
 *                t:
 *                  list_value:
 *                    values:
 *                      - string_value: m
 *                      - string_value: n
 *
 * The following MetadataMatcher is matched as the path [a, b, c] will retrieve a string value "pro"
 * from the Metadata which is matched to the specified prefix match.
 *
 * .. code-block:: yaml
 *
 *    path:
 *    - key: a
 *    - key: b
 *    - key: c
 *    value:
 *      string_match:
 *        prefix: pr
 *
 * The following StructMatcher is matched as the code will match one of the string values in the
 * list at the path [a, t].
 *
 * .. code-block:: yaml
 *
 *    path:
 *    - key: a
 *    - key: t
 *    value:
 *      list_match:
 *        one_of:
 *          string_match:
 *            exact: m
 *
 * An example use of StructMatcher is to match metadata in envoy.v*.core.Node.
 *
 * @generated from message envoy.type.matcher.StructMatcher
 */
export const StructMatcher = proto3.makeMessageType(
  "envoy.type.matcher.StructMatcher",
  () => [
    { no: 2, name: "path", kind: "message", T: StructMatcher_PathSegment, repeated: true },
    { no: 3, name: "value", kind: "message", T: ValueMatcher },
  ],
);

/**
 * Specifies the segment in a path to retrieve value from Struct.
 *
 * @generated from message envoy.type.matcher.StructMatcher.PathSegment
 */
export const StructMatcher_PathSegment = proto3.makeMessageType(
  "envoy.type.matcher.StructMatcher.PathSegment",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "segment" },
  ],
  {localName: "StructMatcher_PathSegment"},
);

