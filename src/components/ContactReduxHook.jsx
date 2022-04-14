import React from 'react';
import {incrementCounter} from '../action/number'
import { useDispatch, useSelector } from 'react-redux';


const CounterReduxHook = ()=>{
    const counter = useSelector(stateRedux=>stateRedux.reducer);
    const dispatch = useDispatch();

    console.log("=== counter ", counter)
    const handleClick = ()=>{
        dispatch({ 
            type: 'INCREMENT', 
            num: 2 
        });
      }
      return <div>
      <p>Result {counter.count}</p>
      {/* <button onClick={()=>dispatch({type: 'INCREMENT', num: 2 })}>Increment</button> */}
      <button onClick={handleClick}>Increment</button>
      </div>;
}

export default CounterReduxHook;