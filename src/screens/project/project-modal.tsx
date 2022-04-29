import { Modal } from "antd"

interface ProjectModalProps {
  visible: boolean
  setVisible: (visible: boolean) => void
}

export const ProjectModal: React.FC<ProjectModalProps> = (props) => {
  return (
    <Modal visible={props.visible} onCancel={() => props.setVisible(false)} closable={true}>
      123
    </Modal>
  )
}
