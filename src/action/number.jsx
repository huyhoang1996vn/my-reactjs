const increase =()=>{
    return {
        type: "INCREASE",
        value: 1
    }
}



export function incrementCounter(num) {
    return { 
      type: 'INCREMENT', 
      num: num 
    }
  }


export default increase;
