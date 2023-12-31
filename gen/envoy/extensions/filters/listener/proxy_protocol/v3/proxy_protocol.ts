// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/listener/proxy_protocol/v3/proxy_protocol.proto" (package "envoy.extensions.filters.listener.proxy_protocol.v3", syntax proto3)
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
import { ProxyProtocolPassThroughTLVs } from "../../../../../config/core/v3/proxy_protocol";
// [#protodoc-title: Proxy Protocol Filter]
// PROXY protocol listener filter.
// [#extension: envoy.filters.listener.proxy_protocol]

/**
 * @generated from protobuf message envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol
 */
export interface ProxyProtocol {
    /**
     * The list of rules to apply to requests.
     *
     * @generated from protobuf field: repeated envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol.Rule rules = 1;
     */
    rules: ProxyProtocol_Rule[];
    /**
     * Allow requests through that don't use proxy protocol. Defaults to false.
     *
     * .. attention::
     *
     *   This breaks conformance with the specification.
     *   Only enable if ALL traffic to the listener comes from a trusted source.
     *   For more information on the security implications of this feature, see
     *   https://www.haproxy.org/download/2.1/doc/proxy-protocol.txt
     *
     * .. attention::
     *
     *   Requests of 12 or fewer bytes that match the proxy protocol v2 signature
     *   and requests of 6 or fewer bytes that match the proxy protocol v1
     *   signature will timeout (Envoy is unable to differentiate these requests
     *   from incomplete proxy protocol requests).
     *
     * @generated from protobuf field: bool allow_requests_without_proxy_protocol = 2;
     */
    allowRequestsWithoutProxyProtocol: boolean;
    /**
     * This config controls which TLVs can be passed to filter state if it is Proxy Protocol
     * V2 header. If there is no setting for this field, no TLVs will be passed through.
     *
     * .. note::
     *
     *   If this is configured, you likely also want to set
     *   :ref:`core.v3.ProxyProtocolConfig.pass_through_tlvs <envoy_v3_api_field_config.core.v3.ProxyProtocolConfig.pass_through_tlvs>`,
     *   which controls pass-through for the upstream.
     *
     * @generated from protobuf field: envoy.config.core.v3.ProxyProtocolPassThroughTLVs pass_through_tlvs = 3;
     */
    passThroughTlvs?: ProxyProtocolPassThroughTLVs;
}
/**
 * @generated from protobuf message envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol.KeyValuePair
 */
export interface ProxyProtocol_KeyValuePair {
    /**
     * The namespace — if this is empty, the filter's namespace will be used.
     *
     * @generated from protobuf field: string metadata_namespace = 1;
     */
    metadataNamespace: string;
    /**
     * The key to use within the namespace.
     *
     * @generated from protobuf field: string key = 2;
     */
    key: string;
}
/**
 * A Rule defines what metadata to apply when a header is present or missing.
 *
 * @generated from protobuf message envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol.Rule
 */
