// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/service/discovery/v3/discovery.proto (package envoy.service.discovery.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Any, BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ControlPlane, Metadata, Node } from "../../../config/core/v3/base_pb.js";
import type { Status } from "../../../../google/rpc/status_pb.js";

/**
 * Specifies a resource to be subscribed to.
 *
 * @generated from message envoy.service.discovery.v3.ResourceLocator
 */
export declare class ResourceLocator extends Message<ResourceLocator> {
  /**
   * The resource name to subscribe to.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * A set of dynamic parameters used to match against the dynamic parameter
   * constraints on the resource. This allows clients to select between
   * multiple variants of the same resource.
   *
   * @generated from field: map<string, string> dynamic_parameters = 2;
   */
  dynamicParameters: { [key: string]: string };

  constructor(data?: PartialMessage<ResourceLocator>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.discovery.v3.ResourceLocator";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResourceLocator;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResourceLocator;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResourceLocator;

  static equals(a: ResourceLocator | PlainMessage<ResourceLocator> | undefined, b: ResourceLocator | PlainMessage<ResourceLocator> | undefined): boolean;
}

/**
 * Specifies a concrete resource name.
 *
 * @generated from message envoy.service.discovery.v3.ResourceName
 */
export declare class ResourceName extends Message<ResourceName> {
  /**
   * The name of the resource.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Dynamic parameter constraints associated with this resource. To be used by client-side caches
   * (including xDS proxies) when matching subscribed resource locators.
   *
   * @generated from field: envoy.service.discovery.v3.DynamicParameterConstraints dynamic_parameter_constraints = 2;
   */
  dynamicParameterConstraints?: DynamicParameterConstraints;

  constructor(data?: PartialMessage<ResourceName>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.discovery.v3.ResourceName";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResourceName;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResourceName;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResourceName;

  static equals(a: ResourceName | PlainMessage<ResourceName> | undefined, b: ResourceName | PlainMessage<ResourceName> | undefined): boolean;
}

/**
 * A DiscoveryRequest requests a set of versioned resources of the same type for
 * a given Envoy node on some API.
 * [#next-free-field: 8]
 *
 * @generated from message envoy.service.discovery.v3.DiscoveryRequest
 */
export declare class DiscoveryRequest extends Message<DiscoveryRequest> {
  /**
   * The version_info provided in the request messages will be the version_info
   * received with the most recent successfully processed response or empty on
   * the first request. It is expected that no new request is sent after a
   * response is received until the Envoy instance is ready to ACK/NACK the new
   * configuration. ACK/NACK takes place by returning the new API config version
   * as applied or the previous API config version respectively. Each type_url
   * (see below) has an independent version associated with it.
   *
   * @generated from field: string version_info = 1;
   */
  versionInfo: string;

  /**
   * The node making the request.
   *
   * @generated from field: envoy.config.core.v3.Node node = 2;
   */
  node?: Node;

  /**
   * List of resources to subscribe to, e.g. list of cluster names or a route
   * configuration name. If this is empty, all resources for the API are
   * returned. LDS/CDS may have empty resource_names, which will cause all
   * resources for the Envoy instance to be returned. The LDS and CDS responses
   * will then imply a number of resources that need to be fetched via EDS/RDS,
   * which will be explicitly enumerated in resource_names.
   *
   * @generated from field: repeated string resource_names = 3;
   */
  resourceNames: string[];

  /**
   * [#not-implemented-hide:]
   * Alternative to ``resource_names`` field that allows specifying dynamic
   * parameters along with each resource name. Clients that populate this
   * field must be able to handle responses from the server where resources
   * are wrapped in a Resource message.
   * Note that it is legal for a request to have some resources listed
   * in ``resource_names`` and others in ``resource_locators``.
   *
   * @generated from field: repeated envoy.service.discovery.v3.ResourceLocator resource_locators = 7;
   */
  resourceLocators: ResourceLocator[];

  /**
   * Type of the resource that is being requested, e.g.
   * "type.googleapis.com/envoy.api.v2.ClusterLoadAssignment". This is implicit
   * in requests made via singleton xDS APIs such as CDS, LDS, etc. but is
   * required for ADS.
   *
   * @generated from field: string type_url = 4;
   */
  typeUrl: string;

