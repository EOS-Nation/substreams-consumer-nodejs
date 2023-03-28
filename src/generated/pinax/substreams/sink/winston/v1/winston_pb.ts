// @generated by protoc-gen-es v1.1.1 with parameter "target=ts"
// @generated from file pinax/substreams/sink/winston/v1/winston.proto (package pinax.substreams.sink.winston.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Each level is given a specific integer priority.
 * The higher the priority the more important the message is considered to be,
 * and the lower the corresponding integer priority.
 * For example, as specified exactly in RFC5424 the syslog levels are prioritized from 0 to 7 (highest to lowest).
 *
 * @generated from enum pinax.substreams.sink.winston.v1.LoggingLevels
 */
export enum LoggingLevels {
  /**
   * UNSPECIFIED = 0; // Unspecified: default value
   *
   * Emergency: system is unusable
   *
   * @generated from enum value: EMERG = 0;
   */
  EMERG = 0,

  /**
   * Alert: action must be taken immediately
   *
   * @generated from enum value: ALERT = 1;
   */
  ALERT = 1,

  /**
   * Critical: critical conditions
   *
   * @generated from enum value: CRIT = 2;
   */
  CRIT = 2,

  /**
   * Error: error conditions
   *
   * @generated from enum value: ERROR = 3;
   */
  ERROR = 3,

  /**
   * Warning: warning conditions
   *
   * @generated from enum value: WARNING = 4;
   */
  WARNING = 4,

  /**
   * Notice: normal but significant condition
   *
   * @generated from enum value: NOTICE = 5;
   */
  NOTICE = 5,

  /**
   * Informational: informational messages
   *
   * @generated from enum value: INFO = 6;
   */
  INFO = 6,

  /**
   * Debug: debug-level messages
   *
   * @generated from enum value: DEBUG = 7;
   */
  DEBUG = 7,
}
// Retrieve enum metadata with: proto3.getEnumType(LoggingLevels)
proto3.util.setEnumType(LoggingLevels, "pinax.substreams.sink.winston.v1.LoggingLevels", [
  { no: 0, name: "EMERG" },
  { no: 1, name: "ALERT" },
  { no: 2, name: "CRIT" },
  { no: 3, name: "ERROR" },
  { no: 4, name: "WARNING" },
  { no: 5, name: "NOTICE" },
  { no: 6, name: "INFO" },
  { no: 7, name: "DEBUG" },
]);

/**
 * Vector of Winston Logging messages
 *
 * @generated from message pinax.substreams.sink.winston.v1.LoggerOperations
 */
export class LoggerOperations extends Message<LoggerOperations> {
  /**
   * @generated from field: repeated pinax.substreams.sink.winston.v1.LoggerOperation operations = 1;
   */
  operations: LoggerOperation[] = [];

  constructor(data?: PartialMessage<LoggerOperations>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pinax.substreams.sink.winston.v1.LoggerOperations";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "operations", kind: "message", T: LoggerOperation, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoggerOperations {
    return new LoggerOperations().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoggerOperations {
    return new LoggerOperations().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoggerOperations {
    return new LoggerOperations().fromJsonString(jsonString, options);
  }

  static equals(a: LoggerOperations | PlainMessage<LoggerOperations> | undefined, b: LoggerOperations | PlainMessage<LoggerOperations> | undefined): boolean {
    return proto3.util.equals(LoggerOperations, a, b);
  }
}

/**
 * @generated from message pinax.substreams.sink.winston.v1.LoggerOperation
 */
export class LoggerOperation extends Message<LoggerOperation> {
  /**
   * @generated from field: string service = 1;
   */
  service = "";

  /**
   * @generated from field: pinax.substreams.sink.winston.v1.LoggingLevels level = 2;
   */
  level = LoggingLevels.EMERG;

  /**
   * @generated from field: string message = 3;
   */
  message = "";

  /**
   * @generated from field: map<string, string> meta = 4;
   */
  meta: { [key: string]: string } = {};

  constructor(data?: PartialMessage<LoggerOperation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pinax.substreams.sink.winston.v1.LoggerOperation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "level", kind: "enum", T: proto3.getEnumType(LoggingLevels) },
    { no: 3, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoggerOperation {
    return new LoggerOperation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoggerOperation {
    return new LoggerOperation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoggerOperation {
    return new LoggerOperation().fromJsonString(jsonString, options);
  }

  static equals(a: LoggerOperation | PlainMessage<LoggerOperation> | undefined, b: LoggerOperation | PlainMessage<LoggerOperation> | undefined): boolean {
    return proto3.util.equals(LoggerOperation, a, b);
  }
}

