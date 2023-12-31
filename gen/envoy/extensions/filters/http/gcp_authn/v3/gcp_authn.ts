// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/http/gcp_authn/v3/gcp_authn.proto" (package "envoy.extensions.filters.http.gcp_authn.v3", syntax proto3)
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
import { UInt64Value } from "../../../../../../google/protobuf/wrappers";
import { RetryPolicy } from "../../../../../config/core/v3/base";
import { HttpUri } from "../../../../../config/core/v3/http_uri";
// [#protodoc-title: GCP authentication]
// GCP authentication :ref:`configuration overview <config_http_filters_gcp_authn>`.
// [#extension: envoy.filters.http.gcp_authn]

/**
 * Filter configuration.
 *
 * @generated from protobuf message envoy.extensions.filters.http.gcp_authn.v3.GcpAuthnFilterConfig
 */
export interface GcpAuthnFilterConfig {
    /**
     * The HTTP URI to fetch tokens from GCE Metadata Server(https://cloud.google.com/compute/docs/metadata/overview).
     * The URL format is "http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=[AUDIENCE]"
     *
     * @generated from protobuf field: envoy.config.core.v3.HttpUri http_uri = 1;
     */
    httpUri?: HttpUri;
    /**
     * Retry policy for fetching tokens. This field is optional.
     *
     * @generated from protobuf field: envoy.config.core.v3.RetryPolicy retry_policy = 2;
     */
    retryPolicy?: RetryPolicy;
    /**
     * Token cache configuration. This field is optional.
     *
     * @generated from protobuf field: envoy.extensions.filters.http.gcp_authn.v3.TokenCacheConfig cache_config = 3;
     */
    cacheConfig?: TokenCacheConfig;
    /**
     * Request header location to extract the token. By default (i.e. if this field is not specified), the token
     * is extracted to the Authorization HTTP header, in the format "Authorization: Bearer <token>".
     *
     * @generated from protobuf field: envoy.extensions.filters.http.gcp_authn.v3.TokenHeader token_header = 4;
     */
    tokenHeader?: TokenHeader;
}
/**
 * Audience is the URL of the receiving service that performs token authentication.
 * It will be provided to the filter through cluster's typed_filter_metadata.
 *
 * @generated from protobuf message envoy.extensions.filters.http.gcp_authn.v3.Audience
 */
export interface Audience {
    /**
     * @generated from protobuf field: string url = 1;
     */
    url: string;
}
/**
 * Token Cache configuration.
 *
 * @generated from protobuf message envoy.extensions.filters.http.gcp_authn.v3.TokenCacheConfig
 */
export interface TokenCacheConfig {
    /**
     * The number of cache entries. The maximum number of entries is INT64_MAX as it is constrained by underlying cache implementation.
     * Default value 0 (i.e., proto3 defaults) disables the cache by default. Other default values will enable the cache.
     *
     * @generated from protobuf field: google.protobuf.UInt64Value cache_size = 1;
     */
    cacheSize?: UInt64Value;
}
/**
 * @generated from protobuf message envoy.extensions.filters.http.gcp_authn.v3.TokenHeader
 */
