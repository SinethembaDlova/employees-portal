const convertDateObjectToString = (date) => {
  const dateArray = date.split('-');
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];

  return `${day}/${month}/${year}`;
};

const convertDateStringToDateObject = (dateString) => {
  const dateComponents = dateString.split('/');
  const day = parseInt(dateComponents[0], 10);
  const month = parseInt(dateComponents[1], 10) - 1;
  const year = parseInt(dateComponents[2], 10);

  return `${year}-${month}-${day}`;
};

export { convertDateObjectToString, convertDateStringToDateObject };
