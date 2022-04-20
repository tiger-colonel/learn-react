import { useEffect } from "react"
import { Project } from "screens/project-list/list"
import { cleanObject } from "utils"
import { useHttp } from "utils/http"
import { useAsync } from "utils/use-async"

export const useProjects = (params?: Partial<Project>) => {
  const request = useHttp()
  const { run, ...result} = useAsync<Project[]>()
 
  useEffect(() => {
    run(request('projects', { data: cleanObject(params || {}) }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  return result
}

export const useAddProject = () => {
  const request = useHttp()
  const { run, ...asyncResult} = useAsync()

  const mutate = (params?: Partial<Project>) => {
    return run(request(`projects/${params?.personId}`, {
      data: params,
      method: 'POST'
    }))
  }

  return {
    mutate,
    ...asyncResult
  }
}

export const useEditProject = () => {
  const request = useHttp()
  const { run, ...asyncResult} = useAsync()

  const mutate = (params?: Partial<Project>) => {
    console.log('-----params-----', params);
    return run(request(`projects/${params?.id}`, {
      data: params,
      method: 'PATCH'
    }))
  }

  return {
    mutate,
    ...asyncResult
  }
}
