import { useState } from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { useDebounce } from '../../utils'
import styled from '@emotion/styled'
import { Typography } from 'antd'
import { useProjects } from 'apis/screens/project'
import { useUsers } from 'apis/screens/users'

export const ProjectListScreen = () => { 
  const [params, setParams] = useState({
    name: '', 
    personId: ''
  })

  const debouncedParams = useDebounce(params, 500)
  const { error, isLoading, data: list} = useProjects(debouncedParams)
  const { data: users} = useUsers()

  return (
    <Container>
      <h2>项目列表</h2>
      <SearchPanel users={users || []} params={params} setParams={setParams} />
      {error ? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null}
      <List users={users || []} loading={isLoading} dataSource={list || []}/>
    </Container>
  )
}

const Container = styled.div`
  padding: 3.2rem;
`
