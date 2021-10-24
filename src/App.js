import Main from './Main';
import Lobby from './Lobby';
import Map from './Map';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/:lobby_id' component={Lobby} />
          <Route exact path='/:lobby_id/map' component={Map} />



          {/* <Route exact path='/:subject/' component={Subject} />
          <Route exact path='/:subject/topic/:topic' component={Topic} />
          <Route exact path='/:subject/topic/:topic/question/:question' component={Question} /> */}
        </Switch>
    </Router>
  );
}
