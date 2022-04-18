/*
 * @Description:  
 * @Author: zhaocheng.zhai
 * @Date: 2022-04-18 10:11:30
 * @LastEditTime: 2022-04-18 12:00:53
 * @LastEditors: zhaocheng.zhai
 */
import { Table } from "antd";
import dayjs from "dayjs";
import { User } from "./search-panel";
interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps {
  list: Project[];
  users: User[]
}

export const List: React.FC<ListProps> = ({list, users}) => {
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '部门',
      dataIndex: 'organization',
      key: 'organization'
    },
    {
      title: '负责人',
      key: 'people',
      // dataIndex: 'name'
      render(value: any, project: any) {
        return <span>{users.find(user => user.id === project.personId)?.name || '未知'}</span>
      }
    },
    {
      title: '创建时间',
      render(value: any, project: any) {
        return <span>{project.created ? dayjs(project.created).format('YYYY-MM-DD') : '-'}</span>
      }
    }
  ]
  return (
    <Table
      pagination={false}
      columns={columns}
      dataSource={list}
    />
  )
}
