import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpressData } from '../action/expressDataAction';

const GetExpressData = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.expressDataReducer);

    useEffect(() => {
        dispatch(fetchExpressData());
    }, [dispatch]);

    const handleRefresh = () => {
        dispatch(fetchExpressData());
    };

    if (loading) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Loading data from Express API...</h2>
                <div>Please wait...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Error fetching data</h2>
                <p style={{ color: 'red' }}>{error}</p>
                <button 
                    onClick={handleRefresh}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Express API Data</h2>
            <button 
                onClick={handleRefresh}
                style={{
                    marginBottom: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Refresh Data
            </button>
            
            {data && data.length > 0 ? (
                <div>
                    <h3>Received Data:</h3>
                    <pre style={{ 
                        backgroundColor: '#f8f9fa', 
                        padding: '15px', 
                        borderRadius: '5px',
                        overflow: 'auto',
                        maxHeight: '400px'
                    }}>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </div>
            ) : (
                <div>
                    <h3>No data received</h3>
                    <p>Make sure your Express server is running on http://localhost:3002</p>
                </div>
            )}
        </div>
    );
};

export default GetExpressData; 