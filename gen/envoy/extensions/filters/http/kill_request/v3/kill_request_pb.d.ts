// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/filters/http/kill_request/v3/kill_request.proto (package envoy.extensions.filters.http.kill_request.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { FractionalPercent } from "../../../../../type/v3/percent_pb.js";

/**
 * Configuration for KillRequest filter.
 *
 * @generated from message envoy.extensions.filters.http.kill_request.v3.KillRequest
 */
export declare class KillRequest extends Message<KillRequest> {
  /**
   * The probability that a Kill request will be triggered.
   *
   * @generated from field: envoy.type.v3.FractionalPercent probability = 1;
   */
  probability?: FractionalPercent;

  /**
   * The name of the kill request header. If this field is not empty, it will override the :ref:`default header <config_http_filters_kill_request_http_header>` name. Otherwise the default header name will be used.
   *
   * @generated from field: string kill_request_header = 2;
   */
  killRequestHeader: string;

  /**
   * @generated from field: envoy.extensions.filters.http.kill_request.v3.KillRequest.Direction direction = 3;
   */
  direction: KillRequest_Direction;

  constructor(data?: PartialMessage<KillRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.extensions.filters.http.kill_request.v3.KillRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KillRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KillRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KillRequest;

  static equals(a: KillRequest | PlainMessage<KillRequest> | undefined, b: KillRequest | PlainMessage<KillRequest> | undefined): boolean;
}

/**
 * On which direction should the filter check for the ``kill_request_header``.
 * Default to ``REQUEST`` if unspecified.
 *
 * @generated from enum envoy.extensions.filters.http.kill_request.v3.KillRequest.Direction
 */
export declare enum KillRequest_Direction {
  /**
   * @generated from enum value: REQUEST = 0;
   */
  REQUEST = 0,

  /**
   * @generated from enum value: RESPONSE = 1;
   */
  RESPONSE = 1,
}

