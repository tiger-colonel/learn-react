/*
 * @Description: 
 * @Author: zhaocheng.zhai
 * @Date: 2022-04-18 15:09:37
 * @LastEditTime: 2022-04-18 16:11:28
 * @LastEditors: zhaocheng.zhai
 */
import { FormEvent } from "react"

const apiUrl = process.env.REACT_APP_API_URL

export const LoginScreen = () => {
  const login = (params: {username: string, password: string}) => {
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(async res => {
      if (res.ok) {
      }
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    login({username, password})
  }
  
  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">用户名</label>
      <input type="text" id="username" />
    </div>
    <div>
      <label htmlFor="username">密码</label>
      <input type="text" id="password" />
    </div>
    <button type="submit">登录</button>
  </form>
}
