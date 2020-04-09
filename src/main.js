const TASK_COUNT = 3;

import {createSiteMainTempalte} from "./components/site-main.js";
import {createFilterTemplate} from "./components/filter.js";
import {createBoardTemplate} from "./components/board.js";
import {createTaskEditTemplate} from "./components/task-edit.js";
import {createTastTemplate} from "./components/task.js";
import {createLoadMoreButtonTemplate} from "./components/load-more-button.js";

const render = (container, template, place = `beforeend`) => {
  return container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMainTempalte());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBoardTemplate());

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(taskListElement, createTaskEditTemplate());
for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTastTemplate());
}

render(boardElement, createLoadMoreButtonTemplate());
