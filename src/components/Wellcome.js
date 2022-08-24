import React from "react";

const Wellcome = (props) => {
  return (
    <div>
      <h1> {props.children}</h1>
      <ul>
        <li>Tên:{props.name}</li>
        <li>Tuổi:{props.age}</li>
        <li>Địa chỉ:{props.adress}</li>
      </ul>
    </div>
  );
};

export default Wellcome;
