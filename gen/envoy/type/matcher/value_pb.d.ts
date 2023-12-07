// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/type/matcher/value.proto (package envoy.type.matcher, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { DoubleMatcher } from "./number_pb.js";
import type { StringMatcher } from "./string_pb.js";

/**
 * Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported.
 * StructValue is not supported and is always not matched.
 * [#next-free-field: 7]
 *
 * @generated from message envoy.type.matcher.ValueMatcher
 */
export declare class ValueMatcher extends Message<ValueMatcher> {
  /**
   * Specifies how to match a value.
   *
   * @generated from oneof envoy.type.matcher.ValueMatcher.match_pattern
   */
  matchPattern: {
    /**
     * If specified, a match occurs if and only if the target value is a NullValue.
     *
     * @generated from field: envoy.type.matcher.ValueMatcher.NullMatch null_match = 1;
     */
    value: ValueMatcher_NullMatch;
    case: "nullMatch";
  } | {
    /**
     * If specified, a match occurs if and only if the target value is a double value and is
     * matched to this field.
     *
     * @generated from field: envoy.type.matcher.DoubleMatcher double_match = 2;
     */
    value: DoubleMatcher;
    case: "doubleMatch";
  } | {
    /**
     * If specified, a match occurs if and only if the target value is a string value and is
     * matched to this field.
     *
     * @generated from field: envoy.type.matcher.StringMatcher string_match = 3;
     */
    value: StringMatcher;
    case: "stringMatch";
  } | {
    /**
     * If specified, a match occurs if and only if the target value is a bool value and is equal
     * to this field.
     *
     * @generated from field: bool bool_match = 4;
     */
    value: boolean;
    case: "boolMatch";
  } | {
    /**
     * If specified, value match will be performed based on whether the path is referring to a
     * valid primitive value in the metadata. If the path is referring to a non-primitive value,
     * the result is always not matched.
     *
     * @generated from field: bool present_match = 5;
     */
    value: boolean;
    case: "presentMatch";
  } | {
    /**
     * If specified, a match occurs if and only if the target value is a list value and
     * is matched to this field.
     *
     * @generated from field: envoy.type.matcher.ListMatcher list_match = 6;
     */
    value: ListMatcher;
    case: "listMatch";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<ValueMatcher>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.matcher.ValueMatcher";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValueMatcher;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValueMatcher;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValueMatcher;

  static equals(a: ValueMatcher | PlainMessage<ValueMatcher> | undefined, b: ValueMatcher | PlainMessage<ValueMatcher> | undefined): boolean;
}

/**
 * NullMatch is an empty message to specify a null value.
 *
 * @generated from message envoy.type.matcher.ValueMatcher.NullMatch
 */
export declare class ValueMatcher_NullMatch extends Message<ValueMatcher_NullMatch> {
  constructor(data?: PartialMessage<ValueMatcher_NullMatch>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.matcher.ValueMatcher.NullMatch";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValueMatcher_NullMatch;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValueMatcher_NullMatch;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValueMatcher_NullMatch;

  static equals(a: ValueMatcher_NullMatch | PlainMessage<ValueMatcher_NullMatch> | undefined, b: ValueMatcher_NullMatch | PlainMessage<ValueMatcher_NullMatch> | undefined): boolean;
}

/**
 * Specifies the way to match a list value.
 *
 * @generated from message envoy.type.matcher.ListMatcher
 */
export declare class ListMatcher extends Message<ListMatcher> {
  /**
   * @generated from oneof envoy.type.matcher.ListMatcher.match_pattern
   */
  matchPattern: {
    /**
     * If specified, at least one of the values in the list must match the value specified.
     *
     * @generated from field: envoy.type.matcher.ValueMatcher one_of = 1;
     */
    value: ValueMatcher;
    case: "oneOf";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<ListMatcher>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.matcher.ListMatcher";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListMatcher;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListMatcher;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListMatcher;

  static equals(a: ListMatcher | PlainMessage<ListMatcher> | undefined, b: ListMatcher | PlainMessage<ListMatcher> | undefined): boolean;
}

