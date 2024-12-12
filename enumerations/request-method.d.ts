export let RequestMethodEnum: Map<Methods | MethodTexts, Methods | MethodTexts>

export type Methods =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH'

export type MethodTexts =
  | 'Get'
  | 'Head'
  | 'Post'
  | 'Put'
  | 'Delete'
  | 'Connect'
  | 'Options'
  | 'Trace'
  | 'Patch'
