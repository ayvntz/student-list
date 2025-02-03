import { useState } from "react";
import styled from "styled-components";
import Popover from "./Popover.jsx";
import GroupManagement from "./GroupManagement.jsx";
import StudentList from "./StudentList.jsx";

// Wrapper for the entire tab component
const TabsWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

// Container for the tab buttons
const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background-color: #f5f5f5;
  padding: 0 48px;
`;

// Single tab button
const TabButton = styled.button`
  flex: 1;
  max-width: 180px;
  padding: 12px 16px;
  font-size: 22px;
  font-weight: bold;
  color: ${({ $active }) => ($active ? "#007bff" : "#000")};
  background: ${({ $active }) => ($active ? "#ffffff" : "#e0e0e0")};
  border: none;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  outline: none;
  text-align: center;

  /* Hover states */
  &:hover {
    color: #007bff;
    background-color: ${({ $active }) => ($active ? "#ffffff" : "#f0f0f0")};

    &::after {
      background-color: ${({ $active }) => ($active ? "#007bff" : "#b0b0b0")};
    }
  }

  /* Focus state */
  &:focus {
    outline: none;
  }

  /* Active/Pressed state */
  &:active {
    transform: translateY(1px);
  }
`;

const DropdownContainer = styled.div`
  margin-left: auto; /* Pushes dropdown to the right */
`;

// Main Tabs Component
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("studentList");

  return (
    <TabsWrapper>
      <TabsContainer>
        <TabButton
          $active={activeTab === "studentList"}
          onClick={() => setActiveTab("studentList")}
        >
          Student List
        </TabButton>
        <TabButton
          $active={activeTab === "group"}
          onClick={() => setActiveTab("group")}
        >
          Group
        </TabButton>

        {/* Dropdown Menu */}
        <DropdownContainer>
          <Popover
            options={[
              { label: "Settings", onClick: () => alert("Settings clicked") },
              { label: "Help", onClick: () => alert("Help clicked") },
            ]}
          />
        </DropdownContainer>
      </TabsContainer>

      {activeTab === "studentList" && <StudentList />}
      {activeTab === "group" && <GroupManagement />}
    </TabsWrapper>
  );
};

export default Tabs;
