import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../src/Components/RMHeader/rmheader";
import Homepage from "../src/Components/RMHomepage/rmhomepage";
import Location from "../src/Components/RMLocationPage/rmlocation";

function App() {
  return (
    <>
      <Header />

      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/location-1">
            <Location />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
