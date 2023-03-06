const idGenerator = (initVal = 1) => {
  let id = initVal;
  const getNext = () => {
    id += 1;
    return id;
  };

  return getNext;
};

export default idGenerator;
