// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/network/thrift_proxy/router/v3/router.proto" (package "envoy.extensions.filters.network.thrift_proxy.router.v3", syntax proto3)
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
import { BoolValue } from "../../../../../../../google/protobuf/wrappers";
// [#protodoc-title: Router]
// Thrift router :ref:`configuration overview <config_thrift_filters_router>`.
// [#extension: envoy.filters.thrift.router]

/**
 * @generated from protobuf message envoy.extensions.filters.network.thrift_proxy.router.v3.Router
 */
export interface Router {
    /**
     * Close downstream connection in case of routing or upstream connection problem. Default: true
     *
     * @generated from protobuf field: google.protobuf.BoolValue close_downstream_on_upstream_error = 1;
     */
    closeDownstreamOnUpstreamError?: BoolValue;
}
// @generated message type with reflection information, may provide speed optimized methods
class Router$Type extends MessageType<Router> {
    constructor() {
        super("envoy.extensions.filters.network.thrift_proxy.router.v3.Router", [
            { no: 1, name: "close_downstream_on_upstream_error", kind: "message", T: () => BoolValue }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.filter.thrift.router.v2alpha1.Router" } });
    }
    create(value?: PartialMessage<Router>): Router {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Router>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Router): Router {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.BoolValue close_downstream_on_upstream_error */ 1:
                    message.closeDownstreamOnUpstreamError = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.closeDownstreamOnUpstreamError);
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
    internalBinaryWrite(message: Router, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.BoolValue close_downstream_on_upstream_error = 1; */
        if (message.closeDownstreamOnUpstreamError)
            BoolValue.internalBinaryWrite(message.closeDownstreamOnUpstreamError, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.thrift_proxy.router.v3.Router
 */
export const Router = new Router$Type();
