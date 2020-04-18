const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : `${value}`;
};

export const timeDisplay = (date) => {
  const hours = castTimeFormat(date.getHours());
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};