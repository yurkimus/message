export let Methods: {
  Get: 'GET'
  Head: 'HEAD'
  Post: 'POST'
  Put: 'PUT'
  Delete: 'DELETE'
  Connect: 'CONNECT'
  Options: 'OPTIONS'
  Trace: 'TRACE'
  Patch: 'PATCH'
}

export let media: <
  Message extends Request | Response,
>(
  message: Message,
) => string

export let body: <
  Message extends Request | Response,
  Body extends null | string | any[] | object | FormData,
>(
  message: Message,
) => Promise<Body>

export let clone: <
  Message extends Request | Response,
>(message: Message) => [Message, Message]

export let read: <
  Message extends Request | Response,
>(message: Message) => Promise<[Message, Awaited<ReturnType<typeof body>>]>
