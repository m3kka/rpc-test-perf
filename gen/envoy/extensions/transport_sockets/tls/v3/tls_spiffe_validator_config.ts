// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/transport_sockets/tls/v3/tls_spiffe_validator_config.proto" (package "envoy.extensions.transport_sockets.tls.v3", syntax proto3)
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
import { DataSource } from "../../../../config/core/v3/base";
// [#protodoc-title: SPIFFE Certificate Validator]
// [#extension: envoy.tls.cert_validator.spiffe]

/**
 * Configuration specific to the `SPIFFE <https://github.com/spiffe/spiffe>`_ certificate validator.
 *
 * Example:
 *
 * .. validated-code-block:: yaml
 *   :type-name: envoy.extensions.transport_sockets.tls.v3.CertificateValidationContext
 *
 *   custom_validator_config:
 *     name: envoy.tls.cert_validator.spiffe
 *     typed_config:
 *       "@type": type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.SPIFFECertValidatorConfig
 *       trust_domains:
 *       - name: foo.com
 *         trust_bundle:
 *           filename: "foo.pem"
 *       - name: envoy.com
 *         trust_bundle:
 *           filename: "envoy.pem"
 *
 * In this example, a presented peer certificate whose SAN matches ``spiffe://foo.com/**`` is validated against
 * the "foo.pem" x.509 certificate. All the trust bundles are isolated from each other, so no trust domain can mint
 * a SVID belonging to another trust domain. That means, in this example, a SVID signed by ``envoy.com``'s CA with ``spiffe://foo.com/**``
 * SAN would be rejected since Envoy selects the trust bundle according to the presented SAN before validate the certificate.
 *
 * Note that SPIFFE validator inherits and uses the following options from :ref:`CertificateValidationContext <envoy_v3_api_msg_extensions.transport_sockets.tls.v3.CertificateValidationContext>`.
 *
 * - :ref:`allow_expired_certificate <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.allow_expired_certificate>` to allow expired certificates.
 * - :ref:`match_typed_subject_alt_names <envoy_v3_api_field_extensions.transport_sockets.tls.v3.CertificateValidationContext.match_typed_subject_alt_names>` to match **URI** SAN of certificates. Unlike the default validator, SPIFFE validator only matches **URI** SAN (which equals to SVID in SPIFFE terminology) and ignore other SAN types.
 *
 *
 * @generated from protobuf message envoy.extensions.transport_sockets.tls.v3.SPIFFECertValidatorConfig
 */
export interface SPIFFECertValidatorConfig {
    /**
     * This field specifies trust domains used for validating incoming X.509-SVID(s).
     *
     * @generated from protobuf field: repeated envoy.extensions.transport_sockets.tls.v3.SPIFFECertValidatorConfig.TrustDomain trust_domains = 1;
     */
    trustDomains: SPIFFECertValidatorConfig_TrustDomain[];
}
/**
 * @generated from protobuf message envoy.extensions.transport_sockets.tls.v3.SPIFFECertValidatorConfig.TrustDomain
 */
export interface SPIFFECertValidatorConfig_TrustDomain {
    /**
     * Name of the trust domain, ``example.com``, ``foo.bar.gov`` for example.
     * Note that this must *not* have "spiffe://" prefix.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Specify a data source holding x.509 trust bundle used for validating incoming SVID(s) in this trust domain.
     *
     * @generated from protobuf field: envoy.config.core.v3.DataSource trust_bundle = 2;
     */
    trustBundle?: DataSource;
}
// @generated message type with reflection information, may provide speed optimized methods
class SPIFFECertValidatorConfig$Type extends MessageType<SPIFFECertValidatorConfig> {
    constructor() {
        super("envoy.extensions.transport_sockets.tls.v3.SPIFFECertValidatorConfig", [
            { no: 1, name: "trust_domains", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SPIFFECertValidatorConfig_TrustDomain, options: { "validate.rules": { repeated: { minItems: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<SPIFFECertValidatorConfig>): SPIFFECertValidatorConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.trustDomains = [];
        if (value !== undefined)
            reflectionMergePartial<SPIFFECertValidatorConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SPIFFECertValidatorConfig): SPIFFECertValidatorConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.extensions.transport_sockets.tls.v3.SPIFFECertValidatorConfig.TrustDomain trust_domains */ 1:
                    message.trustDomains.push(SPIFFECertValidatorConfig_TrustDomain.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: SPIFFECertValidatorConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.extensions.transport_sockets.tls.v3.SPIFFECertValidatorConfig.TrustDomain trust_domains = 1; */
        for (let i = 0; i < message.trustDomains.length; i++)
            SPIFFECertValidatorConfig_TrustDomain.internalBinaryWrite(message.trustDomains[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.transport_sockets.tls.v3.SPIFFECertValidatorConfig
 */
export const SPIFFECertValidatorConfig = new SPIFFECertValidatorConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SPIFFECertValidatorConfig_TrustDomain$Type extends MessageType<SPIFFECertValidatorConfig_TrustDomain> {
    constructor() {
        super("envoy.extensions.transport_sockets.tls.v3.SPIFFECertValidatorConfig.TrustDomain", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "trust_bundle", kind: "message", T: () => DataSource }
        ]);
    }
    create(value?: PartialMessage<SPIFFECertValidatorConfig_TrustDomain>): SPIFFECertValidatorConfig_TrustDomain {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        if (value !== undefined)
            reflectionMergePartial<SPIFFECertValidatorConfig_TrustDomain>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SPIFFECertValidatorConfig_TrustDomain): SPIFFECertValidatorConfig_TrustDomain {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* envoy.config.core.v3.DataSource trust_bundle */ 2:
                    message.trustBundle = DataSource.internalBinaryRead(reader, reader.uint32(), options, message.trustBundle);
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
    internalBinaryWrite(message: SPIFFECertValidatorConfig_TrustDomain, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* envoy.config.core.v3.DataSource trust_bundle = 2; */
        if (message.trustBundle)
            DataSource.internalBinaryWrite(message.trustBundle, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.transport_sockets.tls.v3.SPIFFECertValidatorConfig.TrustDomain
 */
export const SPIFFECertValidatorConfig_TrustDomain = new SPIFFECertValidatorConfig_TrustDomain$Type();
