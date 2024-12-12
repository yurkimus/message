import { is } from '@yurkimus/types'
import { ResponseStatusEnum } from '../enumerations/response-status.js'

export function ResponseStatus(value) {
  if (!(this instanceof ResponseStatus))
    return new ResponseStatus(value)

  if (is('Undefined', value))
    throw new TypeError(`Parameter 'value' must be provided.`)

  if (!ResponseStatus.has(value))
    throw new TypeError(
      `Parameter 'value' must be listed in 'ResponseStatuses' enumeration.`,
    )

  this.statusText = ResponseStatus
    .get(value)
    .at(0)

  this.status = ResponseStatus
    .get(value)
    .at(1)
}

ResponseStatus.of = ResponseStatus

ResponseStatus.has = ResponseStatusEnum
  .has
  .bind(ResponseStatusEnum)

ResponseStatus.get = value => {
  if (!ResponseStatusEnum.has(value))
    throw new TypeError(
      `Parameter 'value' must be listed in 'ResponseStatuses' enumeration.`,
    )

  return ResponseStatusEnum.get(value)
}

ResponseStatus.prototype[Symbol.toStringTag] = 'ResponseStatus'
