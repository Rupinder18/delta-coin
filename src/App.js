import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Aboutus from './components/pages/Aboutus';
import Staking from './components/staking/Staking';
import Contact from './components/Contact/Contact';
import Price from './components/price/Price';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutus' component={Aboutus}/>
          {/* <Route path='/services' component={Services} /> */}
          <Route path='/price' component={Price} />
          <Route path='/contact' component={Contact} />
          <Route path='/staking' component={Staking} />

        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
