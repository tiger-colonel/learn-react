import { useAuth } from "context/auth-context"
import { Button, Form, Input } from 'antd'

import styled from "@emotion/styled"

export const LoginScreen = () => {
  const {login} = useAuth()

  const handleSubmit = (values: {username: string, password: string}) => {
    login(values)
  }

  return <Form onFinish={handleSubmit}>
    <Form.Item name={'username'}>
      <Input placeholder="用户名" type="text" id="username" />
    </Form.Item>
    <Form.Item name={'password'}>
      <Input placeholder="密码" type="text" id="assword" />
    </Form.Item>
    <Form.Item>
      <LongButton htmlType="submit" type="primary">登录</LongButton>
    </Form.Item>
  </Form>
}

const LongButton = styled(Button)`
  width: 100%;
`
