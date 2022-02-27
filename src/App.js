import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../src/Components/RMHeader/rmheader";
import Homepage from "../src/Components/RMHomepage/rmhomepage";
import Location from "../src/Components/RMLocationPage/rmlocation";
import Character from "./Components/RMCharacterPage/rmcharacterpage";

function App() {
  return (
    <>
      <Header />

      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/location/:id">
            <Location />
          </Route>
        </Switch>

        <Route exact path="/character/:id">
            <Character />
          </Route>

      </Router>
    </>
  );
}

export default App;
