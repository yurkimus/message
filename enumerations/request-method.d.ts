export type MethodTexts =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH'

export type Methods =
  | 'Get'
  | 'Head'
  | 'Post'
  | 'Put'
  | 'Delete'
  | 'Connect'
  | 'Options'
  | 'Trace'
  | 'Patch'

export let RequestMethodEnum: Map<
  MethodTexts | Methods,
  MethodTexts | Methods
>
