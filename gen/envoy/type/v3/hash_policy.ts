// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/type/v3/hash_policy.proto" (package "envoy.type.v3", syntax proto3)
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
// [#protodoc-title: Hash Policy]

/**
 * Specifies the hash policy
 *
 * @generated from protobuf message envoy.type.v3.HashPolicy
 */
export interface HashPolicy {
    /**
     * @generated from protobuf oneof: policy_specifier
     */
    policySpecifier: {
        oneofKind: "sourceIp";
        /**
         * @generated from protobuf field: envoy.type.v3.HashPolicy.SourceIp source_ip = 1;
         */
        sourceIp: HashPolicy_SourceIp;
    } | {
        oneofKind: "filterState";
        /**
         * @generated from protobuf field: envoy.type.v3.HashPolicy.FilterState filter_state = 2;
         */
        filterState: HashPolicy_FilterState;
    } | {
        oneofKind: undefined;
    };
}
/**
 * The source IP will be used to compute the hash used by hash-based load balancing
 * algorithms.
 *
 * @generated from protobuf message envoy.type.v3.HashPolicy.SourceIp
 */
export interface HashPolicy_SourceIp {
}
/**
 * An Object in the :ref:`filterState <arch_overview_data_sharing_between_filters>` will be used
 * to compute the hash used by hash-based load balancing algorithms.
 *
 * @generated from protobuf message envoy.type.v3.HashPolicy.FilterState
 */
export interface HashPolicy_FilterState {
    /**
     * The name of the Object in the filterState, which is an Envoy::Hashable object. If there is no
     * data associated with the key, or the stored object is not Envoy::Hashable, no hash will be
     * produced.
     *
     * @generated from protobuf field: string key = 1;
     */
    key: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class HashPolicy$Type extends MessageType<HashPolicy> {
    constructor() {
        super("envoy.type.v3.HashPolicy", [
            { no: 1, name: "source_ip", kind: "message", oneof: "policySpecifier", T: () => HashPolicy_SourceIp },
            { no: 2, name: "filter_state", kind: "message", oneof: "policySpecifier", T: () => HashPolicy_FilterState }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.type.HashPolicy" } });
    }
    create(value?: PartialMessage<HashPolicy>): HashPolicy {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.policySpecifier = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<HashPolicy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HashPolicy): HashPolicy {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.type.v3.HashPolicy.SourceIp source_ip */ 1:
                    message.policySpecifier = {
                        oneofKind: "sourceIp",
                        sourceIp: HashPolicy_SourceIp.internalBinaryRead(reader, reader.uint32(), options, (message.policySpecifier as any).sourceIp)
                    };
                    break;
                case /* envoy.type.v3.HashPolicy.FilterState filter_state */ 2:
                    message.policySpecifier = {
                        oneofKind: "filterState",
                        filterState: HashPolicy_FilterState.internalBinaryRead(reader, reader.uint32(), options, (message.policySpecifier as any).filterState)
                    };
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
    internalBinaryWrite(message: HashPolicy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.type.v3.HashPolicy.SourceIp source_ip = 1; */
        if (message.policySpecifier.oneofKind === "sourceIp")
            HashPolicy_SourceIp.internalBinaryWrite(message.policySpecifier.sourceIp, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* envoy.type.v3.HashPolicy.FilterState filter_state = 2; */
        if (message.policySpecifier.oneofKind === "filterState")
            HashPolicy_FilterState.internalBinaryWrite(message.policySpecifier.filterState, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.v3.HashPolicy
 */
export const HashPolicy = new HashPolicy$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HashPolicy_SourceIp$Type extends MessageType<HashPolicy_SourceIp> {
    constructor() {
        super("envoy.type.v3.HashPolicy.SourceIp", [], { "udpa.annotations.versioning": { previousMessageType: "envoy.type.HashPolicy.SourceIp" } });
    }
    create(value?: PartialMessage<HashPolicy_SourceIp>): HashPolicy_SourceIp {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<HashPolicy_SourceIp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HashPolicy_SourceIp): HashPolicy_SourceIp {
        return target ?? this.create();
    }
    internalBinaryWrite(message: HashPolicy_SourceIp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.v3.HashPolicy.SourceIp
 */
export const HashPolicy_SourceIp = new HashPolicy_SourceIp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HashPolicy_FilterState$Type extends MessageType<HashPolicy_FilterState> {
    constructor() {
        super("envoy.type.v3.HashPolicy.FilterState", [
            { no: 1, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<HashPolicy_FilterState>): HashPolicy_FilterState {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.key = "";
        if (value !== undefined)
            reflectionMergePartial<HashPolicy_FilterState>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HashPolicy_FilterState): HashPolicy_FilterState {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key */ 1:
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
    internalBinaryWrite(message: HashPolicy_FilterState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string key = 1; */
        if (message.key !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.key);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.v3.HashPolicy.FilterState
 */
export const HashPolicy_FilterState = new HashPolicy_FilterState$Type();
