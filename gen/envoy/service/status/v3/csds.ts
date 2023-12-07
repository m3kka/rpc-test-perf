// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/status/v3/csds.proto" (package "envoy.service.status.v3", syntax proto3)
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
import { UpdateFailureState } from "../../../admin/v3/config_dump_shared";
import { ClientResourceStatus } from "../../../admin/v3/config_dump_shared";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Any } from "../../../../google/protobuf/any";
import { EndpointsConfigDump } from "../../../admin/v3/config_dump_shared";
import { ScopedRoutesConfigDump } from "../../../admin/v3/config_dump_shared";
import { RoutesConfigDump } from "../../../admin/v3/config_dump_shared";
import { ClustersConfigDump } from "../../../admin/v3/config_dump_shared";
import { ListenersConfigDump } from "../../../admin/v3/config_dump_shared";
import { Node } from "../../../config/core/v3/base";
import { NodeMatcher } from "../../../type/matcher/v3/node";
/**
 * Request for client status of clients identified by a list of NodeMatchers.
 *
 * @generated from protobuf message envoy.service.status.v3.ClientStatusRequest
 */
export interface ClientStatusRequest {
    /**
     * Management server can use these match criteria to identify clients.
     * The match follows OR semantics.
     *
     * @generated from protobuf field: repeated envoy.type.matcher.v3.NodeMatcher node_matchers = 1;
     */
    nodeMatchers: NodeMatcher[];
    /**
     * The node making the csds request.
     *
     * @generated from protobuf field: envoy.config.core.v3.Node node = 2;
     */
    node?: Node;
    /**
     * If true, the server will not include the resource contents in the response
     * (i.e., the generic_xds_configs.xds_config field will not be populated).
     * [#not-implemented-hide:]
     *
     * @generated from protobuf field: bool exclude_resource_contents = 3;
     */
    excludeResourceContents: boolean;
}
/**
 * Detailed config (per xDS) with status.
 * [#next-free-field: 8]
 *
 * @generated from protobuf message envoy.service.status.v3.PerXdsConfig
 */
export interface PerXdsConfig {
    /**
     * Config status generated by management servers. Will not be present if the
     * CSDS server is an xDS client.
     *
     * @generated from protobuf field: envoy.service.status.v3.ConfigStatus status = 1;
     */
    status: ConfigStatus;
    /**
     * Client config status is populated by xDS clients. Will not be present if
     * the CSDS server is an xDS server. No matter what the client config status
     * is, xDS clients should always dump the most recent accepted xDS config.
     *
     * .. attention::
     *   This field is deprecated. Use :ref:`ClientResourceStatus
     *   <envoy_v3_api_enum_admin.v3.ClientResourceStatus>` for per-resource
     *   config status instead.
     *
     * @deprecated
     * @generated from protobuf field: envoy.service.status.v3.ClientConfigStatus client_status = 7 [deprecated = true];
     */
    clientStatus: ClientConfigStatus;
    /**
     * @generated from protobuf oneof: per_xds_config
     */
    perXdsConfig: {
        oneofKind: "listenerConfig";
        /**
         * @generated from protobuf field: envoy.admin.v3.ListenersConfigDump listener_config = 2;
         */
        listenerConfig: ListenersConfigDump;
    } | {
        oneofKind: "clusterConfig";
        /**
         * @generated from protobuf field: envoy.admin.v3.ClustersConfigDump cluster_config = 3;
         */
        clusterConfig: ClustersConfigDump;
    } | {
        oneofKind: "routeConfig";
        /**
         * @generated from protobuf field: envoy.admin.v3.RoutesConfigDump route_config = 4;
         */
        routeConfig: RoutesConfigDump;
    } | {
        oneofKind: "scopedRouteConfig";
        /**
         * @generated from protobuf field: envoy.admin.v3.ScopedRoutesConfigDump scoped_route_config = 5;
         */
        scopedRouteConfig: ScopedRoutesConfigDump;
    } | {
        oneofKind: "endpointConfig";
        /**
         * @generated from protobuf field: envoy.admin.v3.EndpointsConfigDump endpoint_config = 6;
         */
        endpointConfig: EndpointsConfigDump;
    } | {
        oneofKind: undefined;
    };
}
/**
 * All xds configs for a particular client.
 *
 * @generated from protobuf message envoy.service.status.v3.ClientConfig
 */
