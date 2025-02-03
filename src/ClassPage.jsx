import { useState } from "react";
import styled from "styled-components";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import JoinClassModal from "./components/JoinClassModal";

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
`;

const ModalContainer = styled.div`
  display: flex;
  gap: 16px;
  position: relative;
`;

const ClassPage = () => {
  const [isMainModalOpen, setIsMainModalOpen] = useState(true);
  const [isJoinClassModalOpen, setIsJoinClassModalOpen] = useState(true);

  return (
    <Overlay>
      <ModalContainer>
        {/* Main App Modal */}
        <Modal
          isOpen={isMainModalOpen}
          onClose={() => setIsMainModalOpen(false)}
          height="674px"
        >
          <Header />
          <Tabs />
        </Modal>

        {/* Join Class Modal */}
        {isJoinClassModalOpen && (
          <JoinClassModal
            isOpen={isJoinClassModalOpen}
            onBack={() => setIsJoinClassModalOpen(false)}
            onClose={() => setIsJoinClassModalOpen(false)}
          />
        )}
      </ModalContainer>
    </Overlay>
  );
};

export default ClassPage;
