const generateFilters = (tasks) => {
  const date = new Date();
  return [{
    name: `all`,
    count() {
      return tasks.length;
    },
  }, {
    name: `overdue`,
    count() {
      let summ = 0;
      tasks.forEach((it) => {
        if (it.dueDate !== null) {
          if (it.dueDate.getTime() < date) {
            summ++;
          }
        }
      });
      return summ;
    },
  }, {
    name: `today`,
    count() {
      let summ = 0;
      tasks.forEach((it) => {
        if (it.dueDate !== null) {
          if ((it.dueDate.getFullYear() === date.getFullYear()) && (it.dueDate.getMonth() === date.getMonth()) && (it.dueDate.getDate() === date.getDate())) {
            summ++;
          }
        }
      });
      return summ;
    },
  }, {
    name: `favorites`,
    count() {
      let summ = 0;
      tasks.forEach((it) => (it.isFavorite) ? summ++ : summ);
      return summ;
    },
  }, {
    name: `repeating`,
    count() {
      let summ = 0;
      tasks.forEach((it) => Object.values(it.repeatingDays).some(Boolean) ? summ++ : summ);
      return summ;
    },
  }, {
    name: `archive`,
    count() {
      let summ = 0;
      tasks.forEach((it) => (it.isArchive) ? summ++ : summ);
      return summ;
    },
  }];
};

export {generateFilters};
