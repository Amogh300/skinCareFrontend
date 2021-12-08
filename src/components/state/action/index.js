export const increaseCount=(count)=>{
  return (dispacher)=>{
    dispacher({
      type:'increaseCount',
      payload: count
    });  
  }
}

export const decreaseCount=(count)=>{
  return (dispacher)=>{
    dispacher({
      type:'decreaseCount',
      payload: count
    });  
  }
}