export interface TokenHeader {
    /**
     * The HTTP header's name.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The header's prefix. The format is "value_prefix<token>"
     * For example, for "Authorization: Bearer <token>", value_prefix="Bearer " with a space at the
     * end.
     *
     * @generated from protobuf field: string value_prefix = 2;
     */
    valuePrefix: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class GcpAuthnFilterConfig$Type extends MessageType<GcpAuthnFilterConfig> {
    constructor() {
        super("envoy.extensions.filters.http.gcp_authn.v3.GcpAuthnFilterConfig", [
            { no: 1, name: "http_uri", kind: "message", T: () => HttpUri, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "retry_policy", kind: "message", T: () => RetryPolicy },
            { no: 3, name: "cache_config", kind: "message", T: () => TokenCacheConfig },
            { no: 4, name: "token_header", kind: "message", T: () => TokenHeader }
        ]);
    }
    create(value?: PartialMessage<GcpAuthnFilterConfig>): GcpAuthnFilterConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<GcpAuthnFilterConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GcpAuthnFilterConfig): GcpAuthnFilterConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.config.core.v3.HttpUri http_uri */ 1:
                    message.httpUri = HttpUri.internalBinaryRead(reader, reader.uint32(), options, message.httpUri);
                    break;
                case /* envoy.config.core.v3.RetryPolicy retry_policy */ 2:
                    message.retryPolicy = RetryPolicy.internalBinaryRead(reader, reader.uint32(), options, message.retryPolicy);
                    break;
                case /* envoy.extensions.filters.http.gcp_authn.v3.TokenCacheConfig cache_config */ 3:
                    message.cacheConfig = TokenCacheConfig.internalBinaryRead(reader, reader.uint32(), options, message.cacheConfig);
                    break;
                case /* envoy.extensions.filters.http.gcp_authn.v3.TokenHeader token_header */ 4:
                    message.tokenHeader = TokenHeader.internalBinaryRead(reader, reader.uint32(), options, message.tokenHeader);
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
    internalBinaryWrite(message: GcpAuthnFilterConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.config.core.v3.HttpUri http_uri = 1; */
        if (message.httpUri)
            HttpUri.internalBinaryWrite(message.httpUri, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.RetryPolicy retry_policy = 2; */
        if (message.retryPolicy)
            RetryPolicy.internalBinaryWrite(message.retryPolicy, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.extensions.filters.http.gcp_authn.v3.TokenCacheConfig cache_config = 3; */
        if (message.cacheConfig)
            TokenCacheConfig.internalBinaryWrite(message.cacheConfig, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* envoy.extensions.filters.http.gcp_authn.v3.TokenHeader token_header = 4; */
        if (message.tokenHeader)
            TokenHeader.internalBinaryWrite(message.tokenHeader, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.gcp_authn.v3.GcpAuthnFilterConfig
 */
export const GcpAuthnFilterConfig = new GcpAuthnFilterConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Audience$Type extends MessageType<Audience> {
    constructor() {
        super("envoy.extensions.filters.http.gcp_authn.v3.Audience", [
            { no: 1, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<Audience>): Audience {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.url = "";
        if (value !== undefined)
            reflectionMergePartial<Audience>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Audience): Audience {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string url */ 1:
                    message.url = reader.string();
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
    internalBinaryWrite(message: Audience, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string url = 1; */
        if (message.url !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.url);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.gcp_authn.v3.Audience
 */
export const Audience = new Audience$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TokenCacheConfig$Type extends MessageType<TokenCacheConfig> {
    constructor() {
        super("envoy.extensions.filters.http.gcp_authn.v3.TokenCacheConfig", [
            { no: 1, name: "cache_size", kind: "message", T: () => UInt64Value, options: { "validate.rules": { uint64: { lte: "9223372036854775807" } } } }
        ]);
    }
    create(value?: PartialMessage<TokenCacheConfig>): TokenCacheConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<TokenCacheConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TokenCacheConfig): TokenCacheConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.UInt64Value cache_size */ 1:
                    message.cacheSize = UInt64Value.internalBinaryRead(reader, reader.uint32(), options, message.cacheSize);
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
    internalBinaryWrite(message: TokenCacheConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.UInt64Value cache_size = 1; */
        if (message.cacheSize)
            UInt64Value.internalBinaryWrite(message.cacheSize, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.gcp_authn.v3.TokenCacheConfig
 */
export const TokenCacheConfig = new TokenCacheConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TokenHeader$Type extends MessageType<TokenHeader> {
    constructor() {
        super("envoy.extensions.filters.http.gcp_authn.v3.TokenHeader", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1", wellKnownRegex: "HTTP_HEADER_NAME", strict: false } } } },
            { no: 2, name: "value_prefix", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { wellKnownRegex: "HTTP_HEADER_VALUE", strict: false } } } }
        ]);
    }
    create(value?: PartialMessage<TokenHeader>): TokenHeader {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.valuePrefix = "";
        if (value !== undefined)
            reflectionMergePartial<TokenHeader>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TokenHeader): TokenHeader {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string value_prefix */ 2:
                    message.valuePrefix = reader.string();
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
    internalBinaryWrite(message: TokenHeader, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string value_prefix = 2; */
        if (message.valuePrefix !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.valuePrefix);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.gcp_authn.v3.TokenHeader
 */
export const TokenHeader = new TokenHeader$Type();
