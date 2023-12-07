// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/data/dns/v2alpha/dns_table.proto (package envoy.data.dns.v2alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3 } from "@bufbuild/protobuf";
import { StringMatcher } from "../../../type/matcher/string_pb.js";

/**
 * This message contains the configuration for the DNS Filter if populated
 * from the control plane
 *
 * @generated from message envoy.data.dns.v2alpha.DnsTable
 */
export const DnsTable = proto3.makeMessageType(
  "envoy.data.dns.v2alpha.DnsTable",
  () => [
    { no: 1, name: "external_retry_count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "virtual_domains", kind: "message", T: DnsTable_DnsVirtualDomain, repeated: true },
    { no: 3, name: "known_suffixes", kind: "message", T: StringMatcher, repeated: true },
  ],
);

/**
 * This message contains a list of IP addresses returned for a query for a known name
 *
 * @generated from message envoy.data.dns.v2alpha.DnsTable.AddressList
 */
export const DnsTable_AddressList = proto3.makeMessageType(
  "envoy.data.dns.v2alpha.DnsTable.AddressList",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "DnsTable_AddressList"},
);

/**
 * This message type is extensible and can contain a list of addresses
 * or dictate some other method for resolving the addresses for an
 * endpoint
 *
 * @generated from message envoy.data.dns.v2alpha.DnsTable.DnsEndpoint
 */
export const DnsTable_DnsEndpoint = proto3.makeMessageType(
  "envoy.data.dns.v2alpha.DnsTable.DnsEndpoint",
  () => [
    { no: 1, name: "address_list", kind: "message", T: DnsTable_AddressList, oneof: "endpoint_config" },
  ],
  {localName: "DnsTable_DnsEndpoint"},
);

/**
 * @generated from message envoy.data.dns.v2alpha.DnsTable.DnsVirtualDomain
 */
export const DnsTable_DnsVirtualDomain = proto3.makeMessageType(
  "envoy.data.dns.v2alpha.DnsTable.DnsVirtualDomain",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "endpoint", kind: "message", T: DnsTable_DnsEndpoint },
    { no: 3, name: "answer_ttl", kind: "message", T: Duration },
  ],
  {localName: "DnsTable_DnsVirtualDomain"},
);

