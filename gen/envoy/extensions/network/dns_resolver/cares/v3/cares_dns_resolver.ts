// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/network/dns_resolver/cares/v3/cares_dns_resolver.proto" (package "envoy.extensions.network.dns_resolver.cares.v3", syntax proto3)
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
import { DnsResolverOptions } from "../../../../../config/core/v3/resolver";
import { Address } from "../../../../../config/core/v3/address";
// [#protodoc-title: c-ares DNS resolver]
// [#extension: envoy.network.dns_resolver.cares]

/**
 * Configuration for c-ares DNS resolver.
 *
 * @generated from protobuf message envoy.extensions.network.dns_resolver.cares.v3.CaresDnsResolverConfig
 */
export interface CaresDnsResolverConfig {
    /**
     * A list of dns resolver addresses.
     * :ref:`use_resolvers_as_fallback<envoy_v3_api_field_extensions.network.dns_resolver.cares.v3.CaresDnsResolverConfig.use_resolvers_as_fallback>`
     * below dictates if the DNS client should override system defaults or only use the provided
     * resolvers if the system defaults are not available, i.e., as a fallback.
     *
     * @generated from protobuf field: repeated envoy.config.core.v3.Address resolvers = 1;
     */
    resolvers: Address[];
    /**
     * If true use the resolvers listed in the
     * :ref:`resolvers<envoy_v3_api_field_extensions.network.dns_resolver.cares.v3.CaresDnsResolverConfig.resolvers>`
     * field only if c-ares is unable to obtain a
     * nameserver from the system (e.g., /etc/resolv.conf).
     * Otherwise, the resolvers listed in the resolvers list will override the default system
     * resolvers. Defaults to false.
     *
     * @generated from protobuf field: bool use_resolvers_as_fallback = 3;
     */
    useResolversAsFallback: boolean;
    /**
     * The resolver will query available network interfaces and determine if there are no available
     * interfaces for a given IP family. It will then filter these addresses from the results it
     * presents. e.g., if there are no available IPv4 network interfaces, the resolver will not
     * provide IPv4 addresses.
     *
     * @generated from protobuf field: bool filter_unroutable_families = 4;
     */
    filterUnroutableFamilies: boolean;
    /**
     * Configuration of DNS resolver option flags which control the behavior of the DNS resolver.
     *
     * @generated from protobuf field: envoy.config.core.v3.DnsResolverOptions dns_resolver_options = 2;
     */
    dnsResolverOptions?: DnsResolverOptions;
}
// @generated message type with reflection information, may provide speed optimized methods
class CaresDnsResolverConfig$Type extends MessageType<CaresDnsResolverConfig> {
    constructor() {
        super("envoy.extensions.network.dns_resolver.cares.v3.CaresDnsResolverConfig", [
            { no: 1, name: "resolvers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Address, options: { "validate.rules": { repeated: { minItems: "1" } } } },
            { no: 3, name: "use_resolvers_as_fallback", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "filter_unroutable_families", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "dns_resolver_options", kind: "message", T: () => DnsResolverOptions }
        ]);
    }
    create(value?: PartialMessage<CaresDnsResolverConfig>): CaresDnsResolverConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.resolvers = [];
        message.useResolversAsFallback = false;
        message.filterUnroutableFamilies = false;
        if (value !== undefined)
            reflectionMergePartial<CaresDnsResolverConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CaresDnsResolverConfig): CaresDnsResolverConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.config.core.v3.Address resolvers */ 1:
                    message.resolvers.push(Address.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool use_resolvers_as_fallback */ 3:
                    message.useResolversAsFallback = reader.bool();
                    break;
                case /* bool filter_unroutable_families */ 4:
                    message.filterUnroutableFamilies = reader.bool();
                    break;
                case /* envoy.config.core.v3.DnsResolverOptions dns_resolver_options */ 2:
                    message.dnsResolverOptions = DnsResolverOptions.internalBinaryRead(reader, reader.uint32(), options, message.dnsResolverOptions);
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
    internalBinaryWrite(message: CaresDnsResolverConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.config.core.v3.Address resolvers = 1; */
        for (let i = 0; i < message.resolvers.length; i++)
            Address.internalBinaryWrite(message.resolvers[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bool use_resolvers_as_fallback = 3; */
        if (message.useResolversAsFallback !== false)
            writer.tag(3, WireType.Varint).bool(message.useResolversAsFallback);
        /* bool filter_unroutable_families = 4; */
        if (message.filterUnroutableFamilies !== false)
            writer.tag(4, WireType.Varint).bool(message.filterUnroutableFamilies);
        /* envoy.config.core.v3.DnsResolverOptions dns_resolver_options = 2; */
        if (message.dnsResolverOptions)
            DnsResolverOptions.internalBinaryWrite(message.dnsResolverOptions, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.network.dns_resolver.cares.v3.CaresDnsResolverConfig
 */
export const CaresDnsResolverConfig = new CaresDnsResolverConfig$Type();