  /**
   * nonce corresponding to DiscoveryResponse being ACK/NACKed. See above
   * discussion on version_info and the DiscoveryResponse nonce comment. This
   * may be empty only if 1) this is a non-persistent-stream xDS such as HTTP,
   * or 2) the client has not yet accepted an update in this xDS stream (unlike
   * delta, where it is populated only for new explicit ACKs).
   *
   * @generated from field: string response_nonce = 5;
   */
  responseNonce: string;

  /**
   * This is populated when the previous :ref:`DiscoveryResponse <envoy_v3_api_msg_service.discovery.v3.DiscoveryResponse>`
   * failed to update configuration. The ``message`` field in ``error_details`` provides the Envoy
   * internal exception related to the failure. It is only intended for consumption during manual
   * debugging, the string provided is not guaranteed to be stable across Envoy versions.
   *
   * @generated from field: google.rpc.Status error_detail = 6;
   */
  errorDetail?: Status;

  constructor(data?: PartialMessage<DiscoveryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.discovery.v3.DiscoveryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DiscoveryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DiscoveryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DiscoveryRequest;

  static equals(a: DiscoveryRequest | PlainMessage<DiscoveryRequest> | undefined, b: DiscoveryRequest | PlainMessage<DiscoveryRequest> | undefined): boolean;
}

/**
 * [#next-free-field: 7]
 *
 * @generated from message envoy.service.discovery.v3.DiscoveryResponse
 */
export declare class DiscoveryResponse extends Message<DiscoveryResponse> {
  /**
   * The version of the response data.
   *
   * @generated from field: string version_info = 1;
   */
  versionInfo: string;

  /**
   * The response resources. These resources are typed and depend on the API being called.
   *
   * @generated from field: repeated google.protobuf.Any resources = 2;
   */
  resources: Any[];

  /**
   * [#not-implemented-hide:]
   * Canary is used to support two Envoy command line flags:
   *
   * * --terminate-on-canary-transition-failure. When set, Envoy is able to
   *   terminate if it detects that configuration is stuck at canary. Consider
   *   this example sequence of updates:
   *   - Management server applies a canary config successfully.
   *   - Management server rolls back to a production config.
   *   - Envoy rejects the new production config.
   *   Since there is no sensible way to continue receiving configuration
   *   updates, Envoy will then terminate and apply production config from a
   *   clean slate.
   * * --dry-run-canary. When set, a canary response will never be applied, only
   *   validated via a dry run.
   *
   * @generated from field: bool canary = 3;
   */
  canary: boolean;

  /**
   * Type URL for resources. Identifies the xDS API when muxing over ADS.
   * Must be consistent with the type_url in the 'resources' repeated Any (if non-empty).
   *
   * @generated from field: string type_url = 4;
   */
  typeUrl: string;

  /**
   * For gRPC based subscriptions, the nonce provides a way to explicitly ack a
   * specific DiscoveryResponse in a following DiscoveryRequest. Additional
   * messages may have been sent by Envoy to the management server for the
   * previous version on the stream prior to this DiscoveryResponse, that were
   * unprocessed at response send time. The nonce allows the management server
   * to ignore any further DiscoveryRequests for the previous version until a
   * DiscoveryRequest bearing the nonce. The nonce is optional and is not
   * required for non-stream based xDS implementations.
   *
   * @generated from field: string nonce = 5;
   */
  nonce: string;

  /**
   * The control plane instance that sent the response.
   *
   * @generated from field: envoy.config.core.v3.ControlPlane control_plane = 6;
   */
  controlPlane?: ControlPlane;

