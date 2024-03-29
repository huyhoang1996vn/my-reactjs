import React from 'react';
import {incrementCounter} from '../action/number'
import { connect } from 'react-redux';


function CounterForm(props){
    function handleClick() {
        props.incrementCounter(2);
      }
      return <div>
      <p>Result {props.count}</p>
      <button onClick={handleClick}>Increment</button>
      </div>;
}

function mapStateToProps(stateRedux) {
        // return stateRedux
        // Add name reducer if have many reducer
        return stateRedux.reducer
    }

const mapDispatchToProps = {
    incrementCounter
}  


export default connect(mapStateToProps, mapDispatchToProps)(CounterForm);