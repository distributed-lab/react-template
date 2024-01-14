import { EventEmitter } from '@distributedlab/tools'

export enum BusEvents {
  error = 'error',
  warning = 'warning',
  success = 'success',
  info = 'info',
}

export type DefaultBusEventMap = {
  [BusEvents.success]: unknown
  [BusEvents.error]: unknown
  [BusEvents.warning]: unknown
  [BusEvents.info]: unknown
}

export const bus = new EventEmitter<DefaultBusEventMap>()
