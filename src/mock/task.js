import {COLORS} from "../const.js";

const generateTask = () => {
  return {
    description: [
      `Изучить теорию`,
      `Сделать домашку`,
      `Пройти интенсив на соточку`
    ][Math.floor(Math.random() * 3)],
    dueDate: Math.random() > 0.5 ? new Date(Date.now() - 7 * 24 * 60 * 60 * 1000 + Math.floor(Math.random() * 14 * 24 * 60 * 60 * 1000)) : null,
    repeatingDays: {
      "mo": Math.random() > 0.5,
      "tu": Math.random() > 0.5,
      "we": Math.random() > 0.5,
      "th": Math.random() > 0.5,
      "fr": Math.random() > 0.5,
      "sa": Math.random() > 0.5,
      "su": Math.random() > 0.5,
    },
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    isFavorite: Math.random() > 0.5,
    isArchive: Math.random() > 0.5,
  };
};

const generateTasks = (count) => {
  return Array.from({length: count}, generateTask);
};

export {generateTask, generateTasks};
