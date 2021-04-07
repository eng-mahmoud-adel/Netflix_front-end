import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Signup/Registration';
import AddProfile from './pages/Profiles/AddProfile';
import EditProfile from './pages/Profiles/EditProfile';
import ShowProfiles from './pages/Profiles/ShowProfiles';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/addprofile" component={AddProfile}></Route>
        <Route path="/editprofile" component={EditProfile}></Route>
        <Route path="/showprofiles" component={ShowProfiles}></Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
