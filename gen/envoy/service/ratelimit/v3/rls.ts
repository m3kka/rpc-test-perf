// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/ratelimit/v3/rls.proto" (package "envoy.service.ratelimit.v3", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Duration } from "../../../../google/protobuf/duration";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Struct } from "../../../../google/protobuf/struct";
import { HeaderValue } from "../../../config/core/v3/base";
import { RateLimitDescriptor } from "../../../extensions/common/ratelimit/v3/ratelimit";
/**
 * Main message for a rate limit request. The rate limit service is designed to be fully generic
 * in the sense that it can operate on arbitrary hierarchical key/value pairs. The loaded
 * configuration will parse the request and find the most specific limit to apply. In addition,
 * a RateLimitRequest can contain multiple "descriptors" to limit on. When multiple descriptors
 * are provided, the server will limit on *ALL* of them and return an OVER_LIMIT response if any
 * of them are over limit. This enables more complex application level rate limiting scenarios
 * if desired.
 *
 * @generated from protobuf message envoy.service.ratelimit.v3.RateLimitRequest
 */
export interface RateLimitRequest {
    /**
     * All rate limit requests must specify a domain. This enables the configuration to be per
     * application without fear of overlap. E.g., "envoy".
     *
     * @generated from protobuf field: string domain = 1;
     */
    domain: string;
    /**
     * All rate limit requests must specify at least one RateLimitDescriptor. Each descriptor is
     * processed by the service (see below). If any of the descriptors are over limit, the entire
     * request is considered to be over limit.
     *
     * @generated from protobuf field: repeated envoy.extensions.common.ratelimit.v3.RateLimitDescriptor descriptors = 2;
     */
    descriptors: RateLimitDescriptor[];
    /**
     * Rate limit requests can optionally specify the number of hits a request adds to the matched
     * limit. If the value is not set in the message, a request increases the matched limit by 1.
     *
     * @generated from protobuf field: uint32 hits_addend = 3;
     */
    hitsAddend: number;
}
/**
 * A response from a ShouldRateLimit call.
 * [#next-free-field: 8]
 *
 * @generated from protobuf message envoy.service.ratelimit.v3.RateLimitResponse
 */
export interface RateLimitResponse {
    /**
     * The overall response code which takes into account all of the descriptors that were passed
     * in the RateLimitRequest message.
     *
     * @generated from protobuf field: envoy.service.ratelimit.v3.RateLimitResponse.Code overall_code = 1;
     */
    overallCode: RateLimitResponse_Code;
    /**
     * A list of DescriptorStatus messages which matches the length of the descriptor list passed
     * in the RateLimitRequest. This can be used by the caller to determine which individual
     * descriptors failed and/or what the currently configured limits are for all of them.
     *
     * @generated from protobuf field: repeated envoy.service.ratelimit.v3.RateLimitResponse.DescriptorStatus statuses = 2;
     */
    statuses: RateLimitResponse_DescriptorStatus[];
    /**
     * A list of headers to add to the response
     *
     * @generated from protobuf field: repeated envoy.config.core.v3.HeaderValue response_headers_to_add = 3;
     */
    responseHeadersToAdd: HeaderValue[];
    /**
     * A list of headers to add to the request when forwarded
     *
     * @generated from protobuf field: repeated envoy.config.core.v3.HeaderValue request_headers_to_add = 4;
     */
    requestHeadersToAdd: HeaderValue[];
    /**
     * A response body to send to the downstream client when the response code is not OK.
     *
     * @generated from protobuf field: bytes raw_body = 5;
     */
    rawBody: Uint8Array;
    /**
     * Optional response metadata that will be emitted as dynamic metadata to be consumed by the next
     * filter. This metadata lives in a namespace specified by the canonical name of extension filter
     * that requires it:
     *
     * - :ref:`envoy.filters.http.ratelimit <config_http_filters_ratelimit_dynamic_metadata>` for HTTP filter.
     * - :ref:`envoy.filters.network.ratelimit <config_network_filters_ratelimit_dynamic_metadata>` for network filter.
     * - :ref:`envoy.filters.thrift.rate_limit <config_thrift_filters_rate_limit_dynamic_metadata>` for Thrift filter.
     *
     * @generated from protobuf field: google.protobuf.Struct dynamic_metadata = 6;
     */
    dynamicMetadata?: Struct;
    /**
     * Quota is available for a request if its entire descriptor set has cached quota available.
     * This is a union of all descriptors in the descriptor set. Clients can use the quota for future matches if and only if the descriptor set matches what was sent in the request that originated this response.
     *
     * If quota is available, a RLS request will not be made and the quota will be reduced by 1.
     * If quota is not available (i.e., a cached entry doesn't exist for a RLS descriptor set), a RLS request will be triggered.
     * If the server did not provide a quota, such as the quota message is empty then the request admission is determined by the
     * :ref:`overall_code <envoy_v3_api_field_service.ratelimit.v3.RateLimitResponse.overall_code>`.
     *
     * If there is not sufficient quota and the cached entry exists for a RLS descriptor set is out-of-quota but not expired,
     * the request will be treated as OVER_LIMIT.
     * [#not-implemented-hide:]
     *
     * @generated from protobuf field: envoy.service.ratelimit.v3.RateLimitResponse.Quota quota = 7;
     */
    quota?: RateLimitResponse_Quota;
}
/**
 * Defines an actual rate limit in terms of requests per unit of time and the unit itself.
 *
 * @generated from protobuf message envoy.service.ratelimit.v3.RateLimitResponse.RateLimit
 */
