// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/common/dynamic_forward_proxy/v3/dns_cache.proto" (package "envoy.extensions.common.dynamic_forward_proxy.v3", syntax proto3)
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
import { KeyValueStoreConfig } from "../../../../config/common/key_value/v3/config";
import { SocketAddress } from "../../../../config/core/v3/address";
import { TypedExtensionConfig } from "../../../../config/core/v3/extension";
import { DnsResolutionConfig } from "../../../../config/core/v3/resolver";
import { Cluster_RefreshRate } from "../../../../config/cluster/v3/cluster";
import { Duration } from "../../../../../google/protobuf/duration";
import { Cluster_DnsLookupFamily } from "../../../../config/cluster/v3/cluster";
import { UInt32Value } from "../../../../../google/protobuf/wrappers";
// [#protodoc-title: Dynamic forward proxy common configuration]

/**
 * Configuration of circuit breakers for resolver.
 *
 * @generated from protobuf message envoy.extensions.common.dynamic_forward_proxy.v3.DnsCacheCircuitBreakers
 */
export interface DnsCacheCircuitBreakers {
    /**
     * The maximum number of pending requests that Envoy will allow to the
     * resolver. If not specified, the default is 1024.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value max_pending_requests = 1;
     */
    maxPendingRequests?: UInt32Value;
}
/**
 * Configuration for the dynamic forward proxy DNS cache. See the :ref:`architecture overview
 * <arch_overview_http_dynamic_forward_proxy>` for more information.
 * [#next-free-field: 15]
 *
 * @generated from protobuf message envoy.extensions.common.dynamic_forward_proxy.v3.DnsCacheConfig
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
     * @generated from protobuf field: envoy.config.cluster.v3.Cluster.DnsLookupFamily dns_lookup_family = 2;
     */
    dnsLookupFamily: Cluster_DnsLookupFamily;
    /**
     * The DNS refresh rate for unresolved DNS hosts. If not specified defaults to 60s.
     *
     * The refresh rate is rounded to the closest millisecond, and must be at least 1ms.
     *
     * Once a host has been resolved, the refresh rate will be the DNS TTL, capped
     * at a minimum of ``dns_min_refresh_rate``.
     *
     * @generated from protobuf field: google.protobuf.Duration dns_refresh_rate = 3;
     */
    dnsRefreshRate?: Duration;
    /**
     * The minimum rate that DNS resolution will occur. Per ``dns_refresh_rate``, once a host is
     * resolved, the DNS TTL will be used, with a minimum set by ``dns_min_refresh_rate``.
     * ``dns_min_refresh_rate`` defaults to 5s and must also be >= 5s.
     *
     * @generated from protobuf field: google.protobuf.Duration dns_min_refresh_rate = 14;
     */
    dnsMinRefreshRate?: Duration;
    /**
     * The TTL for hosts that are unused. Hosts that have not been used in the configured time
     * interval will be purged. If not specified defaults to 5m.
     *
     * .. note:
     *
     *   The TTL is only checked at the time of DNS refresh, as specified by ``dns_refresh_rate``. This
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
     * @generated from protobuf field: envoy.config.cluster.v3.Cluster.RefreshRate dns_failure_refresh_rate = 6;
     */
    dnsFailureRefreshRate?: Cluster_RefreshRate;
    /**
     * The config of circuit breakers for resolver. It provides a configurable threshold.
     * Envoy will use dns cache circuit breakers with default settings even if this value is not set.
     *
     * @generated from protobuf field: envoy.extensions.common.dynamic_forward_proxy.v3.DnsCacheCircuitBreakers dns_cache_circuit_breaker = 7;
     */
    dnsCacheCircuitBreaker?: DnsCacheCircuitBreakers;
    /**
     * Always use TCP queries instead of UDP queries for DNS lookups.
     * This field is deprecated in favor of ``dns_resolution_config``
     * which aggregates all of the DNS resolver configuration in a single message.
     *
     * @deprecated
     * @generated from protobuf field: bool use_tcp_for_dns_lookups = 8 [deprecated = true];
     */
    useTcpForDnsLookups: boolean;
    /**
     * DNS resolution configuration which includes the underlying dns resolver addresses and options.
     * This field is deprecated in favor of
     * :ref:`typed_dns_resolver_config <envoy_v3_api_field_extensions.common.dynamic_forward_proxy.v3.DnsCacheConfig.typed_dns_resolver_config>`.
     *
     * @deprecated
     * @generated from protobuf field: envoy.config.core.v3.DnsResolutionConfig dns_resolution_config = 9 [deprecated = true];
     */
    dnsResolutionConfig?: DnsResolutionConfig;
    /**
     * DNS resolver type configuration extension. This extension can be used to configure c-ares, apple,
     * or any other DNS resolver types and the related parameters.
     * For example, an object of
     * :ref:`CaresDnsResolverConfig <envoy_v3_api_msg_extensions.network.dns_resolver.cares.v3.CaresDnsResolverConfig>`
     * can be packed into this ``typed_dns_resolver_config``. This configuration replaces the
     * :ref:`dns_resolution_config <envoy_v3_api_field_extensions.common.dynamic_forward_proxy.v3.DnsCacheConfig.dns_resolution_config>`
     * configuration.
     * During the transition period when both ``dns_resolution_config`` and ``typed_dns_resolver_config`` exists,
     * when ``typed_dns_resolver_config`` is in place, Envoy will use it and ignore ``dns_resolution_config``.
     * When ``typed_dns_resolver_config`` is missing, the default behavior is in place.
     * [#extension-category: envoy.network.dns_resolver]
     *
     * @generated from protobuf field: envoy.config.core.v3.TypedExtensionConfig typed_dns_resolver_config = 12;
     */
    typedDnsResolverConfig?: TypedExtensionConfig;
    /**
     * Hostnames that should be preresolved into the cache upon creation. This might provide a
     * performance improvement, in the form of cache hits, for hostnames that are going to be
     * resolved during steady state and are known at config load time.
     *
     * @generated from protobuf field: repeated envoy.config.core.v3.SocketAddress preresolve_hostnames = 10;
     */
    preresolveHostnames: SocketAddress[];
    /**
     * The timeout used for DNS queries. This timeout is independent of any timeout and retry policy
     * used by the underlying DNS implementation (e.g., c-areas and Apple DNS) which are opaque.
     * Setting this timeout will ensure that queries succeed or fail within the specified time frame
     * and are then retried using the standard refresh rates. Defaults to 5s if not set.
     *
     * @generated from protobuf field: google.protobuf.Duration dns_query_timeout = 11;
     */
    dnsQueryTimeout?: Duration;
    /**
     * Configuration to flush the DNS cache to long term storage.
     *
     * @generated from protobuf field: envoy.config.common.key_value.v3.KeyValueStoreConfig key_value_config = 13;
     */
    keyValueConfig?: KeyValueStoreConfig;
}
// @generated message type with reflection information, may provide speed optimized methods
class DnsCacheCircuitBreakers$Type extends MessageType<DnsCacheCircuitBreakers> {
    constructor() {
        super("envoy.extensions.common.dynamic_forward_proxy.v3.DnsCacheCircuitBreakers", [
            { no: 1, name: "max_pending_requests", kind: "message", T: () => UInt32Value }
        ]);
    }
    create(value?: PartialMessage<DnsCacheCircuitBreakers>): DnsCacheCircuitBreakers {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<DnsCacheCircuitBreakers>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DnsCacheCircuitBreakers): DnsCacheCircuitBreakers {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.UInt32Value max_pending_requests */ 1:
                    message.maxPendingRequests = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.maxPendingRequests);
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
    internalBinaryWrite(message: DnsCacheCircuitBreakers, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.UInt32Value max_pending_requests = 1; */
        if (message.maxPendingRequests)
            UInt32Value.internalBinaryWrite(message.maxPendingRequests, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.common.dynamic_forward_proxy.v3.DnsCacheCircuitBreakers
 */
export const DnsCacheCircuitBreakers = new DnsCacheCircuitBreakers$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DnsCacheConfig$Type extends MessageType<DnsCacheConfig> {
    constructor() {
        super("envoy.extensions.common.dynamic_forward_proxy.v3.DnsCacheConfig", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "dns_lookup_family", kind: "enum", T: () => ["envoy.config.cluster.v3.Cluster.DnsLookupFamily", Cluster_DnsLookupFamily], options: { "validate.rules": { enum: { definedOnly: true } } } },
            { no: 3, name: "dns_refresh_rate", kind: "message", T: () => Duration, options: { "validate.rules": { duration: { gte: { nanos: 1000000 } } } } },
            { no: 14, name: "dns_min_refresh_rate", kind: "message", T: () => Duration, options: { "validate.rules": { duration: { gte: { seconds: "5" } } } } },
            { no: 4, name: "host_ttl", kind: "message", T: () => Duration, options: { "validate.rules": { duration: { gt: {} } } } },
            { no: 5, name: "max_hosts", kind: "message", T: () => UInt32Value, options: { "validate.rules": { uint32: { gt: 0 } } } },
            { no: 6, name: "dns_failure_refresh_rate", kind: "message", T: () => Cluster_RefreshRate },
            { no: 7, name: "dns_cache_circuit_breaker", kind: "message", T: () => DnsCacheCircuitBreakers },
            { no: 8, name: "use_tcp_for_dns_lookups", kind: "scalar", T: 8 /*ScalarType.BOOL*/, options: { "envoy.annotations.deprecated_at_minor_version": "3.0" } },
            { no: 9, name: "dns_resolution_config", kind: "message", T: () => DnsResolutionConfig, options: { "envoy.annotations.deprecated_at_minor_version": "3.0" } },
            { no: 12, name: "typed_dns_resolver_config", kind: "message", T: () => TypedExtensionConfig },
            { no: 10, name: "preresolve_hostnames", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SocketAddress },
            { no: 11, name: "dns_query_timeout", kind: "message", T: () => Duration, options: { "validate.rules": { duration: { gt: {} } } } },
            { no: 13, name: "key_value_config", kind: "message", T: () => KeyValueStoreConfig }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.common.dynamic_forward_proxy.v2alpha.DnsCacheConfig" } });
    }
    create(value?: PartialMessage<DnsCacheConfig>): DnsCacheConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.dnsLookupFamily = 0;
        message.useTcpForDnsLookups = false;
        message.preresolveHostnames = [];
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
                case /* envoy.config.cluster.v3.Cluster.DnsLookupFamily dns_lookup_family */ 2:
                    message.dnsLookupFamily = reader.int32();
                    break;
                case /* google.protobuf.Duration dns_refresh_rate */ 3:
                    message.dnsRefreshRate = Duration.internalBinaryRead(reader, reader.uint32(), options, message.dnsRefreshRate);
                    break;
                case /* google.protobuf.Duration dns_min_refresh_rate */ 14:
                    message.dnsMinRefreshRate = Duration.internalBinaryRead(reader, reader.uint32(), options, message.dnsMinRefreshRate);
                    break;
                case /* google.protobuf.Duration host_ttl */ 4:
                    message.hostTtl = Duration.internalBinaryRead(reader, reader.uint32(), options, message.hostTtl);
                    break;
                case /* google.protobuf.UInt32Value max_hosts */ 5:
                    message.maxHosts = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.maxHosts);
                    break;
                case /* envoy.config.cluster.v3.Cluster.RefreshRate dns_failure_refresh_rate */ 6:
                    message.dnsFailureRefreshRate = Cluster_RefreshRate.internalBinaryRead(reader, reader.uint32(), options, message.dnsFailureRefreshRate);
                    break;
                case /* envoy.extensions.common.dynamic_forward_proxy.v3.DnsCacheCircuitBreakers dns_cache_circuit_breaker */ 7:
                    message.dnsCacheCircuitBreaker = DnsCacheCircuitBreakers.internalBinaryRead(reader, reader.uint32(), options, message.dnsCacheCircuitBreaker);
                    break;
                case /* bool use_tcp_for_dns_lookups = 8 [deprecated = true];*/ 8:
                    message.useTcpForDnsLookups = reader.bool();
                    break;
                case /* envoy.config.core.v3.DnsResolutionConfig dns_resolution_config = 9 [deprecated = true];*/ 9:
                    message.dnsResolutionConfig = DnsResolutionConfig.internalBinaryRead(reader, reader.uint32(), options, message.dnsResolutionConfig);
                    break;
                case /* envoy.config.core.v3.TypedExtensionConfig typed_dns_resolver_config */ 12:
                    message.typedDnsResolverConfig = TypedExtensionConfig.internalBinaryRead(reader, reader.uint32(), options, message.typedDnsResolverConfig);
                    break;
                case /* repeated envoy.config.core.v3.SocketAddress preresolve_hostnames */ 10:
                    message.preresolveHostnames.push(SocketAddress.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.protobuf.Duration dns_query_timeout */ 11:
                    message.dnsQueryTimeout = Duration.internalBinaryRead(reader, reader.uint32(), options, message.dnsQueryTimeout);
                    break;
                case /* envoy.config.common.key_value.v3.KeyValueStoreConfig key_value_config */ 13:
                    message.keyValueConfig = KeyValueStoreConfig.internalBinaryRead(reader, reader.uint32(), options, message.keyValueConfig);
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
        /* envoy.config.cluster.v3.Cluster.DnsLookupFamily dns_lookup_family = 2; */
        if (message.dnsLookupFamily !== 0)
            writer.tag(2, WireType.Varint).int32(message.dnsLookupFamily);
        /* google.protobuf.Duration dns_refresh_rate = 3; */
        if (message.dnsRefreshRate)
            Duration.internalBinaryWrite(message.dnsRefreshRate, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration dns_min_refresh_rate = 14; */
        if (message.dnsMinRefreshRate)
            Duration.internalBinaryWrite(message.dnsMinRefreshRate, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration host_ttl = 4; */
        if (message.hostTtl)
            Duration.internalBinaryWrite(message.hostTtl, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value max_hosts = 5; */
        if (message.maxHosts)
            UInt32Value.internalBinaryWrite(message.maxHosts, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.cluster.v3.Cluster.RefreshRate dns_failure_refresh_rate = 6; */
        if (message.dnsFailureRefreshRate)
            Cluster_RefreshRate.internalBinaryWrite(message.dnsFailureRefreshRate, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* envoy.extensions.common.dynamic_forward_proxy.v3.DnsCacheCircuitBreakers dns_cache_circuit_breaker = 7; */
        if (message.dnsCacheCircuitBreaker)
            DnsCacheCircuitBreakers.internalBinaryWrite(message.dnsCacheCircuitBreaker, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* bool use_tcp_for_dns_lookups = 8 [deprecated = true]; */
        if (message.useTcpForDnsLookups !== false)
            writer.tag(8, WireType.Varint).bool(message.useTcpForDnsLookups);
        /* envoy.config.core.v3.DnsResolutionConfig dns_resolution_config = 9 [deprecated = true]; */
        if (message.dnsResolutionConfig)
            DnsResolutionConfig.internalBinaryWrite(message.dnsResolutionConfig, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.TypedExtensionConfig typed_dns_resolver_config = 12; */
        if (message.typedDnsResolverConfig)
            TypedExtensionConfig.internalBinaryWrite(message.typedDnsResolverConfig, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.config.core.v3.SocketAddress preresolve_hostnames = 10; */
        for (let i = 0; i < message.preresolveHostnames.length; i++)
            SocketAddress.internalBinaryWrite(message.preresolveHostnames[i], writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration dns_query_timeout = 11; */
        if (message.dnsQueryTimeout)
            Duration.internalBinaryWrite(message.dnsQueryTimeout, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.common.key_value.v3.KeyValueStoreConfig key_value_config = 13; */
        if (message.keyValueConfig)
            KeyValueStoreConfig.internalBinaryWrite(message.keyValueConfig, writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.common.dynamic_forward_proxy.v3.DnsCacheConfig
 */
export const DnsCacheConfig = new DnsCacheConfig$Type();
