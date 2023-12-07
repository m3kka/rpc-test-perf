// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/data/core/v2alpha/health_check_event.proto (package envoy.data.core.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Address } from "../../../api/v2/core/address_pb.js";

/**
 * @generated from enum envoy.data.core.v2alpha.HealthCheckFailureType
 */
export declare enum HealthCheckFailureType {
  /**
   * @generated from enum value: ACTIVE = 0;
   */
  ACTIVE = 0,

  /**
   * @generated from enum value: PASSIVE = 1;
   */
  PASSIVE = 1,

  /**
   * @generated from enum value: NETWORK = 2;
   */
  NETWORK = 2,
}

/**
 * @generated from enum envoy.data.core.v2alpha.HealthCheckerType
 */
export declare enum HealthCheckerType {
  /**
   * @generated from enum value: HTTP = 0;
   */
  HTTP = 0,

  /**
   * @generated from enum value: TCP = 1;
   */
  TCP = 1,

  /**
   * @generated from enum value: GRPC = 2;
   */
  GRPC = 2,

  /**
   * @generated from enum value: REDIS = 3;
   */
  REDIS = 3,
}

/**
 * [#next-free-field: 10]
 *
 * @generated from message envoy.data.core.v2alpha.HealthCheckEvent
 */
export declare class HealthCheckEvent extends Message<HealthCheckEvent> {
  /**
   * @generated from field: envoy.data.core.v2alpha.HealthCheckerType health_checker_type = 1;
   */
  healthCheckerType: HealthCheckerType;

  /**
   * @generated from field: envoy.api.v2.core.Address host = 2;
   */
  host?: Address;

  /**
   * @generated from field: string cluster_name = 3;
   */
  clusterName: string;

  /**
   * @generated from oneof envoy.data.core.v2alpha.HealthCheckEvent.event
   */
  event: {
    /**
     * Host ejection.
     *
     * @generated from field: envoy.data.core.v2alpha.HealthCheckEjectUnhealthy eject_unhealthy_event = 4;
     */
    value: HealthCheckEjectUnhealthy;
    case: "ejectUnhealthyEvent";
  } | {
    /**
     * Host addition.
     *
     * @generated from field: envoy.data.core.v2alpha.HealthCheckAddHealthy add_healthy_event = 5;
     */
    value: HealthCheckAddHealthy;
    case: "addHealthyEvent";
  } | {
    /**
     * Host failure.
     *
     * @generated from field: envoy.data.core.v2alpha.HealthCheckFailure health_check_failure_event = 7;
     */
    value: HealthCheckFailure;
    case: "healthCheckFailureEvent";
  } | {
    /**
     * Healthy host became degraded.
     *
     * @generated from field: envoy.data.core.v2alpha.DegradedHealthyHost degraded_healthy_host = 8;
     */
    value: DegradedHealthyHost;
    case: "degradedHealthyHost";
  } | {
    /**
     * A degraded host returned to being healthy.
     *
     * @generated from field: envoy.data.core.v2alpha.NoLongerDegradedHost no_longer_degraded_host = 9;
     */
    value: NoLongerDegradedHost;
    case: "noLongerDegradedHost";
  } | { case: undefined; value?: undefined };

  /**
   * Timestamp for event.
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 6;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<HealthCheckEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.data.core.v2alpha.HealthCheckEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckEvent;

  static equals(a: HealthCheckEvent | PlainMessage<HealthCheckEvent> | undefined, b: HealthCheckEvent | PlainMessage<HealthCheckEvent> | undefined): boolean;
}

/**
 * @generated from message envoy.data.core.v2alpha.HealthCheckEjectUnhealthy
 */
export declare class HealthCheckEjectUnhealthy extends Message<HealthCheckEjectUnhealthy> {
  /**
   * The type of failure that caused this ejection.
   *
   * @generated from field: envoy.data.core.v2alpha.HealthCheckFailureType failure_type = 1;
   */
  failureType: HealthCheckFailureType;

  constructor(data?: PartialMessage<HealthCheckEjectUnhealthy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.data.core.v2alpha.HealthCheckEjectUnhealthy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckEjectUnhealthy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckEjectUnhealthy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckEjectUnhealthy;

  static equals(a: HealthCheckEjectUnhealthy | PlainMessage<HealthCheckEjectUnhealthy> | undefined, b: HealthCheckEjectUnhealthy | PlainMessage<HealthCheckEjectUnhealthy> | undefined): boolean;
}

/**
 * @generated from message envoy.data.core.v2alpha.HealthCheckAddHealthy
 */
export declare class HealthCheckAddHealthy extends Message<HealthCheckAddHealthy> {
  /**
   * Whether this addition is the result of the first ever health check on a host, in which case
   * the configured :ref:`healthy threshold <envoy_api_field_core.HealthCheck.healthy_threshold>`
   * is bypassed and the host is immediately added.
   *
   * @generated from field: bool first_check = 1;
   */
  firstCheck: boolean;

  constructor(data?: PartialMessage<HealthCheckAddHealthy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.data.core.v2alpha.HealthCheckAddHealthy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckAddHealthy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckAddHealthy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckAddHealthy;

  static equals(a: HealthCheckAddHealthy | PlainMessage<HealthCheckAddHealthy> | undefined, b: HealthCheckAddHealthy | PlainMessage<HealthCheckAddHealthy> | undefined): boolean;
}

/**
 * @generated from message envoy.data.core.v2alpha.HealthCheckFailure
 */
export declare class HealthCheckFailure extends Message<HealthCheckFailure> {
  /**
   * The type of failure that caused this event.
   *
   * @generated from field: envoy.data.core.v2alpha.HealthCheckFailureType failure_type = 1;
   */
  failureType: HealthCheckFailureType;

  /**
   * Whether this event is the result of the first ever health check on a host.
   *
   * @generated from field: bool first_check = 2;
   */
  firstCheck: boolean;

  constructor(data?: PartialMessage<HealthCheckFailure>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.data.core.v2alpha.HealthCheckFailure";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckFailure;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckFailure;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckFailure;

  static equals(a: HealthCheckFailure | PlainMessage<HealthCheckFailure> | undefined, b: HealthCheckFailure | PlainMessage<HealthCheckFailure> | undefined): boolean;
}

/**
 * @generated from message envoy.data.core.v2alpha.DegradedHealthyHost
 */
export declare class DegradedHealthyHost extends Message<DegradedHealthyHost> {
  constructor(data?: PartialMessage<DegradedHealthyHost>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.data.core.v2alpha.DegradedHealthyHost";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DegradedHealthyHost;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DegradedHealthyHost;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DegradedHealthyHost;

  static equals(a: DegradedHealthyHost | PlainMessage<DegradedHealthyHost> | undefined, b: DegradedHealthyHost | PlainMessage<DegradedHealthyHost> | undefined): boolean;
}

/**
 * @generated from message envoy.data.core.v2alpha.NoLongerDegradedHost
 */
export declare class NoLongerDegradedHost extends Message<NoLongerDegradedHost> {
  constructor(data?: PartialMessage<NoLongerDegradedHost>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.data.core.v2alpha.NoLongerDegradedHost";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NoLongerDegradedHost;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NoLongerDegradedHost;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NoLongerDegradedHost;

  static equals(a: NoLongerDegradedHost | PlainMessage<NoLongerDegradedHost> | undefined, b: NoLongerDegradedHost | PlainMessage<NoLongerDegradedHost> | undefined): boolean;
}

