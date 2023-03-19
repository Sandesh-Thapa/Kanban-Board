import { section } from "../Board/types";

const _sections: section[] = [
  {
    id: "1",
    name: "To do",
    tasks: [
      {
        id: "1",
        title: "Finibus Bonorum",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores",
      },
      {
        id: "2",
        title: "Malorum",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      },
    ],
  },
  {
    id: "2",
    name: "In progress",
    tasks: [
      {
        id: "1",
        title: "Nemo enim",
        description: "Sed ut perspiciatis unde omnis",
      },
      {
        id: "2",
        title: "iste natus",
        description: "iste natus error sit voluptatem",
      },
    ],
  },
  {
    id: "3",
    name: "QA Review",
    tasks: [
      {
        id: "1",
        title: "Sed ut perspiciatis unde omnis iste natus error sit",
        description: "Learn TypeScript and use it in your projects",
      },
    ],
  },
  {
    id: "4",
    name: "Dev Deployment",
    tasks: [
      {
        id: "1",
        title: "quis nostrum",
        description:
          "quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
      },
      {
        id: "2",
        title: "Quis autem",
        description: "Quis autem vel eum iure reprehenderit",
      },
    ],
  },
  {
    id: "5",
    name: "Production",
    tasks: [
      {
        id: "1",
        title: "Nemo enimt",
        description:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni ",
      },
      {
        id: "2",
        title: "perspiciatis unde",
        description:
          "labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      },
    ],
  },
  {
    id: "6",
    name: "Just a section",
    tasks: [
      {
        id: "1",
        title: "Lorem ipsum",
        description:
          "Quisque tempus justo id orci auctor faucibus. Cras bibendum, quam ac ornare sollicitudin, erat erat sollicitudin magna, nec porta lorem orci ut tortor",
      },
      {
        id: "2",
        title: "Nulla tincidunt molestie",
        description: "Suspendisse eget turpis lectus",
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
