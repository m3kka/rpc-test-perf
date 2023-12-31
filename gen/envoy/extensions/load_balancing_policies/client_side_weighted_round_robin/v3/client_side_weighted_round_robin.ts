// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/load_balancing_policies/client_side_weighted_round_robin/v3/client_side_weighted_round_robin.proto" (package "envoy.extensions.load_balancing_policies.client_side_weighted_round_robin.v3", syntax proto3)
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
import { FloatValue } from "../../../../../google/protobuf/wrappers";
import { Duration } from "../../../../../google/protobuf/duration";
import { BoolValue } from "../../../../../google/protobuf/wrappers";
// [#protodoc-title: Client-Side Weighted Round Robin Load Balancing Policy]
// [#not-implemented-hide:]

/**
 * Configuration for the client_side_weighted_round_robin LB policy.
 *
 * This policy differs from the built-in ROUND_ROBIN policy in terms of
 * how the endpoint weights are determined. In the ROUND_ROBIN policy,
 * the endpoint weights are sent by the control plane via EDS. However,
 * in this policy, the endpoint weights are instead determined via qps (queries
 * per second), eps (errors per second), and utilization metrics sent by the
 * endpoint using the Open Request Cost Aggregation (ORCA) protocol. Utilization
 * is determined by using the ORCA application_utilization field, if set, or
 * else falling back to the cpu_utilization field. All queries count toward qps,
 * regardless of result. Only failed queries count toward eps. A config
 * parameter error_utilization_penalty controls the penalty to adjust endpoint
 * weights using eps and qps. The weight of a given endpoint is computed as:
 *   qps / (utilization + eps/qps * error_utilization_penalty)
 *
 * See the :ref:`load balancing architecture overview<arch_overview_load_balancing_types>` for more information.
 *
 * [#next-free-field: 7]
 *
 * @generated from protobuf message envoy.extensions.load_balancing_policies.client_side_weighted_round_robin.v3.ClientSideWeightedRoundRobin
 */