  constructor(data?: PartialMessage<DiscoveryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.discovery.v3.DiscoveryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DiscoveryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DiscoveryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DiscoveryResponse;

  static equals(a: DiscoveryResponse | PlainMessage<DiscoveryResponse> | undefined, b: DiscoveryResponse | PlainMessage<DiscoveryResponse> | undefined): boolean;
}

/**
 * DeltaDiscoveryRequest and DeltaDiscoveryResponse are used in a new gRPC
 * endpoint for Delta xDS.
 *
 * With Delta xDS, the DeltaDiscoveryResponses do not need to include a full
 * snapshot of the tracked resources. Instead, DeltaDiscoveryResponses are a
 * diff to the state of a xDS client.
 * In Delta XDS there are per-resource versions, which allow tracking state at
 * the resource granularity.
 * An xDS Delta session is always in the context of a gRPC bidirectional
 * stream. This allows the xDS server to keep track of the state of xDS clients
 * connected to it.
 *
 * In Delta xDS the nonce field is required and used to pair
 * DeltaDiscoveryResponse to a DeltaDiscoveryRequest ACK or NACK.
 * Optionally, a response message level system_version_info is present for
 * debugging purposes only.
 *
 * DeltaDiscoveryRequest plays two independent roles. Any DeltaDiscoveryRequest
 * can be either or both of: [1] informing the server of what resources the
 * client has gained/lost interest in (using resource_names_subscribe and
 * resource_names_unsubscribe), or [2] (N)ACKing an earlier resource update from
 * the server (using response_nonce, with presence of error_detail making it a NACK).
 * Additionally, the first message (for a given type_url) of a reconnected gRPC stream
 * has a third role: informing the server of the resources (and their versions)
 * that the client already possesses, using the initial_resource_versions field.
 *
 * As with state-of-the-world, when multiple resource types are multiplexed (ADS),
 * all requests/acknowledgments/updates are logically walled off by type_url:
 * a Cluster ACK exists in a completely separate world from a prior Route NACK.
 * In particular, initial_resource_versions being sent at the "start" of every
 * gRPC stream actually entails a message for each type_url, each with its own
 * initial_resource_versions.
 * [#next-free-field: 10]
 *
 * @generated from message envoy.service.discovery.v3.DeltaDiscoveryRequest
 */
export declare class DeltaDiscoveryRequest extends Message<DeltaDiscoveryRequest> {
  /**
   * The node making the request.
   *
   * @generated from field: envoy.config.core.v3.Node node = 1;
   */
  node?: Node;

  /**
   * Type of the resource that is being requested, e.g.
   * ``type.googleapis.com/envoy.api.v2.ClusterLoadAssignment``. This does not need to be set if
   * resources are only referenced via ``xds_resource_subscribe`` and
   * ``xds_resources_unsubscribe``.
   *
   * @generated from field: string type_url = 2;
   */
  typeUrl: string;

  /**
   * DeltaDiscoveryRequests allow the client to add or remove individual
   * resources to the set of tracked resources in the context of a stream.
   * All resource names in the resource_names_subscribe list are added to the
   * set of tracked resources and all resource names in the resource_names_unsubscribe
   * list are removed from the set of tracked resources.
   *
   * *Unlike* state-of-the-world xDS, an empty resource_names_subscribe or
   * resource_names_unsubscribe list simply means that no resources are to be
   * added or removed to the resource list.
   * *Like* state-of-the-world xDS, the server must send updates for all tracked
   * resources, but can also send updates for resources the client has not subscribed to.
   *
   * NOTE: the server must respond with all resources listed in resource_names_subscribe,
   * even if it believes the client has the most recent version of them. The reason:
   * the client may have dropped them, but then regained interest before it had a chance
   * to send the unsubscribe message. See DeltaSubscriptionStateTest.RemoveThenAdd.
   *
   * These two fields can be set in any DeltaDiscoveryRequest, including ACKs
   * and initial_resource_versions.
   *
   * A list of Resource names to add to the list of tracked resources.
   *
   * @generated from field: repeated string resource_names_subscribe = 3;
   */
  resourceNamesSubscribe: string[];

  /**
   * A list of Resource names to remove from the list of tracked resources.
   *
   * @generated from field: repeated string resource_names_unsubscribe = 4;
   */
  resourceNamesUnsubscribe: string[];

  /**
   * [#not-implemented-hide:]
   * Alternative to ``resource_names_subscribe`` field that allows specifying dynamic parameters
   * along with each resource name.
   * Note that it is legal for a request to have some resources listed
   * in ``resource_names_subscribe`` and others in ``resource_locators_subscribe``.
   *
   * @generated from field: repeated envoy.service.discovery.v3.ResourceLocator resource_locators_subscribe = 8;
   */
  resourceLocatorsSubscribe: ResourceLocator[];

  /**
   * [#not-implemented-hide:]
   * Alternative to ``resource_names_unsubscribe`` field that allows specifying dynamic parameters
   * along with each resource name.
   * Note that it is legal for a request to have some resources listed
   * in ``resource_names_unsubscribe`` and others in ``resource_locators_unsubscribe``.
   *
   * @generated from field: repeated envoy.service.discovery.v3.ResourceLocator resource_locators_unsubscribe = 9;
   */
  resourceLocatorsUnsubscribe: ResourceLocator[];

