// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/http/file_system_buffer/v3/file_system_buffer.proto" (package "envoy.extensions.filters.http.file_system_buffer.v3", syntax proto3)
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
import { StringValue } from "../../../../../../google/protobuf/wrappers";
import { AsyncFileManagerConfig } from "../../../../common/async_files/v3/async_file_manager";
import { UInt64Value } from "../../../../../../google/protobuf/wrappers";
// [#protodoc-title: FileSystemBufferFilterConfig]
// [#extension: envoy.filters.http.file_system_buffer]

/**
 * The behavior of the filter for a stream.
 * [#next-free-field: 6]
 *
 * @generated from protobuf message envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior
 */
export interface BufferBehavior {
    /**
     * @generated from protobuf oneof: behavior
     */
    behavior: {
        oneofKind: "streamWhenPossible";
        /**
         * Don't inject ``content-length`` header.
         * Output immediately, buffer only if output is slower than input.
         *
         * @generated from protobuf field: envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.StreamWhenPossible stream_when_possible = 1;
         */
        streamWhenPossible: BufferBehavior_StreamWhenPossible;
    } | {
        oneofKind: "bypass";
        /**
         * Never buffer, do nothing.
         *
         * @generated from protobuf field: envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.Bypass bypass = 2;
         */
        bypass: BufferBehavior_Bypass;
    } | {
        oneofKind: "injectContentLengthIfNecessary";
        /**
         * If ``content-length`` is not present, buffer the entire input,
         * inject ``content-length`` header, then output.
         * If ``content-length`` is already present, act like ``stream_when_possible``.
         *
         * @generated from protobuf field: envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.InjectContentLengthIfNecessary inject_content_length_if_necessary = 3;
         */
        injectContentLengthIfNecessary: BufferBehavior_InjectContentLengthIfNecessary;
    } | {
        oneofKind: "fullyBufferAndAlwaysInjectContentLength";
        /**
         * Always buffer the entire input, and inject ``content-length``,
         * overwriting any provided content-length header.
         *
         * @generated from protobuf field: envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.FullyBufferAndAlwaysInjectContentLength fully_buffer_and_always_inject_content_length = 4;
         */
        fullyBufferAndAlwaysInjectContentLength: BufferBehavior_FullyBufferAndAlwaysInjectContentLength;
    } | {
        oneofKind: "fullyBuffer";
        /**
         * Always buffer the entire input, do not modify ``content-length``.
         *
         * @generated from protobuf field: envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.FullyBuffer fully_buffer = 5;
         */
        fullyBuffer: BufferBehavior_FullyBuffer;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.StreamWhenPossible
 */
export interface BufferBehavior_StreamWhenPossible {
}
/**
 * @generated from protobuf message envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.Bypass
 */
export interface BufferBehavior_Bypass {
}
/**
 * @generated from protobuf message envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.InjectContentLengthIfNecessary
 */
export interface BufferBehavior_InjectContentLengthIfNecessary {
}
/**
 * @generated from protobuf message envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.FullyBufferAndAlwaysInjectContentLength
 */
export interface BufferBehavior_FullyBufferAndAlwaysInjectContentLength {
}
/**
 * @generated from protobuf message envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.FullyBuffer
 */
export interface BufferBehavior_FullyBuffer {
}
/**
 * The configuration for one direction of the filter behavior.
 *
 * @generated from protobuf message envoy.extensions.filters.http.file_system_buffer.v3.StreamConfig
 */
export interface StreamConfig {
    /**
     * Whether to bypass / stream / fully buffer / etc.
     * If unset in route, vhost and listener config, the default is ``stream_when_possible``.
     *
     * @generated from protobuf field: envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior behavior = 1;
     */
    behavior?: BufferBehavior;
    /**
     * The amount stored in the memory buffer before buffering to disk.
     * If unset in route, vhost and listener config, defaults to a hardcoded value of 1MiB
     *
     * @generated from protobuf field: google.protobuf.UInt64Value memory_buffer_bytes_limit = 2;
     */
    memoryBufferBytesLimit?: UInt64Value;
    /**
     * The maximum storage (excluding memory) to be buffered in this filter.
     * If unset in route, vhost and listener config, defaults to a hardcoded value of 32MiB
     *
     * @generated from protobuf field: google.protobuf.UInt64Value storage_buffer_bytes_limit = 3;
     */
    storageBufferBytesLimit?: UInt64Value;
    /**
     * The maximum amount that can be queued for writing to storage, above which the
     * source is requested to pause. If unset, defaults to the same value as
     * ``memory_buffer_bytes_limit``.
     *
     * For example, assuming the recipient is not consuming data at all, if
     * ``memory_buffer_bytes_limit`` was 32MiB, and ``storage_buffer_queue_high_watermark_bytes``
     * was 64MiB, and the filesystem is backed up so writes are not occurring promptly,
     * then:
     *
     * * Any request less than 32MiB will eventually pass through without ever attempting
     *   to write to disk.
     * * Any request with over 32MiB buffered will start trying to write to disk.
     *   If it reaches (32+64)MiB buffered in memory (write to disk isn't keeping up), a high
     *   watermark signal is sent to the source.
     * * Any stream whose total size exceeds
     *   ``memory_buffer_bytes_limit + storage_buffer_bytes_limit`` will provoke an error.
     *   (Note, if the recipient *is* consuming data then it is possible for such an
     *   oversized request to pass through the buffer filter, provided the recipient
     *   isn't consuming data too slowly.)
     *
     * The low watermark signal is sent when the memory buffer is at size
     * ``memory_buffer_bytes_limit + (storage_buffer_queue_high_watermark_bytes / 2)``.
     *
     * @generated from protobuf field: google.protobuf.UInt64Value storage_buffer_queue_high_watermark_bytes = 4;
     */
    storageBufferQueueHighWatermarkBytes?: UInt64Value;
}
/**
 * A :ref:`file system buffer <config_http_filters_file_system_buffer>` filter configuration.
 *
 * Route-specific configs override only the fields they explicitly include; unset
 * fields inherit from the vhost or listener-level config, or, if never set,
 * and not required, use a default value.
 *
 * @generated from protobuf message envoy.extensions.filters.http.file_system_buffer.v3.FileSystemBufferFilterConfig
 */
export interface FileSystemBufferFilterConfig {
    /**
     * A configuration for an AsyncFileManager.
     *
     * If unset in route, vhost and listener, and the behavior is not ``bypass``
     * in both directions, an Internal Server Error response will be sent.
     *
     * @generated from protobuf field: envoy.extensions.common.async_files.v3.AsyncFileManagerConfig manager_config = 1;
     */
    managerConfig?: AsyncFileManagerConfig;
    /**
     * An optional path to which the unlinked files should be written - this may
     * determine which physical storage device will be used.
     *
     * If unset in route, vhost and listener, will use the environment variable
     * ``TMPDIR``, or, if that's also unset, will use ``/tmp``.
     *
     * @generated from protobuf field: google.protobuf.StringValue storage_buffer_path = 2;
     */
    storageBufferPath?: StringValue;
    /**
     * Optional configuration for how to buffer (or not) requests.
     * If unset in route, vhost and listener, ``StreamConfig`` default values will be used
     * (with behavior ``stream_when_possible``)
     *
     * @generated from protobuf field: envoy.extensions.filters.http.file_system_buffer.v3.StreamConfig request = 3;
     */
    request?: StreamConfig;
    /**
     * Optional configuration for how to buffer (or not) responses.
     * If unset in route, vhost and listener, ``StreamConfig`` default values will be used
     * (with behavior ``stream_when_possible``)
     *
     * @generated from protobuf field: envoy.extensions.filters.http.file_system_buffer.v3.StreamConfig response = 4;
     */
    response?: StreamConfig;
}
// @generated message type with reflection information, may provide speed optimized methods
class BufferBehavior$Type extends MessageType<BufferBehavior> {
    constructor() {
        super("envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior", [
            { no: 1, name: "stream_when_possible", kind: "message", oneof: "behavior", T: () => BufferBehavior_StreamWhenPossible },
            { no: 2, name: "bypass", kind: "message", oneof: "behavior", T: () => BufferBehavior_Bypass },
            { no: 3, name: "inject_content_length_if_necessary", kind: "message", oneof: "behavior", T: () => BufferBehavior_InjectContentLengthIfNecessary },
            { no: 4, name: "fully_buffer_and_always_inject_content_length", kind: "message", oneof: "behavior", T: () => BufferBehavior_FullyBufferAndAlwaysInjectContentLength },
            { no: 5, name: "fully_buffer", kind: "message", oneof: "behavior", T: () => BufferBehavior_FullyBuffer }
        ]);
    }
    create(value?: PartialMessage<BufferBehavior>): BufferBehavior {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.behavior = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<BufferBehavior>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BufferBehavior): BufferBehavior {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.StreamWhenPossible stream_when_possible */ 1:
                    message.behavior = {
                        oneofKind: "streamWhenPossible",
                        streamWhenPossible: BufferBehavior_StreamWhenPossible.internalBinaryRead(reader, reader.uint32(), options, (message.behavior as any).streamWhenPossible)
                    };
                    break;
                case /* envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.Bypass bypass */ 2:
                    message.behavior = {
                        oneofKind: "bypass",
                        bypass: BufferBehavior_Bypass.internalBinaryRead(reader, reader.uint32(), options, (message.behavior as any).bypass)
                    };
                    break;
                case /* envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.InjectContentLengthIfNecessary inject_content_length_if_necessary */ 3:
                    message.behavior = {
                        oneofKind: "injectContentLengthIfNecessary",
                        injectContentLengthIfNecessary: BufferBehavior_InjectContentLengthIfNecessary.internalBinaryRead(reader, reader.uint32(), options, (message.behavior as any).injectContentLengthIfNecessary)
                    };
                    break;
                case /* envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.FullyBufferAndAlwaysInjectContentLength fully_buffer_and_always_inject_content_length */ 4:
                    message.behavior = {
                        oneofKind: "fullyBufferAndAlwaysInjectContentLength",
                        fullyBufferAndAlwaysInjectContentLength: BufferBehavior_FullyBufferAndAlwaysInjectContentLength.internalBinaryRead(reader, reader.uint32(), options, (message.behavior as any).fullyBufferAndAlwaysInjectContentLength)
                    };
                    break;
                case /* envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.FullyBuffer fully_buffer */ 5:
                    message.behavior = {
                        oneofKind: "fullyBuffer",
                        fullyBuffer: BufferBehavior_FullyBuffer.internalBinaryRead(reader, reader.uint32(), options, (message.behavior as any).fullyBuffer)
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
    internalBinaryWrite(message: BufferBehavior, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.StreamWhenPossible stream_when_possible = 1; */
        if (message.behavior.oneofKind === "streamWhenPossible")
            BufferBehavior_StreamWhenPossible.internalBinaryWrite(message.behavior.streamWhenPossible, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.Bypass bypass = 2; */
        if (message.behavior.oneofKind === "bypass")
            BufferBehavior_Bypass.internalBinaryWrite(message.behavior.bypass, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.InjectContentLengthIfNecessary inject_content_length_if_necessary = 3; */
        if (message.behavior.oneofKind === "injectContentLengthIfNecessary")
            BufferBehavior_InjectContentLengthIfNecessary.internalBinaryWrite(message.behavior.injectContentLengthIfNecessary, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.FullyBufferAndAlwaysInjectContentLength fully_buffer_and_always_inject_content_length = 4; */
        if (message.behavior.oneofKind === "fullyBufferAndAlwaysInjectContentLength")
            BufferBehavior_FullyBufferAndAlwaysInjectContentLength.internalBinaryWrite(message.behavior.fullyBufferAndAlwaysInjectContentLength, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.FullyBuffer fully_buffer = 5; */
        if (message.behavior.oneofKind === "fullyBuffer")
            BufferBehavior_FullyBuffer.internalBinaryWrite(message.behavior.fullyBuffer, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior
 */
export const BufferBehavior = new BufferBehavior$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BufferBehavior_StreamWhenPossible$Type extends MessageType<BufferBehavior_StreamWhenPossible> {
    constructor() {
        super("envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.StreamWhenPossible", []);
    }
    create(value?: PartialMessage<BufferBehavior_StreamWhenPossible>): BufferBehavior_StreamWhenPossible {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<BufferBehavior_StreamWhenPossible>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BufferBehavior_StreamWhenPossible): BufferBehavior_StreamWhenPossible {
        return target ?? this.create();
    }
    internalBinaryWrite(message: BufferBehavior_StreamWhenPossible, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.StreamWhenPossible
 */
export const BufferBehavior_StreamWhenPossible = new BufferBehavior_StreamWhenPossible$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BufferBehavior_Bypass$Type extends MessageType<BufferBehavior_Bypass> {
    constructor() {
        super("envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.Bypass", []);
    }
    create(value?: PartialMessage<BufferBehavior_Bypass>): BufferBehavior_Bypass {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<BufferBehavior_Bypass>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BufferBehavior_Bypass): BufferBehavior_Bypass {
        return target ?? this.create();
    }
    internalBinaryWrite(message: BufferBehavior_Bypass, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.Bypass
 */
export const BufferBehavior_Bypass = new BufferBehavior_Bypass$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BufferBehavior_InjectContentLengthIfNecessary$Type extends MessageType<BufferBehavior_InjectContentLengthIfNecessary> {
    constructor() {
        super("envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.InjectContentLengthIfNecessary", []);
    }
    create(value?: PartialMessage<BufferBehavior_InjectContentLengthIfNecessary>): BufferBehavior_InjectContentLengthIfNecessary {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<BufferBehavior_InjectContentLengthIfNecessary>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BufferBehavior_InjectContentLengthIfNecessary): BufferBehavior_InjectContentLengthIfNecessary {
        return target ?? this.create();
    }
    internalBinaryWrite(message: BufferBehavior_InjectContentLengthIfNecessary, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.InjectContentLengthIfNecessary
 */
export const BufferBehavior_InjectContentLengthIfNecessary = new BufferBehavior_InjectContentLengthIfNecessary$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BufferBehavior_FullyBufferAndAlwaysInjectContentLength$Type extends MessageType<BufferBehavior_FullyBufferAndAlwaysInjectContentLength> {
    constructor() {
        super("envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.FullyBufferAndAlwaysInjectContentLength", []);
    }
    create(value?: PartialMessage<BufferBehavior_FullyBufferAndAlwaysInjectContentLength>): BufferBehavior_FullyBufferAndAlwaysInjectContentLength {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<BufferBehavior_FullyBufferAndAlwaysInjectContentLength>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BufferBehavior_FullyBufferAndAlwaysInjectContentLength): BufferBehavior_FullyBufferAndAlwaysInjectContentLength {
        return target ?? this.create();
    }
    internalBinaryWrite(message: BufferBehavior_FullyBufferAndAlwaysInjectContentLength, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.FullyBufferAndAlwaysInjectContentLength
 */
export const BufferBehavior_FullyBufferAndAlwaysInjectContentLength = new BufferBehavior_FullyBufferAndAlwaysInjectContentLength$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BufferBehavior_FullyBuffer$Type extends MessageType<BufferBehavior_FullyBuffer> {
    constructor() {
        super("envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.FullyBuffer", []);
    }
    create(value?: PartialMessage<BufferBehavior_FullyBuffer>): BufferBehavior_FullyBuffer {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<BufferBehavior_FullyBuffer>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BufferBehavior_FullyBuffer): BufferBehavior_FullyBuffer {
        return target ?? this.create();
    }
    internalBinaryWrite(message: BufferBehavior_FullyBuffer, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior.FullyBuffer
 */
export const BufferBehavior_FullyBuffer = new BufferBehavior_FullyBuffer$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamConfig$Type extends MessageType<StreamConfig> {
    constructor() {
        super("envoy.extensions.filters.http.file_system_buffer.v3.StreamConfig", [
            { no: 1, name: "behavior", kind: "message", T: () => BufferBehavior },
            { no: 2, name: "memory_buffer_bytes_limit", kind: "message", T: () => UInt64Value, options: { "validate.rules": { uint64: { gt: "0" } } } },
            { no: 3, name: "storage_buffer_bytes_limit", kind: "message", T: () => UInt64Value },
            { no: 4, name: "storage_buffer_queue_high_watermark_bytes", kind: "message", T: () => UInt64Value }
        ]);
    }
    create(value?: PartialMessage<StreamConfig>): StreamConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<StreamConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamConfig): StreamConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior behavior */ 1:
                    message.behavior = BufferBehavior.internalBinaryRead(reader, reader.uint32(), options, message.behavior);
                    break;
                case /* google.protobuf.UInt64Value memory_buffer_bytes_limit */ 2:
                    message.memoryBufferBytesLimit = UInt64Value.internalBinaryRead(reader, reader.uint32(), options, message.memoryBufferBytesLimit);
                    break;
                case /* google.protobuf.UInt64Value storage_buffer_bytes_limit */ 3:
                    message.storageBufferBytesLimit = UInt64Value.internalBinaryRead(reader, reader.uint32(), options, message.storageBufferBytesLimit);
                    break;
                case /* google.protobuf.UInt64Value storage_buffer_queue_high_watermark_bytes */ 4:
                    message.storageBufferQueueHighWatermarkBytes = UInt64Value.internalBinaryRead(reader, reader.uint32(), options, message.storageBufferQueueHighWatermarkBytes);
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
    internalBinaryWrite(message: StreamConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.extensions.filters.http.file_system_buffer.v3.BufferBehavior behavior = 1; */
        if (message.behavior)
            BufferBehavior.internalBinaryWrite(message.behavior, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt64Value memory_buffer_bytes_limit = 2; */
        if (message.memoryBufferBytesLimit)
            UInt64Value.internalBinaryWrite(message.memoryBufferBytesLimit, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt64Value storage_buffer_bytes_limit = 3; */
        if (message.storageBufferBytesLimit)
            UInt64Value.internalBinaryWrite(message.storageBufferBytesLimit, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt64Value storage_buffer_queue_high_watermark_bytes = 4; */
        if (message.storageBufferQueueHighWatermarkBytes)
            UInt64Value.internalBinaryWrite(message.storageBufferQueueHighWatermarkBytes, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.file_system_buffer.v3.StreamConfig
 */
export const StreamConfig = new StreamConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FileSystemBufferFilterConfig$Type extends MessageType<FileSystemBufferFilterConfig> {
    constructor() {
        super("envoy.extensions.filters.http.file_system_buffer.v3.FileSystemBufferFilterConfig", [
            { no: 1, name: "manager_config", kind: "message", T: () => AsyncFileManagerConfig },
            { no: 2, name: "storage_buffer_path", kind: "message", T: () => StringValue },
            { no: 3, name: "request", kind: "message", T: () => StreamConfig },
            { no: 4, name: "response", kind: "message", T: () => StreamConfig }
        ]);
    }
    create(value?: PartialMessage<FileSystemBufferFilterConfig>): FileSystemBufferFilterConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<FileSystemBufferFilterConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FileSystemBufferFilterConfig): FileSystemBufferFilterConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.extensions.common.async_files.v3.AsyncFileManagerConfig manager_config */ 1:
                    message.managerConfig = AsyncFileManagerConfig.internalBinaryRead(reader, reader.uint32(), options, message.managerConfig);
                    break;
                case /* google.protobuf.StringValue storage_buffer_path */ 2:
                    message.storageBufferPath = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.storageBufferPath);
                    break;
                case /* envoy.extensions.filters.http.file_system_buffer.v3.StreamConfig request */ 3:
                    message.request = StreamConfig.internalBinaryRead(reader, reader.uint32(), options, message.request);
                    break;
                case /* envoy.extensions.filters.http.file_system_buffer.v3.StreamConfig response */ 4:
                    message.response = StreamConfig.internalBinaryRead(reader, reader.uint32(), options, message.response);
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
    internalBinaryWrite(message: FileSystemBufferFilterConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.extensions.common.async_files.v3.AsyncFileManagerConfig manager_config = 1; */
        if (message.managerConfig)
            AsyncFileManagerConfig.internalBinaryWrite(message.managerConfig, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.StringValue storage_buffer_path = 2; */
        if (message.storageBufferPath)
            StringValue.internalBinaryWrite(message.storageBufferPath, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.extensions.filters.http.file_system_buffer.v3.StreamConfig request = 3; */
        if (message.request)
            StreamConfig.internalBinaryWrite(message.request, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* envoy.extensions.filters.http.file_system_buffer.v3.StreamConfig response = 4; */
        if (message.response)
            StreamConfig.internalBinaryWrite(message.response, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.file_system_buffer.v3.FileSystemBufferFilterConfig
 */
export const FileSystemBufferFilterConfig = new FileSystemBufferFilterConfig$Type();
