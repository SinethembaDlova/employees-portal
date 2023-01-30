const convertDateObjectToString = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
}

const convertDateStringToDateObject = (dateString) =>  {
    const dateComponents = dateString.split("/");
    const day = parseInt(dateComponents[0], 10);
    const month = parseInt(dateComponents[1], 10) - 1;
    const year = parseInt(dateComponents[2], 10);
  
    return new Date(year, month, day);
  }

export { convertDateObjectToString, convertDateStringToDateObject }