import { useEffect } from "react";
import { User } from "screens/project-list/search-panel";
import { cleanObject } from "utils";
import { useHttp } from "utils/http";
import { useAsync } from "utils/use-async";

export const useUsers = (params?: Partial<User>) => {
  const request = useHttp();
  const { run, ...result } = useAsync<User[]>();

  useEffect(() => {
    run(request("users", { data: cleanObject(params || {}) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return result;
};
