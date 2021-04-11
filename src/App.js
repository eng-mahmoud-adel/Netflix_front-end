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
import Browse from './pages/Browse'
import Movies from './pages/Movies'
import Shows from './pages/Shows'

import Player from './pages/DisplayVideo'
import Series from './pages/SeriesPage'
import seriesPlayer from './pages/seriesPlayer'
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
        <Route path="/Browse" component={Browse}></Route>
        <Route path="/Movies" component={Movies}></Route>
        <Route path="/Shows" component={Shows}></Route>

        <Route path="/player/:id" component={Player}></Route>
        <Route path="/series/:id" component={Series}></Route>
        <Route path="/shows/:id" component={seriesPlayer}></Route>


        <Redirect to="/" ></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
