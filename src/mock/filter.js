const generateFilters = (tasks) => {
  const date = new Date();
  return [{
    name: `all`,
    count: () => tasks.length,
  }, {
    name: `overdue`,
    count: () => tasks.filter((it) => it.dueDate && it.dueDate.getTime() < date).length,
  }, {
    name: `today`,
    count: () => tasks.filter((it) => it.dueDate && (it.dueDate.toDateString() === date.toDateString())).length,
  }, {
    name: `favorites`,
    count: () => tasks.filter((it) => it.isFavorite).length,
  }, {
    name: `repeating`,
    count: () => tasks.filter((it) => Object.values(it.repeatingDays).some(Boolean)).length,
  }, {
    name: `archive`,
    count: () => tasks.filter((it) => it.isArchive).length,
  }];
};

export {generateFilters};
