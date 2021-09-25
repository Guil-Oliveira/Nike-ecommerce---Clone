import { Route, Router, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Data from "./components/Backend/Data/Data"
import './App.css';

import Header from './Frontend/Header';
import About from './components/Frontend/About';



function App() {
  const { produtos } = Data;
  return (
    <Router>
      <div className="App">
          <Header/>

        <Switch>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
