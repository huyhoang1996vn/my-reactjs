import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';



// class ShoppingList extends React.Component{
//   render(){
//     return (
//       <div className="shop">
//          <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//         </ul>
//       </div>
//     );
//   }
// }

class Square extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: "   ",
    };
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
    this.setState({ value: 'X'})
 }
  render(){
    return (
      <button 
        className="square" 
        // onClick={ () => {this.handleClick(); alert('clicked')}}>
          onClick={ this.handleClick }>
          {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component{
  render(){
    return (
      <div>
        <div className="Square row">
          <Square value={1}/>
          <Square value={1}/>
          <Square value={1}/>
        </div>
        <div className="Square row">
          <Square value={1}/>
          <Square value={1}/>
          <Square value={1}/>
        </div>
        <div className="Square row">
          <Square value={1}/>
          <Square value={1}/>
          <Square value={1}/>
        </div>
      </div>
    );
  }
}

class Game extends React.Component{
  render(){
    return (
      <div className="Game">
        <h1>Game XO</h1>
        <Board/>
      </div>
    );
  }
}




ReactDOM.render(
    <Game/>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
