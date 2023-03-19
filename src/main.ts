import "./style.css";
import { getSections } from "./utils/sections";
import Ui from "./ui";

const container = document.getElementById("app") as HTMLElement;

const ui = new Ui(container, getSections());
ui.render();
ui.prepareEventListeners();
