import type {
  Statuses,
  StatusTexts,
} from '../enumerations/response-status.d.ts'

interface ResponseStatus {
  (value: Statuses | StatusTexts): ResponseStatus

  new(value: Statuses | StatusTexts): ResponseStatus

  of(value: Statuses | StatusTexts): ResponseStatus

  has(value: Statuses | StatusTexts): boolean

  get(value: Statuses | StatusTexts): string | number

  readonly [Symbol.toStringTag]: 'ResponseStatus'
}

export function ResponseStatus(value: Statuses | StatusTexts): ResponseStatus
