import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
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
