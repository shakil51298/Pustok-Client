import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeMain from './Components/Home/HomeMain/HomeMain';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path ="/">
            <HomeMain></HomeMain>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
