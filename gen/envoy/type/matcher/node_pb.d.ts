// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/type/matcher/node.proto (package envoy.type.matcher, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { StringMatcher } from "./string_pb.js";
import type { StructMatcher } from "./struct_pb.js";

/**
 * Specifies the way to match a Node.
 * The match follows AND semantics.
 *
 * @generated from message envoy.type.matcher.NodeMatcher
 */
export declare class NodeMatcher extends Message<NodeMatcher> {
  /**
   * Specifies match criteria on the node id.
   *
   * @generated from field: envoy.type.matcher.StringMatcher node_id = 1;
   */
  nodeId?: StringMatcher;

  /**
   * Specifies match criteria on the node metadata.
   *
   * @generated from field: repeated envoy.type.matcher.StructMatcher node_metadatas = 2;
   */
  nodeMetadatas: StructMatcher[];

  constructor(data?: PartialMessage<NodeMatcher>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.matcher.NodeMatcher";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeMatcher;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeMatcher;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeMatcher;

  static equals(a: NodeMatcher | PlainMessage<NodeMatcher> | undefined, b: NodeMatcher | PlainMessage<NodeMatcher> | undefined): boolean;
}
