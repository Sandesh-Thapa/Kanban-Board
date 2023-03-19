import { updateSections } from "../utils/sections";
import { section, task } from "./types";

class Board {
  sections: section[];

  constructor(sections: section[]) {
    this.sections = sections;
  }

  addSection(section: section): void {
    this.sections.push(section);
    updateSections(this.sections);
  }

  addTask(sectionId: string, task: task): void {
    const section = this.sections.find((s) => s.id === sectionId);
    if (section) {
      section.tasks.push(task);
    }
    updateSections(this.sections);
  }

  removeSection(sectionId: string): void {
    this.sections = this.sections.filter((s) => s.id !== sectionId);
    updateSections(this.sections);
  }

  removeTask(sectionId: string, taskId: string): void {
    const section = this.sections.find((s) => s.id === sectionId);
    if (section) {
      section.tasks = section.tasks.filter((t) => t.id !== taskId);
    }
    updateSections(this.sections);
  }
}

export default Board;
