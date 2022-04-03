

const changeNumber = (state, action)=>{
    if (action.type=="INCREASE"){
        let new_value = state + action.value;
        return {number: new_value}
    }
}


function reducer(state = {count:0}, action) {
    console.log("==== reducer ", action)
    switch(action.type) {
        case 'INCREMENT':
        return { count: state.count + action.num };
        default:
        return state;
    }
}

export default reducer;
