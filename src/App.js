import "./App.css";
import Header from "./component/Headers/Header";
import Catagory from "./component/Catagory/Catagory";
import User from "./component/User/User";
import Breks from "./component/Breeks/Breks";
import Details from "./component/Ex-detils/Details";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="left-side ms-5 col-8  ">
          <Header></Header>
          <Catagory></Catagory>
        </div>
        <div className="sidbar bg-danger col-3 ">
          <User></User>
          <Breks></Breks>
          <Details></Details>
        </div>
      </div>
    </div>
  );
}

export default App;
