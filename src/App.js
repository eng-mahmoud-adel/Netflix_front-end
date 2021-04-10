import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Signup/Registration/Registration';
import RegistrationForm from './pages/Signup/RegistrationForm/RegistrationForm';
import Signup from './pages/Signup/Signup/Signup';
import Plans from './pages/Signup/Plans/Plans';
import Payment from './pages/Signup/Payment/Payment';
import AddProfile from './pages/Profiles/AddProfile';
import EditProfile from './pages/Profiles/EditProfile';
import ShowProfiles from './pages/Profiles/ShowProfiles';
import Movies from './pages/Movies'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/regform" component={RegistrationForm}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/planform" component={Plans}></Route>
        <Route path="/payment" component={Payment}></Route>
        <Route path="/addprofile" component={AddProfile}></Route>
        <Route path="/editprofile" component={EditProfile}></Route>
        <Route path="/showprofiles" component={ShowProfiles}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Redirect to="/" ></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
