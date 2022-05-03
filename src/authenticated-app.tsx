import { ProjectListScreen } from "screens/project-list/";
import { ProjectScreen } from "screens/project";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import { Button, Dropdown, Menu } from "antd";
import { Row } from "components/lib";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { resetRoute } from "utils";
import { ProjectModal } from "screens/project/project-modal";
import { ProjectPopover } from "screens/project/project-popover";

export const AuthenticatedApp = () => {
  return (
    <Container>
      <PageHeader />
      {/* <Test></Test> */}
      <Main>
        <Router>
          <Routes>
            <Route path={"/projects"} element={<ProjectListScreen />} />
            <Route
              path={"/projects/:projectId/*"}
              element={<ProjectScreen />}
            />
            <Route index element={<Navigate to={"/projects"} />} />
          </Routes>
        </Router>
      </Main>
      <ProjectModal />
    </Container>
  );
};

const PageHeader = () => {
  const { logout, user } = useAuth();

  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <Button type="link" onClick={resetRoute}>
          Logo
        </Button>
        <ProjectPopover />
        <span>用户</span>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key={"logout"}>
                <Button onClick={() => logout()} type="link">
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <span
            style={{ color: "#5468ff" }}
            onClick={(e) => e.preventDefault()}
          >
            Hi, {user?.name}
          </span>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div``;
const Main = styled.div`
  height: calc(100vh - 6rem);
`;
