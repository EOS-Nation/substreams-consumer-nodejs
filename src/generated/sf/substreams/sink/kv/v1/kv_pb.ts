// @generated by protoc-gen-es v1.1.1 with parameter "target=ts"
// @generated from file sf/substreams/sink/kv/v1/kv.proto (package sf.substreams.sink.kv.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message sf.substreams.sink.kv.v1.KVOperations
 */
export class KVOperations extends Message<KVOperations> {
  /**
   * @generated from field: repeated sf.substreams.sink.kv.v1.KVOperation operations = 1;
   */
  operations: KVOperation[] = [];

  constructor(data?: PartialMessage<KVOperations>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.kv.v1.KVOperations";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "operations", kind: "message", T: KVOperation, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KVOperations {
    return new KVOperations().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KVOperations {
    return new KVOperations().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KVOperations {
    return new KVOperations().fromJsonString(jsonString, options);
  }

  static equals(a: KVOperations | PlainMessage<KVOperations> | undefined, b: KVOperations | PlainMessage<KVOperations> | undefined): boolean {
    return proto3.util.equals(KVOperations, a, b);
  }
}

/**
 * @generated from message sf.substreams.sink.kv.v1.KVOperation
 */
export class KVOperation extends Message<KVOperation> {
  /**
   * @generated from field: string key = 1;
   */
  key = "";

  /**
   * @generated from field: bytes value = 2;
   */
  value = new Uint8Array(0);

  /**
   * @generated from field: uint64 ordinal = 3;
   */
  ordinal = protoInt64.zero;

  /**
   * @generated from field: sf.substreams.sink.kv.v1.KVOperation.Type type = 4;
   */
  type = KVOperation_Type.UNSET;

  constructor(data?: PartialMessage<KVOperation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.kv.v1.KVOperation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "ordinal", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "type", kind: "enum", T: proto3.getEnumType(KVOperation_Type) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KVOperation {
    return new KVOperation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KVOperation {
    return new KVOperation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KVOperation {
    return new KVOperation().fromJsonString(jsonString, options);
  }

  static equals(a: KVOperation | PlainMessage<KVOperation> | undefined, b: KVOperation | PlainMessage<KVOperation> | undefined): boolean {
    return proto3.util.equals(KVOperation, a, b);
  }
}

/**
 * @generated from enum sf.substreams.sink.kv.v1.KVOperation.Type
 */
export enum KVOperation_Type {
  /**
   * Protobuf default should not be used, this is used so that the consume can ensure that the value was actually specified
   *
   * @generated from enum value: UNSET = 0;
   */
  UNSET = 0,

  /**
   * @generated from enum value: SET = 1;
   */
  SET = 1,

  /**
   * @generated from enum value: DELETE = 2;
   */
  DELETE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(KVOperation_Type)
proto3.util.setEnumType(KVOperation_Type, "sf.substreams.sink.kv.v1.KVOperation.Type", [
  { no: 0, name: "UNSET" },
  { no: 1, name: "SET" },
  { no: 2, name: "DELETE" },
]);

