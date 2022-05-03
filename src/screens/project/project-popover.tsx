import { Button, Divider, List, Popover, Typography } from "antd";
import { useProjects } from "apis/screens/project";
import { useDispatch } from "react-redux";
import { projectListActions } from "store/project-list.slice";

export const ProjectPopover = () => {
  const dispatch = useDispatch();
  const { data: projects } = useProjects();

  const pinProjects = projects?.filter((item) => item.pin);

  const content = () => {
    return (
      <div style={{ width: "300px" }}>
        <Typography.Text type="secondary">收藏项目</Typography.Text>
        <List>
          {pinProjects?.map((project) => (
            <List.Item key={project.id}>
              <List.Item.Meta title={project.name}></List.Item.Meta>
            </List.Item>
          ))}
        </List>
        <Divider></Divider>
        <Button
          type="primary"
          onClick={() => dispatch(projectListActions.openProjectModal())}
        >
          创建项目
        </Button>
      </div>
    );
  };

  return (
    <Popover placement="bottom" content={content}>
      项目
    </Popover>
  );
};
