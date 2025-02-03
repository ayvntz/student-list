export const fetchStudents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        students: [
          { id: 1, name: "Philip", performance: 2, isGuest: false },
          { id: 2, name: "Darrell", performance: 5, isGuest: false },
          { id: 3, name: "Quiest", performance: 5, isGuest: false },
          { id: 4, name: "Cody", performance: 9, isGuest: false },
          { id: 5, name: "Guest", performance: 0, isGuest: true },
          { id: 6, name: "Guest", performance: 0, isGuest: true },
          { id: 7, name: "Bessie", performance: 0, isGuest: false },
          { id: 8, name: "Wendy", performance: 3, isGuest: false },
          { id: 9, name: "Guest", performance: 0, isGuest: true },
          { id: 10, name: "Esther", performance: 1, isGuest: false },
          { id: 11, name: "Guest", performance: 0, isGuest: true },
          { id: 12, name: "Gloria", performance: 1, isGuest: false },
          { id: 13, name: "Guest", performance: 0, isGuest: true },
          { id: 14, name: "Lee", performance: 2, isGuest: false },
          { id: 15, name: "Guest", performance: 0, isGuest: true },
          { id: 16, name: "Ann", performance: 0, isGuest: false },
          { id: 17, name: "Jacob", performance: 8, isGuest: false },
          { id: 18, name: "Calvin", performance: 2, isGuest: false },
          { id: 19, name: "Guest", performance: 0, isGuest: true },
          { id: 20, name: "Joe", performance: 0, isGuest: false },
          { id: 21, name: "Guest", performance: 0, isGuest: true },
          { id: 22, name: "Nina", performance: 7, isGuest: false },
          { id: 23, name: "Guest", performance: 0, isGuest: true },
          { id: 24, name: "Tina", performance: 5, isGuest: false },
          { id: 25, name: "Guest", performance: 0, isGuest: true },
          { id: 26, name: "Guest", performance: 0, isGuest: true },
          { id: 27, name: "Guest", performance: 0, isGuest: true },
          { id: 28, name: "Mike", performance: 6, isGuest: false },
          { id: 29, name: "Guest", performance: 0, isGuest: true },
          { id: 30, name: "Guest", performance: 0, isGuest: true },
        ],
      });
    }, 500);
  });
};

export const fetchGroups = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        groups: [
          {
            id: 1,
            name: "Advanced Group",
            description: "Fast-paced learners",
            members: ["Cody", "Bessie", "Lee"],
          },
          {
            id: 2,
            name: "Regular Track",
            description: "Standard curriculum",
            members: ["Wendy", "Darrell", "Mike", "Calvin"],
          },
          {
            id: 3,
            name: "Support Group",
            description: "Additional assistance",
            members: ["Philip"],
          },
          {
            id: 4,
            name: "Part-Time",
            description: "Flexible schedule",
            members: ["Calvin"],
          },
        ],
      });
    }, 500); // Simulates a 500ms network delay
  });
};
