import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
