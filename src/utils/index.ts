import { useEffect, useState } from "react"

const isFalsy = (value: unknown) => value === 0 ? true : !value

const isVoid = (value: unknown) => value === undefined || value === null || value === ''

export const cleanObject = (object: { [key: string]: unknown }) => {
  const res = {...object}

  Object.keys(object).forEach(key => {
    const value = object[key]
    if (isVoid(value)) {
      delete res[key]
    }
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => cb(), [])
}
