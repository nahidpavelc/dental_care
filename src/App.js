import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/booking/:serviceId">
              <Booking></Booking>
          </Route>


          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
