const updateIndex = (bArray) => {
  bArray.forEach((task, arrayIndex) => {
    task.index = arrayIndex;
  });
};

export default updateIndex;