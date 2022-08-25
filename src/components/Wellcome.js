import React from "react";

const Wellcome = (props) => {
   
  return (
    <div>
      <h3>{props.children}</h3>
      {props.data.map((item) => (
        <div>
          <ul>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.desc}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Wellcome;
