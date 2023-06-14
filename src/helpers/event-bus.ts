import { EventEmitter } from '@distributedlab/tools'

import { NotificationPayload } from '@/types'

enum EVENTS {
  error = 'error',
  warning = 'warning',
  success = 'success',
  info = 'info',
}

const isFunctionsEqual = (
  a: (...params: unknown[]) => unknown,
  b: (...params: unknown[]) => unknown,
) => {
  return (
    a.toString().replaceAll(' ', '').replaceAll('\n', '') ===
    b.toString().replaceAll(' ', '').replaceAll('\n', '')
  )
}

export class EventBus {
  readonly #emitter: EventEmitter<Record<EVENTS, unknown>>

  constructor() {
    this.#emitter = new EventEmitter<Record<EVENTS, unknown>>()
  }

  public get eventList(): Readonly<typeof EVENTS> {
    return EVENTS
  }

  on(eventName: EVENTS, handlerFn: (payload?: unknown) => void): void {
    if (
      this.#emitter.handlers[EVENTS.success]?.find(el => {
        return isFunctionsEqual(el, payload => {
          handlerFn(payload as NotificationPayload)
        })
      })
    ) {
      return
    }

    this.#emitter.on(eventName, handlerFn)
  }

  emit(eventName: EVENTS, payload: NotificationPayload): void {
    this.#emitter.emit(eventName, payload)
  }

  off(eventName: EVENTS, handlerFn: (payload: unknown) => void): void {
    this.#emitter.off(eventName, handlerFn)
  }

  success(payload: NotificationPayload): void {
    this.#emitter.emit(EVENTS.success, payload)
  }

  error(payload: NotificationPayload): void {
    this.#emitter.emit(EVENTS.error, payload)
  }

  warning(payload: NotificationPayload): void {
    this.#emitter.emit(EVENTS.warning, payload)
  }

  info(payload: NotificationPayload): void {
    this.#emitter.emit(EVENTS.info, payload)
  }
}

export const Bus = new EventBus()
