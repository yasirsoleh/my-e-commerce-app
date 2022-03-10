import { Route, Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={()=><Home/>}/>
        <Route path="/products" exact component={()=><Products/>}/>
        <Route path="/products/:id" exact component={()=><SingleProduct/>}/>
        <Route path="/carts" exact component={()=><Carts/>}/>
        <Route path="/profile" exact component={()=><Profile/>}/>
        <Route path="/register" exact component={()=><Register/>}/>
        <Route path="/login" exact component={()=><Login/>}/>
      </Switch>
    </Router>
  );
}

export default App;
