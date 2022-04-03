
const defaultName = ["steve", "tony", "gerrard"];

function addItemReducer(state = {data: defaultName}, action) {
    console.log("==== addItemReducer ", action)
    switch(action.type) {
        case 'INCREMENT':
        return { data: [...state.data, action.data]};
        default:
        return state;
    }
}

export default addItemReducer;
