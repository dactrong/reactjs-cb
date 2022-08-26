import "./App.css";
import ComponentApi, { FindDOMNode1, SetStateAPI } from "./components/ComponentApi";
import Event from "./components/Event";
import LifeCycle from "./components/LifeCycal";
import State from "./components/State";
import StateFunctional from "./components/StateFunctional";
import ValidationProps from "./components/ValidationProps";
import Wellcome from "./components/Wellcome";


function App(props) {

const products= [
  { id:1, name:"Product A", price:"200000", desc:"ngon bổ dẻ"},
  { id:2,name:"Product B", price:"300000", desc:"ngon bổ dẻ"},
  { id:3,name:"Product C", price:"400000", desc:"ngon bổ dẻ"}
]

  return (
    <div className="App">
      <h1>Wellcome to ThuanThanhTech</h1>
      <hr/>
        <Wellcome data={products}> Props</Wellcome>
      <hr/>
      <State></State>
      <hr></hr>
      <StateFunctional></StateFunctional>
      <hr></hr>
      <ValidationProps></ValidationProps>
       {/* <Event></Event> */}
       <hr></hr>
       <ComponentApi></ComponentApi>
       <hr></hr>
       <SetStateAPI></SetStateAPI>
       <hr></hr>
       <FindDOMNode1></FindDOMNode1>
       <hr></hr>
       <LifeCycle></LifeCycle>
    </div>
  );
}

export default App;
