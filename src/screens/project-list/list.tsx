/*
 * @Description:  
 * @Author: zhaocheng.zhai
 * @Date: 2022-04-18 10:11:30
 * @LastEditTime: 2022-04-18 12:00:53
 * @LastEditors: zhaocheng.zhai
 */
import { User } from "./search-panel";
interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  list: Project[];
  users: User[]
}

export const List: React.FC<ListProps> = ({list, users}) => {
  return <table>
    <thead>
      <tr>
        <th>名称</th>
        <th>负责人</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map(project => <tr key={project.personId}>
          <td>{project.name}</td>
          <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
        </tr>)
      }
    </tbody>
  </table>
}
