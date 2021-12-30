import logo from './logo.svg';
import './App.css';
// import Forms from './Forms';
import Home from './Home'
import Hooksex from './hooksex'
import Forms from './Forms';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
<Router>
  <Link to="">Home</Link>
  <Link to="/Forms">Forms</Link>
  <Link to="/Hooksex">Hooks</Link>
  <Route path="" component={Home}></Route>
  <Route path="/Forms" component={Forms}></Route>
  <Route path="/Hooksex" component={Hooksex}></Route>
      {/* <Home />
      <Forms />
      <Hooksex /> */}
      </Router>
    </div>
  );
}

export default App;
