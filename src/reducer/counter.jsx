

const changeNumber = (state, action)=>{
    if (action.type=="INCREASE"){
        console.log("===== state", state);
        console.log("===== action", action);
        let new_value = state + action.value;
        console.log("===== new_value", new_value);

        return {number: new_value}
    }
}



const initialState = {
    count: 0
  };
  

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
        return { count: state.count + action.num };
        default:
        return state;
    }
}

export default reducer;
