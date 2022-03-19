import Modal from "react-modal";

interface NewModalProps {
  isModalOpen: boolean;
  handleIsModalClose: () => void;
}

Modal.setAppElement("#root");

export function NewModal({ isModalOpen, handleIsModalClose }: NewModalProps) {
  return (
    <Modal isOpen={isModalOpen} onRequestClose={handleIsModalClose}>
      <h2>Nova Compra</h2>
    </Modal>
  );
}
