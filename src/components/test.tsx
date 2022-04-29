import styled from "@emotion/styled"
import { Button, Card } from "antd"

// const useUndo = (num: number) => {
//   return {

//   }
// }

export const Test = () => {
  // const {
  //   countState, 
  //   {
  //     set: setCount,
  //     reset: 
  //   }
  // } = useUndo(0)
  return (
    <Card>
      <p>点击了{}次</p>
      <MarginButton>+</MarginButton>
      <MarginButton>-</MarginButton>
      <MarginButton>undo</MarginButton>
      <MarginButton>redo</MarginButton>
      <MarginButton>reset to 0</MarginButton>
    </Card>
  )
}

const MarginButton = styled(Button)`
  margin-right: 12px;
`

