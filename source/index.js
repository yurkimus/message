const Parser = /** @type {const} */ ({
  'arrayBuffer': 'arrayBuffer',
  'blob': 'blob',
  'bytes': 'bytes',
  'formData': 'formData',
  'json': 'json',
  'text': 'text',
})

const ParserMimes = /** @type {const} */ ({
  [Parser['arrayBuffer']]: [],

  [Parser['blob']]: [],

  [Parser['bytes']]: [],

  [Parser['formData']]: [
    'multipart/form-data',
    'application/x-www-form-urlencoded',
  ],

  [Parser['json']]: [
    'application/json',
  ],

  [Parser['text']]: [
    'text/plain',
    'text/html',
  ],
})

const MimeParser = Object
  .entries(ParserMimes)
  .reduce(
    (object, [parser, mimes]) => {
      for (let mime of mimes)
        object[mime] = parser
      return object
    },
    {},
  )

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
export const readMessage = message => {
  let mime = message.headers
    .get('Content-Type')
    ?.split(';')
    ?.at(0)
    ?? ''

  if (Object.hasOwn(MimeParser, mime))
    return Promise.all([
      message,
      message[MimeParser[mime]](),
    ])

  return Promise.all([
    message,
    message.text(),
  ])
}

/**
 * @template {Response | Request} Message
 * @template Value
 *
 * @param {[Message, Value]} param
 *
 * @returns {Value}
 */
export const resolveMessage = ([message, value]) => {
  let ok = message?.ok ?? true

  switch (ok) {
    case true:
      return value

    default:
      switch (typeof value) {
        case 'bigint':
        case 'boolean':
        case 'number':
        case 'string':
          throw {
            status: message.status,
            statusText: message.statusText,
            message: value,
          }

        case 'symbol':
        case 'undefined':
        case 'function':
          throw {
            status: message.status,
            statusText: message.statusText,
            message: 'No message provided.',
          }

        default:
          throw {
            status: message.status,
            statusText: message.statusText,
            message: value?.message ?? 'No message provided.',
          }
      }
  }
}
