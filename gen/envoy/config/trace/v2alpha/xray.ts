// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/config/trace/v2alpha/xray.proto" (package "envoy.config.trace.v2alpha", syntax proto3)
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
import { DataSource } from "../../../api/v2/core/base";
import { SocketAddress } from "../../../api/v2/core/address";
// [#protodoc-title: AWS X-Ray Tracer Configuration]
// Configuration for AWS X-Ray tracer

/**
 * @generated from protobuf message envoy.config.trace.v2alpha.XRayConfig
 */
export interface XRayConfig {
    /**
     * The UDP endpoint of the X-Ray Daemon where the spans will be sent.
     * If this value is not set, the default value of 127.0.0.1:2000 will be used.
     *
     * @generated from protobuf field: envoy.api.v2.core.SocketAddress daemon_endpoint = 1;
     */
    daemonEndpoint?: SocketAddress;
    /**
     * The name of the X-Ray segment.
     *
     * @generated from protobuf field: string segment_name = 2;
     */
    segmentName: string;
    /**
     * The location of a local custom sampling rules JSON file.
     * For an example of the sampling rules see:
     * `X-Ray SDK documentation
     * <https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-go-configuration.html#xray-sdk-go-configuration-sampling>`_
     *
     * @generated from protobuf field: envoy.api.v2.core.DataSource sampling_rule_manifest = 3;
     */
    samplingRuleManifest?: DataSource;
}
// @generated message type with reflection information, may provide speed optimized methods
class XRayConfig$Type extends MessageType<XRayConfig> {
    constructor() {
        super("envoy.config.trace.v2alpha.XRayConfig", [
            { no: 1, name: "daemon_endpoint", kind: "message", T: () => SocketAddress },
            { no: 2, name: "segment_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 3, name: "sampling_rule_manifest", kind: "message", T: () => DataSource }
        ]);
    }
    create(value?: PartialMessage<XRayConfig>): XRayConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.segmentName = "";
        if (value !== undefined)
            reflectionMergePartial<XRayConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: XRayConfig): XRayConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.api.v2.core.SocketAddress daemon_endpoint */ 1:
                    message.daemonEndpoint = SocketAddress.internalBinaryRead(reader, reader.uint32(), options, message.daemonEndpoint);
                    break;
                case /* string segment_name */ 2:
                    message.segmentName = reader.string();
                    break;
                case /* envoy.api.v2.core.DataSource sampling_rule_manifest */ 3:
                    message.samplingRuleManifest = DataSource.internalBinaryRead(reader, reader.uint32(), options, message.samplingRuleManifest);
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
    internalBinaryWrite(message: XRayConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.api.v2.core.SocketAddress daemon_endpoint = 1; */
        if (message.daemonEndpoint)
            SocketAddress.internalBinaryWrite(message.daemonEndpoint, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string segment_name = 2; */
        if (message.segmentName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.segmentName);
        /* envoy.api.v2.core.DataSource sampling_rule_manifest = 3; */
        if (message.samplingRuleManifest)
            DataSource.internalBinaryWrite(message.samplingRuleManifest, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.trace.v2alpha.XRayConfig
 */
export const XRayConfig = new XRayConfig$Type();
