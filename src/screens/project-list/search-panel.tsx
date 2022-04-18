/*
 * @Description: 
 * @Author: zhaocheng.zhai
 * @Date: 2022-04-18 10:04:57
 * @LastEditTime: 2022-04-18 17:13:54
 * @LastEditors: zhaocheng.zhai
 */
export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  origanization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  params: {
    name: string;
    personId: string;
  };
  setParams: (params: SearchPanelProps['params']) => void;
}

export const SearchPanel: React.FC<SearchPanelProps> = (props) => {
  const {users, params, setParams} = props;

  return (
    <form>
      <div>
        <input type="text" value={params.name} onChange={e => setParams({
          ...params,
          name: e.target.value
        })}/>
        <select value={params.personId} onChange={e => setParams({
          ...params,
          personId: e.target.value
        })}>
          <option value="">负责人</option>
          {
            users.map(user => <option key={user.id} value={user?.id}>{user?.name}</option>)
          }
        </select>
      </div>
    </form>
  )
}
