import React from "react";
import PropTypes from 'prop-types'
class ValidationProps extends React.Component{

    render(){
        
        return(
            <div>
            <h1>ValidationProps</h1>
               <p>{this.props.name}</p>
               <p>{this.props.age}</p>
               <p>{this.props.phone}</p>
               <p>{this.props.address}</p>
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
     phone:PropTypes.number,
     address:PropTypes.oneOf(["BN","HN","TQ"])
  }
export default ValidationProps