import { useAuth } from "context/auth-context"
import { FormEvent } from "react"

export const LoginScreen = () => {
  const {login, user} = useAuth()

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
