/*
 * @Description: 
 * @Author: zhaocheng.zhai
 * @Date: 2022-04-18 10:13:14
 * @LastEditTime: 2022-04-18 13:06:07
 * @LastEditors: zhaocheng.zhai
 */

import { useEffect, useState } from "react"

type targetObject = {
  [key: string]: any
}

const isFalsy = (value: unknown) => value === 0 ? true : !!value

export const cleanObject = (object: targetObject) => {
  const res = {...object}

  Object.keys(object).forEach(key => {
    const value = object[key]
    if (isFalsy(value)) delete res[key]
  })

  return res
}

export const useDebounce = <V>(value: V, delay?: number) => {
   const [debounceValue, setDebounceValue] = useState(value)

   useEffect(() => {
     const timeout = setTimeout(() => {
       setDebounceValue(value)
     }, delay);
     return () => clearTimeout(timeout)
   }, [value, delay])

   return debounceValue
}

export const useMount = (cb: () => void) => {
  useEffect(() => {cb()}, [cb])
}
