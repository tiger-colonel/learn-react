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