export interface RateLimitResponse_RateLimit {
    /**
     * A name or description of this limit.
     *
     * @generated from protobuf field: string name = 3;
     */
    name: string;
    /**
     * The number of requests per unit of time.
     *
     * @generated from protobuf field: uint32 requests_per_unit = 1;
     */
    requestsPerUnit: number;
    /**
     * The unit of time.
     *
     * @generated from protobuf field: envoy.service.ratelimit.v3.RateLimitResponse.RateLimit.Unit unit = 2;
     */
    unit: RateLimitResponse_RateLimit_Unit;
}
/**
 * Identifies the unit of of time for rate limit.
 * [#comment: replace by envoy/type/v3/ratelimit_unit.proto in v4]
 *
 * @generated from protobuf enum envoy.service.ratelimit.v3.RateLimitResponse.RateLimit.Unit
 */
export enum RateLimitResponse_RateLimit_Unit {
    /**
     * The time unit is not known.
     *
     * @generated from protobuf enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * The time unit representing a second.
     *
     * @generated from protobuf enum value: SECOND = 1;
     */
    SECOND = 1,
    /**
     * The time unit representing a minute.
     *
     * @generated from protobuf enum value: MINUTE = 2;
     */
    MINUTE = 2,
    /**
     * The time unit representing an hour.
     *
     * @generated from protobuf enum value: HOUR = 3;
     */
    HOUR = 3,
    /**
     * The time unit representing a day.
     *
     * @generated from protobuf enum value: DAY = 4;
     */
    DAY = 4,
    /**
     * The time unit representing a month.
     *
     * @generated from protobuf enum value: MONTH = 5;
     */
    MONTH = 5,
    /**
     * The time unit representing a year.
     *
     * @generated from protobuf enum value: YEAR = 6;
     */
    YEAR = 6
}
/**
 * Cacheable quota for responses.
 * Quota can be granted at different levels: either for each individual descriptor or for the whole descriptor set.
 * This is a certain number of requests over a period of time.
 * The client may cache this result and apply the effective RateLimitResponse to future matching
 * requests without querying rate limit service.
 *
 * When quota expires due to timeout, a new RLS request will also be made.
 * The implementation may choose to preemptively query the rate limit server for more quota on or
 * before expiration or before the available quota runs out.
 * [#not-implemented-hide:]
 *
 * @generated from protobuf message envoy.service.ratelimit.v3.RateLimitResponse.Quota
 */
