import Icon from "./Icon";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 530px;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Icon name="loading" size={150} />
    </LoadingContainer>
  );
};

export default Loading;
