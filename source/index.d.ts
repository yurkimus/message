export const Parsers: readonly ["arrayBuffer", "blob", "bytes", "formData", "json", "text"];
/**
 * @type {Record<typeof Parsers[number], string[]>}
 */
export const ParserMimes: Record<(typeof Parsers)[number], string[]>;
export function readMessage<Message extends Response | Request, Result>(message: Message): Promise<[Message, Result]>;
export function resolveMessage<Message extends Response | Request, Value>([message, value]: [Message, Value]): Value;
