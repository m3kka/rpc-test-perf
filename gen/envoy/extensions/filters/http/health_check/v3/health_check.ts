// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/http/health_check/v3/health_check.proto" (package "envoy.extensions.filters.http.health_check.v3", syntax proto3)
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
import { HeaderMatcher } from "../../../../../config/route/v3/route_components";
import { Percent } from "../../../../../type/v3/percent";
import { Duration } from "../../../../../../google/protobuf/duration";
import { BoolValue } from "../../../../../../google/protobuf/wrappers";
// [#protodoc-title: Health check]
// Health check :ref:`configuration overview <config_http_filters_health_check>`.
// [#extension: envoy.filters.http.health_check]

/**
 * [#next-free-field: 6]
 *
 * @generated from protobuf message envoy.extensions.filters.http.health_check.v3.HealthCheck
 */
export interface HealthCheck {
    /**
     * Specifies whether the filter operates in pass through mode or not.
     *
     * @generated from protobuf field: google.protobuf.BoolValue pass_through_mode = 1;
     */
    passThroughMode?: BoolValue;
    /**
     * If operating in pass through mode, the amount of time in milliseconds
     * that the filter should cache the upstream response.
     *
     * @generated from protobuf field: google.protobuf.Duration cache_time = 3;
     */
    cacheTime?: Duration;
    /**
     * If operating in non-pass-through mode, specifies a set of upstream cluster
     * names and the minimum percentage of servers in each of those clusters that
     * must be healthy or degraded in order for the filter to return a 200.
     *
     * .. note::
     *
     *    This value is interpreted as an integer by truncating, so 12.50% will be calculated
     *    as if it were 12%.
     *
     * @generated from protobuf field: map<string, envoy.type.v3.Percent> cluster_min_healthy_percentages = 4;
     */
    clusterMinHealthyPercentages: {
        [key: string]: Percent;
    };
    /**
     * Specifies a set of health check request headers to match on. The health check filter will
     * check a request’s headers against all the specified headers. To specify the health check
     * endpoint, set the ``:path`` header to match on.
     *
     * @generated from protobuf field: repeated envoy.config.route.v3.HeaderMatcher headers = 5;
     */
    headers: HeaderMatcher[];
}
// @generated message type with reflection information, may provide speed optimized methods
class HealthCheck$Type extends MessageType<HealthCheck> {
    constructor() {
        super("envoy.extensions.filters.http.health_check.v3.HealthCheck", [
            { no: 1, name: "pass_through_mode", kind: "message", T: () => BoolValue, options: { "validate.rules": { message: { required: true } } } },
            { no: 3, name: "cache_time", kind: "message", T: () => Duration },
            { no: 4, name: "cluster_min_healthy_percentages", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => Percent } },
            { no: 5, name: "headers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderMatcher }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.filter.http.health_check.v2.HealthCheck" } });
    }
    create(value?: PartialMessage<HealthCheck>): HealthCheck {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.clusterMinHealthyPercentages = {};
        message.headers = [];
        if (value !== undefined)
            reflectionMergePartial<HealthCheck>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HealthCheck): HealthCheck {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.BoolValue pass_through_mode */ 1:
                    message.passThroughMode = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.passThroughMode);
                    break;
                case /* google.protobuf.Duration cache_time */ 3:
                    message.cacheTime = Duration.internalBinaryRead(reader, reader.uint32(), options, message.cacheTime);
                    break;
                case /* map<string, envoy.type.v3.Percent> cluster_min_healthy_percentages */ 4:
                    this.binaryReadMap4(message.clusterMinHealthyPercentages, reader, options);
                    break;
                case /* repeated envoy.config.route.v3.HeaderMatcher headers */ 5:
                    message.headers.push(HeaderMatcher.internalBinaryRead(reader, reader.uint32(), options));
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
    private binaryReadMap4(map: HealthCheck["clusterMinHealthyPercentages"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof HealthCheck["clusterMinHealthyPercentages"] | undefined, val: HealthCheck["clusterMinHealthyPercentages"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = Percent.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field envoy.extensions.filters.http.health_check.v3.HealthCheck.cluster_min_healthy_percentages");
            }
        }
        map[key ?? ""] = val ?? Percent.create();
    }
    internalBinaryWrite(message: HealthCheck, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.BoolValue pass_through_mode = 1; */
        if (message.passThroughMode)
            BoolValue.internalBinaryWrite(message.passThroughMode, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration cache_time = 3; */
        if (message.cacheTime)
            Duration.internalBinaryWrite(message.cacheTime, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* map<string, envoy.type.v3.Percent> cluster_min_healthy_percentages = 4; */
        for (let k of globalThis.Object.keys(message.clusterMinHealthyPercentages)) {
            writer.tag(4, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k);
            writer.tag(2, WireType.LengthDelimited).fork();
            Percent.internalBinaryWrite(message.clusterMinHealthyPercentages[k], writer, options);
            writer.join().join();
        }
        /* repeated envoy.config.route.v3.HeaderMatcher headers = 5; */
        for (let i = 0; i < message.headers.length; i++)
            HeaderMatcher.internalBinaryWrite(message.headers[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.health_check.v3.HealthCheck
 */
export const HealthCheck = new HealthCheck$Type();
