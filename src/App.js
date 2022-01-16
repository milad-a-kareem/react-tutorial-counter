import {useState, Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {counter:0}
  }
  
  increaseHandler = ()=>{
    this.setState({counter:this.state.counter + 1})
  }
  decreaseHandler = ()=>{
    this.setState({counter:this.state.counter - 1})
  }
  
  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button onClick={this.increaseHandler}>increase</button>
        <button onClick={this.decreaseHandler}>decrease</button>
      </div>
    );
  }
}

export default App;







// function App() {
//   const [counterState, setCounterState] = useState(0)
//   const decreaseHandler = ()=>{
//     setCounterState(prevState=>{return prevState-=1})
//   }
//   const increaseHandler = ()=>{
//     setCounterState(prevState=>{return prevState+=1})
//   }
//   return (
//     <div className="App">
//       <h1>{counterState}</h1>
//       <button onClick={increaseHandler}>increase</button>
//       <button onClick={decreaseHandler}>decrease</button>
//     </div>
//   );
// }

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {counter:0}
//   }
  
//   increaseHandler = ()=>{
//     this.setState({counter:this.state.counter + 1})
//   }
//   decreaseHandler = ()=>{
//     this.setState({counter:this.state.counter - 1})
//   }
  
//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.counter}</h1>
//         <button onClick={this.increaseHandler}>increase</button>
//         <button onClick={this.decreaseHandler}>decrease</button>
//       </div>
//     );
//   }
// }