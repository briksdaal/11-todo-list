const idGenerator = (initVal = 0) => {
  let id = initVal;
  const getNext = () => {
    id += 1;
    return id;
  };

  return getNext;
};

export default idGenerator;
