import { useState, useEffect } from "react";
import Icon from "./Icon";
import Loading from "./Loading";
import styled from "styled-components";
import PropTypes from "prop-types";
import { fetchGroups } from "../../api/mockApi";
import { useDispatch, useSelector } from "react-redux";
import { setGroups } from "../redux/studentSlice";

const Container = styled.div`
  padding: 12px 48px;
  background: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const Subtitle = styled.span`
  font-size: 16px;
  color: #666;
`;

const Description = styled.p`
  color: #666;
`;

const Button = styled.button`
  padding: 8px 16px;
  background: ${($background) => $background || "#4285f4"};
  color: #555;
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const GroupGrid = styled.div`
  height: 100%;
  max-height: 428px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`;

const IconButton = styled.button`
  padding: 8px;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const Card = styled.div`
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StudentCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background: #f9f9f9;
  }
`;

const StudentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StudentDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const StudentName = styled.div`
  font-weight: bold;
`;

const StudentCard = ({ student, onEdit }) => (
  <StudentCardWrapper>
    <StudentInfo>
      <Avatar>{student.charAt(0)}</Avatar>
      <StudentDetails>
        <StudentName>{student}</StudentName>
      </StudentDetails>
    </StudentInfo>
    <IconButton onClick={() => onEdit(student)}>
      <Icon name="delete" size={16} color="#4285f4" />
    </IconButton>
  </StudentCardWrapper>
);

StudentCard.propTypes = {
  student: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};

const GroupSection = ({ group, students, onEditStudent, onEditGroup }) => {
  return (
    <Card>
      <div>
        <Title>
          {group.name}{" "}
          <Subtitle>{`(${students.length} student${
            students.length === 1 ? "" : "s"
          })`}</Subtitle>
        </Title>
        <Description>{group.description}</Description>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <IconButton onClick={() => onEditGroup(group)}>
          <Icon name="gear" size={16} color="#4285f4" />
        </IconButton>
        <IconButton>
          <Icon name="user_add" size={16} color="#4285f4" />
        </IconButton>
      </div>
      <div>
        {students.map((student, idx) => (
          <StudentCard key={idx} student={student} onEdit={onEditStudent} />
        ))}
      </div>
    </Card>
  );
};

GroupSection.propTypes = {
  group: PropTypes.object.isRequired,
  students: PropTypes.array.isRequired,
  onEditStudent: PropTypes.func.isRequired,
  onEditGroup: PropTypes.func.isRequired,
};

const GroupManagement = () => {
  const [loading, setLoading] = useState(true);
  const groups = useSelector((state) => state.students.groups);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchGroups()
      .then((data) => {
        dispatch(setGroups(data.groups));
        setLoading(false); // Data has been loaded
      })
      .catch(() => setLoading(false)); // Hide loading even if there's an error
  }, [dispatch]);

  const handleEditStudent = (student) => {
    console.log("Edit student:", student);
  };

  const handleEditGroup = (group) => {
    console.log("Edit group:", group);
  };

  if (loading || groups.length === 0) return <Loading />;

  return (
    <Container>
      <Header>
        <div>
          <Title>Student Groups</Title>
          <Description>Manage student groups and assignments</Description>
        </div>
        <div>
          <Button>+ New Group</Button>
        </div>
      </Header>
      <GroupGrid>
        {groups.map((group, idx) => (
          <GroupSection
            key={idx}
            group={group}
            students={group.members || []}
            onEditStudent={handleEditStudent}
            onEditGroup={handleEditGroup}
          />
        ))}
      </GroupGrid>
    </Container>
  );
};

export default GroupManagement;
