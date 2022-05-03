import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  projectListActions,
  selectProjectModalOpen,
} from "store/project-list.slice";

interface ProjectModalProps {
  visible?: boolean;
  setVisible?: (visible: boolean) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = (props) => {
  const dispatch = useDispatch();
  const projectModalOpen = useSelector(selectProjectModalOpen);

  return (
    <Modal
      visible={projectModalOpen}
      onCancel={() => dispatch(projectListActions.closeProjectModal())}
      closable={true}
    >
      123
    </Modal>
  );
};
