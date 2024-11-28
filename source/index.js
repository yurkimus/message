import { is } from '@yurkimus/types'

export let Methods = /** @type {const} */ ({
  Get: 'GET',
  Head: 'HEAD',
  Post: 'POST',
  Put: 'PUT',
  Delete: 'DELETE',
  Connect: 'CONNECT',
  Options: 'OPTIONS',
  Trace: 'TRACE',
  Patch: 'PATCH',
})

/**
 * @param {Request | Response} message
 */
export let media = message => {
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
export let body = message => {
  if (!['Request', 'Response'].some(kind => is(kind, message)))
    throw new TypeError(
      `Parameter 'message' must be on of: `
        + `'${['Request', 'Response'].join(', ')}'.`,
    )

  switch (media(message)) {
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
        `No handler found for media-type '${media(message)}'.`,
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
 * @returns {Promise<[HttpMessage, Awaited<ReturnType<typeof body>>]>}
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
    .then(([message, clone]) => [message, body(clone)])
    .then(Promise.all.bind(Promise))
}
