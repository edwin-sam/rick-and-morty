import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../src/Components/RMHeader/rmheader";
import Homepage from "../src/Components/RMHomepage/rmhomepage";
import Location from "../src/Components/RMLocationPage/rmlocation";
import Character from "./Components/RMCharacterPage/rmcharacterpage";
import Obituary from "./Components/RMObituary/RMObituary";

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

          <Route exact path="/character/:id">
          <Character />
        </Route>
          
        </Switch>

        <Route exact path="/obituary">
          <Obituary />
        </Route>
      </Router>
    </>
  );
}

export default App;
