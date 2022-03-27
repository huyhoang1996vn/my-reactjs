import { createStore } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import changeNumber from './reducer/counter'
import increase from './action/number'



const Contact = ()=>{
    // const number=useSelector((state)=> state.number);
    const [number, setNumber]= useState(0);
    let store = createStore(changeNumber);
    store.subscribe(() => {
        // When state will be updated(in our case, when items will be fetched), 
        // we will update local component state and force component to rerender 
        // with new data.
        console.log("=== store.getState() ", store.getState())
        setNumber(store.getState().number);
      });

    return (
    <div>
        <p>Result {number}</p>
        <form>
            <input onClick={()=>store.dispatch(increase())} type='button' value='increase'/>
            <button>Decrease</button>
        </form>
    </div>
    );
}

export default Contact