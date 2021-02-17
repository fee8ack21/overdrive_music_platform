import { renderRoutes } from "react-router-config";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
// 
// import Home from './pages/Home'
// import Member from './pages/Member'
// import Contact from './pages/Contact'
// import Partner from './pages/Partner'
import './app.scss';
import routes from './routes/routes'
// 
function App() {
  return (
    <>
      <Router>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </Router>


      {/* <Router>
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
      </Router> */}
    </>
  );
}

export default App;
