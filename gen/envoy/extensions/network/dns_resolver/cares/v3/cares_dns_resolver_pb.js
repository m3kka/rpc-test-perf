// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/network/dns_resolver/cares/v3/cares_dns_resolver.proto (package envoy.extensions.network.dns_resolver.cares.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Address } from "../../../../../config/core/v3/address_pb.js";
import { DnsResolverOptions } from "../../../../../config/core/v3/resolver_pb.js";

/**
 * Configuration for c-ares DNS resolver.
 *
 * @generated from message envoy.extensions.network.dns_resolver.cares.v3.CaresDnsResolverConfig
 */
export const CaresDnsResolverConfig = proto3.makeMessageType(
  "envoy.extensions.network.dns_resolver.cares.v3.CaresDnsResolverConfig",
  () => [
    { no: 1, name: "resolvers", kind: "message", T: Address, repeated: true },
    { no: 3, name: "use_resolvers_as_fallback", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "filter_unroutable_families", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "dns_resolver_options", kind: "message", T: DnsResolverOptions },
  ],
);

