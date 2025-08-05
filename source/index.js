export var Parsers = /** @type {const} */ ([
  'arrayBuffer',
  'blob',
  'bytes',
  'formData',
  'json',
  'text',
])

/**
 * @type {Record<typeof Parsers[number], string[]>}
 */
export var ParserMimes = {
  'arrayBuffer': [],

  'blob': [],

  'bytes': [],

  'formData': [
    'multipart/form-data',
    'application/x-www-form-urlencoded',
  ],

  'json': [
    'application/json',
  ],

  'text': [
    'text/plain',
    'text/html',
  ],
}

/**
 * Clone and read the body of HTTP-mesage
 *
 * @template {Response | Request} Message
 * @template Result
 *
 * @param {Message} message
 *
 * @returns {Promise<[Message, Result]>}
 */
export var readMessage = message => {
  let mime = message.headers.get('Content-Type')?.split(';')?.at(0) ?? ''

  for (let parser of Parsers)
    if (ParserMimes[parser].some(x => mime.includes(x)))
      return Promise.all([message, message[parser]()])

  return Promise.all([message, message.text()])
}

/**
 * @template {Response | Request} Message
 * @template Value
 *
 * @param {[Message, Value]} param
 *
 * @returns {Value}
 */
export var resolveMessage = ([message, value]) => {
  let ok = message?.ok ?? true

  switch (ok) {
    case true:
      return value

    default:
      throw {
        status: message.status,
        statusText: message.statusText,
        message: value?.message ?? value ?? '',
      }
  }
}
