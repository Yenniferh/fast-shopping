import Home from "./pages/Home"
import {Navbar} from './components/Navbar'
import { ProductsList } from './features/products/ProductsList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'


function App() {

  return (
    <Router>
      <Navbar />
      <div className="app">
        <Switch>
          <Route
            exact path="/"
            render={() => (<ProductsList />)}
          />
          <Redirect to="/" />
        </Switch>
      </div>
      <Home />
    </Router>
  );
}

export default App;
