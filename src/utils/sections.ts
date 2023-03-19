import { section } from "../Board/types";

const _sections: section[] = [
  {
    id: "1",
    name: "To do",
    tasks: [
      {
        id: "1",
        title: "Learn TypeScript",
        description:
          "Learn TypeScript and use it in your projectsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      },
      {
        id: "2",
        title: "Learn Vite",
        description: "Learn Vite and use it in your projects",
      },
    ],
  },
  {
    id: "2",
    name: "In progress",
    tasks: [
      {
        id: "1",
        title: "Learn React",
        description: "Learn React and use it in your projects",
      },
      {
        id: "2",
        title: "Learn Redux",
        description: "Learn Redux and use it in your projects",
      },
    ],
  },
  {
    id: "3",
    name: "QA Review",
    tasks: [
      {
        id: "1",
        title: "Learn TypeScript",
        description: "Learn TypeScript and use it in your projects",
      },
      {
        id: "2",
        title: "Learn Vite",
        description: "Learn Vite and use it in your projects",
      },
    ],
  },
  {
    id: "4",
    name: "Dev Deployment",
    tasks: [
      {
        id: "1",
        title: "Learn React",
        description: "Learn React and use it in your projects",
      },
      {
        id: "2",
        title: "Learn Redux",
        description: "Learn Redux and use it in your projects",
      },
    ],
  },
  {
    id: "5",
    name: "Production",
    tasks: [
      {
        id: "1",
        title: "Learn TypeScript",
        description: "Learn TypeScript and use it in your projects",
      },
      {
        id: "2",
        title: "Learn Vite",
        description: "Learn Vite and use it in your projects",
      },
    ],
  },
  {
    id: "6",
    name: "Just a section",
    tasks: [
      {
        id: "1",
        title: "Learn React",
        description: "Learn React and use it in your projects",
      },
      {
        id: "2",
        title: "Learn Redux",
        description: "Learn Redux and use it in your projects",
      },
    ],
  },
];

// get sections array from local storage
export const getSections = (): section[] | [] => {
  return JSON.parse(localStorage.getItem("sections")!) || _sections;
};

//update sections array in local storage
export const updateSections = (sections: section[]): void => {
  localStorage.setItem("sections", JSON.stringify(sections));
};
