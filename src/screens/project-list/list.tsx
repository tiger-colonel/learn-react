/*
 * @Description:
 * @Author: zhaocheng.zhai
 * @Date: 2022-04-18 10:11:30
 * @LastEditTime: 2022-04-18 12:00:53
 * @LastEditors: zhaocheng.zhai
 */
import { Button, Table, TableProps } from "antd";
import { useEditProject } from "apis/screens/project";
import { Pin } from "components/pin";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { User } from "./search-panel";
export interface Project {
  id: number;
  name: string;
  personId: number;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps extends TableProps<Project> {
  users: User[];
  refresh?: () => void;
}

export const List: React.FC<ListProps> = ({ users, ...props }) => {
  const { mutate } = useEditProject();

  const pinProject = (id: number) => (pin: boolean) =>
    mutate({ id, pin }).then(props.refresh);
  const columns = [
    {
      title: <Pin checked={true} disabled={true} />,
      render(value: any, project: Project) {
        return (
          <Pin checked={project.pin} onCheckedChange={pinProject(project.id)} />
        );
      },
    },
    {
      title: "名称",
      render(value: any, project: Project) {
        return <Link to={String(project.id)}>{project.name}</Link>;
      },
    },
    {
      title: "部门",
      dataIndex: "organization",
    },
    {
      title: "负责人",
      render(value: any, project: Project) {
        return (
          <span>
            {users.find((user) => user.id === project.personId)?.name || "未知"}
          </span>
        );
      },
    },
    {
      title: "创建时间",
      render(value: any, project: Project) {
        return (
          <span>
            {project.created
              ? dayjs(project.created).format("YYYY-MM-DD")
              : "-"}
          </span>
        );
      },
    },
    {
      title: "操作",
      render(value: any, project: Project) {
        return (
          <>
            <Button type="link">新建</Button>
            <Button type="link">编辑</Button>
          </>
        );
      },
    },
  ];
  return <Table pagination={false} columns={columns} rowKey="id" {...props} />;
};
