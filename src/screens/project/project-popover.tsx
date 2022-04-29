import { Button, Divider, List, Popover, Typography } from "antd"
import { useProjects } from "apis/screens/project"

export const ProjectPopover = () => {
  const { data: projects, isLoading} = useProjects()

  const pinProjects = projects?.filter(item => item.pin)

  const content = () => {
    return <div style={{width: '300px'}}>
      <Typography.Text type="secondary">收藏项目</Typography.Text>
      <List>
        {
          pinProjects?.map(project => (
            <List.Item key={project.id}>
              <List.Item.Meta title={project.name}></List.Item.Meta>
            </List.Item>
          ))
        }
      </List>
      <Divider></Divider>
      <Button type="primary">创建项目</Button>
    </div>
  }

  return <Popover placement="bottom" content={content}>
    项目
  </Popover>
}
