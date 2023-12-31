// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/rate_limit_quota/v3/rlqs.proto" (package "envoy.service.rate_limit_quota.v3", syntax proto3)
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
import { RateLimitStrategy } from "../../../type/v3/ratelimit_strategy";
import { Duration } from "../../../../google/protobuf/duration";
/**
 * @generated from protobuf message envoy.service.rate_limit_quota.v3.RateLimitQuotaUsageReports
 */
export interface RateLimitQuotaUsageReports {
    /**
     * All quota requests must specify the domain. This enables sharing the quota
     * server between different applications without fear of overlap.
     * E.g., "envoy".
     *
     * Should only be provided in the first report, all subsequent messages on the same
     * stream are considered to be in the same domain. In case the domain needs to be
     * changes, close the stream, and reopen a new one with the different domain.
     *
     * @generated from protobuf field: string domain = 1;
     */
    domain: string;
    /**
     * A list of quota usage reports. The list is processed by the RLQS server in the same order
     * it's provided by the client.
     *
     * @generated from protobuf field: repeated envoy.service.rate_limit_quota.v3.RateLimitQuotaUsageReports.BucketQuotaUsage bucket_quota_usages = 2;
     */
    bucketQuotaUsages: RateLimitQuotaUsageReports_BucketQuotaUsage[];
}
/**
 * The usage report for a bucket.
 *
 * .. note::
 *   Note that the first report sent for a ``BucketId`` indicates to the RLQS server that
 *   the RLQS client is subscribing for the future assignments for this ``BucketId``.
 *
 * @generated from protobuf message envoy.service.rate_limit_quota.v3.RateLimitQuotaUsageReports.BucketQuotaUsage
 */
export interface RateLimitQuotaUsageReports_BucketQuotaUsage {
    /**
     * ``BucketId`` for which request quota usage is reported.
     *
     * @generated from protobuf field: envoy.service.rate_limit_quota.v3.BucketId bucket_id = 1;
     */
    bucketId?: BucketId;
    /**
     * Time elapsed since the last report.
     *
     * @generated from protobuf field: google.protobuf.Duration time_elapsed = 2;
     */
    timeElapsed?: Duration;
    /**
     * Requests the data plane has allowed through.
     *
     * @generated from protobuf field: uint64 num_requests_allowed = 3;
     */
    numRequestsAllowed: bigint;
    /**
     * Requests throttled.
     *
     * @generated from protobuf field: uint64 num_requests_denied = 4;
     */
    numRequestsDenied: bigint;
}
/**
 * @generated from protobuf message envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse
 */
export interface RateLimitQuotaResponse {
    /**
     * An ordered list of actions to be applied to the buckets. The actions are applied in the
     * given order, from top to bottom.
     *
     * @generated from protobuf field: repeated envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction bucket_action = 1;
     */
    bucketAction: RateLimitQuotaResponse_BucketAction[];
}
/**
 * Commands the data plane to apply one of the actions to the bucket with the
 * :ref:`bucket_id <envoy_v3_api_field_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.bucket_id>`.
 *
 * @generated from protobuf message envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction
 */
