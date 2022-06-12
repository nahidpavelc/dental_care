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
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/home/:">
              <Home></Home>
            </PrivateRoute>

            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>


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
      </AuthProvider>
    </div>
  );
}

export default App;
