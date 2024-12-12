export type StatusTexts =
  | 'Continue'
  | 'Switching Protocols'
  | 'Processing'
  | 'Early Hints'
  | 'OK'
  | 'Created'
  | 'Accepted'
  | 'Non-Authoritative Information'
  | 'No Content'
  | 'Reset Content'
  | 'Partial Content'
  | 'Multiple Choices'
  | 'Moved Permanently'
  | 'Found'
  | 'See Other'
  | 'Not Modified'
  | 'Use Proxy'
  | 'Temporary Redirect'
  | 'Permanent Redirect'
  | 'Bad Request'
  | 'Unauthorized'
  | 'Payment Required'
  | 'Forbidden'
  | 'Not Found'
  | 'Method Not Allowed'
  | 'Not Acceptable'
  | 'Proxy Authentication Required'
  | 'Request Timeout'
  | 'Conflict'
  | 'Gone'
  | 'Length Required'
  | 'Precondition Failed'
  | 'Content Too Large'
  | 'URI Too Long'
  | 'Unsupported Media Type'
  | 'Range Not Satisfiable'
  | 'Expectation Failed'
  | 'Misdirected Request'
  | 'Unprocessable Content'
  | 'Upgrade Required'
  | 'Internal Server Error'
  | 'Not Implemented'
  | 'Bad Gateway'
  | 'Service Unavailable'
  | 'Gateway Timeout'
  | 'HTTP Version Not Supported'

export type Statuses =
  | 100
  | 101
  | 102
  | 103
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 421
  | 422
  | 426
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505

export let ResponseStatusEnum: Map<
  StatusTexts | Statuses,
  StatusTexts | Statuses
>
