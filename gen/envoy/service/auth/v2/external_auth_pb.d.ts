// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/service/auth/v2/external_auth.proto (package envoy.service.auth.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { AttributeContext } from "./attribute_context_pb.js";
import type { HttpStatus } from "../../../type/http_status_pb.js";
import type { HeaderValueOption } from "../../../api/v2/core/base_pb.js";
import type { Status } from "../../../../google/rpc/status_pb.js";

/**
 * @generated from message envoy.service.auth.v2.CheckRequest
 */
export declare class CheckRequest extends Message<CheckRequest> {
  /**
   * The request attributes.
   *
   * @generated from field: envoy.service.auth.v2.AttributeContext attributes = 1;
   */
  attributes?: AttributeContext;

  constructor(data?: PartialMessage<CheckRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.auth.v2.CheckRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckRequest;

  static equals(a: CheckRequest | PlainMessage<CheckRequest> | undefined, b: CheckRequest | PlainMessage<CheckRequest> | undefined): boolean;
}

/**
 * HTTP attributes for a denied response.
 *
 * @generated from message envoy.service.auth.v2.DeniedHttpResponse
 */
export declare class DeniedHttpResponse extends Message<DeniedHttpResponse> {
  /**
   * This field allows the authorization service to send a HTTP response status
   * code to the downstream client other than 403 (Forbidden).
   *
   * @generated from field: envoy.type.HttpStatus status = 1;
   */
  status?: HttpStatus;

  /**
   * This field allows the authorization service to send HTTP response headers
   * to the downstream client. Note that the `append` field in `HeaderValueOption` defaults to
   * false when used in this message.
   *
   * @generated from field: repeated envoy.api.v2.core.HeaderValueOption headers = 2;
   */
  headers: HeaderValueOption[];

  /**
   * This field allows the authorization service to send a response body data
   * to the downstream client.
   *
   * @generated from field: string body = 3;
   */
  body: string;

  constructor(data?: PartialMessage<DeniedHttpResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.auth.v2.DeniedHttpResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeniedHttpResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeniedHttpResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeniedHttpResponse;

  static equals(a: DeniedHttpResponse | PlainMessage<DeniedHttpResponse> | undefined, b: DeniedHttpResponse | PlainMessage<DeniedHttpResponse> | undefined): boolean;
}

/**
 * HTTP attributes for an ok response.
 *
 * @generated from message envoy.service.auth.v2.OkHttpResponse
 */
export declare class OkHttpResponse extends Message<OkHttpResponse> {
  /**
   * HTTP entity headers in addition to the original request headers. This allows the authorization
   * service to append, to add or to override headers from the original request before
   * dispatching it to the upstream. Note that the `append` field in `HeaderValueOption` defaults to
   * false when used in this message. By setting the `append` field to `true`,
   * the filter will append the correspondent header value to the matched request header.
   * By leaving `append` as false, the filter will either add a new header, or override an existing
   * one if there is a match.
   *
   * @generated from field: repeated envoy.api.v2.core.HeaderValueOption headers = 2;
   */
  headers: HeaderValueOption[];

  constructor(data?: PartialMessage<OkHttpResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.auth.v2.OkHttpResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OkHttpResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OkHttpResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OkHttpResponse;

  static equals(a: OkHttpResponse | PlainMessage<OkHttpResponse> | undefined, b: OkHttpResponse | PlainMessage<OkHttpResponse> | undefined): boolean;
}

/**
 * Intended for gRPC and Network Authorization servers `only`.
 *
 * @generated from message envoy.service.auth.v2.CheckResponse
 */
export declare class CheckResponse extends Message<CheckResponse> {
  /**
   * Status `OK` allows the request. Any other status indicates the request should be denied.
   *
   * @generated from field: google.rpc.Status status = 1;
   */
  status?: Status;

  /**
   * An message that contains HTTP response attributes. This message is
   * used when the authorization service needs to send custom responses to the
   * downstream client or, to modify/add request headers being dispatched to the upstream.
   *
   * @generated from oneof envoy.service.auth.v2.CheckResponse.http_response
   */
  httpResponse: {
    /**
     * Supplies http attributes for a denied response.
     *
     * @generated from field: envoy.service.auth.v2.DeniedHttpResponse denied_response = 2;
     */
    value: DeniedHttpResponse;
    case: "deniedResponse";
  } | {
    /**
     * Supplies http attributes for an ok response.
     *
     * @generated from field: envoy.service.auth.v2.OkHttpResponse ok_response = 3;
     */
    value: OkHttpResponse;
    case: "okResponse";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<CheckResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.auth.v2.CheckResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckResponse;

  static equals(a: CheckResponse | PlainMessage<CheckResponse> | undefined, b: CheckResponse | PlainMessage<CheckResponse> | undefined): boolean;
}
