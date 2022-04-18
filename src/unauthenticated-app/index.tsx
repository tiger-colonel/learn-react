import { Button, Card } from "antd"
import { useState } from "react"
import { LoginScreen } from "./login"
import { RegisterScreen } from "./register"
import styled from "@emotion/styled"

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false)
  return (
    <Container>
      <ShadowCard>
        {
          isRegister ? <RegisterScreen /> : <LoginScreen />
        }
        <Button type="link" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? '已' : '没'}有账号？请{isRegister ? '登录' : '注册'}
        </Button>
      </ShadowCard>
    </Container>
  )
}

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-top: 4rem;
`
