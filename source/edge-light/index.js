import {media} from "../index.js";

export * from "../index.js"

/**
 * Parse the body of HTTP-message
 */
export let body = message => {
  for (let property of ['text', 'json', 'formData']) {
    if (!(property in message && typeof message[property] === "function")) throw new TypeError(
      `Parameter 'message' must have ‘text’, ‘json’ and ‘formData’ methods.`
    )
  }

  switch (media(message)) {
    case '':
      return Promise.resolve(null)

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
  for (let property of ['clone']) {
    if (!(property in message && typeof message[property] === "function")) throw new TypeError(
      `Parameter ‘message’ must have ‘clone’ method.`
    )
  }

  return [message, message.clone()]
}

/**
 * Clone and read the body of HTTP-mesage
 */
export let read = message => {
  console.log('EdgeRuntime test')
  return Promise
    .resolve(message)
    .then(clone)
    .then(([message, clone]) => [message, body(clone)])
    .then(Promise.all.bind(Promise))
}
