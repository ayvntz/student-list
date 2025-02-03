import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setStudents,
  incrementPerformance,
  decrementPerformance,
} from "../redux/studentSlice";
import { fetchStudents } from "../../api/mockApi";
import Icon from "../components/Icon";
import Loading from "../components/Loading";

// Grid Container for Student Cards
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 columns */
  gap: 15px;
  padding: 24px 48px;
  height: 100%;
  max-height: 530px;
  overflow-y: auto;
  background-color: #ffffff;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-height: 530px;
  text-align: center;
  color: #888;
  font-size: 18px;
  font-weight: 500;
  background: #ffffff;
`;

// Student Card (Adjusts for Guest)
const Card = styled.div`
  display: grid;
  grid-template-rows: 25% 50% 25%;
  align-items: center;
  justify-items: center;
  border-radius: 8px;
  height: 140px;
  width: 140px;
  text-align: center;
  padding: 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  background: "#ffffff";
  color: ${({ $isGuest }) => ($isGuest ? "#d3d3d3" : "#000")};
  border: 2px solid ${({ $isGuest }) => ($isGuest ? "#d3d3d3" : "#4285f4")};
  opacity: ${({ $isGuest }) => ($isGuest ? "1" : "1")};
`;

// Number at the Top
const Number = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ $isGuest }) => ($isGuest ? "#d3d3d3" : "#4285f4")};
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #ffffff;
`;

// Student Name in the Center
const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

// Score Buttons at the Bottom
const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-top: 2px solid ${({ $isGuest }) => ($isGuest ? "#d3d3d3" : "#4285f4")};
`;

// Buttons for Scoring (Disable if Guest)
const Button = styled.button`
  background-color: ${({ $negative }) => ($negative ? "#f44336" : "#4caf50")};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;
  width: 32px;
  height: 24px;
  background: ${({ $disabled, $negative }) =>
    $disabled ? "#d3d3d3" : $negative ? "#f44336" : "#4caf50"};

  &:hover {
    background-color: ${({ $negative, $disabled }) =>
      $disabled ? "#d3d3d3" : $negative ? "#d32f2f" : "#388e3c"};
  }
`;

const Score = styled.span`
  font-size: 20px;
  font-weight: 500;
  min-width: 20px;
  text-align: center;
`;

const StudentList = () => {
  const [loading, setLoading] = useState(true);
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchStudents()
      .then((data) => {
        dispatch(setStudents(data.students));
        setLoading(false); // Data has been loaded
      })
      .catch(() => setLoading(false)); // Hide loading even if there's an error
  }, [dispatch]);

  if (loading) return <Loading />;

  if (students.length === 0) {
    return (
      <EmptyState>
        <Icon name="user" size={40} color="#555" />
        <p>No students available</p>
      </EmptyState>
    );
  }

  return (
    <Container>
      {students.map((student, index) => (
        <Card key={student.id} $isGuest={student.isGuest}>
          <Number $isGuest={student.isGuest}>
            {index < 9 ? `0${index + 1}` : index + 1}
          </Number>
          <Name>{student.isGuest ? "Guest" : student.name}</Name>
          <Buttons $isGuest={student.isGuest}>
            <Button
              $negative
              $disabled={student.isGuest || student.performance === 0}
              onClick={() =>
                !student.isGuest && dispatch(decrementPerformance(student.id))
              }
            >
              -1
            </Button>
            <Score>{student.performance}</Score>
            <Button
              $disabled={student.isGuest}
              onClick={() =>
                !student.isGuest && dispatch(incrementPerformance(student.id))
              }
            >
              +1
            </Button>
          </Buttons>
        </Card>
      ))}
    </Container>
  );
};

export default StudentList;
