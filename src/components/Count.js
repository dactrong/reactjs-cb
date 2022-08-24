import React from "react";

class Count extends React.Component {
  constructor(props) {
    super(props);

    this.state = { index: 0 };
  }

  render() {
    return (
      <div>
        <h1>Giá trị:{this.state.index}</h1>
        <div>
          <button
            onClick={() => {
              this.setState({ index: this.state.index + 1 });
            }}
          >
            Cộng
          </button>
        </div>
        
        <div>
          <button
            onClick={() => {
              this.setState({ index: this.state.index - 1 });
            }}
          >
            Trừ
          </button>
        </div>
      </div>
    );
  }
}
export default Count;
