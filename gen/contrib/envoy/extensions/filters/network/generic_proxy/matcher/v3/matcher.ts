// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "contrib/envoy/extensions/filters/network/generic_proxy/matcher/v3/matcher.proto" (package "envoy.extensions.filters.network.generic_proxy.matcher.v3", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { StringMatcher } from "../../../../../../../../envoy/type/matcher/v3/string";
// [#protodoc-title: Generic Proxy Route Matcher Configuration]

/**
 * Used to match request service of the downstream request. Only applicable if a service provided
 * by the application protocol.
 * This is deprecated and should be replaced by HostMatchInput. This is kept for backward compatibility.
 *
 * @generated from protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.ServiceMatchInput
 */
export interface ServiceMatchInput {
}
/**
 * Used to match request host of the generic downstream request. Only applicable if a host provided
 * by the application protocol.
 * This is same with the ServiceMatchInput and this should be preferred over ServiceMatchInput.
 *
 * @generated from protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.HostMatchInput
 */
export interface HostMatchInput {
}
/**
 * Used to match request path of the generic downstream request. Only applicable if a path provided
 * by the application protocol.
 *
 * @generated from protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.PathMatchInput
 */
export interface PathMatchInput {
}
/**
 * Used to match request method of the generic downstream request. Only applicable if a method provided
 * by the application protocol.
 *
 * @generated from protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.MethodMatchInput
 */
export interface MethodMatchInput {
}
/**
 * Used to match an arbitrary property of the generic downstream request.
 * These properties are populated by the codecs of application protocols.
 *
 * @generated from protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.PropertyMatchInput
 */
export interface PropertyMatchInput {
    /**
     * The property name to match on.
     *
     * @generated from protobuf field: string property_name = 1;
     */
    propertyName: string;
}
/**
 * Used to match an whole generic downstream request.
 *
 * @generated from protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.RequestMatchInput
 */
export interface RequestMatchInput {
}
/**
 * Used to match an arbitrary key-value pair for headers, trailers or properties.
 *
 * @generated from protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.KeyValueMatchEntry
 */
export interface KeyValueMatchEntry {
    /**
     * The key name to match on.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The key value pattern.
     *
     * @generated from protobuf field: envoy.type.matcher.v3.StringMatcher string_match = 2;
     */
    stringMatch?: StringMatcher;
}
/**
 * Custom matcher to match on the generic downstream request. This is used to match
 * multiple fields of the downstream request and avoid complex combinations of
 * HostMatchInput, PathMatchInput, MethodMatchInput and PropertyMatchInput.
 *
 * @generated from protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.RequestMatcher
 */