export interface ClientConfig {
    /**
     * Node for a particular client.
     *
     * @generated from protobuf field: envoy.config.core.v3.Node node = 1;
     */
    node?: Node;
    /**
     * This field is deprecated in favor of generic_xds_configs which is
     * much simpler and uniform in structure.
     *
     * @deprecated
     * @generated from protobuf field: repeated envoy.service.status.v3.PerXdsConfig xds_config = 2 [deprecated = true];
     */
    xdsConfig: PerXdsConfig[];
    /**
     * Represents generic xDS config and the exact config structure depends on
     * the type URL (like Cluster if it is CDS)
     *
     * @generated from protobuf field: repeated envoy.service.status.v3.ClientConfig.GenericXdsConfig generic_xds_configs = 3;
     */
    genericXdsConfigs: ClientConfig_GenericXdsConfig[];
}
/**
 * GenericXdsConfig is used to specify the config status and the dump
 * of any xDS resource identified by their type URL. It is the generalized
 * version of the now deprecated ListenersConfigDump, ClustersConfigDump etc
 * [#next-free-field: 10]
 *
 * @generated from protobuf message envoy.service.status.v3.ClientConfig.GenericXdsConfig
 */
export interface ClientConfig_GenericXdsConfig {
    /**
     * Type_url represents the fully qualified name of xDS resource type
     * like envoy.v3.Cluster, envoy.v3.ClusterLoadAssignment etc.
     *
     * @generated from protobuf field: string type_url = 1;
     */
    typeUrl: string;
    /**
     * Name of the xDS resource
     *
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * This is the :ref:`version_info <envoy_v3_api_field_service.discovery.v3.DiscoveryResponse.version_info>`
     * in the last processed xDS discovery response. If there are only
     * static bootstrap listeners, this field will be ""
     *
     * @generated from protobuf field: string version_info = 3;
     */
    versionInfo: string;
    /**
     * The xDS resource config. Actual content depends on the type
     *
     * @generated from protobuf field: google.protobuf.Any xds_config = 4;
     */
    xdsConfig?: Any;
    /**
     * Timestamp when the xDS resource was last updated
     *
     * @generated from protobuf field: google.protobuf.Timestamp last_updated = 5;
     */
    lastUpdated?: Timestamp;
    /**
     * Per xDS resource config status. It is generated by management servers.
     * It will not be present if the CSDS server is an xDS client.
     *
     * @generated from protobuf field: envoy.service.status.v3.ConfigStatus config_status = 6;
     */
    configStatus: ConfigStatus;
    /**
     * Per xDS resource status from the view of a xDS client
     *
     * @generated from protobuf field: envoy.admin.v3.ClientResourceStatus client_status = 7;
     */
    clientStatus: ClientResourceStatus;
    /**
     * Set if the last update failed, cleared after the next successful
     * update. The *error_state* field contains the rejected version of
     * this particular resource along with the reason and timestamp. For
     * successfully updated or acknowledged resource, this field should
     * be empty.
     * [#not-implemented-hide:]
     *
     * @generated from protobuf field: envoy.admin.v3.UpdateFailureState error_state = 8;
     */
    errorState?: UpdateFailureState;
    /**
     * Is static resource is true if it is specified in the config supplied
     * through the file at the startup.
     *
     * @generated from protobuf field: bool is_static_resource = 9;
     */
    isStaticResource: boolean;
}
/**
 * @generated from protobuf message envoy.service.status.v3.ClientStatusResponse
 */
export interface ClientStatusResponse {
    /**
     * Client configs for the clients specified in the ClientStatusRequest.
     *
     * @generated from protobuf field: repeated envoy.service.status.v3.ClientConfig config = 1;
     */
    config: ClientConfig[];
}
/**
 * Status of a config from a management server view.
 *
 * @generated from protobuf enum envoy.service.status.v3.ConfigStatus
 */
