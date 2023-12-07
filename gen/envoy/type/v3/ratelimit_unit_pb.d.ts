// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/type/v3/ratelimit_unit.proto (package envoy.type.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * Identifies the unit of of time for rate limit.
 *
 * @generated from enum envoy.type.v3.RateLimitUnit
 */
export declare enum RateLimitUnit {
  /**
   * The time unit is not known.
   *
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * The time unit representing a second.
   *
   * @generated from enum value: SECOND = 1;
   */
  SECOND = 1,

  /**
   * The time unit representing a minute.
   *
   * @generated from enum value: MINUTE = 2;
   */
  MINUTE = 2,

  /**
   * The time unit representing an hour.
   *
   * @generated from enum value: HOUR = 3;
   */
  HOUR = 3,

  /**
   * The time unit representing a day.
   *
   * @generated from enum value: DAY = 4;
   */
  DAY = 4,

  /**
   * The time unit representing a month.
   *
   * @generated from enum value: MONTH = 5;
   */
  MONTH = 5,

  /**
   * The time unit representing a year.
   *
   * @generated from enum value: YEAR = 6;
   */
  YEAR = 6,
}

