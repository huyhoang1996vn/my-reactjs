import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


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
          onClick={ this.props.onClick }>
          {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: ""
    };
  }

  changeXO = (e, id) => {
    const squares = this.state.squares.slice();
    squares[id] = this.state.xIsNext ? 'X': 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    }, () =>{
      const winner = this.checkWinner();
      if (winner != null){
        this.setState({
          winner: winner,
        })
      }
    })
  }

  checkWinner = () => {
    const squares = this.state.squares;
    const winLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i =0; i <= winLine.length -1; i++){
      const [a,b,c] = winLine[i];
      if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
        return squares[a]
      }
    }
    return null
  }


  render(){
    return (
      <div>
        
        <div className="Square row">
          <Square value={ this.state.squares[0] } onClick={ (event) => this.changeXO(event, 0) }/>
          <Square value={ this.state.squares[1] } onClick={ (event) => this.changeXO(event, 1) }/>
          <Square value={ this.state.squares[2] } onClick={ (event) => this.changeXO(event, 2) }/>
        <div className="Square row">
          <Square value={ this.state.squares[3] } onClick={ (event) => this.changeXO(event, 3) }/>
          <Square value={ this.state.squares[4] } onClick={ (event) => this.changeXO(event, 4) }/>
          <Square value={ this.state.squares[5] } onClick={ (event) => this.changeXO(event, 5) }/>
        </div>
        <div className="Square row">
          <Square value={ this.state.squares[6] } onClick={ (event) => this.changeXO(event, 6) }/>
          <Square value={ this.state.squares[7] } onClick={ (event) => this.changeXO(event, 7) }/>
          <Square value={ this.state.squares[8] } onClick={ (event) => this.changeXO(event, 8) }/>
        </div>


        {/* <button onClick={ (event) => this.changeXO(event, 2) }>
            Toggle Menu from Parent
          <Square value={ this.state.id == 2 ? this.state.value: "" }/>
        </button>
        <button onClick={ (event) => this.changeXO(event, 3) }>
            Toggle Menu from Parent
          <Square value={ this.state.id == 3 ? this.state.value: "" }/>
        </button> */}
        </div>
        {/* <div className="Square row">
          <Square value={ this.state.id == 4 ? this.state.value: "" }/>
          <Square value={ this.state.id == 1 ? this.state.value: "" }/>
          <Square value={ this.state.id == 1 ? this.state.value: "" }/>
        </div>
        <div className="Square row">
          <Square value={ this.state.id == 1 ? this.state.value: "" }/>
          <Square value={ this.state.id == 1 ? this.state.value: "" }/>
          <Square value={ this.state.id == 1 ? this.state.value: "" }/>
        </div> */}
        <h1>Winner: { this.state.winner }</h1>
      </div>
    );
  }
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = { date: new Date()};
    setInterval(this.runClock(), 1000);
  }
  runClock = () => {
    // this.setState( {date: new Date()});
    // return new Date().toLocaleTimeString()
    setInterval(() => { 
      this.setState({
        date: new Date()
      })
  }, 1000);
    
  }
  render(){
    return (
      <div>
        <h1>ĐÂU PHẢI ĐƠN GIẢN</h1>
        Show lock: { this.state.date.toLocaleTimeString() }

      </div>
    );
  }
}


class Game extends React.Component{
  render(){
    return (
      <div className="Game">
        <Clock/>
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
