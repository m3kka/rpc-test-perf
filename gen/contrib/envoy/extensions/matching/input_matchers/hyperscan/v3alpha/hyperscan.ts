// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "contrib/envoy/extensions/matching/input_matchers/hyperscan/v3alpha/hyperscan.proto" (package "envoy.extensions.matching.input_matchers.hyperscan.v3alpha", syntax proto3)
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
// [#protodoc-title: Hyperscan matcher]
// [#extension: envoy.matching.input_matchers.hyperscan]

/**
 * `Hyperscan <https://github.com/intel/hyperscan>`_ regex matcher. The matcher uses the Hyperscan
 * engine which exploits x86 SIMD instructions to accelerate matching large numbers of regular
 * expressions simultaneously across streams of data.
 *
 * @generated from protobuf message envoy.extensions.matching.input_matchers.hyperscan.v3alpha.Hyperscan
 */
export interface Hyperscan {
    /**
     * Specifies a set of regex expressions that the input should match on.
     *
     * @generated from protobuf field: repeated envoy.extensions.matching.input_matchers.hyperscan.v3alpha.Hyperscan.Regex regexes = 1;
     */
    regexes: Hyperscan_Regex[];
}
/**
 * [#next-free-field: 11]
 *
 * @generated from protobuf message envoy.extensions.matching.input_matchers.hyperscan.v3alpha.Hyperscan.Regex
 */