  /**
   * Informs the server of the versions of the resources the xDS client knows of, to enable the
   * client to continue the same logical xDS session even in the face of gRPC stream reconnection.
   * It will not be populated: [1] in the very first stream of a session, since the client will
   * not yet have any resources,  [2] in any message after the first in a stream (for a given
   * type_url), since the server will already be correctly tracking the client's state.
   * (In ADS, the first message *of each type_url* of a reconnected stream populates this map.)
   * The map's keys are names of xDS resources known to the xDS client.
   * The map's values are opaque resource versions.
   *
   * @generated from field: map<string, string> initial_resource_versions = 5;
   */
  initialResourceVersions: { [key: string]: string };

  /**
   * When the DeltaDiscoveryRequest is a ACK or NACK message in response
   * to a previous DeltaDiscoveryResponse, the response_nonce must be the
   * nonce in the DeltaDiscoveryResponse.
   * Otherwise (unlike in DiscoveryRequest) response_nonce must be omitted.
   *
   * @generated from field: string response_nonce = 6;
   */
  responseNonce: string;

  /**
   * This is populated when the previous :ref:`DiscoveryResponse <envoy_v3_api_msg_service.discovery.v3.DiscoveryResponse>`
   * failed to update configuration. The ``message`` field in ``error_details``
   * provides the Envoy internal exception related to the failure.
   *
   * @generated from field: google.rpc.Status error_detail = 7;
   */
  errorDetail?: Status;

  constructor(data?: PartialMessage<DeltaDiscoveryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.discovery.v3.DeltaDiscoveryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeltaDiscoveryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeltaDiscoveryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeltaDiscoveryRequest;

  static equals(a: DeltaDiscoveryRequest | PlainMessage<DeltaDiscoveryRequest> | undefined, b: DeltaDiscoveryRequest | PlainMessage<DeltaDiscoveryRequest> | undefined): boolean;
}

/**
 * [#next-free-field: 9]
 *
 * @generated from message envoy.service.discovery.v3.DeltaDiscoveryResponse
 */
export declare class DeltaDiscoveryResponse extends Message<DeltaDiscoveryResponse> {
  /**
   * The version of the response data (used for debugging).
   *
   * @generated from field: string system_version_info = 1;
   */
  systemVersionInfo: string;

  /**
   * The response resources. These are typed resources, whose types must match
   * the type_url field.
   *
   * @generated from field: repeated envoy.service.discovery.v3.Resource resources = 2;
   */
  resources: Resource[];

  /**
   * Type URL for resources. Identifies the xDS API when muxing over ADS.
   * Must be consistent with the type_url in the Any within 'resources' if 'resources' is non-empty.
   *
   * @generated from field: string type_url = 4;
   */
  typeUrl: string;

  /**
   * Resources names of resources that have be deleted and to be removed from the xDS Client.
   * Removed resources for missing resources can be ignored.
   *
   * @generated from field: repeated string removed_resources = 6;
   */
  removedResources: string[];

  /**
   * Alternative to removed_resources that allows specifying which variant of
   * a resource is being removed. This variant must be used for any resource
   * for which dynamic parameter constraints were sent to the client.
   *
   * @generated from field: repeated envoy.service.discovery.v3.ResourceName removed_resource_names = 8;
   */
  removedResourceNames: ResourceName[];

  /**
   * The nonce provides a way for DeltaDiscoveryRequests to uniquely
   * reference a DeltaDiscoveryResponse when (N)ACKing. The nonce is required.
   *
   * @generated from field: string nonce = 5;
   */
  nonce: string;

  /**
   * [#not-implemented-hide:]
   * The control plane instance that sent the response.
   *
   * @generated from field: envoy.config.core.v3.ControlPlane control_plane = 7;
   */
  controlPlane?: ControlPlane;

