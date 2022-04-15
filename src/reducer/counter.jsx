function reducer(state = {count:0}, action) {
    switch(action.type) {
        case 'INCREMENT':
        return { count: state.count + action.num };
        default:
        return state;
    }
}

export default reducer;
