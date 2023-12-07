// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/config/trace/v2/lightstep.proto (package envoy.config.trace.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Configuration for the LightStep tracer.
 * [#extension: envoy.tracers.lightstep]
 *
 * @generated from message envoy.config.trace.v2.LightstepConfig
 */
export const LightstepConfig = proto3.makeMessageType(
  "envoy.config.trace.v2.LightstepConfig",
  () => [
    { no: 1, name: "collector_cluster", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "access_token_file", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "propagation_modes", kind: "enum", T: proto3.getEnumType(LightstepConfig_PropagationMode), repeated: true },
  ],
);

/**
 * Available propagation modes
 *
 * @generated from enum envoy.config.trace.v2.LightstepConfig.PropagationMode
 */
export const LightstepConfig_PropagationMode = proto3.makeEnum(
  "envoy.config.trace.v2.LightstepConfig.PropagationMode",
  [
    {no: 0, name: "ENVOY"},
    {no: 1, name: "LIGHTSTEP"},
    {no: 2, name: "B3"},
    {no: 3, name: "TRACE_CONTEXT"},
  ],
);
