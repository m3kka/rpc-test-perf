// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/matching/input_matchers/consistent_hashing/v3/consistent_hashing.proto" (package "envoy.extensions.matching.input_matchers.consistent_hashing.v3", syntax proto3)
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
// [#protodoc-title: Consistent hashing matcher]
// [#extension: envoy.matching.matchers.consistent_hashing]

/**
 * The consistent hashing matchers computes a consistent hash from the input and matches if the resulting hash
 * is within the configured threshold.
 * More specifically, this matcher evaluates to true if hash(input, seed) % modulo >= threshold.
 * Note that the consistency of the match result relies on the internal hash function (xxhash) remaining
 * unchanged. While this is unlikely to happen intentionally, this could cause inconsistent match results
 * between deployments.
 *
 * @generated from protobuf message envoy.extensions.matching.input_matchers.consistent_hashing.v3.ConsistentHashing
 */
export interface ConsistentHashing {
    /**
     * The threshold the resulting hash must be over in order for this matcher to evaluate to true.
     * This value must be below the configured modulo value.
     * Setting this to 0 is equivalent to this matcher always matching.
     *
     * @generated from protobuf field: uint32 threshold = 1;
     */
    threshold: number;
    /**
     * The value to use for the modulus in the calculation. This effectively  bounds the hash output,
     * specifying the range of possible values.
     * This value must be above the configured threshold.
     *
     * @generated from protobuf field: uint32 modulo = 2;
     */
    modulo: number;
    /**
     * Optional seed passed through the hash function. This allows using additional information when computing
     * the hash value: by changing the seed value, a different partition of matching and non-matching inputs will
     * be created that remains consistent for that seed value.
     *
     * @generated from protobuf field: uint64 seed = 3;
     */
    seed: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class ConsistentHashing$Type extends MessageType<ConsistentHashing> {
    constructor() {
        super("envoy.extensions.matching.input_matchers.consistent_hashing.v3.ConsistentHashing", [
            { no: 1, name: "threshold", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "modulo", kind: "scalar", T: 13 /*ScalarType.UINT32*/, options: { "validate.rules": { uint32: { gt: 0 } } } },
            { no: 3, name: "seed", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<ConsistentHashing>): ConsistentHashing {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.threshold = 0;
        message.modulo = 0;
        message.seed = 0n;
        if (value !== undefined)
            reflectionMergePartial<ConsistentHashing>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConsistentHashing): ConsistentHashing {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 threshold */ 1:
                    message.threshold = reader.uint32();
                    break;
                case /* uint32 modulo */ 2:
                    message.modulo = reader.uint32();
                    break;
                case /* uint64 seed */ 3:
                    message.seed = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: ConsistentHashing, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 threshold = 1; */
        if (message.threshold !== 0)
            writer.tag(1, WireType.Varint).uint32(message.threshold);
        /* uint32 modulo = 2; */
        if (message.modulo !== 0)
            writer.tag(2, WireType.Varint).uint32(message.modulo);
        /* uint64 seed = 3; */
        if (message.seed !== 0n)
            writer.tag(3, WireType.Varint).uint64(message.seed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.matching.input_matchers.consistent_hashing.v3.ConsistentHashing
 */
export const ConsistentHashing = new ConsistentHashing$Type();
