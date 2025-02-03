# Student Performance Tracker

## User Flow

#### Landing Page
- Users visit the application and are presented with a **Student List** in a grid layout.
- If no students are found, a **No Students Available** message is displayed.

#### Viewing Students
- Each student card contains:
  - **Name**
  - **Performance Score**
  - **Action Buttons** (to modify performance scores)
- Guest students are visually distinct (grayed out) and interaction is disabled.

#### Updating Performance
- Users can:
  - **Increase (+1)** performance score.
  - **Decrease (-1)** performance score.
  - If the score is `0`, the decrement button is disabled.

#### API Interaction
- On load, the application fetches students from a mock API.
- If the API request fails:
  - The loading indicator disappears.
  - An error message is displayed.

#### Group Management
- Users can create and manage **student groups**.
- Each group contains a **name**, **description**, and **list of members**.
- Users can edit group details or remove students from groups.
- New students can be assigned to a group dynamically.

#### Join Class Modal
- Users can **join a class** through a modal dialog.
- The modal allows users to enter a **class QRcode** to join an existing class.
- If the class code is valid, the user is added to the class and receives a confirmation message.
- If the code is invalid, an error message is displayed.

---

## Overview
The **Student Performance Tracker** is a React-based web application that allows users to manage and track student performance dynamically. The application uses **Redux** for state management and **Styled-Components** for styling.

## Features
- View a list of students.
- Identify guest users.
- Increase or decrease student performance scores.
- Fetch students from a mock API.
- Manage student groups.
- Join classes using a modal dialog.
- Responsive UI with Styled Components.
- State management with Redux.

## Installation & Setup
### Clone the Repository
```bash
git clone https://github.com/your-repo/student-performance-tracker.git
cd student-performance-tracker
```

### Install Dependencies
```bash
npm install
```

### Start the Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173/`.

---

## Deployment
The application is deployed and accessible at: [Student Performance Tracker](https://ayvntz.github.io/student-list/)

---

## Technologies Used
- **React** (Frontend Framework)
- **Redux** (State Management)
- **Styled Components** (CSS-in-JS Styling)
- **Vite** (Build Tool)
