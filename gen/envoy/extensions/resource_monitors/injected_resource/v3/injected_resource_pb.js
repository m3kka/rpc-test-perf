// @generated by protoc-gen-es v1.5.1
// @generated from file envoy/extensions/resource_monitors/injected_resource/v3/injected_resource.proto (package envoy.extensions.resource_monitors.injected_resource.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * The injected resource monitor allows injecting a synthetic resource pressure into Envoy
 * via a text file, which must contain a floating-point number in the range [0..1] representing
 * the resource pressure and be updated atomically by a symbolic link swap.
 * This is intended primarily for integration tests to force Envoy into an overloaded state.
 *
 * @generated from message envoy.extensions.resource_monitors.injected_resource.v3.InjectedResourceConfig
 */
export const InjectedResourceConfig = proto3.makeMessageType(
  "envoy.extensions.resource_monitors.injected_resource.v3.InjectedResourceConfig",
  () => [
    { no: 1, name: "filename", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
