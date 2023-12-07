// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/config/filter/thrift/rate_limit/v2alpha1/rate_limit.proto" (package "envoy.config.filter.thrift.rate_limit.v2alpha1", syntax proto3)
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
import { RateLimitServiceConfig } from "../../../../ratelimit/v2/rls";
import { Duration } from "../../../../../../google/protobuf/duration";
// [#protodoc-title: Rate limit]
// Rate limit :ref:`configuration overview <config_thrift_filters_rate_limit>`.
// [#extension: envoy.filters.thrift.rate_limit]

/**
 * [#next-free-field: 6]
 *
 * @generated from protobuf message envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit
 */
export interface RateLimit {
    /**
     * The rate limit domain to use in the rate limit service request.
     *
     * @generated from protobuf field: string domain = 1;
     */
    domain: string;
    /**
     * Specifies the rate limit configuration stage. Each configured rate limit filter performs a
     * rate limit check using descriptors configured in the
     * :ref:`envoy_api_msg_config.filter.network.thrift_proxy.v2alpha1.RouteAction` for the request.
     * Only those entries with a matching stage number are used for a given filter. If not set, the
     * default stage number is 0.
     *
     * .. note::
     *
     *  The filter supports a range of 0 - 10 inclusively for stage numbers.
     *
     * @generated from protobuf field: uint32 stage = 2;
     */
    stage: number;
    /**
     * The timeout in milliseconds for the rate limit service RPC. If not
     * set, this defaults to 20ms.
     *
     * @generated from protobuf field: google.protobuf.Duration timeout = 3;
     */
    timeout?: Duration;
    /**
     * The filter's behaviour in case the rate limiting service does
     * not respond back. When it is set to true, Envoy will not allow traffic in case of
     * communication failure between rate limiting service and the proxy.
     * Defaults to false.
     *
     * @generated from protobuf field: bool failure_mode_deny = 4;
     */
    failureModeDeny: boolean;
    /**
     * Configuration for an external rate limit service provider. If not
     * specified, any calls to the rate limit service will immediately return
     * success.
     *
     * @generated from protobuf field: envoy.config.ratelimit.v2.RateLimitServiceConfig rate_limit_service = 5;
     */
    rateLimitService?: RateLimitServiceConfig;
}
// @generated message type with reflection information, may provide speed optimized methods
class RateLimit$Type extends MessageType<RateLimit> {
    constructor() {
        super("envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit", [
            { no: 1, name: "domain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 2, name: "stage", kind: "scalar", T: 13 /*ScalarType.UINT32*/, options: { "validate.rules": { uint32: { lte: 10 } } } },
            { no: 3, name: "timeout", kind: "message", T: () => Duration },
            { no: 4, name: "failure_mode_deny", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "rate_limit_service", kind: "message", T: () => RateLimitServiceConfig, options: { "validate.rules": { message: { required: true } } } }
        ]);
    }
    create(value?: PartialMessage<RateLimit>): RateLimit {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.domain = "";
        message.stage = 0;
        message.failureModeDeny = false;
        if (value !== undefined)
            reflectionMergePartial<RateLimit>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimit): RateLimit {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string domain */ 1:
                    message.domain = reader.string();
                    break;
                case /* uint32 stage */ 2:
                    message.stage = reader.uint32();
                    break;
                case /* google.protobuf.Duration timeout */ 3:
                    message.timeout = Duration.internalBinaryRead(reader, reader.uint32(), options, message.timeout);
                    break;
                case /* bool failure_mode_deny */ 4:
                    message.failureModeDeny = reader.bool();
                    break;
                case /* envoy.config.ratelimit.v2.RateLimitServiceConfig rate_limit_service */ 5:
                    message.rateLimitService = RateLimitServiceConfig.internalBinaryRead(reader, reader.uint32(), options, message.rateLimitService);
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
    internalBinaryWrite(message: RateLimit, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string domain = 1; */
        if (message.domain !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.domain);
        /* uint32 stage = 2; */
        if (message.stage !== 0)
            writer.tag(2, WireType.Varint).uint32(message.stage);
        /* google.protobuf.Duration timeout = 3; */
        if (message.timeout)
            Duration.internalBinaryWrite(message.timeout, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* bool failure_mode_deny = 4; */
        if (message.failureModeDeny !== false)
            writer.tag(4, WireType.Varint).bool(message.failureModeDeny);
        /* envoy.config.ratelimit.v2.RateLimitServiceConfig rate_limit_service = 5; */
        if (message.rateLimitService)
            RateLimitServiceConfig.internalBinaryWrite(message.rateLimitService, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit
 */
export const RateLimit = new RateLimit$Type();
