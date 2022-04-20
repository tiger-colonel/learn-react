import { SearchPanel } from './search-panel'
import { List } from './list'
import { useDebounce, useDocumentTitle } from '../../utils'
import styled from '@emotion/styled'
import { Typography } from 'antd'
import { useProjects } from 'apis/screens/project'
import { useUsers } from 'apis/screens/users'
import { useProjectParams } from './utils'

export const ProjectListScreen = () => { 
  const [params, setSearchParams] = useProjectParams()

  const { error, isLoading, data: list, retry} = useProjects(useDebounce(params, 500))
  const { data: users} = useUsers()

  useDocumentTitle('项目列表', false)

  return (
    <Container>
      <h2>项目列表</h2>
      <SearchPanel users={users || []} params={params} setParams={setSearchParams} />
      {error ? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null}
      <List refresh={retry} users={users || []} loading={isLoading} dataSource={list || []}/>
    </Container>
  )
}

const Container = styled.div`
  padding: 3.2rem;
`
