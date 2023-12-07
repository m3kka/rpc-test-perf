// @generated by protoc-gen-es v1.5.1
// @generated from file contrib/envoy/extensions/filters/network/generic_proxy/matcher/v3/matcher.proto (package envoy.extensions.filters.network.generic_proxy.matcher.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { StringMatcher } from "../../../../../../../../envoy/type/matcher/v3/string_pb.js";

/**
 * Used to match request service of the downstream request. Only applicable if a service provided
 * by the application protocol.
 * This is deprecated and should be replaced by HostMatchInput. This is kept for backward compatibility.
 *
 * @generated from message envoy.extensions.filters.network.generic_proxy.matcher.v3.ServiceMatchInput
 */
export declare class ServiceMatchInput extends Message<ServiceMatchInput> {
  constructor(data?: PartialMessage<ServiceMatchInput>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.generic_proxy.matcher.v3.ServiceMatchInput";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceMatchInput;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceMatchInput;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceMatchInput;

  static equals(a: ServiceMatchInput | PlainMessage<ServiceMatchInput> | undefined, b: ServiceMatchInput | PlainMessage<ServiceMatchInput> | undefined): boolean;
}

/**
 * Used to match request host of the generic downstream request. Only applicable if a host provided
 * by the application protocol.
 * This is same with the ServiceMatchInput and this should be preferred over ServiceMatchInput.
 *
 * @generated from message envoy.extensions.filters.network.generic_proxy.matcher.v3.HostMatchInput
 */
export declare class HostMatchInput extends Message<HostMatchInput> {
  constructor(data?: PartialMessage<HostMatchInput>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.generic_proxy.matcher.v3.HostMatchInput";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HostMatchInput;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HostMatchInput;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HostMatchInput;

  static equals(a: HostMatchInput | PlainMessage<HostMatchInput> | undefined, b: HostMatchInput | PlainMessage<HostMatchInput> | undefined): boolean;
}

/**
 * Used to match request path of the generic downstream request. Only applicable if a path provided
 * by the application protocol.
 *
 * @generated from message envoy.extensions.filters.network.generic_proxy.matcher.v3.PathMatchInput
 */
export declare class PathMatchInput extends Message<PathMatchInput> {
  constructor(data?: PartialMessage<PathMatchInput>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.generic_proxy.matcher.v3.PathMatchInput";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PathMatchInput;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PathMatchInput;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PathMatchInput;

  static equals(a: PathMatchInput | PlainMessage<PathMatchInput> | undefined, b: PathMatchInput | PlainMessage<PathMatchInput> | undefined): boolean;
}

/**
 * Used to match request method of the generic downstream request. Only applicable if a method provided
 * by the application protocol.
 *
 * @generated from message envoy.extensions.filters.network.generic_proxy.matcher.v3.MethodMatchInput
 */
export declare class MethodMatchInput extends Message<MethodMatchInput> {
  constructor(data?: PartialMessage<MethodMatchInput>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.generic_proxy.matcher.v3.MethodMatchInput";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodMatchInput;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodMatchInput;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodMatchInput;

  static equals(a: MethodMatchInput | PlainMessage<MethodMatchInput> | undefined, b: MethodMatchInput | PlainMessage<MethodMatchInput> | undefined): boolean;
}

/**
 * Used to match an arbitrary property of the generic downstream request.
 * These properties are populated by the codecs of application protocols.
 *
 * @generated from message envoy.extensions.filters.network.generic_proxy.matcher.v3.PropertyMatchInput
 */
export declare class PropertyMatchInput extends Message<PropertyMatchInput> {
  /**
   * The property name to match on.
   *
   * @generated from field: string property_name = 1;
   */
  propertyName: string;

  constructor(data?: PartialMessage<PropertyMatchInput>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.generic_proxy.matcher.v3.PropertyMatchInput";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PropertyMatchInput;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PropertyMatchInput;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PropertyMatchInput;

  static equals(a: PropertyMatchInput | PlainMessage<PropertyMatchInput> | undefined, b: PropertyMatchInput | PlainMessage<PropertyMatchInput> | undefined): boolean;
}

/**
 * Used to match an whole generic downstream request.
 *
 * @generated from message envoy.extensions.filters.network.generic_proxy.matcher.v3.RequestMatchInput
 */
export declare class RequestMatchInput extends Message<RequestMatchInput> {
  constructor(data?: PartialMessage<RequestMatchInput>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.generic_proxy.matcher.v3.RequestMatchInput";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestMatchInput;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestMatchInput;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestMatchInput;

  static equals(a: RequestMatchInput | PlainMessage<RequestMatchInput> | undefined, b: RequestMatchInput | PlainMessage<RequestMatchInput> | undefined): boolean;
}

/**
 * Used to match an arbitrary key-value pair for headers, trailers or properties.
 *
 * @generated from message envoy.extensions.filters.network.generic_proxy.matcher.v3.KeyValueMatchEntry
 */
export declare class KeyValueMatchEntry extends Message<KeyValueMatchEntry> {
  /**
   * The key name to match on.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The key value pattern.
   *
   * @generated from field: envoy.type.matcher.v3.StringMatcher string_match = 2;
   */
  stringMatch?: StringMatcher;

  constructor(data?: PartialMessage<KeyValueMatchEntry>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.generic_proxy.matcher.v3.KeyValueMatchEntry";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KeyValueMatchEntry;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KeyValueMatchEntry;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KeyValueMatchEntry;

  static equals(a: KeyValueMatchEntry | PlainMessage<KeyValueMatchEntry> | undefined, b: KeyValueMatchEntry | PlainMessage<KeyValueMatchEntry> | undefined): boolean;
}

/**
 * Custom matcher to match on the generic downstream request. This is used to match
 * multiple fields of the downstream request and avoid complex combinations of
 * HostMatchInput, PathMatchInput, MethodMatchInput and PropertyMatchInput.
 *
 * @generated from message envoy.extensions.filters.network.generic_proxy.matcher.v3.RequestMatcher
 */
export declare class RequestMatcher extends Message<RequestMatcher> {
  /**
   * Optional host pattern to match on. If not specified, any host will match.
   *
   * @generated from field: envoy.type.matcher.v3.StringMatcher host = 1;
   */
  host?: StringMatcher;

  /**
   * Optional path pattern to match on. If not specified, any path will match.
   *
   * @generated from field: envoy.type.matcher.v3.StringMatcher path = 2;
   */
  path?: StringMatcher;

  /**
   * Optional method pattern to match on. If not specified, any method will match.
   *
   * @generated from field: envoy.type.matcher.v3.StringMatcher method = 3;
   */
  method?: StringMatcher;

  /**
   * Optional arbitrary properties to match on. If not specified, any properties
   * will match. The key is the property name and the value is the property value
   * to match on.
   *
   * @generated from field: repeated envoy.extensions.filters.network.generic_proxy.matcher.v3.KeyValueMatchEntry properties = 4;
   */
  properties: KeyValueMatchEntry[];

  constructor(data?: PartialMessage<RequestMatcher>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.network.generic_proxy.matcher.v3.RequestMatcher";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestMatcher;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestMatcher;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestMatcher;

  static equals(a: RequestMatcher | PlainMessage<RequestMatcher> | undefined, b: RequestMatcher | PlainMessage<RequestMatcher> | undefined): boolean;
}

