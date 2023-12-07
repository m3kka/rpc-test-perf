// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/network/dubbo_proxy/v3/route.proto" (package "envoy.extensions.filters.network.dubbo_proxy.v3", syntax proto3)
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
import { Int64Range } from "../../../../../type/v3/range";
import { StringMatcher } from "../../../../../type/matcher/v3/string";
import { Metadata } from "../../../../../config/core/v3/base";
import { WeightedCluster } from "../../../../../config/route/v3/route_components";
import { HeaderMatcher } from "../../../../../config/route/v3/route_components";
// [#protodoc-title: Dubbo Proxy Route Configuration]
// Dubbo Proxy :ref:`configuration overview <config_network_filters_dubbo_proxy>`.

/**
 * [#next-free-field: 6]
 *
 * @generated from protobuf message envoy.extensions.filters.network.dubbo_proxy.v3.RouteConfiguration
 */
export interface RouteConfiguration {
    /**
     * The name of the route configuration. Reserved for future use in asynchronous route discovery.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The interface name of the service. Wildcard interface are supported in the suffix or prefix form.
     * e.g. ``*.methods.add`` will match ``com.dev.methods.add``, ``com.prod.methods.add``, etc.
     * ``com.dev.methods.*`` will match ``com.dev.methods.add``, ``com.dev.methods.update``, etc.
     * Special wildcard ``*`` matching any interface.
     *
     * .. note::
     *
     *  The wildcard will not match the empty string.
     *  e.g. ``*.methods.add`` will match ``com.dev.methods.add`` but not ``.methods.add``.
     *
     * @generated from protobuf field: string interface = 2;
     */
    interface: string;
    /**
     * Which group does the interface belong to.
     *
     * @generated from protobuf field: string group = 3;
     */
    group: string;
    /**
     * The version number of the interface.
     *
     * @generated from protobuf field: string version = 4;
     */
    version: string;
    /**
     * The list of routes that will be matched, in order, against incoming requests. The first route
     * that matches will be used.
     *
     * @generated from protobuf field: repeated envoy.extensions.filters.network.dubbo_proxy.v3.Route routes = 5;
     */
    routes: Route[];
}
/**
 * @generated from protobuf message envoy.extensions.filters.network.dubbo_proxy.v3.Route
 */
export interface Route {
    /**
     * Route matching parameters.
     *
     * @generated from protobuf field: envoy.extensions.filters.network.dubbo_proxy.v3.RouteMatch match = 1;
     */
    match?: RouteMatch;
    /**
     * Route request to some upstream cluster.
     *
     * @generated from protobuf field: envoy.extensions.filters.network.dubbo_proxy.v3.RouteAction route = 2;
     */
    route?: RouteAction;
}
/**
 * @generated from protobuf message envoy.extensions.filters.network.dubbo_proxy.v3.RouteMatch
 */
export interface RouteMatch {
    /**
     * Method level routing matching.
     *
     * @generated from protobuf field: envoy.extensions.filters.network.dubbo_proxy.v3.MethodMatch method = 1;
     */
    method?: MethodMatch;
    /**
     * Specifies a set of headers that the route should match on. The router will check the request’s
     * headers against all the specified headers in the route config. A match will happen if all the
     * headers in the route are present in the request with the same values (or based on presence if
     * the value field is not in the config).
     *
     * @generated from protobuf field: repeated envoy.config.route.v3.HeaderMatcher headers = 2;
     */
    headers: HeaderMatcher[];
}
/**
 * @generated from protobuf message envoy.extensions.filters.network.dubbo_proxy.v3.RouteAction
 */
export interface RouteAction {
    /**
     * @generated from protobuf oneof: cluster_specifier
     */
    clusterSpecifier: {
        oneofKind: "cluster";
        /**
         * Indicates the upstream cluster to which the request should be routed.
         *
         * @generated from protobuf field: string cluster = 1;
         */
        cluster: string;
    } | {
        oneofKind: "weightedClusters";
        /**
         * Multiple upstream clusters can be specified for a given route. The
         * request is routed to one of the upstream clusters based on weights
         * assigned to each cluster.
         * Currently ClusterWeight only supports the name and weight fields.
         *
         * @generated from protobuf field: envoy.config.route.v3.WeightedCluster weighted_clusters = 2;
         */
        weightedClusters: WeightedCluster;
    } | {
        oneofKind: undefined;
    };
    /**
     * Optional endpoint metadata match criteria used by the subset load balancer. Only endpoints in
     * the upstream cluster with metadata matching what is set in this field will be considered for
     * load balancing. The filter name should be specified as ``envoy.lb``.
     *
     * @generated from protobuf field: envoy.config.core.v3.Metadata metadata_match = 3;
     */
    metadataMatch?: Metadata;
}
/**
 * @generated from protobuf message envoy.extensions.filters.network.dubbo_proxy.v3.MethodMatch
 */
