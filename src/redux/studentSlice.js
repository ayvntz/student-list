import { createSlice } from "@reduxjs/toolkit";

const initialState = { students: [], groups: [] };

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    setGroups: (state, action) => {
      state.groups = action.payload;
    },
    incrementPerformance: (state, action) => {
      const student = state.students.find((s) => s.id === action.payload);
      if (student) student.performance += 1;
    },
    decrementPerformance: (state, action) => {
      const student = state.students.find((s) => s.id === action.payload);
      if (student) student.performance -= 1;
    },
  },
});

export const {
  setStudents,
  setGroups,
  incrementPerformance,
  decrementPerformance,
} = studentSlice.actions;
export default studentSlice.reducer;
