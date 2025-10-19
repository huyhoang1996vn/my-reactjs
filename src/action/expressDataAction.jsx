export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
});

export const fetchExpressData = () => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await fetch('http://localhost:3002/api/data');
            const data = await response.json();
            console.log("data", data.data.users);
            dispatch(fetchDataSuccess(data.data.users));
        } catch (error) {
            dispatch(fetchDataFailure(error.message));
        }
    };
};

export default fetchExpressData; 