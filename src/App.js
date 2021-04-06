import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Signup/Registration';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/registration" component={Registration}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
