// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/network/dns_resolver/apple/v3/apple_dns_resolver.proto (package envoy.extensions.network.dns_resolver.apple.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Configuration for apple DNS resolver.
 *
 * @generated from message envoy.extensions.network.dns_resolver.apple.v3.AppleDnsResolverConfig
 */
export const AppleDnsResolverConfig = proto3.makeMessageType(
  "envoy.extensions.network.dns_resolver.apple.v3.AppleDnsResolverConfig",
  () => [
    { no: 1, name: "include_unroutable_families", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

