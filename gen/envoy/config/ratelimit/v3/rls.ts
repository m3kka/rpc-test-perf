// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/config/ratelimit/v3/rls.proto" (package "envoy.config.ratelimit.v3", syntax proto3)
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
import { ApiVersion } from "../../core/v3/config_source";
import { GrpcService } from "../../core/v3/grpc_service";
// [#protodoc-title: Rate limit service]

/**
 * Rate limit :ref:`configuration overview <config_rate_limit_service>`.
 *
 * @generated from protobuf message envoy.config.ratelimit.v3.RateLimitServiceConfig
 */
export interface RateLimitServiceConfig {
    /**
     * Specifies the gRPC service that hosts the rate limit service. The client
     * will connect to this cluster when it needs to make rate limit service
     * requests.
     *
     * @generated from protobuf field: envoy.config.core.v3.GrpcService grpc_service = 2;
     */
    grpcService?: GrpcService;
    /**
     * API version for rate limit transport protocol. This describes the rate limit gRPC endpoint and
     * version of messages used on the wire.
     *
     * @generated from protobuf field: envoy.config.core.v3.ApiVersion transport_api_version = 4;
     */
    transportApiVersion: ApiVersion;
}
// @generated message type with reflection information, may provide speed optimized methods
class RateLimitServiceConfig$Type extends MessageType<RateLimitServiceConfig> {
    constructor() {
        super("envoy.config.ratelimit.v3.RateLimitServiceConfig", [
            { no: 2, name: "grpc_service", kind: "message", T: () => GrpcService, options: { "validate.rules": { message: { required: true } } } },
            { no: 4, name: "transport_api_version", kind: "enum", T: () => ["envoy.config.core.v3.ApiVersion", ApiVersion], options: { "validate.rules": { enum: { definedOnly: true } } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.ratelimit.v2.RateLimitServiceConfig" } });
    }
    create(value?: PartialMessage<RateLimitServiceConfig>): RateLimitServiceConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.transportApiVersion = 0;
        if (value !== undefined)
            reflectionMergePartial<RateLimitServiceConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimitServiceConfig): RateLimitServiceConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.config.core.v3.GrpcService grpc_service */ 2:
                    message.grpcService = GrpcService.internalBinaryRead(reader, reader.uint32(), options, message.grpcService);
                    break;
                case /* envoy.config.core.v3.ApiVersion transport_api_version */ 4:
                    message.transportApiVersion = reader.int32();
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
    internalBinaryWrite(message: RateLimitServiceConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.config.core.v3.GrpcService grpc_service = 2; */
        if (message.grpcService)
            GrpcService.internalBinaryWrite(message.grpcService, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.ApiVersion transport_api_version = 4; */
        if (message.transportApiVersion !== 0)
            writer.tag(4, WireType.Varint).int32(message.transportApiVersion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.ratelimit.v3.RateLimitServiceConfig
 */
export const RateLimitServiceConfig = new RateLimitServiceConfig$Type();