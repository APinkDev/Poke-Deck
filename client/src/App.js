import './App.css';
import { Route } from "react-router-dom";
import Start from "./Components/Start";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Start} />
      <Route exact path="/home" component={Home} />
      {/* <Route exact path="/home/create" component={Create} /> */}
      {/* <Route exact path="/home/details/:id" component={Details} /> */}

    </div>
  );
}

export default App;
