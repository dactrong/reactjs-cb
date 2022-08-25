import React from "react";
import PropTypes from 'prop-types'
class ValidationProps extends React.Component{

    render(){
        
        return(
            <div>
               <h2>{this.props.name}</h2>
               <h2>{this.props.age}</h2>
               <h2>{this.props.phone}</h2>
               <h2>{this.props.address}</h2>
            </div>
        )
    }
}
ValidationProps.defaultProps = {
    name:"Nguyen Dac Trong",
    age:21,
    phone: 963209332,
    address: "BN"

  }

  ValidationProps.propTypes = {
     name:PropTypes.string,
     age:PropTypes.number,
     phone:PropTypes.string,
     address:PropTypes.oneOf(["BN","HN","TQ"])
  }
export default ValidationProps