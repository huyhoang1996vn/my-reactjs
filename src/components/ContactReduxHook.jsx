import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const CounterReduxHook = ()=>{
    const [user, setUser]=useState("");
    const data = useSelector(stateRedux=>stateRedux.addItemReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <p>List User of react hook</p>
            <form onSubmit={
                    (e)=>{
                        e.preventDefault();
                        dispatch({type: 'INCREMENT', data: user});
                        setUser("");
                    }
                }>
                <input type="text" onChange={(e)=>{setUser(e.target.value)}} value={user}/>
                <input type="submit" value="submit"/>
            </form>
            {data.data.map((e, i)=><p key={i}>{e}</p>)}
        </div>
    )


}

export default CounterReduxHook;