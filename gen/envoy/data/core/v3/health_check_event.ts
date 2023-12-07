// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/data/core/v3/health_check_event.proto" (package "envoy.data.core.v3", syntax proto3)
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
import { Locality } from "../../../config/core/v3/base";
import { Metadata } from "../../../config/core/v3/base";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Address } from "../../../config/core/v3/address";
/**
 * [#next-free-field: 12]
 *
 * @generated from protobuf message envoy.data.core.v3.HealthCheckEvent
 */
export interface HealthCheckEvent {
    /**
     * @generated from protobuf field: envoy.data.core.v3.HealthCheckerType health_checker_type = 1;
     */
    healthCheckerType: HealthCheckerType;
    /**
     * @generated from protobuf field: envoy.config.core.v3.Address host = 2;
     */
    host?: Address;
    /**
     * @generated from protobuf field: string cluster_name = 3;
     */
    clusterName: string;
    /**
     * @generated from protobuf oneof: event
     */
    event: {
        oneofKind: "ejectUnhealthyEvent";
        /**
         * Host ejection.
         *
         * @generated from protobuf field: envoy.data.core.v3.HealthCheckEjectUnhealthy eject_unhealthy_event = 4;
         */
        ejectUnhealthyEvent: HealthCheckEjectUnhealthy;
    } | {
        oneofKind: "addHealthyEvent";
        /**
         * Host addition.
         *
         * @generated from protobuf field: envoy.data.core.v3.HealthCheckAddHealthy add_healthy_event = 5;
         */
        addHealthyEvent: HealthCheckAddHealthy;
    } | {
        oneofKind: "healthCheckFailureEvent";
        /**
         * Host failure.
         *
         * @generated from protobuf field: envoy.data.core.v3.HealthCheckFailure health_check_failure_event = 7;
         */
        healthCheckFailureEvent: HealthCheckFailure;
    } | {
        oneofKind: "degradedHealthyHost";
        /**
         * Healthy host became degraded.
         *
         * @generated from protobuf field: envoy.data.core.v3.DegradedHealthyHost degraded_healthy_host = 8;
         */
        degradedHealthyHost: DegradedHealthyHost;
    } | {
        oneofKind: "noLongerDegradedHost";
        /**
         * A degraded host returned to being healthy.
         *
         * @generated from protobuf field: envoy.data.core.v3.NoLongerDegradedHost no_longer_degraded_host = 9;
         */
        noLongerDegradedHost: NoLongerDegradedHost;
    } | {
        oneofKind: undefined;
    };
    /**
     * Timestamp for event.
     *
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 6;
     */
    timestamp?: Timestamp;
    /**
     * Host metadata
     *
     * @generated from protobuf field: envoy.config.core.v3.Metadata metadata = 10;
     */
    metadata?: Metadata;
    /**
     * Host locality
     *
     * @generated from protobuf field: envoy.config.core.v3.Locality locality = 11;
     */
    locality?: Locality;
}
/**
 * @generated from protobuf message envoy.data.core.v3.HealthCheckEjectUnhealthy
 */
export interface HealthCheckEjectUnhealthy {
    /**
     * The type of failure that caused this ejection.
     *
     * @generated from protobuf field: envoy.data.core.v3.HealthCheckFailureType failure_type = 1;
     */
    failureType: HealthCheckFailureType;
}
/**
 * @generated from protobuf message envoy.data.core.v3.HealthCheckAddHealthy
 */
export interface HealthCheckAddHealthy {
    /**
     * Whether this addition is the result of the first ever health check on a host, in which case
     * the configured :ref:`healthy threshold <envoy_v3_api_field_config.core.v3.HealthCheck.healthy_threshold>`
     * is bypassed and the host is immediately added.
     *
     * @generated from protobuf field: bool first_check = 1;
     */
    firstCheck: boolean;
}
/**
 * @generated from protobuf message envoy.data.core.v3.HealthCheckFailure
 */
export interface HealthCheckFailure {
    /**
     * The type of failure that caused this event.
     *
     * @generated from protobuf field: envoy.data.core.v3.HealthCheckFailureType failure_type = 1;
     */
    failureType: HealthCheckFailureType;
    /**
     * Whether this event is the result of the first ever health check on a host.
     *
     * @generated from protobuf field: bool first_check = 2;
     */
    firstCheck: boolean;
}
/**
 * @generated from protobuf message envoy.data.core.v3.DegradedHealthyHost
 */
