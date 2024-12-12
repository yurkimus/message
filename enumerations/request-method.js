/** @type {import('./request-method.d.ts').MethodTexts[]} */
export let methodTexts = [
  'GET',
  'HEAD',
  'POST',
  'PUT',
  'DELETE',
  'CONNECT',
  'OPTIONS',
  'TRACE',
  'PATCH',
]

/** @type {import('./request-method.d.ts').Methods[]} */
export let methods = [
  'Get',
  'Head',
  'Post',
  'Put',
  'Delete',
  'Connect',
  'Options',
  'Trace',
  'Patch',
]

/** @type {typeof import('./request-method.d.ts').RequestMethodEnum} */
export let RequestMethodEnum = new Map()

for (let index = 0; index < methodTexts.length; index++)
  RequestMethodEnum
    .set(methodTexts.at(index), methods.at(index))
    .set(methods.at(index), methodTexts.at(index))
