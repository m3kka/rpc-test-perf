// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/core/v3/address.proto (package envoy.config.core.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BoolValue, proto3, UInt32Value } from "@bufbuild/protobuf";
import { SocketOption, SocketOptionsOverride } from "./socket_option_pb.js";

/**
 * @generated from message envoy.config.core.v3.Pipe
 */
export const Pipe = proto3.makeMessageType(
  "envoy.config.core.v3.Pipe",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "mode", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * The address represents an envoy internal listener.
 * [#comment: TODO(asraa): When address available, remove workaround from test/server/server_fuzz_test.cc:30.]
 *
 * @generated from message envoy.config.core.v3.EnvoyInternalAddress
 */
export const EnvoyInternalAddress = proto3.makeMessageType(
  "envoy.config.core.v3.EnvoyInternalAddress",
  () => [
    { no: 1, name: "server_listener_name", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "address_name_specifier" },
    { no: 2, name: "endpoint_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * [#next-free-field: 7]
 *
 * @generated from message envoy.config.core.v3.SocketAddress
 */
export const SocketAddress = proto3.makeMessageType(
  "envoy.config.core.v3.SocketAddress",
  () => [
    { no: 1, name: "protocol", kind: "enum", T: proto3.getEnumType(SocketAddress_Protocol) },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "port_value", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "port_specifier" },
    { no: 4, name: "named_port", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "port_specifier" },
    { no: 5, name: "resolver_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "ipv4_compat", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from enum envoy.config.core.v3.SocketAddress.Protocol
 */
export const SocketAddress_Protocol = proto3.makeEnum(
  "envoy.config.core.v3.SocketAddress.Protocol",
  [
    {no: 0, name: "TCP"},
    {no: 1, name: "UDP"},
  ],
);

/**
 * @generated from message envoy.config.core.v3.TcpKeepalive
 */
export const TcpKeepalive = proto3.makeMessageType(
  "envoy.config.core.v3.TcpKeepalive",
  () => [
    { no: 1, name: "keepalive_probes", kind: "message", T: UInt32Value },
    { no: 2, name: "keepalive_time", kind: "message", T: UInt32Value },
    { no: 3, name: "keepalive_interval", kind: "message", T: UInt32Value },
  ],
);

/**
 * @generated from message envoy.config.core.v3.ExtraSourceAddress
 */
export const ExtraSourceAddress = proto3.makeMessageType(
  "envoy.config.core.v3.ExtraSourceAddress",
  () => [
    { no: 1, name: "address", kind: "message", T: SocketAddress },
    { no: 2, name: "socket_options", kind: "message", T: SocketOptionsOverride },
  ],
);

/**
 * [#next-free-field: 6]
 *
 * @generated from message envoy.config.core.v3.BindConfig
 */
export const BindConfig = proto3.makeMessageType(
  "envoy.config.core.v3.BindConfig",
  () => [
    { no: 1, name: "source_address", kind: "message", T: SocketAddress },
    { no: 2, name: "freebind", kind: "message", T: BoolValue },
    { no: 3, name: "socket_options", kind: "message", T: SocketOption, repeated: true },
    { no: 5, name: "extra_source_addresses", kind: "message", T: ExtraSourceAddress, repeated: true },
    { no: 4, name: "additional_source_addresses", kind: "message", T: SocketAddress, repeated: true },
  ],
);

/**
 * Addresses specify either a logical or physical address and port, which are
 * used to tell Envoy where to bind/listen, connect to upstream and find
 * management servers.
 *
 * @generated from message envoy.config.core.v3.Address
 */
export const Address = proto3.makeMessageType(
  "envoy.config.core.v3.Address",
  () => [
    { no: 1, name: "socket_address", kind: "message", T: SocketAddress, oneof: "address" },
    { no: 2, name: "pipe", kind: "message", T: Pipe, oneof: "address" },
    { no: 3, name: "envoy_internal_address", kind: "message", T: EnvoyInternalAddress, oneof: "address" },
  ],
);

/**
 * CidrRange specifies an IP Address and a prefix length to construct
 * the subnet mask for a `CIDR <https://tools.ietf.org/html/rfc4632>`_ range.
 *
 * @generated from message envoy.config.core.v3.CidrRange
 */
export const CidrRange = proto3.makeMessageType(
  "envoy.config.core.v3.CidrRange",
  () => [
    { no: 1, name: "address_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "prefix_len", kind: "message", T: UInt32Value },
  ],
);