export enum ConfigStatus {
    /**
     * Status info is not available/unknown.
     *
     * @generated from protobuf enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * Management server has sent the config to client and received ACK.
     *
     * @generated from protobuf enum value: SYNCED = 1;
     */
    SYNCED = 1,
    /**
     * Config is not sent.
     *
     * @generated from protobuf enum value: NOT_SENT = 2;
     */
    NOT_SENT = 2,
    /**
     * Management server has sent the config to client but hasn’t received
     * ACK/NACK.
     *
     * @generated from protobuf enum value: STALE = 3;
     */
    STALE = 3,
    /**
     * Management server has sent the config to client but received NACK. The
     * attached config dump will be the latest config (the rejected one), since
     * it is the persisted version in the management server.
     *
     * @generated from protobuf enum value: ERROR = 4;
     */
    ERROR = 4
}
/**
 * Config status from a client-side view.
 *
 * @generated from protobuf enum envoy.service.status.v3.ClientConfigStatus
 */
export enum ClientConfigStatus {
    /**
     * Config status is not available/unknown.
     *
     * @generated from protobuf enum value: CLIENT_UNKNOWN = 0;
     */
    CLIENT_UNKNOWN = 0,
    /**
     * Client requested the config but hasn't received any config from management
     * server yet.
     *
     * @generated from protobuf enum value: CLIENT_REQUESTED = 1;
     */
    CLIENT_REQUESTED = 1,
    /**
     * Client received the config and replied with ACK.
     *
     * @generated from protobuf enum value: CLIENT_ACKED = 2;
     */
    CLIENT_ACKED = 2,
    /**
     * Client received the config and replied with NACK. Notably, the attached
     * config dump is not the NACKed version, but the most recent accepted one. If
     * no config is accepted yet, the attached config dump will be empty.
     *
     * @generated from protobuf enum value: CLIENT_NACKED = 3;
     */
    CLIENT_NACKED = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class ClientStatusRequest$Type extends MessageType<ClientStatusRequest> {
    constructor() {
        super("envoy.service.status.v3.ClientStatusRequest", [
            { no: 1, name: "node_matchers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NodeMatcher },
            { no: 2, name: "node", kind: "message", T: () => Node },
            { no: 3, name: "exclude_resource_contents", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.service.status.v2.ClientStatusRequest" } });
    }
    create(value?: PartialMessage<ClientStatusRequest>): ClientStatusRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.nodeMatchers = [];
        message.excludeResourceContents = false;
        if (value !== undefined)
            reflectionMergePartial<ClientStatusRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientStatusRequest): ClientStatusRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.type.matcher.v3.NodeMatcher node_matchers */ 1:
                    message.nodeMatchers.push(NodeMatcher.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* envoy.config.core.v3.Node node */ 2:
                    message.node = Node.internalBinaryRead(reader, reader.uint32(), options, message.node);
                    break;
                case /* bool exclude_resource_contents */ 3:
                    message.excludeResourceContents = reader.bool();
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
    internalBinaryWrite(message: ClientStatusRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.type.matcher.v3.NodeMatcher node_matchers = 1; */
        for (let i = 0; i < message.nodeMatchers.length; i++)
            NodeMatcher.internalBinaryWrite(message.nodeMatchers[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.Node node = 2; */
        if (message.node)
            Node.internalBinaryWrite(message.node, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* bool exclude_resource_contents = 3; */
        if (message.excludeResourceContents !== false)
            writer.tag(3, WireType.Varint).bool(message.excludeResourceContents);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.status.v3.ClientStatusRequest
 */
export const ClientStatusRequest = new ClientStatusRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PerXdsConfig$Type extends MessageType<PerXdsConfig> {
    constructor() {
        super("envoy.service.status.v3.PerXdsConfig", [
            { no: 1, name: "status", kind: "enum", T: () => ["envoy.service.status.v3.ConfigStatus", ConfigStatus] },
            { no: 7, name: "client_status", kind: "enum", T: () => ["envoy.service.status.v3.ClientConfigStatus", ClientConfigStatus], options: { "envoy.annotations.deprecated_at_minor_version": "3.0" } },
            { no: 2, name: "listener_config", kind: "message", oneof: "perXdsConfig", T: () => ListenersConfigDump },
            { no: 3, name: "cluster_config", kind: "message", oneof: "perXdsConfig", T: () => ClustersConfigDump },
            { no: 4, name: "route_config", kind: "message", oneof: "perXdsConfig", T: () => RoutesConfigDump },
            { no: 5, name: "scoped_route_config", kind: "message", oneof: "perXdsConfig", T: () => ScopedRoutesConfigDump },
            { no: 6, name: "endpoint_config", kind: "message", oneof: "perXdsConfig", T: () => EndpointsConfigDump }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.service.status.v2.PerXdsConfig" } });
    }
    create(value?: PartialMessage<PerXdsConfig>): PerXdsConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.status = 0;
        message.clientStatus = 0;
        message.perXdsConfig = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<PerXdsConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PerXdsConfig): PerXdsConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.service.status.v3.ConfigStatus status */ 1:
                    message.status = reader.int32();
                    break;
                case /* envoy.service.status.v3.ClientConfigStatus client_status = 7 [deprecated = true];*/ 7:
                    message.clientStatus = reader.int32();
                    break;
                case /* envoy.admin.v3.ListenersConfigDump listener_config */ 2:
                    message.perXdsConfig = {
                        oneofKind: "listenerConfig",
                        listenerConfig: ListenersConfigDump.internalBinaryRead(reader, reader.uint32(), options, (message.perXdsConfig as any).listenerConfig)
                    };
                    break;
                case /* envoy.admin.v3.ClustersConfigDump cluster_config */ 3:
                    message.perXdsConfig = {
                        oneofKind: "clusterConfig",
                        clusterConfig: ClustersConfigDump.internalBinaryRead(reader, reader.uint32(), options, (message.perXdsConfig as any).clusterConfig)
                    };
                    break;
                case /* envoy.admin.v3.RoutesConfigDump route_config */ 4:
                    message.perXdsConfig = {
                        oneofKind: "routeConfig",
                        routeConfig: RoutesConfigDump.internalBinaryRead(reader, reader.uint32(), options, (message.perXdsConfig as any).routeConfig)
                    };
                    break;
                case /* envoy.admin.v3.ScopedRoutesConfigDump scoped_route_config */ 5:
                    message.perXdsConfig = {
                        oneofKind: "scopedRouteConfig",
                        scopedRouteConfig: ScopedRoutesConfigDump.internalBinaryRead(reader, reader.uint32(), options, (message.perXdsConfig as any).scopedRouteConfig)
                    };
                    break;
                case /* envoy.admin.v3.EndpointsConfigDump endpoint_config */ 6:
                    message.perXdsConfig = {
                        oneofKind: "endpointConfig",
                        endpointConfig: EndpointsConfigDump.internalBinaryRead(reader, reader.uint32(), options, (message.perXdsConfig as any).endpointConfig)
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
    internalBinaryWrite(message: PerXdsConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.service.status.v3.ConfigStatus status = 1; */
        if (message.status !== 0)
            writer.tag(1, WireType.Varint).int32(message.status);
        /* envoy.service.status.v3.ClientConfigStatus client_status = 7 [deprecated = true]; */
        if (message.clientStatus !== 0)
            writer.tag(7, WireType.Varint).int32(message.clientStatus);
        /* envoy.admin.v3.ListenersConfigDump listener_config = 2; */
        if (message.perXdsConfig.oneofKind === "listenerConfig")
            ListenersConfigDump.internalBinaryWrite(message.perXdsConfig.listenerConfig, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.admin.v3.ClustersConfigDump cluster_config = 3; */
        if (message.perXdsConfig.oneofKind === "clusterConfig")
            ClustersConfigDump.internalBinaryWrite(message.perXdsConfig.clusterConfig, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* envoy.admin.v3.RoutesConfigDump route_config = 4; */
        if (message.perXdsConfig.oneofKind === "routeConfig")
            RoutesConfigDump.internalBinaryWrite(message.perXdsConfig.routeConfig, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* envoy.admin.v3.ScopedRoutesConfigDump scoped_route_config = 5; */
        if (message.perXdsConfig.oneofKind === "scopedRouteConfig")
            ScopedRoutesConfigDump.internalBinaryWrite(message.perXdsConfig.scopedRouteConfig, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* envoy.admin.v3.EndpointsConfigDump endpoint_config = 6; */
        if (message.perXdsConfig.oneofKind === "endpointConfig")
            EndpointsConfigDump.internalBinaryWrite(message.perXdsConfig.endpointConfig, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.status.v3.PerXdsConfig
 */
export const PerXdsConfig = new PerXdsConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientConfig$Type extends MessageType<ClientConfig> {
    constructor() {
        super("envoy.service.status.v3.ClientConfig", [
            { no: 1, name: "node", kind: "message", T: () => Node },
            { no: 2, name: "xds_config", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PerXdsConfig, options: { "envoy.annotations.deprecated_at_minor_version": "3.0" } },
            { no: 3, name: "generic_xds_configs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ClientConfig_GenericXdsConfig }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.service.status.v2.ClientConfig" } });
    }
    create(value?: PartialMessage<ClientConfig>): ClientConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.xdsConfig = [];
        message.genericXdsConfigs = [];
        if (value !== undefined)
            reflectionMergePartial<ClientConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientConfig): ClientConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.config.core.v3.Node node */ 1:
                    message.node = Node.internalBinaryRead(reader, reader.uint32(), options, message.node);
                    break;
                case /* repeated envoy.service.status.v3.PerXdsConfig xds_config = 2 [deprecated = true];*/ 2:
                    message.xdsConfig.push(PerXdsConfig.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated envoy.service.status.v3.ClientConfig.GenericXdsConfig generic_xds_configs */ 3:
                    message.genericXdsConfigs.push(ClientConfig_GenericXdsConfig.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: ClientConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.config.core.v3.Node node = 1; */
        if (message.node)
            Node.internalBinaryWrite(message.node, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.service.status.v3.PerXdsConfig xds_config = 2 [deprecated = true]; */
        for (let i = 0; i < message.xdsConfig.length; i++)
            PerXdsConfig.internalBinaryWrite(message.xdsConfig[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.service.status.v3.ClientConfig.GenericXdsConfig generic_xds_configs = 3; */
        for (let i = 0; i < message.genericXdsConfigs.length; i++)
            ClientConfig_GenericXdsConfig.internalBinaryWrite(message.genericXdsConfigs[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.status.v3.ClientConfig
 */
export const ClientConfig = new ClientConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientConfig_GenericXdsConfig$Type extends MessageType<ClientConfig_GenericXdsConfig> {
    constructor() {
        super("envoy.service.status.v3.ClientConfig.GenericXdsConfig", [
            { no: 1, name: "type_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "version_info", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "xds_config", kind: "message", T: () => Any },
            { no: 5, name: "last_updated", kind: "message", T: () => Timestamp },
            { no: 6, name: "config_status", kind: "enum", T: () => ["envoy.service.status.v3.ConfigStatus", ConfigStatus] },
            { no: 7, name: "client_status", kind: "enum", T: () => ["envoy.admin.v3.ClientResourceStatus", ClientResourceStatus] },
            { no: 8, name: "error_state", kind: "message", T: () => UpdateFailureState },
            { no: 9, name: "is_static_resource", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<ClientConfig_GenericXdsConfig>): ClientConfig_GenericXdsConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.typeUrl = "";
        message.name = "";
        message.versionInfo = "";
        message.configStatus = 0;
        message.clientStatus = 0;
        message.isStaticResource = false;
        if (value !== undefined)
            reflectionMergePartial<ClientConfig_GenericXdsConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientConfig_GenericXdsConfig): ClientConfig_GenericXdsConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string type_url */ 1:
                    message.typeUrl = reader.string();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* string version_info */ 3:
                    message.versionInfo = reader.string();
                    break;
                case /* google.protobuf.Any xds_config */ 4:
                    message.xdsConfig = Any.internalBinaryRead(reader, reader.uint32(), options, message.xdsConfig);
                    break;
                case /* google.protobuf.Timestamp last_updated */ 5:
                    message.lastUpdated = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.lastUpdated);
                    break;
                case /* envoy.service.status.v3.ConfigStatus config_status */ 6:
                    message.configStatus = reader.int32();
                    break;
                case /* envoy.admin.v3.ClientResourceStatus client_status */ 7:
                    message.clientStatus = reader.int32();
                    break;
                case /* envoy.admin.v3.UpdateFailureState error_state */ 8:
                    message.errorState = UpdateFailureState.internalBinaryRead(reader, reader.uint32(), options, message.errorState);
                    break;
                case /* bool is_static_resource */ 9:
                    message.isStaticResource = reader.bool();
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
    internalBinaryWrite(message: ClientConfig_GenericXdsConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string type_url = 1; */
        if (message.typeUrl !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.typeUrl);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* string version_info = 3; */
        if (message.versionInfo !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.versionInfo);
        /* google.protobuf.Any xds_config = 4; */
        if (message.xdsConfig)
            Any.internalBinaryWrite(message.xdsConfig, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp last_updated = 5; */
        if (message.lastUpdated)
            Timestamp.internalBinaryWrite(message.lastUpdated, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* envoy.service.status.v3.ConfigStatus config_status = 6; */
        if (message.configStatus !== 0)
            writer.tag(6, WireType.Varint).int32(message.configStatus);
        /* envoy.admin.v3.ClientResourceStatus client_status = 7; */
        if (message.clientStatus !== 0)
            writer.tag(7, WireType.Varint).int32(message.clientStatus);
        /* envoy.admin.v3.UpdateFailureState error_state = 8; */
        if (message.errorState)
            UpdateFailureState.internalBinaryWrite(message.errorState, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* bool is_static_resource = 9; */
        if (message.isStaticResource !== false)
            writer.tag(9, WireType.Varint).bool(message.isStaticResource);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.status.v3.ClientConfig.GenericXdsConfig
 */
export const ClientConfig_GenericXdsConfig = new ClientConfig_GenericXdsConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientStatusResponse$Type extends MessageType<ClientStatusResponse> {
    constructor() {
        super("envoy.service.status.v3.ClientStatusResponse", [
            { no: 1, name: "config", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ClientConfig }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.service.status.v2.ClientStatusResponse" } });
    }
    create(value?: PartialMessage<ClientStatusResponse>): ClientStatusResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.config = [];
        if (value !== undefined)
            reflectionMergePartial<ClientStatusResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientStatusResponse): ClientStatusResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.service.status.v3.ClientConfig config */ 1:
                    message.config.push(ClientConfig.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: ClientStatusResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.service.status.v3.ClientConfig config = 1; */
        for (let i = 0; i < message.config.length; i++)
            ClientConfig.internalBinaryWrite(message.config[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.status.v3.ClientStatusResponse
 */
export const ClientStatusResponse = new ClientStatusResponse$Type();
/**
 * @generated ServiceType for protobuf service envoy.service.status.v3.ClientStatusDiscoveryService
 */
export const ClientStatusDiscoveryService = new ServiceType("envoy.service.status.v3.ClientStatusDiscoveryService", [
    { name: "StreamClientStatus", serverStreaming: true, clientStreaming: true, options: {}, I: ClientStatusRequest, O: ClientStatusResponse },
    { name: "FetchClientStatus", options: { "google.api.http": { post: "/v3/discovery:client_status", body: "*" } }, I: ClientStatusRequest, O: ClientStatusResponse }
]);