export interface MethodMatch {
    /**
     * The name of the method.
     *
     * @generated from protobuf field: envoy.type.matcher.v3.StringMatcher name = 1;
     */
    name?: StringMatcher;
    /**
     * Method parameter definition.
     * The key is the parameter index, starting from 0.
     * The value is the parameter matching type.
     *
     * @generated from protobuf field: map<uint32, envoy.extensions.filters.network.dubbo_proxy.v3.MethodMatch.ParameterMatchSpecifier> params_match = 2;
     */
    paramsMatch: {
        [key: number]: MethodMatch_ParameterMatchSpecifier;
    };
}
/**
 * The parameter matching type.
 *
 * @generated from protobuf message envoy.extensions.filters.network.dubbo_proxy.v3.MethodMatch.ParameterMatchSpecifier
 */
export interface MethodMatch_ParameterMatchSpecifier {
    /**
     * @generated from protobuf oneof: parameter_match_specifier
     */
    parameterMatchSpecifier: {
        oneofKind: "exactMatch";
        /**
         * If specified, header match will be performed based on the value of the header.
         *
         * @generated from protobuf field: string exact_match = 3;
         */
        exactMatch: string;
    } | {
        oneofKind: "rangeMatch";
        /**
         * If specified, header match will be performed based on range.
         * The rule will match if the request header value is within this range.
         * The entire request header value must represent an integer in base 10 notation: consisting
         * of an optional plus or minus sign followed by a sequence of digits. The rule will not match
         * if the header value does not represent an integer. Match will fail for empty values,
         * floating point numbers or if only a subsequence of the header value is an integer.
         *
         * Examples:
         *
         * * For range [-10,0), route will match for header value -1, but not for 0,
         *   "somestring", 10.9, "-1somestring"
         *
         * @generated from protobuf field: envoy.type.v3.Int64Range range_match = 4;
         */
        rangeMatch: Int64Range;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message envoy.extensions.filters.network.dubbo_proxy.v3.MultipleRouteConfiguration
 */
export interface MultipleRouteConfiguration {
    /**
     * The name of the named route configurations. This name is used in asynchronous route discovery.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The route table of the dubbo connection manager.
     *
     * @generated from protobuf field: repeated envoy.extensions.filters.network.dubbo_proxy.v3.RouteConfiguration route_config = 4;
     */
    routeConfig: RouteConfiguration[];
}
// @generated message type with reflection information, may provide speed optimized methods
class RouteConfiguration$Type extends MessageType<RouteConfiguration> {
    constructor() {
        super("envoy.extensions.filters.network.dubbo_proxy.v3.RouteConfiguration", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "interface", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "group", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "routes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Route }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.filter.network.dubbo_proxy.v2alpha1.RouteConfiguration" } });
    }
    create(value?: PartialMessage<RouteConfiguration>): RouteConfiguration {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.interface = "";
        message.group = "";
        message.version = "";
        message.routes = [];
        if (value !== undefined)
            reflectionMergePartial<RouteConfiguration>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RouteConfiguration): RouteConfiguration {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string interface */ 2:
                    message.interface = reader.string();
                    break;
                case /* string group */ 3:
                    message.group = reader.string();
                    break;
                case /* string version */ 4:
                    message.version = reader.string();
                    break;
                case /* repeated envoy.extensions.filters.network.dubbo_proxy.v3.Route routes */ 5:
                    message.routes.push(Route.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: RouteConfiguration, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string interface = 2; */
        if (message.interface !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.interface);
        /* string group = 3; */
        if (message.group !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.group);
        /* string version = 4; */
        if (message.version !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.version);
        /* repeated envoy.extensions.filters.network.dubbo_proxy.v3.Route routes = 5; */
        for (let i = 0; i < message.routes.length; i++)
            Route.internalBinaryWrite(message.routes[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.dubbo_proxy.v3.RouteConfiguration
 */
export const RouteConfiguration = new RouteConfiguration$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Route$Type extends MessageType<Route> {
    constructor() {
        super("envoy.extensions.filters.network.dubbo_proxy.v3.Route", [
            { no: 1, name: "match", kind: "message", T: () => RouteMatch, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "route", kind: "message", T: () => RouteAction, options: { "validate.rules": { message: { required: true } } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.filter.network.dubbo_proxy.v2alpha1.Route" } });
    }
    create(value?: PartialMessage<Route>): Route {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Route>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Route): Route {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.extensions.filters.network.dubbo_proxy.v3.RouteMatch match */ 1:
                    message.match = RouteMatch.internalBinaryRead(reader, reader.uint32(), options, message.match);
                    break;
                case /* envoy.extensions.filters.network.dubbo_proxy.v3.RouteAction route */ 2:
                    message.route = RouteAction.internalBinaryRead(reader, reader.uint32(), options, message.route);
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
    internalBinaryWrite(message: Route, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.extensions.filters.network.dubbo_proxy.v3.RouteMatch match = 1; */
        if (message.match)
            RouteMatch.internalBinaryWrite(message.match, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* envoy.extensions.filters.network.dubbo_proxy.v3.RouteAction route = 2; */
        if (message.route)
            RouteAction.internalBinaryWrite(message.route, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.dubbo_proxy.v3.Route
 */
export const Route = new Route$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RouteMatch$Type extends MessageType<RouteMatch> {
    constructor() {
        super("envoy.extensions.filters.network.dubbo_proxy.v3.RouteMatch", [
            { no: 1, name: "method", kind: "message", T: () => MethodMatch },
            { no: 2, name: "headers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderMatcher }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.filter.network.dubbo_proxy.v2alpha1.RouteMatch" } });
    }
    create(value?: PartialMessage<RouteMatch>): RouteMatch {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.headers = [];
        if (value !== undefined)
            reflectionMergePartial<RouteMatch>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RouteMatch): RouteMatch {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.extensions.filters.network.dubbo_proxy.v3.MethodMatch method */ 1:
                    message.method = MethodMatch.internalBinaryRead(reader, reader.uint32(), options, message.method);
                    break;
                case /* repeated envoy.config.route.v3.HeaderMatcher headers */ 2:
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
    internalBinaryWrite(message: RouteMatch, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.extensions.filters.network.dubbo_proxy.v3.MethodMatch method = 1; */
        if (message.method)
            MethodMatch.internalBinaryWrite(message.method, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.config.route.v3.HeaderMatcher headers = 2; */
        for (let i = 0; i < message.headers.length; i++)
            HeaderMatcher.internalBinaryWrite(message.headers[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.dubbo_proxy.v3.RouteMatch
 */
export const RouteMatch = new RouteMatch$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RouteAction$Type extends MessageType<RouteAction> {
    constructor() {
        super("envoy.extensions.filters.network.dubbo_proxy.v3.RouteAction", [
            { no: 1, name: "cluster", kind: "scalar", oneof: "clusterSpecifier", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "weighted_clusters", kind: "message", oneof: "clusterSpecifier", T: () => WeightedCluster },
            { no: 3, name: "metadata_match", kind: "message", T: () => Metadata }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.filter.network.dubbo_proxy.v2alpha1.RouteAction" } });
    }
    create(value?: PartialMessage<RouteAction>): RouteAction {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.clusterSpecifier = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<RouteAction>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RouteAction): RouteAction {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string cluster */ 1:
                    message.clusterSpecifier = {
                        oneofKind: "cluster",
                        cluster: reader.string()
                    };
                    break;
                case /* envoy.config.route.v3.WeightedCluster weighted_clusters */ 2:
                    message.clusterSpecifier = {
                        oneofKind: "weightedClusters",
                        weightedClusters: WeightedCluster.internalBinaryRead(reader, reader.uint32(), options, (message.clusterSpecifier as any).weightedClusters)
                    };
                    break;
                case /* envoy.config.core.v3.Metadata metadata_match */ 3:
                    message.metadataMatch = Metadata.internalBinaryRead(reader, reader.uint32(), options, message.metadataMatch);
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
    internalBinaryWrite(message: RouteAction, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string cluster = 1; */
        if (message.clusterSpecifier.oneofKind === "cluster")
            writer.tag(1, WireType.LengthDelimited).string(message.clusterSpecifier.cluster);
        /* envoy.config.route.v3.WeightedCluster weighted_clusters = 2; */
        if (message.clusterSpecifier.oneofKind === "weightedClusters")
            WeightedCluster.internalBinaryWrite(message.clusterSpecifier.weightedClusters, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.Metadata metadata_match = 3; */
        if (message.metadataMatch)
            Metadata.internalBinaryWrite(message.metadataMatch, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.dubbo_proxy.v3.RouteAction
 */
export const RouteAction = new RouteAction$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MethodMatch$Type extends MessageType<MethodMatch> {
    constructor() {
        super("envoy.extensions.filters.network.dubbo_proxy.v3.MethodMatch", [
            { no: 1, name: "name", kind: "message", T: () => StringMatcher },
            { no: 2, name: "params_match", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => MethodMatch_ParameterMatchSpecifier } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.filter.network.dubbo_proxy.v2alpha1.MethodMatch" } });
    }
    create(value?: PartialMessage<MethodMatch>): MethodMatch {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.paramsMatch = {};
        if (value !== undefined)
            reflectionMergePartial<MethodMatch>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MethodMatch): MethodMatch {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.type.matcher.v3.StringMatcher name */ 1:
                    message.name = StringMatcher.internalBinaryRead(reader, reader.uint32(), options, message.name);
                    break;
                case /* map<uint32, envoy.extensions.filters.network.dubbo_proxy.v3.MethodMatch.ParameterMatchSpecifier> params_match */ 2:
                    this.binaryReadMap2(message.paramsMatch, reader, options);
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
    private binaryReadMap2(map: MethodMatch["paramsMatch"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof MethodMatch["paramsMatch"] | undefined, val: MethodMatch["paramsMatch"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = MethodMatch_ParameterMatchSpecifier.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field envoy.extensions.filters.network.dubbo_proxy.v3.MethodMatch.params_match");
            }
        }
        map[key ?? 0] = val ?? MethodMatch_ParameterMatchSpecifier.create();
    }
    internalBinaryWrite(message: MethodMatch, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.type.matcher.v3.StringMatcher name = 1; */
        if (message.name)
            StringMatcher.internalBinaryWrite(message.name, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, envoy.extensions.filters.network.dubbo_proxy.v3.MethodMatch.ParameterMatchSpecifier> params_match = 2; */
        for (let k of globalThis.Object.keys(message.paramsMatch)) {
            writer.tag(2, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            MethodMatch_ParameterMatchSpecifier.internalBinaryWrite(message.paramsMatch[k as any], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.dubbo_proxy.v3.MethodMatch
 */
export const MethodMatch = new MethodMatch$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MethodMatch_ParameterMatchSpecifier$Type extends MessageType<MethodMatch_ParameterMatchSpecifier> {
    constructor() {
        super("envoy.extensions.filters.network.dubbo_proxy.v3.MethodMatch.ParameterMatchSpecifier", [
            { no: 3, name: "exact_match", kind: "scalar", oneof: "parameterMatchSpecifier", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "range_match", kind: "message", oneof: "parameterMatchSpecifier", T: () => Int64Range }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.filter.network.dubbo_proxy.v2alpha1.MethodMatch.ParameterMatchSpecifier" } });
    }
    create(value?: PartialMessage<MethodMatch_ParameterMatchSpecifier>): MethodMatch_ParameterMatchSpecifier {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.parameterMatchSpecifier = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<MethodMatch_ParameterMatchSpecifier>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MethodMatch_ParameterMatchSpecifier): MethodMatch_ParameterMatchSpecifier {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string exact_match */ 3:
                    message.parameterMatchSpecifier = {
                        oneofKind: "exactMatch",
                        exactMatch: reader.string()
                    };
                    break;
                case /* envoy.type.v3.Int64Range range_match */ 4:
                    message.parameterMatchSpecifier = {
                        oneofKind: "rangeMatch",
                        rangeMatch: Int64Range.internalBinaryRead(reader, reader.uint32(), options, (message.parameterMatchSpecifier as any).rangeMatch)
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
    internalBinaryWrite(message: MethodMatch_ParameterMatchSpecifier, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string exact_match = 3; */
        if (message.parameterMatchSpecifier.oneofKind === "exactMatch")
            writer.tag(3, WireType.LengthDelimited).string(message.parameterMatchSpecifier.exactMatch);
        /* envoy.type.v3.Int64Range range_match = 4; */
        if (message.parameterMatchSpecifier.oneofKind === "rangeMatch")
            Int64Range.internalBinaryWrite(message.parameterMatchSpecifier.rangeMatch, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.dubbo_proxy.v3.MethodMatch.ParameterMatchSpecifier
 */
export const MethodMatch_ParameterMatchSpecifier = new MethodMatch_ParameterMatchSpecifier$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MultipleRouteConfiguration$Type extends MessageType<MultipleRouteConfiguration> {
    constructor() {
        super("envoy.extensions.filters.network.dubbo_proxy.v3.MultipleRouteConfiguration", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "route_config", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RouteConfiguration }
        ]);
    }
    create(value?: PartialMessage<MultipleRouteConfiguration>): MultipleRouteConfiguration {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.routeConfig = [];
        if (value !== undefined)
            reflectionMergePartial<MultipleRouteConfiguration>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MultipleRouteConfiguration): MultipleRouteConfiguration {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* repeated envoy.extensions.filters.network.dubbo_proxy.v3.RouteConfiguration route_config */ 4:
                    message.routeConfig.push(RouteConfiguration.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MultipleRouteConfiguration, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* repeated envoy.extensions.filters.network.dubbo_proxy.v3.RouteConfiguration route_config = 4; */
        for (let i = 0; i < message.routeConfig.length; i++)
            RouteConfiguration.internalBinaryWrite(message.routeConfig[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.dubbo_proxy.v3.MultipleRouteConfiguration
 */
export const MultipleRouteConfiguration = new MultipleRouteConfiguration$Type();
