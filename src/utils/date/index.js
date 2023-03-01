const convertToDbDate = (date) => {
  const dateArray = date.split('-');
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];

  return `${day}/${month}/${year}`;
};

const converToInputDate = (dateString) => {
  const dateArray = dateString.split('/');
  const day = dateArray[0];
  const month = dateArray[1];
  const year = dateArray[2];

  return `${year}-${month}-${day}`;
};

export { convertToDbDate, converToInputDate };
