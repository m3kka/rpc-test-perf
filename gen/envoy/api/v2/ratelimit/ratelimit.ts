// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/api/v2/ratelimit/ratelimit.proto" (package "envoy.api.v2.ratelimit", syntax proto3)
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
// [#protodoc-title: Common rate limit components]

/**
 * A RateLimitDescriptor is a list of hierarchical entries that are used by the service to
 * determine the final rate limit key and overall allowed limit. Here are some examples of how
 * they might be used for the domain "envoy".
 *
 * .. code-block:: cpp
 *
 *   ["authenticated": "false"], ["remote_address": "10.0.0.1"]
 *
 * What it does: Limits all unauthenticated traffic for the IP address 10.0.0.1. The
 * configuration supplies a default limit for the *remote_address* key. If there is a desire to
 * raise the limit for 10.0.0.1 or block it entirely it can be specified directly in the
 * configuration.
 *
 * .. code-block:: cpp
 *
 *   ["authenticated": "false"], ["path": "/foo/bar"]
 *
 * What it does: Limits all unauthenticated traffic globally for a specific path (or prefix if
 * configured that way in the service).
 *
 * .. code-block:: cpp
 *
 *   ["authenticated": "false"], ["path": "/foo/bar"], ["remote_address": "10.0.0.1"]
 *
 * What it does: Limits unauthenticated traffic to a specific path for a specific IP address.
 * Like (1) we can raise/block specific IP addresses if we want with an override configuration.
 *
 * .. code-block:: cpp
 *
 *   ["authenticated": "true"], ["client_id": "foo"]
 *
 * What it does: Limits all traffic for an authenticated client "foo"
 *
 * .. code-block:: cpp
 *
 *   ["authenticated": "true"], ["client_id": "foo"], ["path": "/foo/bar"]
 *
 * What it does: Limits traffic to a specific path for an authenticated client "foo"
 *
 * The idea behind the API is that (1)/(2)/(3) and (4)/(5) can be sent in 1 request if desired.
 * This enables building complex application scenarios with a generic backend.
 *
 * @generated from protobuf message envoy.api.v2.ratelimit.RateLimitDescriptor
 */
export interface RateLimitDescriptor {
    /**
     * Descriptor entries.
     *
     * @generated from protobuf field: repeated envoy.api.v2.ratelimit.RateLimitDescriptor.Entry entries = 1;
     */
    entries: RateLimitDescriptor_Entry[];
}
/**
 * @generated from protobuf message envoy.api.v2.ratelimit.RateLimitDescriptor.Entry
 */
export interface RateLimitDescriptor_Entry {
    /**
     * Descriptor key.
     *
     * @generated from protobuf field: string key = 1;
     */
    key: string;
    /**
     * Descriptor value.
     *
     * @generated from protobuf field: string value = 2;
     */
    value: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class RateLimitDescriptor$Type extends MessageType<RateLimitDescriptor> {
    constructor() {
        super("envoy.api.v2.ratelimit.RateLimitDescriptor", [
            { no: 1, name: "entries", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RateLimitDescriptor_Entry, options: { "validate.rules": { repeated: { minItems: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<RateLimitDescriptor>): RateLimitDescriptor {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.entries = [];
        if (value !== undefined)
            reflectionMergePartial<RateLimitDescriptor>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimitDescriptor): RateLimitDescriptor {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.api.v2.ratelimit.RateLimitDescriptor.Entry entries */ 1:
                    message.entries.push(RateLimitDescriptor_Entry.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: RateLimitDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.api.v2.ratelimit.RateLimitDescriptor.Entry entries = 1; */
        for (let i = 0; i < message.entries.length; i++)
            RateLimitDescriptor_Entry.internalBinaryWrite(message.entries[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.ratelimit.RateLimitDescriptor
 */
export const RateLimitDescriptor = new RateLimitDescriptor$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RateLimitDescriptor_Entry$Type extends MessageType<RateLimitDescriptor_Entry> {
    constructor() {
        super("envoy.api.v2.ratelimit.RateLimitDescriptor.Entry", [
            { no: 1, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 2, name: "value", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<RateLimitDescriptor_Entry>): RateLimitDescriptor_Entry {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.key = "";
        message.value = "";
        if (value !== undefined)
            reflectionMergePartial<RateLimitDescriptor_Entry>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimitDescriptor_Entry): RateLimitDescriptor_Entry {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key */ 1:
                    message.key = reader.string();
                    break;
                case /* string value */ 2:
                    message.value = reader.string();
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
    internalBinaryWrite(message: RateLimitDescriptor_Entry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string key = 1; */
        if (message.key !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.key);
        /* string value = 2; */
        if (message.value !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.ratelimit.RateLimitDescriptor.Entry
 */
export const RateLimitDescriptor_Entry = new RateLimitDescriptor_Entry$Type();
