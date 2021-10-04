import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PageNotFOund from './components/PageNotFound/PageNotFOund';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="body">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route  path = '/home'>
            <Home></Home>
          </Route>
          <Route  path = '/about'>
            <About></About>
          </Route>
          <Route  path = '/contact'>
            <Contact></Contact>
          </Route>
          <Route  path = '/service'>
            <Services></Services>
          </Route>
          <Route  path = '*'>
            <PageNotFOund></PageNotFOund>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
