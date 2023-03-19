import { v4 as uuidv4 } from "uuid";

import Board from "../Board";
import { section, task } from "../Board/types";
import { create } from "../utils/dom";

class Ui {
  container: HTMLElement;
  sections: section[];
  board: Board;

  constructor(container: HTMLElement, sections: section[]) {
    this.container = container;
    this.sections = sections;
    this.board = new Board(this.sections);
  }

  render(): void {
    const parentInnerHtml = `
            <header>
                <h1>Kanban Board</h1>
                <form id="sectionForm" class="d-none">
                  <input class="title-input" type="text" placeholder="Section Title" name="title" required />
                  <button class="btn-add-task" type="submit">+&nbsp;&nbsp;&nbspAdd Section</button>
                <form>
            </header>
            <main></main>
        `;
    const parentNode = create({
      element: "div",
      className: "wrapper",
      innerHtml: parentInnerHtml,
      parent: this.container,
    });
    const btnAddSection = create({
      element: "button",
      innerHtml: "+&nbsp;&nbsp;&nbspAdd Section",
      id: "btnAddSection",
      onClick: () => {
        btnAddSection.classList.add("d-none");
        parentNode.querySelector("#sectionForm")?.classList.remove("d-none");
      },
    });
    parentNode.querySelector("header")?.appendChild(btnAddSection);

    const board = create({
      element: "div",
      className: "board",
      parent: parentNode.querySelector("main")!,
    });

    this.sections.forEach((section) => {
      const sectionElement = create({
        element: "div",
        className: "section",
        parent: board,
      });
      const sectionHeader = create({
        element: "h3",
        innerHtml: section.name,
        parent: sectionElement,
        className: "section-header",
      });
      const deleteSectionBtn = create({
        element: "button",
        innerHtml: "&#128465;",
        className: "delete-section-btn",
        parent: sectionElement,
        onClick: () => this.deleteSection(section.id),
      });
      const tasksList = create({
        element: "ul",
        className: "droppable",
        parent: sectionElement,
        id: section.id,
      });
      section.tasks.forEach((task) => {
        const taskElement = create({
          element: "li",
          className: "draggable",
          parent: tasksList,
          draggable: true,
          id: task.id,
        });
        const taskTitle = create({
          element: "h4",
          innerHtml: task.title,
          parent: taskElement,
          className: "task-title",
        });
        const taskDescription = create({
          element: "p",
          innerHtml: task.description,
          parent: taskElement,
        });
        const deleteTaskBtn = create({
          element: "button",
          innerHtml: "&#128465;",
          className: "delete-btn",
          parent: taskElement,
          onClick: () => this.deleteTask(section.id, task.id),
        });
      });
      const addTaskBtn = create({
        element: "button",
        innerHtml: "+&nbsp;&nbsp;&nbspAdd Task",
        parent: sectionElement,
        className: "btn-add-task",
        onClick: () => {
          addTaskBtn.classList.add("d-none");
          addTask.classList.add("d-block");
        },
      });
      let addTask = create({
        element: "div",
        innerHtml: `
          <form>
            <input class="title-input" type="text" placeholder="title" name="title" required />
            <textarea class="title-input" placeholder="description" name="description"></textarea>
            <button class="btn-add-task" type="submit">+&nbsp;&nbsp;&nbspAdd Task</button>
          <form>
        `,
        parent: sectionElement,
        className: "add-task d-none",
      });
      addTask.children[0].addEventListener("submit", (e: any): void => {
        e.preventDefault();
        const values = {
          title: e.target.title.value,
          description: e.target.description.value,
        };
        this.addTaskFormHandler(section.id, values);
        addTask.classList.remove("d-block");
        addTaskBtn.classList.remove("d-none");
      });
    });
  }

  prepareEventListeners(): void {
    const sections = document.querySelectorAll(".droppable");
    const tasks = document.querySelectorAll(".draggable");
    const sectionForm = document.querySelector("#sectionForm")!;

    sections.forEach((section) => {
      section.addEventListener("dragover", (e: any) => {
        e.preventDefault();
        section.classList.add("drag-over");
        const afterElement = this.getDragAfterElement(section, e.clientY);
        const draggable = document.querySelector(
          ".current-drag"
        ) as HTMLElement;

        !afterElement
          ? section.appendChild(draggable)
          : section.insertBefore(draggable, afterElement);
      });

      section.addEventListener("dragleave", () => {
        section.classList.remove("drag-over");
      });

      section.addEventListener("drop", () => {
        section.classList.remove("drag-over");
      });
    });

    tasks.forEach((task) => {
      task.addEventListener("dragstart", () => {
        task.classList.add("current-drag");
      });

      task.addEventListener("dragend", () => {
        task.classList.remove("current-drag");
      });
    });

    sectionForm.addEventListener("submit", (e: any): void => {
      e.preventDefault();
      this.addSectionFormHandler(e.target.title.value);
      document.getElementById("btnAddSection")?.classList.remove("d-none");
      sectionForm.classList.add("d-none");
    });
  }

  protected getDragAfterElement(element: any, clientY: number) {
    const draggables = [
      ...element.querySelectorAll(".draggable:not(.current-drag)"),
    ];

    return draggables.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = clientY - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset)
          return { offset: offset, element: child };
        else return closest;
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }

  protected addTaskFormHandler(
    sectionId: string,
    formValues: { title: string; description: string }
  ): void {
    const task: task = {
      id: uuidv4(),
      title: formValues.title,
      description: formValues.description,
    };
    this.board.addTask(sectionId, task);
    location.reload();
    // this.render();
    // requestAnimationFrame(this.initFunc);
  }

  protected addSectionFormHandler(title: string): void {
    const newSection: section = {
      id: uuidv4(),
      name: title,
      tasks: [],
    };
    this.board.addSection(newSection);
    location.reload();
  }

  protected deleteTask(sectionId: string, taskId: string) {
    this.board.removeTask(sectionId, taskId);
    location.reload();
  }

  protected deleteSection(sectionId: string) {
    this.board.removeSection(sectionId);
    location.reload();
  }
}

export default Ui;