export interface Hyperscan_Regex {
    /**
     * The regex expression.
     *
     * The expression must represent only the pattern to be matched, with no delimiters or flags.
     *
     * @generated from protobuf field: string regex = 1;
     */
    regex: string;
    /**
     * The ID of the regex expression.
     *
     * This option is designed to be used on the sub-expressions in logical combinations.
     *
     * @generated from protobuf field: uint32 id = 2;
     */
    id: number;
    /**
     * Matching will be performed case-insensitively.
     *
     * The expression may still use PCRE tokens (notably ``(?i)`` and ``(?-i)``) to switch
     * case-insensitive matching on and off.
     *
     * @generated from protobuf field: bool caseless = 3;
     */
    caseless: boolean;
    /**
     * Matching a ``.`` will not exclude newlines.
     *
     * @generated from protobuf field: bool dot_all = 4;
     */
    dotAll: boolean;
    /**
     * ``^`` and ``$`` anchors match any newlines in data.
     *
     * @generated from protobuf field: bool multiline = 5;
     */
    multiline: boolean;
    /**
     * Allow expressions which can match against an empty string.
     *
     * This option instructs the compiler to allow expressions that can match against empty buffers,
     * such as ``.?``, ``.*``, ``(a|)``. Since Hyperscan can return every possible match for an expression,
     * such expressions generally execute very slowly.
     *
     * @generated from protobuf field: bool allow_empty = 6;
     */
    allowEmpty: boolean;
    /**
     * Treat the pattern as a sequence of UTF-8 characters.
     *
     * @generated from protobuf field: bool utf8 = 7;
     */
    utf8: boolean;
    /**
     * Use Unicode properties for character classes.
     *
     * This option instructs Hyperscan to use Unicode properties, rather than the default ASCII
     * interpretations, for character mnemonics like ``\w`` and ``\s`` as well as the POSIX character
     * classes. It is only meaningful in conjunction with ``utf8``.
     *
     * @generated from protobuf field: bool ucp = 8;
     */
    ucp: boolean;
    /**
     * Logical combination.
     *
     * This option instructs Hyperscan to parse this expression as logical combination syntax.
     * Logical constraints consist of operands, operators and parentheses. The operands are
     * expression indices, and operators can be ``!``, ``&`` or ``|``.
     *
     * @generated from protobuf field: bool combination = 9;
     */
    combination: boolean;
    /**
     * Don’t do any match reporting.
     *
     * This option instructs Hyperscan to ignore match reporting for this expression. It is
     * designed to be used on the sub-expressions in logical combinations.
     *
     * @generated from protobuf field: bool quiet = 10;
     */
    quiet: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class Hyperscan$Type extends MessageType<Hyperscan> {
    constructor() {
        super("envoy.extensions.matching.input_matchers.hyperscan.v3alpha.Hyperscan", [
            { no: 1, name: "regexes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Hyperscan_Regex, options: { "validate.rules": { repeated: { minItems: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<Hyperscan>): Hyperscan {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.regexes = [];
        if (value !== undefined)
            reflectionMergePartial<Hyperscan>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Hyperscan): Hyperscan {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.extensions.matching.input_matchers.hyperscan.v3alpha.Hyperscan.Regex regexes */ 1:
                    message.regexes.push(Hyperscan_Regex.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: Hyperscan, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.extensions.matching.input_matchers.hyperscan.v3alpha.Hyperscan.Regex regexes = 1; */
        for (let i = 0; i < message.regexes.length; i++)
            Hyperscan_Regex.internalBinaryWrite(message.regexes[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.matching.input_matchers.hyperscan.v3alpha.Hyperscan
 */
export const Hyperscan = new Hyperscan$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Hyperscan_Regex$Type extends MessageType<Hyperscan_Regex> {
    constructor() {
        super("envoy.extensions.matching.input_matchers.hyperscan.v3alpha.Hyperscan.Regex", [
            { no: 1, name: "regex", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "caseless", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "dot_all", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "multiline", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "allow_empty", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "utf8", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "ucp", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "combination", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "quiet", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<Hyperscan_Regex>): Hyperscan_Regex {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.regex = "";
        message.id = 0;
        message.caseless = false;
        message.dotAll = false;
        message.multiline = false;
        message.allowEmpty = false;
        message.utf8 = false;
        message.ucp = false;
        message.combination = false;
        message.quiet = false;
        if (value !== undefined)
            reflectionMergePartial<Hyperscan_Regex>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Hyperscan_Regex): Hyperscan_Regex {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string regex */ 1:
                    message.regex = reader.string();
                    break;
                case /* uint32 id */ 2:
                    message.id = reader.uint32();
                    break;
                case /* bool caseless */ 3:
                    message.caseless = reader.bool();
                    break;
                case /* bool dot_all */ 4:
                    message.dotAll = reader.bool();
                    break;
                case /* bool multiline */ 5:
                    message.multiline = reader.bool();
                    break;
                case /* bool allow_empty */ 6:
                    message.allowEmpty = reader.bool();
                    break;
                case /* bool utf8 */ 7:
                    message.utf8 = reader.bool();
                    break;
                case /* bool ucp */ 8:
                    message.ucp = reader.bool();
                    break;
                case /* bool combination */ 9:
                    message.combination = reader.bool();
                    break;
                case /* bool quiet */ 10:
                    message.quiet = reader.bool();
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
    internalBinaryWrite(message: Hyperscan_Regex, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string regex = 1; */
        if (message.regex !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.regex);
        /* uint32 id = 2; */
        if (message.id !== 0)
            writer.tag(2, WireType.Varint).uint32(message.id);
        /* bool caseless = 3; */
        if (message.caseless !== false)
            writer.tag(3, WireType.Varint).bool(message.caseless);
        /* bool dot_all = 4; */
        if (message.dotAll !== false)
            writer.tag(4, WireType.Varint).bool(message.dotAll);
        /* bool multiline = 5; */
        if (message.multiline !== false)
            writer.tag(5, WireType.Varint).bool(message.multiline);
        /* bool allow_empty = 6; */
        if (message.allowEmpty !== false)
            writer.tag(6, WireType.Varint).bool(message.allowEmpty);
        /* bool utf8 = 7; */
        if (message.utf8 !== false)
            writer.tag(7, WireType.Varint).bool(message.utf8);
        /* bool ucp = 8; */
        if (message.ucp !== false)
            writer.tag(8, WireType.Varint).bool(message.ucp);
        /* bool combination = 9; */
        if (message.combination !== false)
            writer.tag(9, WireType.Varint).bool(message.combination);
        /* bool quiet = 10; */
        if (message.quiet !== false)
            writer.tag(10, WireType.Varint).bool(message.quiet);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.matching.input_matchers.hyperscan.v3alpha.Hyperscan.Regex
 */
export const Hyperscan_Regex = new Hyperscan_Regex$Type();