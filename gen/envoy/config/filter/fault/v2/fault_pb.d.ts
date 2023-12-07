// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/filter/fault/v2/fault.proto (package envoy.config.filter.fault.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { FractionalPercent } from "../../../../type/percent_pb.js";

/**
 * Delay specification is used to inject latency into the
 * HTTP/gRPC/Mongo/Redis operation or delay proxying of TCP connections.
 * [#next-free-field: 6]
 *
 * @generated from message envoy.config.filter.fault.v2.FaultDelay
 */
export declare class FaultDelay extends Message<FaultDelay> {
  /**
   * Unused and deprecated. Will be removed in the next release.
   *
   * @generated from field: envoy.config.filter.fault.v2.FaultDelay.FaultDelayType type = 1 [deprecated = true];
   * @deprecated
   */
  type: FaultDelay_FaultDelayType;

  /**
   * @generated from oneof envoy.config.filter.fault.v2.FaultDelay.fault_delay_secifier
   */
  faultDelaySecifier: {
    /**
     * Add a fixed delay before forwarding the operation upstream. See
     * https://developers.google.com/protocol-buffers/docs/proto3#json for
     * the JSON/YAML Duration mapping. For HTTP/Mongo/Redis, the specified
     * delay will be injected before a new request/operation. For TCP
     * connections, the proxying of the connection upstream will be delayed
     * for the specified period. This is required if type is FIXED.
     *
     * @generated from field: google.protobuf.Duration fixed_delay = 3;
     */
    value: Duration;
    case: "fixedDelay";
  } | {
    /**
     * Fault delays are controlled via an HTTP header (if applicable).
     *
     * @generated from field: envoy.config.filter.fault.v2.FaultDelay.HeaderDelay header_delay = 5;
     */
    value: FaultDelay_HeaderDelay;
    case: "headerDelay";
  } | { case: undefined; value?: undefined };

  /**
   * The percentage of operations/connections/requests on which the delay will be injected.
   *
   * @generated from field: envoy.type.FractionalPercent percentage = 4;
   */
  percentage?: FractionalPercent;

  constructor(data?: PartialMessage<FaultDelay>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.fault.v2.FaultDelay";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FaultDelay;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FaultDelay;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FaultDelay;

  static equals(a: FaultDelay | PlainMessage<FaultDelay> | undefined, b: FaultDelay | PlainMessage<FaultDelay> | undefined): boolean;
}

/**
 * @generated from enum envoy.config.filter.fault.v2.FaultDelay.FaultDelayType
 */
export declare enum FaultDelay_FaultDelayType {
  /**
   * Unused and deprecated.
   *
   * @generated from enum value: FIXED = 0;
   */
  FIXED = 0,
}

/**
 * Fault delays are controlled via an HTTP header (if applicable). See the
 * :ref:`HTTP fault filter <config_http_filters_fault_injection_http_header>` documentation for
 * more information.
 *
 * @generated from message envoy.config.filter.fault.v2.FaultDelay.HeaderDelay
 */
export declare class FaultDelay_HeaderDelay extends Message<FaultDelay_HeaderDelay> {
  constructor(data?: PartialMessage<FaultDelay_HeaderDelay>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.fault.v2.FaultDelay.HeaderDelay";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FaultDelay_HeaderDelay;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FaultDelay_HeaderDelay;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FaultDelay_HeaderDelay;

  static equals(a: FaultDelay_HeaderDelay | PlainMessage<FaultDelay_HeaderDelay> | undefined, b: FaultDelay_HeaderDelay | PlainMessage<FaultDelay_HeaderDelay> | undefined): boolean;
}

/**
 * Describes a rate limit to be applied.
 *
 * @generated from message envoy.config.filter.fault.v2.FaultRateLimit
 */
export declare class FaultRateLimit extends Message<FaultRateLimit> {
  /**
   * @generated from oneof envoy.config.filter.fault.v2.FaultRateLimit.limit_type
   */
  limitType: {
    /**
     * A fixed rate limit.
     *
     * @generated from field: envoy.config.filter.fault.v2.FaultRateLimit.FixedLimit fixed_limit = 1;
     */
    value: FaultRateLimit_FixedLimit;
    case: "fixedLimit";
  } | {
    /**
     * Rate limits are controlled via an HTTP header (if applicable).
     *
     * @generated from field: envoy.config.filter.fault.v2.FaultRateLimit.HeaderLimit header_limit = 3;
     */
    value: FaultRateLimit_HeaderLimit;
    case: "headerLimit";
  } | { case: undefined; value?: undefined };

  /**
   * The percentage of operations/connections/requests on which the rate limit will be injected.
   *
   * @generated from field: envoy.type.FractionalPercent percentage = 2;
   */
  percentage?: FractionalPercent;

  constructor(data?: PartialMessage<FaultRateLimit>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.fault.v2.FaultRateLimit";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FaultRateLimit;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FaultRateLimit;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FaultRateLimit;

  static equals(a: FaultRateLimit | PlainMessage<FaultRateLimit> | undefined, b: FaultRateLimit | PlainMessage<FaultRateLimit> | undefined): boolean;
}

/**
 * Describes a fixed/constant rate limit.
 *
 * @generated from message envoy.config.filter.fault.v2.FaultRateLimit.FixedLimit
 */
export declare class FaultRateLimit_FixedLimit extends Message<FaultRateLimit_FixedLimit> {
  /**
   * The limit supplied in KiB/s.
   *
   * @generated from field: uint64 limit_kbps = 1;
   */
  limitKbps: bigint;

  constructor(data?: PartialMessage<FaultRateLimit_FixedLimit>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.fault.v2.FaultRateLimit.FixedLimit";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FaultRateLimit_FixedLimit;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FaultRateLimit_FixedLimit;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FaultRateLimit_FixedLimit;

  static equals(a: FaultRateLimit_FixedLimit | PlainMessage<FaultRateLimit_FixedLimit> | undefined, b: FaultRateLimit_FixedLimit | PlainMessage<FaultRateLimit_FixedLimit> | undefined): boolean;
}

/**
 * Rate limits are controlled via an HTTP header (if applicable). See the
 * :ref:`HTTP fault filter <config_http_filters_fault_injection_http_header>` documentation for
 * more information.
 *
 * @generated from message envoy.config.filter.fault.v2.FaultRateLimit.HeaderLimit
 */
export declare class FaultRateLimit_HeaderLimit extends Message<FaultRateLimit_HeaderLimit> {
  constructor(data?: PartialMessage<FaultRateLimit_HeaderLimit>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.config.filter.fault.v2.FaultRateLimit.HeaderLimit";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FaultRateLimit_HeaderLimit;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FaultRateLimit_HeaderLimit;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FaultRateLimit_HeaderLimit;

  static equals(a: FaultRateLimit_HeaderLimit | PlainMessage<FaultRateLimit_HeaderLimit> | undefined, b: FaultRateLimit_HeaderLimit | PlainMessage<FaultRateLimit_HeaderLimit> | undefined): boolean;
}

