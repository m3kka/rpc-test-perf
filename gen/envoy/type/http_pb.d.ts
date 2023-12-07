// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/type/http.proto (package envoy.type, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from enum envoy.type.CodecClientType
 */
export declare enum CodecClientType {
  /**
   * @generated from enum value: HTTP1 = 0;
   */
  HTTP1 = 0,

  /**
   * @generated from enum value: HTTP2 = 1;
   */
  HTTP2 = 1,

  /**
   * [#not-implemented-hide:] QUIC implementation is not production ready yet. Use this enum with
   * caution to prevent accidental execution of QUIC code. I.e. `!= HTTP2` is no longer sufficient
   * to distinguish HTTP1 and HTTP2 traffic.
   *
   * @generated from enum value: HTTP3 = 2;
   */
  HTTP3 = 2,
}
