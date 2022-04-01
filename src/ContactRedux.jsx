import React from 'react';
import {incrementCounter} from './action/number'
import { connect } from 'react-redux';


function ContactInside(props){
    function handleClick() {
        let count = 0;
        props.incrementCounter(1);
      }
      return <div>
      <p>Result {props.count}</p>
      <button onClick={handleClick}>Increment</button>
      </div>;
}

function mapStateToProps(state) {
    return state
  }

const mapDispatchToProps = {
    incrementCounter
}  

const Contact = connect(mapStateToProps, mapDispatchToProps)(ContactInside);

export default Contact;