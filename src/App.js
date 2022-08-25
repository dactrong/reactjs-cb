import "./App.css";
import State from "./components/State";
import StateFunctional from "./components/StateFunctional";
import ValidationProps from "./components/ValidationProps";
import Wellcome from "./components/Wellcome";


function App(props) {

const products= [
  { id:1, name:"Product A", price:"200000", desc:"ngon bổ dẻ"},
  { id:2,name:"Product B", price:"300000", desc:"ngon bổ dẻ"},
  { id:3,vname:"Product C", price:"400000", desc:"ngon bổ dẻ"}
]

  return (
    <div className="App">
      <h1>Wellcome to ThuanThanhTech</h1>
      <hr/>
        <Wellcome data={products}> Thông tin sản phẩm</Wellcome>
      <hr/>
      <State></State>
      <hr></hr>
      <StateFunctional></StateFunctional>
      <hr></hr>
      <ValidationProps></ValidationProps>

    </div>
  );
}

export default App;
