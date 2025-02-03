import { useSelector } from "react-redux";
import styled from "styled-components";
import Icon from "../components/Icon";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  background-color: #f5f5f5;
`;

// Dynamically Aligns Content (Left or Right)
const FlexItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: "flex-start";
  flex: 1;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
`;

const Count = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const IconContainer = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const Header = () => {
  const students = useSelector((state) => state.students.students);
  const totalStudents = students.length;
  const knownStudents = students.filter((student) => !student.isGuest).length;

  return (
    <HeaderContainer>
      <FlexItem>
        <Title>302 Science</Title>
        <IconContainer>
          <Icon name="user" size={30} />
        </IconContainer>
        <Count>
          {knownStudents}/{totalStudents}
        </Count>
      </FlexItem>
    </HeaderContainer>
  );
};

export default Header;
