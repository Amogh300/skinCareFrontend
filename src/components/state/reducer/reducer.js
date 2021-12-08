const countMonitor = (state = 0, action) => {
  if (action.type === "increaseCount") return state + action.payload;
  else if (action.type === "decreaseCount") return state - action.payload;
  else return state;
};

export default countMonitor;
