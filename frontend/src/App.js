import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Backdrop from './components/Backdrop';
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import { useState } from 'react';
function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <main>
        <Switch>
          <Route exact path='/' component={HomeScreen}></Route>
          <Route exact path='/products/:id' component={ProductScreen}></Route>
          <Route exact path='/cart' component={CartScreen}></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
