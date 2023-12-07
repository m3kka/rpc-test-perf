// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/common/dynamic_forward_proxy/v2alpha/dns_cache.proto (package envoy.config.common.dynamic_forward_proxy.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3, UInt32Value } from "@bufbuild/protobuf";
import { Cluster_DnsLookupFamily, Cluster_RefreshRate } from "../../../../api/v2/cluster_pb.js";

/**
 * Configuration for the dynamic forward proxy DNS cache. See the :ref:`architecture overview
 * <arch_overview_http_dynamic_forward_proxy>` for more information.
 * [#next-free-field: 7]
 *
 * @generated from message envoy.config.common.dynamic_forward_proxy.v2alpha.DnsCacheConfig
 */
export const DnsCacheConfig = proto3.makeMessageType(
  "envoy.config.common.dynamic_forward_proxy.v2alpha.DnsCacheConfig",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "dns_lookup_family", kind: "enum", T: proto3.getEnumType(Cluster_DnsLookupFamily) },
    { no: 3, name: "dns_refresh_rate", kind: "message", T: Duration },
    { no: 4, name: "host_ttl", kind: "message", T: Duration },
    { no: 5, name: "max_hosts", kind: "message", T: UInt32Value },
    { no: 6, name: "dns_failure_refresh_rate", kind: "message", T: Cluster_RefreshRate },
  ],
);
