import { isPlainObject } from './utils'

// xhr 的 send 方法传的参数，用于 put post 方法， head 和 get 会忽略该参数，传null
export function transformRequest (data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
