import { is } from '@yurkimus/types'

/**
 * @param {Request | Response} message
 */
export let mediaType = message => {
  if (!['Request', 'Response'].some(kind => is(kind, message)))
    throw new TypeError(
      `Parameter 'message' must be on of: `
        + `'${['Request', 'Response'].join(', ')}'.`,
    )

  return message.headers
    .get('Content-Type')
    ?.split(';')
    ?.at(0)
    ?? ''
}

/**
 * @param {Request | Response} message
 *
 * @returns {Promise<string | FormData | object | any[]>}
 */
export let readBody = message => {
  if (!['Request', 'Response'].some(kind => is(kind, message)))
    throw new TypeError(
      `Parameter 'message' must be on of: `
        + `'${['Request', 'Response'].join(', ')}'.`,
    )

  switch (mediaType(message)) {
    case '':
      return null

    case 'text/plain':
      return message.text()

    case 'application/json':
      return message.json()

    case 'multipart/form-data':
    case 'application/x-www-form-urlencoded':
      return message.formData()

    default:
      throw new TypeError(
        `No handler found for media-type '${mediaType(message)}'.`,
      )
  }
}

/**
 * @template {Request | Response} HttpMessage
 *
 * @param {HttpMessage} message
 *
 * @returns {[message: HttpMessage, clone: HttpMessage]}
 */
export let clone = message => {
  if (!['Request', 'Response'].some(kind => is(kind, message)))
    throw new TypeError(
      `Parameter 'message' must be on of: `
        + `'${['Request', 'Response'].join(', ')}'.`,
    )

  return [message, message.clone()]
}

/**
 * @template {Request | Response} HttpMessage
 *
 * @param {HttpMessage} message
 *
 * @returns {Promise<[HttpMessage, Awaited<ReturnType<typeof readBody>>]>}
 */
export let read = message => {
  if (!['Request', 'Response'].some(kind => is(kind, message)))
    throw new TypeError(
      `Parameter 'message' must be on of: `
        + `'${['Request', 'Response'].join(', ')}'.`,
    )

  return Promise
    .resolve(message)
    .then(clone)
    .then(([message, clone]) => [message, readBody(clone)])
    .then(Promise.all.bind(Promise))
}
