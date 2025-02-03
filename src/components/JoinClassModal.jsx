import styled from "styled-components";
import { QRCodeCanvas } from "qrcode.react";
import PropTypes from "prop-types";
import CopyButton from "./CopyButton";
import Modal from "./Modal";
import Icon from "./Icon";

const ModalContentWrapper = styled.div`
  width: 100%;
  padding: 32px;
  background: #f5f5f5;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  position: relative;
  margin-bottom: 10px;
  padding-left: 4px;

  &:hover {
    color: #000;
  }
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  align-self: flex-start;
  padding: 10px 8px 8px 8px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px 8px;
  font-size: 16px;
  font-weight: bold;
  color: #444;
  white-space: nowrap;
  max-width: 340px;
  flex-wrap: wrap;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-right: 20px;
`;

const InfoText = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const QRContainer = styled.div`
  margin-top: 10px;
  padding: 16px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const VersionText = styled.p`
  font-size: 12px;
  color: #777;
  margin-top: 15px;
  align-self: center;
`;

const JoinClassModal = ({
  classId = "X58E9647",
  className = "302 Science",
  isOpen,
  onBack,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} width="524px" height="674px">
      <ModalContentWrapper>
        <Breadcrumb onClick={onBack}>
          <Icon name={"arrow_left"} />
          <span>Back to Class List</span>
        </Breadcrumb>
        <Title>Join {className}</Title>

        <InfoContainer>
          <InfoItem>
            <InfoText>ID: {classId}</InfoText> <CopyButton text={classId} />
          </InfoItem>
          <InfoItem>
            <InfoText>Link</InfoText>
            <CopyButton text={`https://classroom.join/${classId}`} />
          </InfoItem>
        </InfoContainer>

        <QRContainer>
          <QRCodeCanvas
            value={`https://classroom.join/${classId}`}
            size={400}
          />
        </QRContainer>

        <VersionText>Version 1.1.7</VersionText>
      </ModalContentWrapper>
    </Modal>
  );
};

JoinClassModal.propTypes = {
  classId: PropTypes.string,
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default JoinClassModal;
