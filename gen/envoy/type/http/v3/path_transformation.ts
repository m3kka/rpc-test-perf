// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/type/http/v3/path_transformation.proto" (package "envoy.type.http.v3", syntax proto3)
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
// [#protodoc-title: Path Transformations API]

// PathTransformation defines an API to apply a sequence of operations that can be used to alter
// text before it is used for matching or routing. Multiple actions can be applied in the same
// Transformation, forming a sequential pipeline. The transformations will be performed in the order
// that they appear.
// 
// This API is a work in progress.

/**
 * @generated from protobuf message envoy.type.http.v3.PathTransformation
 */
export interface PathTransformation {
    /**
     * A list of operations to apply. Transformations will be performed in the order that they appear.
     *
     * @generated from protobuf field: repeated envoy.type.http.v3.PathTransformation.Operation operations = 1;
     */
    operations: PathTransformation_Operation[];
}
/**
 * A type of operation to alter text.
 *
 * @generated from protobuf message envoy.type.http.v3.PathTransformation.Operation
 */
export interface PathTransformation_Operation {
    /**
     * @generated from protobuf oneof: operation_specifier
     */
    operationSpecifier: {
        oneofKind: "normalizePathRfc3986";
        /**
         * Enable path normalization per RFC 3986.
         *
         * @generated from protobuf field: envoy.type.http.v3.PathTransformation.Operation.NormalizePathRFC3986 normalize_path_rfc_3986 = 2;
         */
        normalizePathRfc3986: PathTransformation_Operation_NormalizePathRFC3986;
    } | {
        oneofKind: "mergeSlashes";
        /**
         * Enable merging adjacent slashes.
         *
         * @generated from protobuf field: envoy.type.http.v3.PathTransformation.Operation.MergeSlashes merge_slashes = 3;
         */
        mergeSlashes: PathTransformation_Operation_MergeSlashes;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Should text be normalized according to RFC 3986? This typically is used for path headers
 * before any processing of requests by HTTP filters or routing. This applies percent-encoded
 * normalization and path segment normalization. Fails on characters disallowed in URLs
 * (e.g. NULLs). See `Normalization and Comparison
 * <https://tools.ietf.org/html/rfc3986#section-6>`_ for details of normalization. Note that
 * this options does not perform `case normalization
 * <https://tools.ietf.org/html/rfc3986#section-6.2.2.1>`_
 *
 * @generated from protobuf message envoy.type.http.v3.PathTransformation.Operation.NormalizePathRFC3986
 */
export interface PathTransformation_Operation_NormalizePathRFC3986 {
}
/**
 * Determines if adjacent slashes are merged into one. A common use case is for a request path
 * header. Using this option in ``:ref: PathNormalizationOptions
 * <envoy_v3_api_msg_extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.PathNormalizationOptions>``
 * will allow incoming requests with path ``//dir///file`` to match against route with ``prefix``
 * match set to ``/dir``. When using for header transformations, note that slash merging is not
 * part of `HTTP spec <https://tools.ietf.org/html/rfc3986>`_ and is provided for convenience.
 *
 * @generated from protobuf message envoy.type.http.v3.PathTransformation.Operation.MergeSlashes
 */
export interface PathTransformation_Operation_MergeSlashes {
}
// @generated message type with reflection information, may provide speed optimized methods
class PathTransformation$Type extends MessageType<PathTransformation> {
    constructor() {
        super("envoy.type.http.v3.PathTransformation", [
            { no: 1, name: "operations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PathTransformation_Operation }
        ]);
    }
    create(value?: PartialMessage<PathTransformation>): PathTransformation {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.operations = [];
        if (value !== undefined)
            reflectionMergePartial<PathTransformation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PathTransformation): PathTransformation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.type.http.v3.PathTransformation.Operation operations */ 1:
                    message.operations.push(PathTransformation_Operation.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: PathTransformation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.type.http.v3.PathTransformation.Operation operations = 1; */
        for (let i = 0; i < message.operations.length; i++)
            PathTransformation_Operation.internalBinaryWrite(message.operations[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.http.v3.PathTransformation
 */
export const PathTransformation = new PathTransformation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PathTransformation_Operation$Type extends MessageType<PathTransformation_Operation> {
    constructor() {
        super("envoy.type.http.v3.PathTransformation.Operation", [
            { no: 2, name: "normalize_path_rfc_3986", kind: "message", oneof: "operationSpecifier", T: () => PathTransformation_Operation_NormalizePathRFC3986 },
            { no: 3, name: "merge_slashes", kind: "message", oneof: "operationSpecifier", T: () => PathTransformation_Operation_MergeSlashes }
        ]);
    }
    create(value?: PartialMessage<PathTransformation_Operation>): PathTransformation_Operation {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.operationSpecifier = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<PathTransformation_Operation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PathTransformation_Operation): PathTransformation_Operation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.type.http.v3.PathTransformation.Operation.NormalizePathRFC3986 normalize_path_rfc_3986 */ 2:
                    message.operationSpecifier = {
                        oneofKind: "normalizePathRfc3986",
                        normalizePathRfc3986: PathTransformation_Operation_NormalizePathRFC3986.internalBinaryRead(reader, reader.uint32(), options, (message.operationSpecifier as any).normalizePathRfc3986)
                    };
                    break;
                case /* envoy.type.http.v3.PathTransformation.Operation.MergeSlashes merge_slashes */ 3:
                    message.operationSpecifier = {
                        oneofKind: "mergeSlashes",
                        mergeSlashes: PathTransformation_Operation_MergeSlashes.internalBinaryRead(reader, reader.uint32(), options, (message.operationSpecifier as any).mergeSlashes)
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
    internalBinaryWrite(message: PathTransformation_Operation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.type.http.v3.PathTransformation.Operation.NormalizePathRFC3986 normalize_path_rfc_3986 = 2; */
        if (message.operationSpecifier.oneofKind === "normalizePathRfc3986")
            PathTransformation_Operation_NormalizePathRFC3986.internalBinaryWrite(message.operationSpecifier.normalizePathRfc3986, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.type.http.v3.PathTransformation.Operation.MergeSlashes merge_slashes = 3; */
        if (message.operationSpecifier.oneofKind === "mergeSlashes")
            PathTransformation_Operation_MergeSlashes.internalBinaryWrite(message.operationSpecifier.mergeSlashes, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.http.v3.PathTransformation.Operation
 */
export const PathTransformation_Operation = new PathTransformation_Operation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PathTransformation_Operation_NormalizePathRFC3986$Type extends MessageType<PathTransformation_Operation_NormalizePathRFC3986> {
    constructor() {
        super("envoy.type.http.v3.PathTransformation.Operation.NormalizePathRFC3986", []);
    }
    create(value?: PartialMessage<PathTransformation_Operation_NormalizePathRFC3986>): PathTransformation_Operation_NormalizePathRFC3986 {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<PathTransformation_Operation_NormalizePathRFC3986>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PathTransformation_Operation_NormalizePathRFC3986): PathTransformation_Operation_NormalizePathRFC3986 {
        return target ?? this.create();
    }
    internalBinaryWrite(message: PathTransformation_Operation_NormalizePathRFC3986, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.http.v3.PathTransformation.Operation.NormalizePathRFC3986
 */
export const PathTransformation_Operation_NormalizePathRFC3986 = new PathTransformation_Operation_NormalizePathRFC3986$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PathTransformation_Operation_MergeSlashes$Type extends MessageType<PathTransformation_Operation_MergeSlashes> {
    constructor() {
        super("envoy.type.http.v3.PathTransformation.Operation.MergeSlashes", []);
    }
    create(value?: PartialMessage<PathTransformation_Operation_MergeSlashes>): PathTransformation_Operation_MergeSlashes {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<PathTransformation_Operation_MergeSlashes>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PathTransformation_Operation_MergeSlashes): PathTransformation_Operation_MergeSlashes {
        return target ?? this.create();
    }
    internalBinaryWrite(message: PathTransformation_Operation_MergeSlashes, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.http.v3.PathTransformation.Operation.MergeSlashes
 */
export const PathTransformation_Operation_MergeSlashes = new PathTransformation_Operation_MergeSlashes$Type();