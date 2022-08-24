import React, {Component} from "react";
 
class Car extends Component {
  constructor(props) {
    super(props);
    //Chỉ định một state
    this.state = { website: "Nguyen dac trong" , name: "nguyen dac trong" , age:"21 tuổi" };
  }
  render() {
    return (
      <div>
        <h1>Học ReactJS căn bản tại {this.state.website} </h1>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>

      </div>
    );
  }
}
export default Car;