export interface RateLimitResponse_Quota {
    /**
     * Number of matching requests granted in quota. Must be 1 or more.
     *
     * @generated from protobuf field: uint32 requests = 1;
     */
    requests: number;
    /**
     * @generated from protobuf oneof: expiration_specifier
     */
    expirationSpecifier: {
        oneofKind: "validUntil";
        /**
         * Point in time at which the quota expires.
         *
         * @generated from protobuf field: google.protobuf.Timestamp valid_until = 2;
         */
        validUntil: Timestamp;
    } | {
        oneofKind: undefined;
    };
    /**
     * The unique id that is associated with each Quota either at individual descriptor level or whole descriptor set level.
     *
     * For a matching policy with boolean logic, for example, match: "request.headers['environment'] == 'staging' || request.headers['environment'] == 'dev'"),
     * the request_headers action produces a distinct list of descriptors for each possible value of the ‘environment’ header even though the granted quota is same.
     * Thus, the client will use this id information (returned from RLS server) to correctly correlate the multiple descriptors/descriptor sets that have been granted with same quota (i.e., share the same quota among multiple descriptors or descriptor sets.)
     *
     * If id is empty, this id field will be ignored. If quota for the same id changes (e.g. due to configuration update), the old quota will be overridden by the new one. Shared quotas referenced by ID will still adhere to expiration after `valid_until`.
     *
     * @generated from protobuf field: string id = 3;
     */
    id: string;
}
/**
 * [#next-free-field: 6]
 *
 * @generated from protobuf message envoy.service.ratelimit.v3.RateLimitResponse.DescriptorStatus
 */
export interface RateLimitResponse_DescriptorStatus {
    /**
     * The response code for an individual descriptor.
     *
     * @generated from protobuf field: envoy.service.ratelimit.v3.RateLimitResponse.Code code = 1;
     */
    code: RateLimitResponse_Code;
    /**
     * The current limit as configured by the server. Useful for debugging, etc.
     *
     * @generated from protobuf field: envoy.service.ratelimit.v3.RateLimitResponse.RateLimit current_limit = 2;
     */
    currentLimit?: RateLimitResponse_RateLimit;
    /**
     * The limit remaining in the current time unit.
     *
     * @generated from protobuf field: uint32 limit_remaining = 3;
     */
    limitRemaining: number;
    /**
     * Duration until reset of the current limit window.
     *
     * @generated from protobuf field: google.protobuf.Duration duration_until_reset = 4;
     */
    durationUntilReset?: Duration;
    /**
     * Quota is available for a request if its descriptor set has cached quota available for all
     * descriptors.
     * This is for each individual descriptor in the descriptor set. The client will perform matches for each individual descriptor against available per-descriptor quota.
     *
     * If quota is available, a RLS request will not be made and the quota will be reduced by 1 for
     * all matching descriptors.
     *
     * If there is not sufficient quota, there are three cases:
     * 1. A cached entry exists for a RLS descriptor that is out-of-quota, but not expired.
     *    In this case, the request will be treated as OVER_LIMIT.
     * 2. Some RLS descriptors have a cached entry that has valid quota but some RLS descriptors
     *    have no cached entry. This will trigger a new RLS request.
     *    When the result is returned, a single unit will be consumed from the quota for all
     *    matching descriptors.
     *    If the server did not provide a quota, such as the quota message is empty for some of
     *    the descriptors, then the request admission is determined by the
     *    :ref:`overall_code <envoy_v3_api_field_service.ratelimit.v3.RateLimitResponse.overall_code>`.
     * 3. All RLS descriptors lack a cached entry, this will trigger a new RLS request,
     *    When the result is returned, a single unit will be consumed from the quota for all
     *    matching descriptors.
     *    If the server did not provide a quota, such as the quota message is empty for some of
     *    the descriptors, then the request admission is determined by the
     *    :ref:`overall_code <envoy_v3_api_field_service.ratelimit.v3.RateLimitResponse.overall_code>`.
     * [#not-implemented-hide:]
     *
     * @generated from protobuf field: envoy.service.ratelimit.v3.RateLimitResponse.Quota quota = 5;
     */
    quota?: RateLimitResponse_Quota;
}
/**
 * @generated from protobuf enum envoy.service.ratelimit.v3.RateLimitResponse.Code
 */