  constructor(data?: PartialMessage<DeltaDiscoveryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.discovery.v3.DeltaDiscoveryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeltaDiscoveryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeltaDiscoveryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeltaDiscoveryResponse;

  static equals(a: DeltaDiscoveryResponse | PlainMessage<DeltaDiscoveryResponse> | undefined, b: DeltaDiscoveryResponse | PlainMessage<DeltaDiscoveryResponse> | undefined): boolean;
}

/**
 * A set of dynamic parameter constraints associated with a variant of an individual xDS resource.
 * These constraints determine whether the resource matches a subscription based on the set of
 * dynamic parameters in the subscription, as specified in the
 * :ref:`ResourceLocator.dynamic_parameters<envoy_v3_api_field_service.discovery.v3.ResourceLocator.dynamic_parameters>`
 * field. This allows xDS implementations (clients, servers, and caching proxies) to determine
 * which variant of a resource is appropriate for a given client.
 *
 * @generated from message envoy.service.discovery.v3.DynamicParameterConstraints
 */
export declare class DynamicParameterConstraints extends Message<DynamicParameterConstraints> {
  /**
   * @generated from oneof envoy.service.discovery.v3.DynamicParameterConstraints.type
   */
  type: {
    /**
     * A single constraint to evaluate.
     *
     * @generated from field: envoy.service.discovery.v3.DynamicParameterConstraints.SingleConstraint constraint = 1;
     */
    value: DynamicParameterConstraints_SingleConstraint;
    case: "constraint";
  } | {
    /**
     * A list of constraints that match if any one constraint in the list
     * matches.
     *
     * @generated from field: envoy.service.discovery.v3.DynamicParameterConstraints.ConstraintList or_constraints = 2;
     */
    value: DynamicParameterConstraints_ConstraintList;
    case: "orConstraints";
  } | {
    /**
     * A list of constraints that must all match.
     *
     * @generated from field: envoy.service.discovery.v3.DynamicParameterConstraints.ConstraintList and_constraints = 3;
     */
    value: DynamicParameterConstraints_ConstraintList;
    case: "andConstraints";
  } | {
    /**
     * The inverse (NOT) of a set of constraints.
     *
     * @generated from field: envoy.service.discovery.v3.DynamicParameterConstraints not_constraints = 4;
     */
    value: DynamicParameterConstraints;
    case: "notConstraints";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<DynamicParameterConstraints>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.discovery.v3.DynamicParameterConstraints";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DynamicParameterConstraints;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DynamicParameterConstraints;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DynamicParameterConstraints;

  static equals(a: DynamicParameterConstraints | PlainMessage<DynamicParameterConstraints> | undefined, b: DynamicParameterConstraints | PlainMessage<DynamicParameterConstraints> | undefined): boolean;
}

/**
 * A single constraint for a given key.
 *
 * @generated from message envoy.service.discovery.v3.DynamicParameterConstraints.SingleConstraint
 */
export declare class DynamicParameterConstraints_SingleConstraint extends Message<DynamicParameterConstraints_SingleConstraint> {
  /**
   * The key to match against.
   *
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * @generated from oneof envoy.service.discovery.v3.DynamicParameterConstraints.SingleConstraint.constraint_type
   */
  constraintType: {
    /**
     * Matches this exact value.
     *
     * @generated from field: string value = 2;
     */
    value: string;
    case: "value";
  } | {
    /**
     * Key is present (matches any value except for the key being absent).
     * This allows setting a default constraint for clients that do
     * not send a key at all, while there may be other clients that need
     * special configuration based on that key.
     *
     * @generated from field: envoy.service.discovery.v3.DynamicParameterConstraints.SingleConstraint.Exists exists = 3;
     */
    value: DynamicParameterConstraints_SingleConstraint_Exists;
    case: "exists";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<DynamicParameterConstraints_SingleConstraint>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.discovery.v3.DynamicParameterConstraints.SingleConstraint";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DynamicParameterConstraints_SingleConstraint;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DynamicParameterConstraints_SingleConstraint;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DynamicParameterConstraints_SingleConstraint;

  static equals(a: DynamicParameterConstraints_SingleConstraint | PlainMessage<DynamicParameterConstraints_SingleConstraint> | undefined, b: DynamicParameterConstraints_SingleConstraint | PlainMessage<DynamicParameterConstraints_SingleConstraint> | undefined): boolean;
}

/**
 * @generated from message envoy.service.discovery.v3.DynamicParameterConstraints.SingleConstraint.Exists
 */
export declare class DynamicParameterConstraints_SingleConstraint_Exists extends Message<DynamicParameterConstraints_SingleConstraint_Exists> {
  constructor(data?: PartialMessage<DynamicParameterConstraints_SingleConstraint_Exists>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.discovery.v3.DynamicParameterConstraints.SingleConstraint.Exists";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DynamicParameterConstraints_SingleConstraint_Exists;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DynamicParameterConstraints_SingleConstraint_Exists;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DynamicParameterConstraints_SingleConstraint_Exists;

  static equals(a: DynamicParameterConstraints_SingleConstraint_Exists | PlainMessage<DynamicParameterConstraints_SingleConstraint_Exists> | undefined, b: DynamicParameterConstraints_SingleConstraint_Exists | PlainMessage<DynamicParameterConstraints_SingleConstraint_Exists> | undefined): boolean;
}

/**
 * @generated from message envoy.service.discovery.v3.DynamicParameterConstraints.ConstraintList
 */
export declare class DynamicParameterConstraints_ConstraintList extends Message<DynamicParameterConstraints_ConstraintList> {
  /**
   * @generated from field: repeated envoy.service.discovery.v3.DynamicParameterConstraints constraints = 1;
   */
  constraints: DynamicParameterConstraints[];

