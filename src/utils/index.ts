import { useEffect, useRef, useState } from "react"

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

export const useDocumentTitle = (title: string, keepOnUnmount: boolean = true) => {
  const oldTitle = useRef(document.title).current

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle
      }
    }
  }, [keepOnUnmount, oldTitle])
}

export const resetRoute = () => window.location.href = window.location.origin

/**
 * 返回组件的挂载状态，如果还没有挂载或者已经卸载，返回false，反之，返回true
 */
export const useMountedRef = () => {
  const mountedRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  return mountedRef
}
