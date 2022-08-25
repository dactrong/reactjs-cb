import React from "react";

class State extends React.Component{
     constructor(props){
        super(props);

        this.state = {count: 1}

     }
    render(){
        return(
            <div>
            <h2>{this.state.count}</h2>
            <button onClick= {() =>{ this.setState ({count:this.state.count+1})}}>Cộng</button>
            <button onClick = {() => {this.setState({count:this.state.count -1})}}>Trừ</button>

            </div>
        )
    }
}
export default State