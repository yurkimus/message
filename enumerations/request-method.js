/**
 * @see https://httpwg.org/specs/rfc9110.html#methods
 *
 * @type {typeof import('./request-method.js').RequestMethodEnum}
 */
export let RequestMethodEnum = new Map([
  ['GET', 'Get'],
  ['HEAD', 'Head'],
  ['POST', 'Post'],
  ['PUT', 'Put'],
  ['DELETE', 'Delete'],
  ['CONNECT', 'Connect'],
  ['OPTIONS', 'Options'],
  ['TRACE', 'Trace'],
  ['PATCH', 'Patch'],
  ['Get', 'GET'],
  ['Head', 'HEAD'],
  ['Post', 'POST'],
  ['Put', 'PUT'],
  ['Delete', 'DELETE'],
  ['Connect', 'CONNECT'],
  ['Options', 'OPTIONS'],
  ['Trace', 'TRACE'],
  ['Patch', 'PATCH'],
])
