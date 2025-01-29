import { is } from '@yurkimus/types'

/**
 * Get the media-type of HTTP-message
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
 * Parse the body of HTTP-message
 */
export let body = message => {
  if (!['Request', 'Response'].some(kind => is(kind, message)))
    throw new TypeError(
      `Parameter 'message' must be on of: `
        + `'${['Request', 'Response'].join(', ')}'.`,
    )

  if (is('Null', message.body))
    return null

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
 * Clone HTTP-message
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
 * Clone and read the body of HTTP-mesage
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
