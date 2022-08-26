import { render } from "@testing-library/react";
import React from "react";
import ReactDom from "react-dom";

class ComponentApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <div>
        <p>Giá trị:{Math.random()}</p>
        <p onClick={() => this.forceUpdate()}>Redload</p>
      </div>
    );
  }
}
export default ComponentApi;

export class SetStateAPI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  congState() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  truState() {
    this.setState((prevState, props) => {
      return {
        count: prevState.count - 1,
      };
    });
  
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.congState()}>Cộng </button>
        <button onClick={() => this.truState()}>Trừ</button>
      </div>
    );
  }
}

export  class FindDOMNode1 extends React.Component{
     
    findDomNode1(){
        var title = document.getElementById('title');
        ReactDom.findDOMNode(title).style.color = "red"
    }
    render(){

        return(
            <div>
            <h1 id ="title">Tiêu đề</h1>
            <button onClick={()=> this.findDomNode1()}>Click</button>
            </div>
        )
    }
}
