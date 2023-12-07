// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/type/metadata/v2/metadata.proto (package envoy.type.metadata.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * MetadataKey provides a general interface using `key` and `path` to retrieve value from
 * :ref:`Metadata <envoy_api_msg_core.Metadata>`.
 *
 * For example, for the following Metadata:
 *
 * .. code-block:: yaml
 *
 *    filter_metadata:
 *      envoy.xxx:
 *        prop:
 *          foo: bar
 *          xyz:
 *            hello: envoy
 *
 * The following MetadataKey will retrieve a string value "bar" from the Metadata.
 *
 * .. code-block:: yaml
 *
 *    key: envoy.xxx
 *    path:
 *    - key: prop
 *    - key: foo
 *
 *
 * @generated from message envoy.type.metadata.v2.MetadataKey
 */
export declare class MetadataKey extends Message<MetadataKey> {
  /**
   * The key name of Metadata to retrieve the Struct from the metadata.
   * Typically, it represents a builtin subsystem or custom extension.
   *
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * The path to retrieve the Value from the Struct. It can be a prefix or a full path,
   * e.g. ``[prop, xyz]`` for a struct or ``[prop, foo]`` for a string in the example,
   * which depends on the particular scenario.
   *
   * Note: Due to that only the key type segment is supported, the path can not specify a list
   * unless the list is the last segment.
   *
   * @generated from field: repeated envoy.type.metadata.v2.MetadataKey.PathSegment path = 2;
   */
  path: MetadataKey_PathSegment[];

  constructor(data?: PartialMessage<MetadataKey>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.metadata.v2.MetadataKey";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MetadataKey;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MetadataKey;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MetadataKey;

  static equals(a: MetadataKey | PlainMessage<MetadataKey> | undefined, b: MetadataKey | PlainMessage<MetadataKey> | undefined): boolean;
}

/**
 * Specifies the segment in a path to retrieve value from Metadata.
 * Currently it is only supported to specify the key, i.e. field name, as one segment of a path.
 *
 * @generated from message envoy.type.metadata.v2.MetadataKey.PathSegment
 */
export declare class MetadataKey_PathSegment extends Message<MetadataKey_PathSegment> {
  /**
   * @generated from oneof envoy.type.metadata.v2.MetadataKey.PathSegment.segment
   */
  segment: {
    /**
     * If specified, use the key to retrieve the value in a Struct.
     *
     * @generated from field: string key = 1;
     */
    value: string;
    case: "key";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<MetadataKey_PathSegment>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.metadata.v2.MetadataKey.PathSegment";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MetadataKey_PathSegment;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MetadataKey_PathSegment;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MetadataKey_PathSegment;

  static equals(a: MetadataKey_PathSegment | PlainMessage<MetadataKey_PathSegment> | undefined, b: MetadataKey_PathSegment | PlainMessage<MetadataKey_PathSegment> | undefined): boolean;
}

/**
 * Describes what kind of metadata.
 *
 * @generated from message envoy.type.metadata.v2.MetadataKind
 */
export declare class MetadataKind extends Message<MetadataKind> {
  /**
   * @generated from oneof envoy.type.metadata.v2.MetadataKind.kind
   */
  kind: {
    /**
     * Request kind of metadata.
     *
     * @generated from field: envoy.type.metadata.v2.MetadataKind.Request request = 1;
     */
    value: MetadataKind_Request;
    case: "request";
  } | {
    /**
     * Route kind of metadata.
     *
     * @generated from field: envoy.type.metadata.v2.MetadataKind.Route route = 2;
     */
    value: MetadataKind_Route;
    case: "route";
  } | {
    /**
     * Cluster kind of metadata.
     *
     * @generated from field: envoy.type.metadata.v2.MetadataKind.Cluster cluster = 3;
     */
    value: MetadataKind_Cluster;
    case: "cluster";
  } | {
    /**
     * Host kind of metadata.
     *
     * @generated from field: envoy.type.metadata.v2.MetadataKind.Host host = 4;
     */
    value: MetadataKind_Host;
    case: "host";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<MetadataKind>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.metadata.v2.MetadataKind";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MetadataKind;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MetadataKind;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MetadataKind;

  static equals(a: MetadataKind | PlainMessage<MetadataKind> | undefined, b: MetadataKind | PlainMessage<MetadataKind> | undefined): boolean;
}

/**
 * Represents dynamic metadata associated with the request.
 *
 * @generated from message envoy.type.metadata.v2.MetadataKind.Request
 */
export declare class MetadataKind_Request extends Message<MetadataKind_Request> {
  constructor(data?: PartialMessage<MetadataKind_Request>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.metadata.v2.MetadataKind.Request";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MetadataKind_Request;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MetadataKind_Request;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MetadataKind_Request;

  static equals(a: MetadataKind_Request | PlainMessage<MetadataKind_Request> | undefined, b: MetadataKind_Request | PlainMessage<MetadataKind_Request> | undefined): boolean;
}

/**
 * Represents metadata from :ref:`the route<envoy_api_field_route.Route.metadata>`.
 *
 * @generated from message envoy.type.metadata.v2.MetadataKind.Route
 */
export declare class MetadataKind_Route extends Message<MetadataKind_Route> {
  constructor(data?: PartialMessage<MetadataKind_Route>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.metadata.v2.MetadataKind.Route";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MetadataKind_Route;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MetadataKind_Route;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MetadataKind_Route;

  static equals(a: MetadataKind_Route | PlainMessage<MetadataKind_Route> | undefined, b: MetadataKind_Route | PlainMessage<MetadataKind_Route> | undefined): boolean;
}

/**
 * Represents metadata from :ref:`the upstream cluster<envoy_api_field_Cluster.metadata>`.
 *
 * @generated from message envoy.type.metadata.v2.MetadataKind.Cluster
 */
export declare class MetadataKind_Cluster extends Message<MetadataKind_Cluster> {
  constructor(data?: PartialMessage<MetadataKind_Cluster>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.metadata.v2.MetadataKind.Cluster";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MetadataKind_Cluster;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MetadataKind_Cluster;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MetadataKind_Cluster;

  static equals(a: MetadataKind_Cluster | PlainMessage<MetadataKind_Cluster> | undefined, b: MetadataKind_Cluster | PlainMessage<MetadataKind_Cluster> | undefined): boolean;
}

/**
 * Represents metadata from :ref:`the upstream
 * host<envoy_api_field_endpoint.LbEndpoint.metadata>`.
 *
 * @generated from message envoy.type.metadata.v2.MetadataKind.Host
 */
export declare class MetadataKind_Host extends Message<MetadataKind_Host> {
  constructor(data?: PartialMessage<MetadataKind_Host>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.type.metadata.v2.MetadataKind.Host";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MetadataKind_Host;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MetadataKind_Host;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MetadataKind_Host;

  static equals(a: MetadataKind_Host | PlainMessage<MetadataKind_Host> | undefined, b: MetadataKind_Host | PlainMessage<MetadataKind_Host> | undefined): boolean;
}

