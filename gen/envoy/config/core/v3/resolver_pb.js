// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/core/v3/resolver.proto (package envoy.config.core.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Address } from "./address_pb.js";

/**
 * Configuration of DNS resolver option flags which control the behavior of the DNS resolver.
 *
 * @generated from message envoy.config.core.v3.DnsResolverOptions
 */
export const DnsResolverOptions = proto3.makeMessageType(
  "envoy.config.core.v3.DnsResolverOptions",
  () => [
    { no: 1, name: "use_tcp_for_dns_lookups", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "no_default_search_domain", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * DNS resolution configuration which includes the underlying dns resolver addresses and options.
 *
 * @generated from message envoy.config.core.v3.DnsResolutionConfig
 */
export const DnsResolutionConfig = proto3.makeMessageType(
  "envoy.config.core.v3.DnsResolutionConfig",
  () => [
    { no: 1, name: "resolvers", kind: "message", T: Address, repeated: true },
    { no: 2, name: "dns_resolver_options", kind: "message", T: DnsResolverOptions },
  ],
);

