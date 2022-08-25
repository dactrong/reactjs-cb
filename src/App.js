import "./App.css";
import State from "./components/State";
import Wellcome from "./components/Wellcome";


function App(props) {

const products= [
  {  name:"Product A", price:"200000", desc:"ngon bổ dẻ"},
  { name:"Product B", price:"200000", desc:"ngon bổ dẻ"},
  { name:"Product C", price:"200000", desc:"ngon bổ dẻ"}
]

  return (
    <div className="App">
      <h1>Wellcome to ThuanThanhTech</h1>
      <hr/>
        <Wellcome data={products}> Thông tin sản phẩm</Wellcome>
      <hr/>
      <State></State>

    </div>
  );
}

export default App;
