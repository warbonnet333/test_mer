const paginItemsFive = (arr = [], page = 0) => {
  const arrFrom = page * 5;
  const arrTo = arrFrom + 5;
  return arr.slice(arrFrom, arrTo);
};

export default paginItemsFive;
