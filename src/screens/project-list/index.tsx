import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useDebounce, useDocumentTitle } from "../../utils";
import styled from "@emotion/styled";
import { Button, Typography } from "antd";
import { useProjects } from "apis/screens/project";
import { useUsers } from "apis/screens/users";
import { useProjectParams } from "./utils";
import { Test } from "screens/undo";
import { useDispatch } from "react-redux";
import { projectListActions } from "../../store/project-list.slice";

export const ProjectListScreen = () => {
  const dispatch = useDispatch();
  const [params, setSearchParams] = useProjectParams();

  const {
    error,
    isLoading,
    data: list,
    retry,
  } = useProjects(useDebounce(params, 500));
  const { data: users } = useUsers();

  useDocumentTitle("项目列表", false);

  return (
    <>
      <Test />
      <Container>
        <h2>项目列表</h2>
        <Button
          type="link"
          onClick={() => dispatch(projectListActions.openProjectModal())}
        >
          新建
        </Button>
        <SearchPanel
          users={users || []}
          params={params}
          setParams={setSearchParams}
        />
        {error ? (
          <Typography.Text type={"danger"}>{error.message}</Typography.Text>
        ) : null}
        <List
          refresh={retry}
          users={users || []}
          loading={isLoading}
          dataSource={list || []}
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
