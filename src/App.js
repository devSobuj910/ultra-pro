import "./App.css";
import Header from "./component/Headers/Header";
import Catagory from "./component/Catagory/Catagory";
import User from "./component/User/User";
import Brek from "./component/brek-time/Brek";
import Details from "./component/Ex-detils/Details";

function App() {
  return (
    <div className="app">
      <div className="row">
        <div className="left-side ms-5 col-8  ">
          <Header></Header>
          <Catagory></Catagory>
        </div>
        <div className="sidbar bg-danger col-3 ">
          <User></User>
          <Brek></Brek>
          <Details></Details>
        </div>
      </div>
    </div>
  );
}

export default App;
