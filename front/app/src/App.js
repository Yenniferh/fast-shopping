import { Navbar } from './components/Navbar';
import { ProductsList } from './features/products/ProductsList';
import { OrdersPage } from './features/order/OrderPage';
import { Thanks } from './components/Thanks';
import { Paginator } from './components/Paginator';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='p-2 md:px-4 lg:px-10'>
        <Switch>
          <Route exact path='/' render={() => <ProductsList />} />
          <Route path='/cart' render={() => <OrdersPage />}></Route>
          <Route
            path='/thanks'
            render={(props) => <Thanks {...props} />}
          ></Route>
          <Route render={() => <Paginator />} />
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