export interface ProxyProtocol_Rule {
    /**
     * The type that triggers the rule - required
     * TLV type is defined as uint8_t in proxy protocol. See `the spec
     * <https://www.haproxy.org/download/2.1/doc/proxy-protocol.txt>`_ for details.
     *
     * @generated from protobuf field: uint32 tlv_type = 1;
     */
    tlvType: number;
    /**
     * If the TLV type is present, apply this metadata KeyValuePair.
     *
     * @generated from protobuf field: envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol.KeyValuePair on_tlv_present = 2;
     */
    onTlvPresent?: ProxyProtocol_KeyValuePair;
}
// @generated message type with reflection information, may provide speed optimized methods
class ProxyProtocol$Type extends MessageType<ProxyProtocol> {
    constructor() {
        super("envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol", [
            { no: 1, name: "rules", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ProxyProtocol_Rule },
            { no: 2, name: "allow_requests_without_proxy_protocol", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "pass_through_tlvs", kind: "message", T: () => ProxyProtocolPassThroughTLVs }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.filter.listener.proxy_protocol.v2.ProxyProtocol" } });
    }
    create(value?: PartialMessage<ProxyProtocol>): ProxyProtocol {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.rules = [];
        message.allowRequestsWithoutProxyProtocol = false;
        if (value !== undefined)
            reflectionMergePartial<ProxyProtocol>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProxyProtocol): ProxyProtocol {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol.Rule rules */ 1:
                    message.rules.push(ProxyProtocol_Rule.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool allow_requests_without_proxy_protocol */ 2:
                    message.allowRequestsWithoutProxyProtocol = reader.bool();
                    break;
                case /* envoy.config.core.v3.ProxyProtocolPassThroughTLVs pass_through_tlvs */ 3:
                    message.passThroughTlvs = ProxyProtocolPassThroughTLVs.internalBinaryRead(reader, reader.uint32(), options, message.passThroughTlvs);
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
    internalBinaryWrite(message: ProxyProtocol, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol.Rule rules = 1; */
        for (let i = 0; i < message.rules.length; i++)
            ProxyProtocol_Rule.internalBinaryWrite(message.rules[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bool allow_requests_without_proxy_protocol = 2; */
        if (message.allowRequestsWithoutProxyProtocol !== false)
            writer.tag(2, WireType.Varint).bool(message.allowRequestsWithoutProxyProtocol);
        /* envoy.config.core.v3.ProxyProtocolPassThroughTLVs pass_through_tlvs = 3; */
        if (message.passThroughTlvs)
            ProxyProtocolPassThroughTLVs.internalBinaryWrite(message.passThroughTlvs, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol
 */
export const ProxyProtocol = new ProxyProtocol$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProxyProtocol_KeyValuePair$Type extends MessageType<ProxyProtocol_KeyValuePair> {
    constructor() {
        super("envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol.KeyValuePair", [
            { no: 1, name: "metadata_namespace", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<ProxyProtocol_KeyValuePair>): ProxyProtocol_KeyValuePair {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.metadataNamespace = "";
        message.key = "";
        if (value !== undefined)
            reflectionMergePartial<ProxyProtocol_KeyValuePair>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProxyProtocol_KeyValuePair): ProxyProtocol_KeyValuePair {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string metadata_namespace */ 1:
                    message.metadataNamespace = reader.string();
                    break;
                case /* string key */ 2:
                    message.key = reader.string();
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
    internalBinaryWrite(message: ProxyProtocol_KeyValuePair, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string metadata_namespace = 1; */
        if (message.metadataNamespace !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.metadataNamespace);
        /* string key = 2; */
        if (message.key !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.key);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol.KeyValuePair
 */
export const ProxyProtocol_KeyValuePair = new ProxyProtocol_KeyValuePair$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProxyProtocol_Rule$Type extends MessageType<ProxyProtocol_Rule> {
    constructor() {
        super("envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol.Rule", [
            { no: 1, name: "tlv_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/, options: { "validate.rules": { uint32: { lt: 256 } } } },
            { no: 2, name: "on_tlv_present", kind: "message", T: () => ProxyProtocol_KeyValuePair }
        ]);
    }
    create(value?: PartialMessage<ProxyProtocol_Rule>): ProxyProtocol_Rule {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.tlvType = 0;
        if (value !== undefined)
            reflectionMergePartial<ProxyProtocol_Rule>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProxyProtocol_Rule): ProxyProtocol_Rule {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 tlv_type */ 1:
                    message.tlvType = reader.uint32();
                    break;
                case /* envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol.KeyValuePair on_tlv_present */ 2:
                    message.onTlvPresent = ProxyProtocol_KeyValuePair.internalBinaryRead(reader, reader.uint32(), options, message.onTlvPresent);
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
    internalBinaryWrite(message: ProxyProtocol_Rule, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 tlv_type = 1; */
        if (message.tlvType !== 0)
            writer.tag(1, WireType.Varint).uint32(message.tlvType);
        /* envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol.KeyValuePair on_tlv_present = 2; */
        if (message.onTlvPresent)
            ProxyProtocol_KeyValuePair.internalBinaryWrite(message.onTlvPresent, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol.Rule
 */
export const ProxyProtocol_Rule = new ProxyProtocol_Rule$Type();
