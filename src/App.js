import React from 'react';
import './App.css';

// function DummyApp(props) {
//   const {data, data2} = props;
//   return (
//     <div>
//       Dummy App {data} {data2}
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    } 
  }

  clickMe = () => {
    let newCounter = this.state.counter;
    newCounter += 1;
    this.setState({
      counter: newCounter 
    })
  }

  render() {
    const {data1, data2} = this.props;
    const { counter } = this.state;
    return (
      <div className="App"> 
        <h1>{data1}</h1>
        <h1>{data2}</h1>
        <h1>{counter}</h1>
        <button onClick={this.clickMe}>Click Me</button>
      </div>
    ); 
  }
}


export default App;



