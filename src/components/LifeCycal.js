import React from "react";

class LifeCycle extends React.Component {
    constructor(props)
    {
      super(props);
       this.state = {
         color: "red"
       };
    }
   
    componentDidMount(){
        setTimeout(() =>{
            this.setState({color:"yellow"})
        },2000)
    }
    // componentDidUpdate(){
    //     setTimeout(() =>{
    //         this.setState({color:"thuanthanhtech"})
    //      },2000)
    // }
    render() {
        return (
           <div>
           <h2>{this.state.color}</h2>
              <h3> Lifecycle Methods</h3>
           </div>
        );
     }
  }
  export default LifeCycle