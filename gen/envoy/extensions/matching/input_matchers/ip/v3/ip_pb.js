// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/matching/input_matchers/ip/v3/ip.proto (package envoy.extensions.matching.input_matchers.ip.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { CidrRange } from "../../../../../config/core/v3/address_pb.js";

/**
 * This input matcher matches IPv4 or IPv6 addresses against a list of CIDR
 * ranges. It returns true if and only if the input IP belongs to at least one
 * of these CIDR ranges. Internally, it uses a Level-Compressed trie, as
 * described in the paper `IP-address lookup using LC-tries
 * <https://www.nada.kth.se/~snilsson/publications/IP-address-lookup-using-LC-tries/>`_
 * by S. Nilsson and G. Karlsson. For "big" lists of IPs, this matcher is more
 * efficient than multiple single IP matcher, that would have a linear cost.
 *
 * @generated from message envoy.extensions.matching.input_matchers.ip.v3.Ip
 */
export const Ip = proto3.makeMessageType(
  "envoy.extensions.matching.input_matchers.ip.v3.Ip",
  () => [
    { no: 1, name: "cidr_ranges", kind: "message", T: CidrRange, repeated: true },
    { no: 2, name: "stat_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

