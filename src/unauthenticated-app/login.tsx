import { useAuth } from "context/auth-context";
import { Button, Form, Input } from "antd";
import styled from "@emotion/styled";
import { useAsync } from "utils/use-async";

export const LoginScreen = () => {
  const { login } = useAuth();
  const { run, isLoading } = useAsync();

  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    await run(login(values)).catch();
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name={"username"}>
        <Input placeholder="用户名" type="text" id="username" />
      </Form.Item>
      <Form.Item name={"password"}>
        <Input placeholder="密码" type="text" id="assword" />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType="submit" type="primary" loading={isLoading}>
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};

const LongButton = styled(Button)`
  width: 100%;
`;
