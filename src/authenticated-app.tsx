import { ProjectListScreen } from 'screens/project-list/'
import { useAuth } from 'context/auth-context';
import styled from '@emotion/styled';
import { Button, Dropdown, Menu } from 'antd';
import { Row } from 'components/lib';

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth()
  return (
    <Container>
      <PageHeader between={true}>
        <HeaderLeft gap={true}>
          <h3>Logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown overlay={
            <Menu>
              <Menu.Item key={'logout'}>
                <Button onClick={() => logout()} type="link">登出</Button>
              </Menu.Item>
            </Menu>
          }>
            <span style={{color: '#5468ff'}} onClick={e => e.preventDefault()}>
              Hi, {user?.name}
            </span>
          </Dropdown>
        </HeaderRight>
      </PageHeader>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`
const PageHeader = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`
const HeaderLeft = styled(Row)`
  display: flex;
  align-items: center;
`
const HeaderRight = styled.div`
  
`
const Main = styled.div`
  height: calc(100vh - 6rem)
`