export interface DegradedHealthyHost {
}
/**
 * @generated from protobuf message envoy.data.core.v3.NoLongerDegradedHost
 */
export interface NoLongerDegradedHost {
}
// [#protodoc-title: Health check logging events]
// :ref:`Health check logging <arch_overview_health_check_logging>`.

/**
 * @generated from protobuf enum envoy.data.core.v3.HealthCheckFailureType
 */
export enum HealthCheckFailureType {
    /**
     * @generated from protobuf enum value: ACTIVE = 0;
     */
    ACTIVE = 0,
    /**
     * @generated from protobuf enum value: PASSIVE = 1;
     */
    PASSIVE = 1,
    /**
     * @generated from protobuf enum value: NETWORK = 2;
     */
    NETWORK = 2,
    /**
     * @generated from protobuf enum value: NETWORK_TIMEOUT = 3;
     */
    NETWORK_TIMEOUT = 3
}
/**
 * @generated from protobuf enum envoy.data.core.v3.HealthCheckerType
 */
export enum HealthCheckerType {
    /**
     * @generated from protobuf enum value: HTTP = 0;
     */
    HTTP = 0,
    /**
     * @generated from protobuf enum value: TCP = 1;
     */
    TCP = 1,
    /**
     * @generated from protobuf enum value: GRPC = 2;
     */
    GRPC = 2,
    /**
     * @generated from protobuf enum value: REDIS = 3;
     */
    REDIS = 3,
    /**
     * @generated from protobuf enum value: THRIFT = 4;
     */
    THRIFT = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class HealthCheckEvent$Type extends MessageType<HealthCheckEvent> {
    constructor() {
        super("envoy.data.core.v3.HealthCheckEvent", [
            { no: 1, name: "health_checker_type", kind: "enum", T: () => ["envoy.data.core.v3.HealthCheckerType", HealthCheckerType], options: { "validate.rules": { enum: { definedOnly: true } } } },
            { no: 2, name: "host", kind: "message", T: () => Address },
            { no: 3, name: "cluster_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 4, name: "eject_unhealthy_event", kind: "message", oneof: "event", T: () => HealthCheckEjectUnhealthy },
            { no: 5, name: "add_healthy_event", kind: "message", oneof: "event", T: () => HealthCheckAddHealthy },
            { no: 7, name: "health_check_failure_event", kind: "message", oneof: "event", T: () => HealthCheckFailure },
            { no: 8, name: "degraded_healthy_host", kind: "message", oneof: "event", T: () => DegradedHealthyHost },
            { no: 9, name: "no_longer_degraded_host", kind: "message", oneof: "event", T: () => NoLongerDegradedHost },
            { no: 6, name: "timestamp", kind: "message", T: () => Timestamp },
            { no: 10, name: "metadata", kind: "message", T: () => Metadata },
            { no: 11, name: "locality", kind: "message", T: () => Locality }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.data.core.v2alpha.HealthCheckEvent" } });
    }
    create(value?: PartialMessage<HealthCheckEvent>): HealthCheckEvent {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.healthCheckerType = 0;
        message.clusterName = "";
        message.event = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<HealthCheckEvent>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HealthCheckEvent): HealthCheckEvent {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.data.core.v3.HealthCheckerType health_checker_type */ 1:
                    message.healthCheckerType = reader.int32();
                    break;
                case /* envoy.config.core.v3.Address host */ 2:
                    message.host = Address.internalBinaryRead(reader, reader.uint32(), options, message.host);
                    break;
                case /* string cluster_name */ 3:
                    message.clusterName = reader.string();
                    break;
                case /* envoy.data.core.v3.HealthCheckEjectUnhealthy eject_unhealthy_event */ 4:
                    message.event = {
                        oneofKind: "ejectUnhealthyEvent",
                        ejectUnhealthyEvent: HealthCheckEjectUnhealthy.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).ejectUnhealthyEvent)
                    };
                    break;
                case /* envoy.data.core.v3.HealthCheckAddHealthy add_healthy_event */ 5:
                    message.event = {
                        oneofKind: "addHealthyEvent",
                        addHealthyEvent: HealthCheckAddHealthy.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).addHealthyEvent)
                    };
                    break;
                case /* envoy.data.core.v3.HealthCheckFailure health_check_failure_event */ 7:
                    message.event = {
                        oneofKind: "healthCheckFailureEvent",
                        healthCheckFailureEvent: HealthCheckFailure.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).healthCheckFailureEvent)
                    };
                    break;
                case /* envoy.data.core.v3.DegradedHealthyHost degraded_healthy_host */ 8:
                    message.event = {
                        oneofKind: "degradedHealthyHost",
                        degradedHealthyHost: DegradedHealthyHost.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).degradedHealthyHost)
                    };
                    break;
                case /* envoy.data.core.v3.NoLongerDegradedHost no_longer_degraded_host */ 9:
                    message.event = {
                        oneofKind: "noLongerDegradedHost",
                        noLongerDegradedHost: NoLongerDegradedHost.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).noLongerDegradedHost)
                    };
                    break;
                case /* google.protobuf.Timestamp timestamp */ 6:
                    message.timestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.timestamp);
                    break;
                case /* envoy.config.core.v3.Metadata metadata */ 10:
                    message.metadata = Metadata.internalBinaryRead(reader, reader.uint32(), options, message.metadata);
                    break;
                case /* envoy.config.core.v3.Locality locality */ 11:
                    message.locality = Locality.internalBinaryRead(reader, reader.uint32(), options, message.locality);
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
    internalBinaryWrite(message: HealthCheckEvent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.data.core.v3.HealthCheckerType health_checker_type = 1; */
        if (message.healthCheckerType !== 0)
            writer.tag(1, WireType.Varint).int32(message.healthCheckerType);
        /* envoy.config.core.v3.Address host = 2; */
        if (message.host)
            Address.internalBinaryWrite(message.host, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string cluster_name = 3; */
        if (message.clusterName !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.clusterName);
        /* envoy.data.core.v3.HealthCheckEjectUnhealthy eject_unhealthy_event = 4; */
        if (message.event.oneofKind === "ejectUnhealthyEvent")
            HealthCheckEjectUnhealthy.internalBinaryWrite(message.event.ejectUnhealthyEvent, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* envoy.data.core.v3.HealthCheckAddHealthy add_healthy_event = 5; */
        if (message.event.oneofKind === "addHealthyEvent")
            HealthCheckAddHealthy.internalBinaryWrite(message.event.addHealthyEvent, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* envoy.data.core.v3.HealthCheckFailure health_check_failure_event = 7; */
        if (message.event.oneofKind === "healthCheckFailureEvent")
            HealthCheckFailure.internalBinaryWrite(message.event.healthCheckFailureEvent, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* envoy.data.core.v3.DegradedHealthyHost degraded_healthy_host = 8; */
        if (message.event.oneofKind === "degradedHealthyHost")
            DegradedHealthyHost.internalBinaryWrite(message.event.degradedHealthyHost, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* envoy.data.core.v3.NoLongerDegradedHost no_longer_degraded_host = 9; */
        if (message.event.oneofKind === "noLongerDegradedHost")
            NoLongerDegradedHost.internalBinaryWrite(message.event.noLongerDegradedHost, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp timestamp = 6; */
        if (message.timestamp)
            Timestamp.internalBinaryWrite(message.timestamp, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.Metadata metadata = 10; */
        if (message.metadata)
            Metadata.internalBinaryWrite(message.metadata, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.Locality locality = 11; */
        if (message.locality)
            Locality.internalBinaryWrite(message.locality, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.data.core.v3.HealthCheckEvent
 */
export const HealthCheckEvent = new HealthCheckEvent$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HealthCheckEjectUnhealthy$Type extends MessageType<HealthCheckEjectUnhealthy> {
    constructor() {
        super("envoy.data.core.v3.HealthCheckEjectUnhealthy", [
            { no: 1, name: "failure_type", kind: "enum", T: () => ["envoy.data.core.v3.HealthCheckFailureType", HealthCheckFailureType], options: { "validate.rules": { enum: { definedOnly: true } } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.data.core.v2alpha.HealthCheckEjectUnhealthy" } });
    }
    create(value?: PartialMessage<HealthCheckEjectUnhealthy>): HealthCheckEjectUnhealthy {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.failureType = 0;
        if (value !== undefined)
            reflectionMergePartial<HealthCheckEjectUnhealthy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HealthCheckEjectUnhealthy): HealthCheckEjectUnhealthy {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.data.core.v3.HealthCheckFailureType failure_type */ 1:
                    message.failureType = reader.int32();
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
    internalBinaryWrite(message: HealthCheckEjectUnhealthy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.data.core.v3.HealthCheckFailureType failure_type = 1; */
        if (message.failureType !== 0)
            writer.tag(1, WireType.Varint).int32(message.failureType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.data.core.v3.HealthCheckEjectUnhealthy
 */
export const HealthCheckEjectUnhealthy = new HealthCheckEjectUnhealthy$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HealthCheckAddHealthy$Type extends MessageType<HealthCheckAddHealthy> {
    constructor() {
        super("envoy.data.core.v3.HealthCheckAddHealthy", [
            { no: 1, name: "first_check", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.data.core.v2alpha.HealthCheckAddHealthy" } });
    }
    create(value?: PartialMessage<HealthCheckAddHealthy>): HealthCheckAddHealthy {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.firstCheck = false;
        if (value !== undefined)
            reflectionMergePartial<HealthCheckAddHealthy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HealthCheckAddHealthy): HealthCheckAddHealthy {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool first_check */ 1:
                    message.firstCheck = reader.bool();
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
    internalBinaryWrite(message: HealthCheckAddHealthy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool first_check = 1; */
        if (message.firstCheck !== false)
            writer.tag(1, WireType.Varint).bool(message.firstCheck);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.data.core.v3.HealthCheckAddHealthy
 */
export const HealthCheckAddHealthy = new HealthCheckAddHealthy$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HealthCheckFailure$Type extends MessageType<HealthCheckFailure> {
    constructor() {
        super("envoy.data.core.v3.HealthCheckFailure", [
            { no: 1, name: "failure_type", kind: "enum", T: () => ["envoy.data.core.v3.HealthCheckFailureType", HealthCheckFailureType], options: { "validate.rules": { enum: { definedOnly: true } } } },
            { no: 2, name: "first_check", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.data.core.v2alpha.HealthCheckFailure" } });
    }
    create(value?: PartialMessage<HealthCheckFailure>): HealthCheckFailure {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.failureType = 0;
        message.firstCheck = false;
        if (value !== undefined)
            reflectionMergePartial<HealthCheckFailure>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HealthCheckFailure): HealthCheckFailure {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.data.core.v3.HealthCheckFailureType failure_type */ 1:
                    message.failureType = reader.int32();
                    break;
                case /* bool first_check */ 2:
                    message.firstCheck = reader.bool();
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
    internalBinaryWrite(message: HealthCheckFailure, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.data.core.v3.HealthCheckFailureType failure_type = 1; */
        if (message.failureType !== 0)
            writer.tag(1, WireType.Varint).int32(message.failureType);
        /* bool first_check = 2; */
        if (message.firstCheck !== false)
            writer.tag(2, WireType.Varint).bool(message.firstCheck);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.data.core.v3.HealthCheckFailure
 */
export const HealthCheckFailure = new HealthCheckFailure$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DegradedHealthyHost$Type extends MessageType<DegradedHealthyHost> {
    constructor() {
        super("envoy.data.core.v3.DegradedHealthyHost", [], { "udpa.annotations.versioning": { previousMessageType: "envoy.data.core.v2alpha.DegradedHealthyHost" } });
    }
    create(value?: PartialMessage<DegradedHealthyHost>): DegradedHealthyHost {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<DegradedHealthyHost>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DegradedHealthyHost): DegradedHealthyHost {
        return target ?? this.create();
    }
    internalBinaryWrite(message: DegradedHealthyHost, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.data.core.v3.DegradedHealthyHost
 */
export const DegradedHealthyHost = new DegradedHealthyHost$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NoLongerDegradedHost$Type extends MessageType<NoLongerDegradedHost> {
    constructor() {
        super("envoy.data.core.v3.NoLongerDegradedHost", [], { "udpa.annotations.versioning": { previousMessageType: "envoy.data.core.v2alpha.NoLongerDegradedHost" } });
    }
    create(value?: PartialMessage<NoLongerDegradedHost>): NoLongerDegradedHost {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<NoLongerDegradedHost>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NoLongerDegradedHost): NoLongerDegradedHost {
        return target ?? this.create();
    }
    internalBinaryWrite(message: NoLongerDegradedHost, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.data.core.v3.NoLongerDegradedHost
 */
export const NoLongerDegradedHost = new NoLongerDegradedHost$Type();