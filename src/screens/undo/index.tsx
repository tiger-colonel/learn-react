import styled from "@emotion/styled";
import { Button, Card } from "antd";
import { useUndo } from "./reducer-hooks";
// import { useUndo } from "./hooks";

export const Test = () => {
  const [state, { undo, canUndo, redo, canRedo, set, reset }] = useUndo(0);
  const { present } = state;
  return (
    <Card>
      <p>点击了{state.present}次</p>
      <MarginButton onClick={() => set(present + 1)}>+</MarginButton>
      <MarginButton onClick={() => set(present - 1)}>-</MarginButton>
      <MarginButton onClick={undo} disabled={!canUndo}>
        undo
      </MarginButton>
      <MarginButton onClick={redo} disabled={!canRedo}>
        redo
      </MarginButton>
      <MarginButton onClick={() => reset(0)}>reset to 0</MarginButton>
    </Card>
  );
};

const MarginButton = styled(Button)`
  margin-right: 12px;
`;