export enum RateLimitResponse_Code {
    /**
     * The response code is not known.
     *
     * @generated from protobuf enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * The response code to notify that the number of requests are under limit.
     *
     * @generated from protobuf enum value: OK = 1;
     */
    OK = 1,
    /**
     * The response code to notify that the number of requests are over limit.
     *
     * @generated from protobuf enum value: OVER_LIMIT = 2;
     */
    OVER_LIMIT = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class RateLimitRequest$Type extends MessageType<RateLimitRequest> {
    constructor() {
        super("envoy.service.ratelimit.v3.RateLimitRequest", [
            { no: 1, name: "domain", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "descriptors", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RateLimitDescriptor },
            { no: 3, name: "hits_addend", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.service.ratelimit.v2.RateLimitRequest" } });
    }
    create(value?: PartialMessage<RateLimitRequest>): RateLimitRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.domain = "";
        message.descriptors = [];
        message.hitsAddend = 0;
        if (value !== undefined)
            reflectionMergePartial<RateLimitRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimitRequest): RateLimitRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string domain */ 1:
                    message.domain = reader.string();
                    break;
                case /* repeated envoy.extensions.common.ratelimit.v3.RateLimitDescriptor descriptors */ 2:
                    message.descriptors.push(RateLimitDescriptor.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 hits_addend */ 3:
                    message.hitsAddend = reader.uint32();
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
    internalBinaryWrite(message: RateLimitRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string domain = 1; */
        if (message.domain !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.domain);
        /* repeated envoy.extensions.common.ratelimit.v3.RateLimitDescriptor descriptors = 2; */
        for (let i = 0; i < message.descriptors.length; i++)
            RateLimitDescriptor.internalBinaryWrite(message.descriptors[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* uint32 hits_addend = 3; */
        if (message.hitsAddend !== 0)
            writer.tag(3, WireType.Varint).uint32(message.hitsAddend);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.ratelimit.v3.RateLimitRequest
 */
export const RateLimitRequest = new RateLimitRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RateLimitResponse$Type extends MessageType<RateLimitResponse> {
    constructor() {
        super("envoy.service.ratelimit.v3.RateLimitResponse", [
            { no: 1, name: "overall_code", kind: "enum", T: () => ["envoy.service.ratelimit.v3.RateLimitResponse.Code", RateLimitResponse_Code] },
            { no: 2, name: "statuses", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RateLimitResponse_DescriptorStatus },
            { no: 3, name: "response_headers_to_add", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderValue },
            { no: 4, name: "request_headers_to_add", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderValue },
            { no: 5, name: "raw_body", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 6, name: "dynamic_metadata", kind: "message", T: () => Struct },
            { no: 7, name: "quota", kind: "message", T: () => RateLimitResponse_Quota }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.service.ratelimit.v2.RateLimitResponse" } });
    }
    create(value?: PartialMessage<RateLimitResponse>): RateLimitResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.overallCode = 0;
        message.statuses = [];
        message.responseHeadersToAdd = [];
        message.requestHeadersToAdd = [];
        message.rawBody = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial<RateLimitResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimitResponse): RateLimitResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.service.ratelimit.v3.RateLimitResponse.Code overall_code */ 1:
                    message.overallCode = reader.int32();
                    break;
                case /* repeated envoy.service.ratelimit.v3.RateLimitResponse.DescriptorStatus statuses */ 2:
                    message.statuses.push(RateLimitResponse_DescriptorStatus.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated envoy.config.core.v3.HeaderValue response_headers_to_add */ 3:
                    message.responseHeadersToAdd.push(HeaderValue.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated envoy.config.core.v3.HeaderValue request_headers_to_add */ 4:
                    message.requestHeadersToAdd.push(HeaderValue.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bytes raw_body */ 5:
                    message.rawBody = reader.bytes();
                    break;
                case /* google.protobuf.Struct dynamic_metadata */ 6:
                    message.dynamicMetadata = Struct.internalBinaryRead(reader, reader.uint32(), options, message.dynamicMetadata);
                    break;
                case /* envoy.service.ratelimit.v3.RateLimitResponse.Quota quota */ 7:
                    message.quota = RateLimitResponse_Quota.internalBinaryRead(reader, reader.uint32(), options, message.quota);
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
    internalBinaryWrite(message: RateLimitResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.service.ratelimit.v3.RateLimitResponse.Code overall_code = 1; */
        if (message.overallCode !== 0)
            writer.tag(1, WireType.Varint).int32(message.overallCode);
        /* repeated envoy.service.ratelimit.v3.RateLimitResponse.DescriptorStatus statuses = 2; */
        for (let i = 0; i < message.statuses.length; i++)
            RateLimitResponse_DescriptorStatus.internalBinaryWrite(message.statuses[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.config.core.v3.HeaderValue response_headers_to_add = 3; */
        for (let i = 0; i < message.responseHeadersToAdd.length; i++)
            HeaderValue.internalBinaryWrite(message.responseHeadersToAdd[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.config.core.v3.HeaderValue request_headers_to_add = 4; */
        for (let i = 0; i < message.requestHeadersToAdd.length; i++)
            HeaderValue.internalBinaryWrite(message.requestHeadersToAdd[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* bytes raw_body = 5; */
        if (message.rawBody.length)
            writer.tag(5, WireType.LengthDelimited).bytes(message.rawBody);
        /* google.protobuf.Struct dynamic_metadata = 6; */
        if (message.dynamicMetadata)
            Struct.internalBinaryWrite(message.dynamicMetadata, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* envoy.service.ratelimit.v3.RateLimitResponse.Quota quota = 7; */
        if (message.quota)
            RateLimitResponse_Quota.internalBinaryWrite(message.quota, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.ratelimit.v3.RateLimitResponse
 */
export const RateLimitResponse = new RateLimitResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RateLimitResponse_RateLimit$Type extends MessageType<RateLimitResponse_RateLimit> {
    constructor() {
        super("envoy.service.ratelimit.v3.RateLimitResponse.RateLimit", [
            { no: 3, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "requests_per_unit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "unit", kind: "enum", T: () => ["envoy.service.ratelimit.v3.RateLimitResponse.RateLimit.Unit", RateLimitResponse_RateLimit_Unit] }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.service.ratelimit.v2.RateLimitResponse.RateLimit" } });
    }
    create(value?: PartialMessage<RateLimitResponse_RateLimit>): RateLimitResponse_RateLimit {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.requestsPerUnit = 0;
        message.unit = 0;
        if (value !== undefined)
            reflectionMergePartial<RateLimitResponse_RateLimit>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimitResponse_RateLimit): RateLimitResponse_RateLimit {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 3:
                    message.name = reader.string();
                    break;
                case /* uint32 requests_per_unit */ 1:
                    message.requestsPerUnit = reader.uint32();
                    break;
                case /* envoy.service.ratelimit.v3.RateLimitResponse.RateLimit.Unit unit */ 2:
                    message.unit = reader.int32();
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
    internalBinaryWrite(message: RateLimitResponse_RateLimit, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 3; */
        if (message.name !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.name);
        /* uint32 requests_per_unit = 1; */
        if (message.requestsPerUnit !== 0)
            writer.tag(1, WireType.Varint).uint32(message.requestsPerUnit);
        /* envoy.service.ratelimit.v3.RateLimitResponse.RateLimit.Unit unit = 2; */
        if (message.unit !== 0)
            writer.tag(2, WireType.Varint).int32(message.unit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.ratelimit.v3.RateLimitResponse.RateLimit
 */
export const RateLimitResponse_RateLimit = new RateLimitResponse_RateLimit$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RateLimitResponse_Quota$Type extends MessageType<RateLimitResponse_Quota> {
    constructor() {
        super("envoy.service.ratelimit.v3.RateLimitResponse.Quota", [
            { no: 1, name: "requests", kind: "scalar", T: 13 /*ScalarType.UINT32*/, options: { "validate.rules": { uint32: { gt: 0 } } } },
            { no: 2, name: "valid_until", kind: "message", oneof: "expirationSpecifier", T: () => Timestamp },
            { no: 3, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RateLimitResponse_Quota>): RateLimitResponse_Quota {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.requests = 0;
        message.expirationSpecifier = { oneofKind: undefined };
        message.id = "";
        if (value !== undefined)
            reflectionMergePartial<RateLimitResponse_Quota>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimitResponse_Quota): RateLimitResponse_Quota {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 requests */ 1:
                    message.requests = reader.uint32();
                    break;
                case /* google.protobuf.Timestamp valid_until */ 2:
                    message.expirationSpecifier = {
                        oneofKind: "validUntil",
                        validUntil: Timestamp.internalBinaryRead(reader, reader.uint32(), options, (message.expirationSpecifier as any).validUntil)
                    };
                    break;
                case /* string id */ 3:
                    message.id = reader.string();
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
    internalBinaryWrite(message: RateLimitResponse_Quota, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 requests = 1; */
        if (message.requests !== 0)
            writer.tag(1, WireType.Varint).uint32(message.requests);
        /* google.protobuf.Timestamp valid_until = 2; */
        if (message.expirationSpecifier.oneofKind === "validUntil")
            Timestamp.internalBinaryWrite(message.expirationSpecifier.validUntil, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string id = 3; */
        if (message.id !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.ratelimit.v3.RateLimitResponse.Quota
 */
export const RateLimitResponse_Quota = new RateLimitResponse_Quota$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RateLimitResponse_DescriptorStatus$Type extends MessageType<RateLimitResponse_DescriptorStatus> {
    constructor() {
        super("envoy.service.ratelimit.v3.RateLimitResponse.DescriptorStatus", [
            { no: 1, name: "code", kind: "enum", T: () => ["envoy.service.ratelimit.v3.RateLimitResponse.Code", RateLimitResponse_Code] },
            { no: 2, name: "current_limit", kind: "message", T: () => RateLimitResponse_RateLimit },
            { no: 3, name: "limit_remaining", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "duration_until_reset", kind: "message", T: () => Duration },
            { no: 5, name: "quota", kind: "message", T: () => RateLimitResponse_Quota }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.service.ratelimit.v2.RateLimitResponse.DescriptorStatus" } });
    }
    create(value?: PartialMessage<RateLimitResponse_DescriptorStatus>): RateLimitResponse_DescriptorStatus {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.code = 0;
        message.limitRemaining = 0;
        if (value !== undefined)
            reflectionMergePartial<RateLimitResponse_DescriptorStatus>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimitResponse_DescriptorStatus): RateLimitResponse_DescriptorStatus {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.service.ratelimit.v3.RateLimitResponse.Code code */ 1:
                    message.code = reader.int32();
                    break;
                case /* envoy.service.ratelimit.v3.RateLimitResponse.RateLimit current_limit */ 2:
                    message.currentLimit = RateLimitResponse_RateLimit.internalBinaryRead(reader, reader.uint32(), options, message.currentLimit);
                    break;
                case /* uint32 limit_remaining */ 3:
                    message.limitRemaining = reader.uint32();
                    break;
                case /* google.protobuf.Duration duration_until_reset */ 4:
                    message.durationUntilReset = Duration.internalBinaryRead(reader, reader.uint32(), options, message.durationUntilReset);
                    break;
                case /* envoy.service.ratelimit.v3.RateLimitResponse.Quota quota */ 5:
                    message.quota = RateLimitResponse_Quota.internalBinaryRead(reader, reader.uint32(), options, message.quota);
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
    internalBinaryWrite(message: RateLimitResponse_DescriptorStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.service.ratelimit.v3.RateLimitResponse.Code code = 1; */
        if (message.code !== 0)
            writer.tag(1, WireType.Varint).int32(message.code);
        /* envoy.service.ratelimit.v3.RateLimitResponse.RateLimit current_limit = 2; */
        if (message.currentLimit)
            RateLimitResponse_RateLimit.internalBinaryWrite(message.currentLimit, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* uint32 limit_remaining = 3; */
        if (message.limitRemaining !== 0)
            writer.tag(3, WireType.Varint).uint32(message.limitRemaining);
        /* google.protobuf.Duration duration_until_reset = 4; */
        if (message.durationUntilReset)
            Duration.internalBinaryWrite(message.durationUntilReset, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* envoy.service.ratelimit.v3.RateLimitResponse.Quota quota = 5; */
        if (message.quota)
            RateLimitResponse_Quota.internalBinaryWrite(message.quota, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.ratelimit.v3.RateLimitResponse.DescriptorStatus
 */
export const RateLimitResponse_DescriptorStatus = new RateLimitResponse_DescriptorStatus$Type();
/**
 * @generated ServiceType for protobuf service envoy.service.ratelimit.v3.RateLimitService
 */
export const RateLimitService = new ServiceType("envoy.service.ratelimit.v3.RateLimitService", [
    { name: "ShouldRateLimit", options: {}, I: RateLimitRequest, O: RateLimitResponse }
]);
