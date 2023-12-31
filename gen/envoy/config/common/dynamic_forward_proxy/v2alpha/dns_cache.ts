// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/config/common/dynamic_forward_proxy/v2alpha/dns_cache.proto" (package "envoy.config.common.dynamic_forward_proxy.v2alpha", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Cluster_RefreshRate } from "../../../../api/v2/cluster";
import { UInt32Value } from "../../../../../google/protobuf/wrappers";
import { Duration } from "../../../../../google/protobuf/duration";
import { Cluster_DnsLookupFamily } from "../../../../api/v2/cluster";
// [#protodoc-title: Dynamic forward proxy common configuration]

/**
 * Configuration for the dynamic forward proxy DNS cache. See the :ref:`architecture overview
 * <arch_overview_http_dynamic_forward_proxy>` for more information.
 * [#next-free-field: 7]
 *
 * @generated from protobuf message envoy.config.common.dynamic_forward_proxy.v2alpha.DnsCacheConfig
 */
export interface DnsCacheConfig {
    /**
     * The name of the cache. Multiple named caches allow independent dynamic forward proxy
     * configurations to operate within a single Envoy process using different configurations. All
     * configurations with the same name *must* otherwise have the same settings when referenced
     * from different configuration components. Configuration will fail to load if this is not
     * the case.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The DNS lookup family to use during resolution.
     *
     * [#comment:TODO(mattklein123): Figure out how to support IPv4/IPv6 "happy eyeballs" mode. The
     * way this might work is a new lookup family which returns both IPv4 and IPv6 addresses, and
     * then configures a host to have a primary and fall back address. With this, we could very
     * likely build a "happy eyeballs" connection pool which would race the primary / fall back
     * address and return the one that wins. This same method could potentially also be used for
     * QUIC to TCP fall back.]
     *
     * @generated from protobuf field: envoy.api.v2.Cluster.DnsLookupFamily dns_lookup_family = 2;
     */
    dnsLookupFamily: Cluster_DnsLookupFamily;
    /**
     * The DNS refresh rate for currently cached DNS hosts. If not specified defaults to 60s.
     *
     * .. note:
     *
     *  The returned DNS TTL is not currently used to alter the refresh rate. This feature will be
     *  added in a future change.
     *
     * .. note:
     *
     * The refresh rate is rounded to the closest millisecond, and must be at least 1ms.
     *
     * @generated from protobuf field: google.protobuf.Duration dns_refresh_rate = 3;
     */
    dnsRefreshRate?: Duration;
    /**
     * The TTL for hosts that are unused. Hosts that have not been used in the configured time
     * interval will be purged. If not specified defaults to 5m.
     *
     * .. note:
     *
     *   The TTL is only checked at the time of DNS refresh, as specified by *dns_refresh_rate*. This
     *   means that if the configured TTL is shorter than the refresh rate the host may not be removed
     *   immediately.
     *
     *  .. note:
     *
     *   The TTL has no relation to DNS TTL and is only used to control Envoy's resource usage.
     *
     * @generated from protobuf field: google.protobuf.Duration host_ttl = 4;
     */
    hostTtl?: Duration;
    /**
     * The maximum number of hosts that the cache will hold. If not specified defaults to 1024.
     *
     * .. note:
     *
     *   The implementation is approximate and enforced independently on each worker thread, thus
     *   it is possible for the maximum hosts in the cache to go slightly above the configured
     *   value depending on timing. This is similar to how other circuit breakers work.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value max_hosts = 5;
     */
    maxHosts?: UInt32Value;
    /**
     * If the DNS failure refresh rate is specified,
     * this is used as the cache's DNS refresh rate when DNS requests are failing. If this setting is
     * not specified, the failure refresh rate defaults to the dns_refresh_rate.
     *
     * @generated from protobuf field: envoy.api.v2.Cluster.RefreshRate dns_failure_refresh_rate = 6;
     */
    dnsFailureRefreshRate?: Cluster_RefreshRate;
}
// @generated message type with reflection information, may provide speed optimized methods
class DnsCacheConfig$Type extends MessageType<DnsCacheConfig> {
    constructor() {
        super("envoy.config.common.dynamic_forward_proxy.v2alpha.DnsCacheConfig", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 2, name: "dns_lookup_family", kind: "enum", T: () => ["envoy.api.v2.Cluster.DnsLookupFamily", Cluster_DnsLookupFamily], options: { "validate.rules": { enum: { definedOnly: true } } } },
            { no: 3, name: "dns_refresh_rate", kind: "message", T: () => Duration, options: { "validate.rules": { duration: { gte: { nanos: 1000000 } } } } },
            { no: 4, name: "host_ttl", kind: "message", T: () => Duration, options: { "validate.rules": { duration: { gt: {} } } } },
            { no: 5, name: "max_hosts", kind: "message", T: () => UInt32Value, options: { "validate.rules": { uint32: { gt: 0 } } } },
            { no: 6, name: "dns_failure_refresh_rate", kind: "message", T: () => Cluster_RefreshRate }
        ]);
    }
    create(value?: PartialMessage<DnsCacheConfig>): DnsCacheConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.dnsLookupFamily = 0;
        if (value !== undefined)
            reflectionMergePartial<DnsCacheConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DnsCacheConfig): DnsCacheConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* envoy.api.v2.Cluster.DnsLookupFamily dns_lookup_family */ 2:
                    message.dnsLookupFamily = reader.int32();
                    break;
                case /* google.protobuf.Duration dns_refresh_rate */ 3:
                    message.dnsRefreshRate = Duration.internalBinaryRead(reader, reader.uint32(), options, message.dnsRefreshRate);
                    break;
                case /* google.protobuf.Duration host_ttl */ 4:
                    message.hostTtl = Duration.internalBinaryRead(reader, reader.uint32(), options, message.hostTtl);
                    break;
                case /* google.protobuf.UInt32Value max_hosts */ 5:
                    message.maxHosts = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.maxHosts);
                    break;
                case /* envoy.api.v2.Cluster.RefreshRate dns_failure_refresh_rate */ 6:
                    message.dnsFailureRefreshRate = Cluster_RefreshRate.internalBinaryRead(reader, reader.uint32(), options, message.dnsFailureRefreshRate);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: DnsCacheConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* envoy.api.v2.Cluster.DnsLookupFamily dns_lookup_family = 2; */
        if (message.dnsLookupFamily !== 0)
            writer.tag(2, WireType.Varint).int32(message.dnsLookupFamily);
        /* google.protobuf.Duration dns_refresh_rate = 3; */
        if (message.dnsRefreshRate)
            Duration.internalBinaryWrite(message.dnsRefreshRate, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration host_ttl = 4; */
        if (message.hostTtl)
            Duration.internalBinaryWrite(message.hostTtl, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value max_hosts = 5; */
        if (message.maxHosts)
            UInt32Value.internalBinaryWrite(message.maxHosts, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* envoy.api.v2.Cluster.RefreshRate dns_failure_refresh_rate = 6; */
        if (message.dnsFailureRefreshRate)
            Cluster_RefreshRate.internalBinaryWrite(message.dnsFailureRefreshRate, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.common.dynamic_forward_proxy.v2alpha.DnsCacheConfig
 */
export const DnsCacheConfig = new DnsCacheConfig$Type();
