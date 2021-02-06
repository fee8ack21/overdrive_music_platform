import react from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// 
import logo from './logo.svg';
import Home from './pages/Home'
import Member from './pages/Member'
import Contact from './pages/Contact'
import Partner from './pages/Partner'
import './app.scss';
// 
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/partner">
            <Partner></Partner>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/member">
            <Member></Member>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
