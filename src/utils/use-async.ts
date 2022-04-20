import { useState } from "react"

type Stat = 'idle' | 'loading' | 'error' | 'success'

interface State<D> {
  error: Error | null
  data: D | null
  stat: Stat
}

const defaultInitialState: State<null> = {
  stat: 'idle',
  data: null,
  error: null
}

export const useAsync = <D>(initialState?: State<D>) => {
  const [state, setState] = useState({
    ...defaultInitialState,
    ...initialState
  })

  const setData = (data: D) => setState({
    data,
    stat: 'success',
    error: null
  })

  const setError = (error: Error) => setState({
    data: null,
    stat: 'error',
    error
  })

  const [retry, setRetry] = useState(() => () => {})

  const run = (promise: Promise<D>, runConfig?: { retry: () => Promise<D> }) => {
    if (!promise || !promise.then) {
      throw new Error('请传入 Promise 类型数据')
    }

    setRetry(() => () => {
      if (runConfig?.retry) {
        run(runConfig?.retry(), runConfig)
      }
    })

    setState({...state, stat: 'loading'})

    return promise.then(data => {
      setData(data)
      return data
    }).catch(err => {
      setError(err)
      return Promise.reject(err)
    })
  }

  return {
    isIdle: state.stat === 'idle',
    isLoading: state.stat === 'loading',
    isError: state.stat === 'error',
    isSuccess: state.stat === 'success',
    run,
    retry,
    setData,
    setError,
    ...state
  }
}