  constructor(data?: PartialMessage<DynamicParameterConstraints_ConstraintList>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.discovery.v3.DynamicParameterConstraints.ConstraintList";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DynamicParameterConstraints_ConstraintList;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DynamicParameterConstraints_ConstraintList;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DynamicParameterConstraints_ConstraintList;

  static equals(a: DynamicParameterConstraints_ConstraintList | PlainMessage<DynamicParameterConstraints_ConstraintList> | undefined, b: DynamicParameterConstraints_ConstraintList | PlainMessage<DynamicParameterConstraints_ConstraintList> | undefined): boolean;
}

/**
 * [#next-free-field: 10]
 *
 * @generated from message envoy.service.discovery.v3.Resource
 */
export declare class Resource extends Message<Resource> {
  /**
   * The resource's name, to distinguish it from others of the same type of resource.
   * Only one of ``name`` or ``resource_name`` may be set.
   *
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * Alternative to the ``name`` field, to be used when the server supports
   * multiple variants of the named resource that are differentiated by
   * dynamic parameter constraints.
   * Only one of ``name`` or ``resource_name`` may be set.
   *
   * @generated from field: envoy.service.discovery.v3.ResourceName resource_name = 8;
   */
  resourceName?: ResourceName;

  /**
   * The aliases are a list of other names that this resource can go by.
   *
   * @generated from field: repeated string aliases = 4;
   */
  aliases: string[];

  /**
   * The resource level version. It allows xDS to track the state of individual
   * resources.
   *
   * @generated from field: string version = 1;
   */
  version: string;

  /**
   * The resource being tracked.
   *
   * @generated from field: google.protobuf.Any resource = 2;
   */
  resource?: Any;

  /**
   * Time-to-live value for the resource. For each resource, a timer is started. The timer is
   * reset each time the resource is received with a new TTL. If the resource is received with
   * no TTL set, the timer is removed for the resource. Upon expiration of the timer, the
   * configuration for the resource will be removed.
   *
   * The TTL can be refreshed or changed by sending a response that doesn't change the resource
   * version. In this case the resource field does not need to be populated, which allows for
   * light-weight "heartbeat" updates to keep a resource with a TTL alive.
   *
   * The TTL feature is meant to support configurations that should be removed in the event of
   * a management server failure. For example, the feature may be used for fault injection
   * testing where the fault injection should be terminated in the event that Envoy loses contact
   * with the management server.
   *
   * @generated from field: google.protobuf.Duration ttl = 6;
   */
  ttl?: Duration;

  /**
   * Cache control properties for the resource.
   * [#not-implemented-hide:]
   *
   * @generated from field: envoy.service.discovery.v3.Resource.CacheControl cache_control = 7;
   */
  cacheControl?: Resource_CacheControl;

  /**
   * The Metadata field can be used to provide additional information for the resource.
   * E.g. the trace data for debugging.
   *
   * @generated from field: envoy.config.core.v3.Metadata metadata = 9;
   */
  metadata?: Metadata;

  constructor(data?: PartialMessage<Resource>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.discovery.v3.Resource";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Resource;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Resource;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Resource;

  static equals(a: Resource | PlainMessage<Resource> | undefined, b: Resource | PlainMessage<Resource> | undefined): boolean;
}

/**
 * Cache control properties for the resource.
 * [#not-implemented-hide:]
 *
 * @generated from message envoy.service.discovery.v3.Resource.CacheControl
 */
export declare class Resource_CacheControl extends Message<Resource_CacheControl> {
  /**
   * If true, xDS proxies may not cache this resource.
   * Note that this does not apply to clients other than xDS proxies, which must cache resources
   * for their own use, regardless of the value of this field.
   *
   * @generated from field: bool do_not_cache = 1;
   */
  doNotCache: boolean;

  constructor(data?: PartialMessage<Resource_CacheControl>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "envoy.service.discovery.v3.Resource.CacheControl";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Resource_CacheControl;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Resource_CacheControl;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Resource_CacheControl;

  static equals(a: Resource_CacheControl | PlainMessage<Resource_CacheControl> | undefined, b: Resource_CacheControl | PlainMessage<Resource_CacheControl> | undefined): boolean;
}