export interface ClientSideWeightedRoundRobin {
    /**
     * Whether to enable out-of-band utilization reporting collection from
     * the endpoints. By default, per-request utilization reporting is used.
     *
     * @generated from protobuf field: google.protobuf.BoolValue enable_oob_load_report = 1;
     */
    enableOobLoadReport?: BoolValue;
    /**
     * Load reporting interval to request from the server. Note that the
     * server may not provide reports as frequently as the client requests.
     * Used only when enable_oob_load_report is true. Default is 10 seconds.
     *
     * @generated from protobuf field: google.protobuf.Duration oob_reporting_period = 2;
     */
    oobReportingPeriod?: Duration;
    /**
     * A given endpoint must report load metrics continuously for at least
     * this long before the endpoint weight will be used. This avoids
     * churn when the set of endpoint addresses changes. Takes effect
     * both immediately after we establish a connection to an endpoint and
     * after weight_expiration_period has caused us to stop using the most
     * recent load metrics. Default is 10 seconds.
     *
     * @generated from protobuf field: google.protobuf.Duration blackout_period = 3;
     */
    blackoutPeriod?: Duration;
    /**
     * If a given endpoint has not reported load metrics in this long,
     * then we stop using the reported weight. This ensures that we do
     * not continue to use very stale weights. Once we stop using a stale
     * value, if we later start seeing fresh reports again, the
     * blackout_period applies. Defaults to 3 minutes.
     *
     * @generated from protobuf field: google.protobuf.Duration weight_expiration_period = 4;
     */
    weightExpirationPeriod?: Duration;
    /**
     * How often endpoint weights are recalculated. Values less than 100ms are
     * capped at 100ms. Default is 1 second.
     *
     * @generated from protobuf field: google.protobuf.Duration weight_update_period = 5;
     */
    weightUpdatePeriod?: Duration;
    /**
     * The multiplier used to adjust endpoint weights with the error rate
     * calculated as eps/qps. Configuration is rejected if this value is negative.
     * Default is 1.0.
     *
     * @generated from protobuf field: google.protobuf.FloatValue error_utilization_penalty = 6;
     */
    errorUtilizationPenalty?: FloatValue;
}
// @generated message type with reflection information, may provide speed optimized methods
class ClientSideWeightedRoundRobin$Type extends MessageType<ClientSideWeightedRoundRobin> {
    constructor() {
        super("envoy.extensions.load_balancing_policies.client_side_weighted_round_robin.v3.ClientSideWeightedRoundRobin", [
            { no: 1, name: "enable_oob_load_report", kind: "message", T: () => BoolValue },
            { no: 2, name: "oob_reporting_period", kind: "message", T: () => Duration },
            { no: 3, name: "blackout_period", kind: "message", T: () => Duration },
            { no: 4, name: "weight_expiration_period", kind: "message", T: () => Duration },
            { no: 5, name: "weight_update_period", kind: "message", T: () => Duration },
            { no: 6, name: "error_utilization_penalty", kind: "message", T: () => FloatValue, options: { "validate.rules": { float: { gte: 0 } } } }
        ]);
    }
    create(value?: PartialMessage<ClientSideWeightedRoundRobin>): ClientSideWeightedRoundRobin {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<ClientSideWeightedRoundRobin>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientSideWeightedRoundRobin): ClientSideWeightedRoundRobin {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.BoolValue enable_oob_load_report */ 1:
                    message.enableOobLoadReport = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.enableOobLoadReport);
                    break;
                case /* google.protobuf.Duration oob_reporting_period */ 2:
                    message.oobReportingPeriod = Duration.internalBinaryRead(reader, reader.uint32(), options, message.oobReportingPeriod);
                    break;
                case /* google.protobuf.Duration blackout_period */ 3:
                    message.blackoutPeriod = Duration.internalBinaryRead(reader, reader.uint32(), options, message.blackoutPeriod);
                    break;
                case /* google.protobuf.Duration weight_expiration_period */ 4:
                    message.weightExpirationPeriod = Duration.internalBinaryRead(reader, reader.uint32(), options, message.weightExpirationPeriod);
                    break;
                case /* google.protobuf.Duration weight_update_period */ 5:
                    message.weightUpdatePeriod = Duration.internalBinaryRead(reader, reader.uint32(), options, message.weightUpdatePeriod);
                    break;
                case /* google.protobuf.FloatValue error_utilization_penalty */ 6:
                    message.errorUtilizationPenalty = FloatValue.internalBinaryRead(reader, reader.uint32(), options, message.errorUtilizationPenalty);
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
    internalBinaryWrite(message: ClientSideWeightedRoundRobin, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.BoolValue enable_oob_load_report = 1; */
        if (message.enableOobLoadReport)
            BoolValue.internalBinaryWrite(message.enableOobLoadReport, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration oob_reporting_period = 2; */
        if (message.oobReportingPeriod)
            Duration.internalBinaryWrite(message.oobReportingPeriod, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration blackout_period = 3; */
        if (message.blackoutPeriod)
            Duration.internalBinaryWrite(message.blackoutPeriod, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration weight_expiration_period = 4; */
        if (message.weightExpirationPeriod)
            Duration.internalBinaryWrite(message.weightExpirationPeriod, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration weight_update_period = 5; */
        if (message.weightUpdatePeriod)
            Duration.internalBinaryWrite(message.weightUpdatePeriod, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.FloatValue error_utilization_penalty = 6; */
        if (message.errorUtilizationPenalty)
            FloatValue.internalBinaryWrite(message.errorUtilizationPenalty, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.load_balancing_policies.client_side_weighted_round_robin.v3.ClientSideWeightedRoundRobin
 */
export const ClientSideWeightedRoundRobin = new ClientSideWeightedRoundRobin$Type();