export interface RateLimitQuotaResponse_BucketAction {
    /**
     * ``BucketId`` for which request the action is applied.
     *
     * @generated from protobuf field: envoy.service.rate_limit_quota.v3.BucketId bucket_id = 1;
     */
    bucketId?: BucketId;
    /**
     * @generated from protobuf oneof: bucket_action
     */
    bucketAction: {
        oneofKind: "quotaAssignmentAction";
        /**
         * Apply the quota assignment to the bucket.
         *
         * Commands the data plane to apply a rate limiting strategy to the bucket.
         * The process of applying and expiring the rate limiting strategy is detailed in the
         * :ref:`QuotaAssignmentAction
         * <envoy_v3_api_msg_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.QuotaAssignmentAction>`
         * message.
         *
         * @generated from protobuf field: envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.QuotaAssignmentAction quota_assignment_action = 2;
         */
        quotaAssignmentAction: RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction;
    } | {
        oneofKind: "abandonAction";
        /**
         * Abandon the bucket.
         *
         * Commands the data plane to abandon the bucket.
         * The process of abandoning the bucket is described in the :ref:`AbandonAction
         * <envoy_v3_api_msg_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.AbandonAction>`
         * message.
         *
         * @generated from protobuf field: envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.AbandonAction abandon_action = 3;
         */
        abandonAction: RateLimitQuotaResponse_BucketAction_AbandonAction;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Quota assignment for the bucket. Configures the rate limiting strategy and the duration
 * for the given :ref:`bucket_id
 * <envoy_v3_api_field_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.bucket_id>`.
 *
 * **Applying the first assignment to the bucket**
 *
 * Once the data plane receives the ``QuotaAssignmentAction``, it must send the current usage
 * report for the bucket, and start rate limiting requests matched into the bucket
 * using the strategy configured in the :ref:`rate_limit_strategy
 * <envoy_v3_api_field_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.QuotaAssignmentAction.rate_limit_strategy>`
 * field. The assignment becomes bucket's ``active`` assignment.
 *
 * **Expiring the assignment**
 *
 * The duration of the assignment defined in the :ref:`assignment_time_to_live
 * <envoy_v3_api_field_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.QuotaAssignmentAction.assignment_time_to_live>`
 * field. When the duration runs off, the assignment is ``expired``, and no longer ``active``.
 * The data plane should stop applying the rate limiting strategy to the bucket, and transition
 * the bucket to the "expired assignment" state. This activates the behavior configured in the
 * :ref:`expired_assignment_behavior <envoy_v3_api_field_extensions.filters.http.rate_limit_quota.v3.RateLimitQuotaBucketSettings.expired_assignment_behavior>`
 * field.
 *
 * **Replacing the assignment**
 *
 * * If the rate limiting strategy is different from bucket's ``active`` assignment, or
 *   the current bucket assignment is ``expired``, the data plane must immediately
 *   end the current assignment, report the bucket usage, and apply the new assignment.
 *   The new assignment becomes bucket's ``active`` assignment.
 * * If the rate limiting strategy is the same as the bucket's ``active`` (not ``expired``)
 *   assignment, the data plane should extend the duration of the ``active`` assignment
 *   for the duration of the new assignment provided in the :ref:`assignment_time_to_live
 *   <envoy_v3_api_field_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.QuotaAssignmentAction.assignment_time_to_live>`
 *   field. The ``active`` assignment is considered unchanged.
 *
 * @generated from protobuf message envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.QuotaAssignmentAction
 */
export interface RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction {
    /**
     * A duration after which the assignment is be considered ``expired``. The process of the
     * expiration is described :ref:`above
     * <envoy_v3_api_msg_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.QuotaAssignmentAction>`.
     *
     * * If unset, the assignment has no expiration date.
     * * If set to ``0``, the assignment expires immediately, forcing the client into the
     *   :ref:`"expired assignment"
     *   <envoy_v3_api_field_extensions.filters.http.rate_limit_quota.v3.RateLimitQuotaBucketSettings.ExpiredAssignmentBehavior.expired_assignment_behavior_timeout>`
     *   state. This may be used by the RLQS server in cases when it needs clients to proactively
     *   fall back to the pre-configured :ref:`ExpiredAssignmentBehavior
     *   <envoy_v3_api_msg_extensions.filters.http.rate_limit_quota.v3.RateLimitQuotaBucketSettings.ExpiredAssignmentBehavior>`,
     *   f.e. before the server going into restart.
     *
     * .. attention::
     *   Note that :ref:`expiring
     *   <envoy_v3_api_msg_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.QuotaAssignmentAction>`
     *   the assignment is not the same as :ref:`abandoning
     *   <envoy_v3_api_msg_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.AbandonAction>`
     *   the assignment. While expiring the assignment just transitions the bucket to
     *   the "expired assignment" state; abandoning the assignment completely erases
     *   the bucket from the data plane memory, and stops the usage reports.
     *
     * @generated from protobuf field: google.protobuf.Duration assignment_time_to_live = 2;
     */
    assignmentTimeToLive?: Duration;
    /**
     * Configures the local rate limiter for the request matched to the bucket.
     * If not set, allow all requests.
     *
     * @generated from protobuf field: envoy.type.v3.RateLimitStrategy rate_limit_strategy = 3;
     */
    rateLimitStrategy?: RateLimitStrategy;
}
/**
 * Abandon action for the bucket. Indicates that the RLQS server will no longer be
 * sending updates for the given :ref:`bucket_id
 * <envoy_v3_api_field_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.bucket_id>`.
 *
 * If no requests are reported for a bucket, after some time the server considers the bucket
 * inactive. The server stops tracking the bucket, and instructs the the data plane to abandon
 * the bucket via this message.
 *
 * **Abandoning the assignment**
 *
 * The data plane is to erase the bucket (including its usage data) from the memory.
 * It should stop tracking the bucket, and stop reporting its usage. This effectively resets
 * the data plane to the state prior to matching the first request into the bucket.
 *
 * **Restarting the subscription**
 *
 * If a new request is matched into a bucket previously abandoned, the data plane must behave
 * as if it has never tracked the bucket, and it's the first request matched into it:
 *
 * 1. The process of :ref:`subscription and reporting
 *    <envoy_v3_api_field_extensions.filters.http.rate_limit_quota.v3.RateLimitQuotaBucketSettings.reporting_interval>`
 *    starts from the beginning.
 *
 * 2. The bucket transitions to the :ref:`"no assignment"
 *    <envoy_v3_api_field_extensions.filters.http.rate_limit_quota.v3.RateLimitQuotaBucketSettings.no_assignment_behavior>`
 *    state.
 *
 * 3. Once the new assignment is received, it's applied per
 *    "Applying the first assignment to the bucket" section of the :ref:`QuotaAssignmentAction
 *    <envoy_v3_api_msg_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.QuotaAssignmentAction>`.
 *
 * @generated from protobuf message envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.AbandonAction
 */
export interface RateLimitQuotaResponse_BucketAction_AbandonAction {
}
/**
 * The identifier for the bucket. Used to match the bucket between the control plane (RLQS server),
 * and the data plane (RLQS client), f.e.:
 *
 * * the data plane sends a usage report for requests matched into the bucket with ``BucketId``
 *   to the control plane
 * * the control plane sends an assignment for the bucket with ``BucketId`` to the data plane
 *   Bucket ID.
 *
 * Example:
 *
 * .. validated-code-block:: yaml
 *   :type-name: envoy.service.rate_limit_quota.v3.BucketId
 *
 *   bucket:
 *     name: my_bucket
 *     env: staging
 *
 * .. note::
 *   The order of ``BucketId`` keys do not matter. Buckets ``{ a: 'A', b: 'B' }`` and
 *   ``{ b: 'B', a: 'A' }`` are identical.
 *
 * @generated from protobuf message envoy.service.rate_limit_quota.v3.BucketId
 */
export interface BucketId {
    /**
     * @generated from protobuf field: map<string, string> bucket = 1;
     */
    bucket: {
        [key: string]: string;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class RateLimitQuotaUsageReports$Type extends MessageType<RateLimitQuotaUsageReports> {
    constructor() {
        super("envoy.service.rate_limit_quota.v3.RateLimitQuotaUsageReports", [
            { no: 1, name: "domain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "bucket_quota_usages", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RateLimitQuotaUsageReports_BucketQuotaUsage, options: { "validate.rules": { repeated: { minItems: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<RateLimitQuotaUsageReports>): RateLimitQuotaUsageReports {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.domain = "";
        message.bucketQuotaUsages = [];
        if (value !== undefined)
            reflectionMergePartial<RateLimitQuotaUsageReports>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimitQuotaUsageReports): RateLimitQuotaUsageReports {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string domain */ 1:
                    message.domain = reader.string();
                    break;
                case /* repeated envoy.service.rate_limit_quota.v3.RateLimitQuotaUsageReports.BucketQuotaUsage bucket_quota_usages */ 2:
                    message.bucketQuotaUsages.push(RateLimitQuotaUsageReports_BucketQuotaUsage.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: RateLimitQuotaUsageReports, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string domain = 1; */
        if (message.domain !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.domain);
        /* repeated envoy.service.rate_limit_quota.v3.RateLimitQuotaUsageReports.BucketQuotaUsage bucket_quota_usages = 2; */
        for (let i = 0; i < message.bucketQuotaUsages.length; i++)
            RateLimitQuotaUsageReports_BucketQuotaUsage.internalBinaryWrite(message.bucketQuotaUsages[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.rate_limit_quota.v3.RateLimitQuotaUsageReports
 */
export const RateLimitQuotaUsageReports = new RateLimitQuotaUsageReports$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RateLimitQuotaUsageReports_BucketQuotaUsage$Type extends MessageType<RateLimitQuotaUsageReports_BucketQuotaUsage> {
    constructor() {
        super("envoy.service.rate_limit_quota.v3.RateLimitQuotaUsageReports.BucketQuotaUsage", [
            { no: 1, name: "bucket_id", kind: "message", T: () => BucketId, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "time_elapsed", kind: "message", T: () => Duration, options: { "validate.rules": { duration: { required: true, gt: {} } } } },
            { no: 3, name: "num_requests_allowed", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "num_requests_denied", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<RateLimitQuotaUsageReports_BucketQuotaUsage>): RateLimitQuotaUsageReports_BucketQuotaUsage {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.numRequestsAllowed = 0n;
        message.numRequestsDenied = 0n;
        if (value !== undefined)
            reflectionMergePartial<RateLimitQuotaUsageReports_BucketQuotaUsage>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimitQuotaUsageReports_BucketQuotaUsage): RateLimitQuotaUsageReports_BucketQuotaUsage {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.service.rate_limit_quota.v3.BucketId bucket_id */ 1:
                    message.bucketId = BucketId.internalBinaryRead(reader, reader.uint32(), options, message.bucketId);
                    break;
                case /* google.protobuf.Duration time_elapsed */ 2:
                    message.timeElapsed = Duration.internalBinaryRead(reader, reader.uint32(), options, message.timeElapsed);
                    break;
                case /* uint64 num_requests_allowed */ 3:
                    message.numRequestsAllowed = reader.uint64().toBigInt();
                    break;
                case /* uint64 num_requests_denied */ 4:
                    message.numRequestsDenied = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: RateLimitQuotaUsageReports_BucketQuotaUsage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.service.rate_limit_quota.v3.BucketId bucket_id = 1; */
        if (message.bucketId)
            BucketId.internalBinaryWrite(message.bucketId, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration time_elapsed = 2; */
        if (message.timeElapsed)
            Duration.internalBinaryWrite(message.timeElapsed, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* uint64 num_requests_allowed = 3; */
        if (message.numRequestsAllowed !== 0n)
            writer.tag(3, WireType.Varint).uint64(message.numRequestsAllowed);
        /* uint64 num_requests_denied = 4; */
        if (message.numRequestsDenied !== 0n)
            writer.tag(4, WireType.Varint).uint64(message.numRequestsDenied);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.rate_limit_quota.v3.RateLimitQuotaUsageReports.BucketQuotaUsage
 */
export const RateLimitQuotaUsageReports_BucketQuotaUsage = new RateLimitQuotaUsageReports_BucketQuotaUsage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RateLimitQuotaResponse$Type extends MessageType<RateLimitQuotaResponse> {
    constructor() {
        super("envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse", [
            { no: 1, name: "bucket_action", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RateLimitQuotaResponse_BucketAction, options: { "validate.rules": { repeated: { minItems: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<RateLimitQuotaResponse>): RateLimitQuotaResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.bucketAction = [];
        if (value !== undefined)
            reflectionMergePartial<RateLimitQuotaResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimitQuotaResponse): RateLimitQuotaResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction bucket_action */ 1:
                    message.bucketAction.push(RateLimitQuotaResponse_BucketAction.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: RateLimitQuotaResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction bucket_action = 1; */
        for (let i = 0; i < message.bucketAction.length; i++)
            RateLimitQuotaResponse_BucketAction.internalBinaryWrite(message.bucketAction[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse
 */
export const RateLimitQuotaResponse = new RateLimitQuotaResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RateLimitQuotaResponse_BucketAction$Type extends MessageType<RateLimitQuotaResponse_BucketAction> {
    constructor() {
        super("envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction", [
            { no: 1, name: "bucket_id", kind: "message", T: () => BucketId, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "quota_assignment_action", kind: "message", oneof: "bucketAction", T: () => RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction },
            { no: 3, name: "abandon_action", kind: "message", oneof: "bucketAction", T: () => RateLimitQuotaResponse_BucketAction_AbandonAction }
        ]);
    }
    create(value?: PartialMessage<RateLimitQuotaResponse_BucketAction>): RateLimitQuotaResponse_BucketAction {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.bucketAction = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<RateLimitQuotaResponse_BucketAction>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimitQuotaResponse_BucketAction): RateLimitQuotaResponse_BucketAction {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.service.rate_limit_quota.v3.BucketId bucket_id */ 1:
                    message.bucketId = BucketId.internalBinaryRead(reader, reader.uint32(), options, message.bucketId);
                    break;
                case /* envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.QuotaAssignmentAction quota_assignment_action */ 2:
                    message.bucketAction = {
                        oneofKind: "quotaAssignmentAction",
                        quotaAssignmentAction: RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction.internalBinaryRead(reader, reader.uint32(), options, (message.bucketAction as any).quotaAssignmentAction)
                    };
                    break;
                case /* envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.AbandonAction abandon_action */ 3:
                    message.bucketAction = {
                        oneofKind: "abandonAction",
                        abandonAction: RateLimitQuotaResponse_BucketAction_AbandonAction.internalBinaryRead(reader, reader.uint32(), options, (message.bucketAction as any).abandonAction)
                    };
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
    internalBinaryWrite(message: RateLimitQuotaResponse_BucketAction, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.service.rate_limit_quota.v3.BucketId bucket_id = 1; */
        if (message.bucketId)
            BucketId.internalBinaryWrite(message.bucketId, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.QuotaAssignmentAction quota_assignment_action = 2; */
        if (message.bucketAction.oneofKind === "quotaAssignmentAction")
            RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction.internalBinaryWrite(message.bucketAction.quotaAssignmentAction, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.AbandonAction abandon_action = 3; */
        if (message.bucketAction.oneofKind === "abandonAction")
            RateLimitQuotaResponse_BucketAction_AbandonAction.internalBinaryWrite(message.bucketAction.abandonAction, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction
 */
export const RateLimitQuotaResponse_BucketAction = new RateLimitQuotaResponse_BucketAction$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction$Type extends MessageType<RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction> {
    constructor() {
        super("envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.QuotaAssignmentAction", [
            { no: 2, name: "assignment_time_to_live", kind: "message", T: () => Duration, options: { "validate.rules": { duration: { gte: {} } } } },
            { no: 3, name: "rate_limit_strategy", kind: "message", T: () => RateLimitStrategy }
        ]);
    }
    create(value?: PartialMessage<RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction>): RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction): RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Duration assignment_time_to_live */ 2:
                    message.assignmentTimeToLive = Duration.internalBinaryRead(reader, reader.uint32(), options, message.assignmentTimeToLive);
                    break;
                case /* envoy.type.v3.RateLimitStrategy rate_limit_strategy */ 3:
                    message.rateLimitStrategy = RateLimitStrategy.internalBinaryRead(reader, reader.uint32(), options, message.rateLimitStrategy);
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
    internalBinaryWrite(message: RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.Duration assignment_time_to_live = 2; */
        if (message.assignmentTimeToLive)
            Duration.internalBinaryWrite(message.assignmentTimeToLive, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.type.v3.RateLimitStrategy rate_limit_strategy = 3; */
        if (message.rateLimitStrategy)
            RateLimitStrategy.internalBinaryWrite(message.rateLimitStrategy, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.QuotaAssignmentAction
 */
export const RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction = new RateLimitQuotaResponse_BucketAction_QuotaAssignmentAction$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RateLimitQuotaResponse_BucketAction_AbandonAction$Type extends MessageType<RateLimitQuotaResponse_BucketAction_AbandonAction> {
    constructor() {
        super("envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.AbandonAction", []);
    }
    create(value?: PartialMessage<RateLimitQuotaResponse_BucketAction_AbandonAction>): RateLimitQuotaResponse_BucketAction_AbandonAction {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<RateLimitQuotaResponse_BucketAction_AbandonAction>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RateLimitQuotaResponse_BucketAction_AbandonAction): RateLimitQuotaResponse_BucketAction_AbandonAction {
        return target ?? this.create();
    }
    internalBinaryWrite(message: RateLimitQuotaResponse_BucketAction_AbandonAction, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.AbandonAction
 */
export const RateLimitQuotaResponse_BucketAction_AbandonAction = new RateLimitQuotaResponse_BucketAction_AbandonAction$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BucketId$Type extends MessageType<BucketId> {
    constructor() {
        super("envoy.service.rate_limit_quota.v3.BucketId", [
            { no: 1, name: "bucket", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ }, options: { "validate.rules": { map: { minPairs: "1", keys: { string: { minLen: "1" } }, values: { string: { minLen: "1" } } } } } }
        ]);
    }
    create(value?: PartialMessage<BucketId>): BucketId {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.bucket = {};
        if (value !== undefined)
            reflectionMergePartial<BucketId>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BucketId): BucketId {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<string, string> bucket */ 1:
                    this.binaryReadMap1(message.bucket, reader, options);
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
    private binaryReadMap1(map: BucketId["bucket"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof BucketId["bucket"] | undefined, val: BucketId["bucket"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field envoy.service.rate_limit_quota.v3.BucketId.bucket");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    internalBinaryWrite(message: BucketId, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<string, string> bucket = 1; */
        for (let k of globalThis.Object.keys(message.bucket))
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.bucket[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.rate_limit_quota.v3.BucketId
 */
export const BucketId = new BucketId$Type();
/**
 * @generated ServiceType for protobuf service envoy.service.rate_limit_quota.v3.RateLimitQuotaService
 */
export const RateLimitQuotaService = new ServiceType("envoy.service.rate_limit_quota.v3.RateLimitQuotaService", [
    { name: "StreamRateLimitQuotas", serverStreaming: true, clientStreaming: true, options: {}, I: RateLimitQuotaUsageReports, O: RateLimitQuotaResponse }
]);
