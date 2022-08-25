import React from "react";

class State extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 1 };
  }

  componentDidMount(){
       document.title = ` Giá trị của bạn là: ${this.state.count} `
  }
  componentDidUpdate(){
    document.title = ` Giá trị của bạn là: ${this.state.count} `

  }
  render() {
    return (
      <div>
      <h1>Class component</h1>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Cộng
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          Trừ
        </button>
      </div>
    );
  }
}
export default State;
