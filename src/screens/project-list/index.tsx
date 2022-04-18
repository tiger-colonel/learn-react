/*
 * @Description: 
 * @Author: zhaocheng.zhai
 * @Date: 2022-04-18 10:11:23
 * @LastEditTime: 2022-04-18 13:04:26
 * @LastEditors: zhaocheng.zhai
 */
import React, { useState, useEffect } from 'react'
import { SearchPanel, User } from './search-panel'
import { List } from './list'
import { cleanObject, useMount, useDebounce } from '../../utils'
import * as qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => { 
  const [params, setParams] = useState({
    name: '', 
    personId: ''
  })

  const [users, setUsers] = useState<User[]>([])
  const debouncedParams = useDebounce(params, 2000)

  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParams))}`).then(async res => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [debouncedParams])

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async res => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  })

  return <div>
    <SearchPanel users={users} params={params} setParams={setParams} />
    <List users={users} list={list} />
  </div>
}
