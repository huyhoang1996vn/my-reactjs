

const changeNumber = (state, action)=>{
    if (action.type=="increase"){
        console.log("===== state", state);
        console.log("===== action", action);
        let new_value = state + action.value;
        console.log("===== new_value", new_value);

        return {number: new_value}
    }
}
export default changeNumber;