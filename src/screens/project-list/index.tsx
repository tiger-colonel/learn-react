/*
 * @Description: 
 * @Author: zhaocheng.zhai
 * @Date: 2022-04-18 10:11:23
 * @LastEditTime: 2022-04-18 13:04:26
 * @LastEditors: zhaocheng.zhai
 */
import { useState, useEffect } from 'react'
import { SearchPanel, User } from './search-panel'
import { List } from './list'
import { cleanObject, useMount, useDebounce } from '../../utils'
import { useHttp } from '../../utils/http'
import styled from '@emotion/styled'

export const ProjectListScreen = () => { 
  const [params, setParams] = useState({
    name: '', 
    personId: ''
  })

  const [users, setUsers] = useState<User[]>([])
  const debouncedParams = useDebounce(params, 500)

  const [list, setList] = useState([])

  const request = useHttp()

  useEffect(() => {
    request('projects', { data: cleanObject(debouncedParams) }).then(setList)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedParams])

  useMount(() => {
    request('users').then(setUsers)
  })

  return (
    <Container>
      <h2>项目列表</h2>
      <SearchPanel users={users} params={params} setParams={setParams} />
      <List users={users} list={list} />
    </Container>
  )
}

const Container = styled.div`
  padding: 3.2rem;
`
