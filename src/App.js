import logo from './logo.svg';
import './App.css';
import Header from "./component/Headers/Header";
import Catagory from "./component/Catagory/Catagory";

function App() {
  return (
    <div className="app">
      <div className="row">
        <div className="left-side ms-5 col-8  ">
          <Header></Header>
          <Catagory></Catagory>
        </div>
        <div className="sidbar bg-danger col-3 ">
          <h3>hello sidbar</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