export interface RequestMatcher {
    /**
     * Optional host pattern to match on. If not specified, any host will match.
     *
     * @generated from protobuf field: envoy.type.matcher.v3.StringMatcher host = 1;
     */
    host?: StringMatcher;
    /**
     * Optional path pattern to match on. If not specified, any path will match.
     *
     * @generated from protobuf field: envoy.type.matcher.v3.StringMatcher path = 2;
     */
    path?: StringMatcher;
    /**
     * Optional method pattern to match on. If not specified, any method will match.
     *
     * @generated from protobuf field: envoy.type.matcher.v3.StringMatcher method = 3;
     */
    method?: StringMatcher;
    /**
     * Optional arbitrary properties to match on. If not specified, any properties
     * will match. The key is the property name and the value is the property value
     * to match on.
     *
     * @generated from protobuf field: repeated envoy.extensions.filters.network.generic_proxy.matcher.v3.KeyValueMatchEntry properties = 4;
     */
    properties: KeyValueMatchEntry[];
}
// @generated message type with reflection information, may provide speed optimized methods
class ServiceMatchInput$Type extends MessageType<ServiceMatchInput> {
    constructor() {
        super("envoy.extensions.filters.network.generic_proxy.matcher.v3.ServiceMatchInput", []);
    }
    create(value?: PartialMessage<ServiceMatchInput>): ServiceMatchInput {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<ServiceMatchInput>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ServiceMatchInput): ServiceMatchInput {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ServiceMatchInput, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.ServiceMatchInput
 */
export const ServiceMatchInput = new ServiceMatchInput$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HostMatchInput$Type extends MessageType<HostMatchInput> {
    constructor() {
        super("envoy.extensions.filters.network.generic_proxy.matcher.v3.HostMatchInput", []);
    }
    create(value?: PartialMessage<HostMatchInput>): HostMatchInput {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<HostMatchInput>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HostMatchInput): HostMatchInput {
        return target ?? this.create();
    }
    internalBinaryWrite(message: HostMatchInput, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.HostMatchInput
 */
export const HostMatchInput = new HostMatchInput$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PathMatchInput$Type extends MessageType<PathMatchInput> {
    constructor() {
        super("envoy.extensions.filters.network.generic_proxy.matcher.v3.PathMatchInput", []);
    }
    create(value?: PartialMessage<PathMatchInput>): PathMatchInput {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<PathMatchInput>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PathMatchInput): PathMatchInput {
        return target ?? this.create();
    }
    internalBinaryWrite(message: PathMatchInput, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.PathMatchInput
 */
export const PathMatchInput = new PathMatchInput$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MethodMatchInput$Type extends MessageType<MethodMatchInput> {
    constructor() {
        super("envoy.extensions.filters.network.generic_proxy.matcher.v3.MethodMatchInput", []);
    }
    create(value?: PartialMessage<MethodMatchInput>): MethodMatchInput {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<MethodMatchInput>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MethodMatchInput): MethodMatchInput {
        return target ?? this.create();
    }
    internalBinaryWrite(message: MethodMatchInput, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.MethodMatchInput
 */
export const MethodMatchInput = new MethodMatchInput$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PropertyMatchInput$Type extends MessageType<PropertyMatchInput> {
    constructor() {
        super("envoy.extensions.filters.network.generic_proxy.matcher.v3.PropertyMatchInput", [
            { no: 1, name: "property_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<PropertyMatchInput>): PropertyMatchInput {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.propertyName = "";
        if (value !== undefined)
            reflectionMergePartial<PropertyMatchInput>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PropertyMatchInput): PropertyMatchInput {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string property_name */ 1:
                    message.propertyName = reader.string();
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
    internalBinaryWrite(message: PropertyMatchInput, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string property_name = 1; */
        if (message.propertyName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.propertyName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.PropertyMatchInput
 */
export const PropertyMatchInput = new PropertyMatchInput$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RequestMatchInput$Type extends MessageType<RequestMatchInput> {
    constructor() {
        super("envoy.extensions.filters.network.generic_proxy.matcher.v3.RequestMatchInput", []);
    }
    create(value?: PartialMessage<RequestMatchInput>): RequestMatchInput {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<RequestMatchInput>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RequestMatchInput): RequestMatchInput {
        return target ?? this.create();
    }
    internalBinaryWrite(message: RequestMatchInput, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.RequestMatchInput
 */
export const RequestMatchInput = new RequestMatchInput$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeyValueMatchEntry$Type extends MessageType<KeyValueMatchEntry> {
    constructor() {
        super("envoy.extensions.filters.network.generic_proxy.matcher.v3.KeyValueMatchEntry", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "string_match", kind: "message", T: () => StringMatcher, options: { "validate.rules": { message: { required: true } } } }
        ]);
    }
    create(value?: PartialMessage<KeyValueMatchEntry>): KeyValueMatchEntry {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        if (value !== undefined)
            reflectionMergePartial<KeyValueMatchEntry>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeyValueMatchEntry): KeyValueMatchEntry {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* envoy.type.matcher.v3.StringMatcher string_match */ 2:
                    message.stringMatch = StringMatcher.internalBinaryRead(reader, reader.uint32(), options, message.stringMatch);
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
    internalBinaryWrite(message: KeyValueMatchEntry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* envoy.type.matcher.v3.StringMatcher string_match = 2; */
        if (message.stringMatch)
            StringMatcher.internalBinaryWrite(message.stringMatch, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.KeyValueMatchEntry
 */
export const KeyValueMatchEntry = new KeyValueMatchEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RequestMatcher$Type extends MessageType<RequestMatcher> {
    constructor() {
        super("envoy.extensions.filters.network.generic_proxy.matcher.v3.RequestMatcher", [
            { no: 1, name: "host", kind: "message", T: () => StringMatcher },
            { no: 2, name: "path", kind: "message", T: () => StringMatcher },
            { no: 3, name: "method", kind: "message", T: () => StringMatcher },
            { no: 4, name: "properties", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => KeyValueMatchEntry }
        ]);
    }
    create(value?: PartialMessage<RequestMatcher>): RequestMatcher {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.properties = [];
        if (value !== undefined)
            reflectionMergePartial<RequestMatcher>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RequestMatcher): RequestMatcher {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.type.matcher.v3.StringMatcher host */ 1:
                    message.host = StringMatcher.internalBinaryRead(reader, reader.uint32(), options, message.host);
                    break;
                case /* envoy.type.matcher.v3.StringMatcher path */ 2:
                    message.path = StringMatcher.internalBinaryRead(reader, reader.uint32(), options, message.path);
                    break;
                case /* envoy.type.matcher.v3.StringMatcher method */ 3:
                    message.method = StringMatcher.internalBinaryRead(reader, reader.uint32(), options, message.method);
                    break;
                case /* repeated envoy.extensions.filters.network.generic_proxy.matcher.v3.KeyValueMatchEntry properties */ 4:
                    message.properties.push(KeyValueMatchEntry.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: RequestMatcher, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.type.matcher.v3.StringMatcher host = 1; */
        if (message.host)
            StringMatcher.internalBinaryWrite(message.host, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* envoy.type.matcher.v3.StringMatcher path = 2; */
        if (message.path)
            StringMatcher.internalBinaryWrite(message.path, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.type.matcher.v3.StringMatcher method = 3; */
        if (message.method)
            StringMatcher.internalBinaryWrite(message.method, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.extensions.filters.network.generic_proxy.matcher.v3.KeyValueMatchEntry properties = 4; */
        for (let i = 0; i < message.properties.length; i++)
            KeyValueMatchEntry.internalBinaryWrite(message.properties[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.generic_proxy.matcher.v3.RequestMatcher
 */
export const RequestMatcher = new RequestMatcher$Type();
