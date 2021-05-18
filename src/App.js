
import './App.css';

import { Route, Switch} from 'react-router-dom'
import RegisterCustomer from './components/RegisterCustomer';
import LoginCustomer from './components/LoginCustomer';
import GetMovies from './components/GetMovies';

function App() {
  return (
    <div className="App">

     <Switch>
       <Route exact path="/" component={RegisterCustomer}/>
       <Route exact path="/customer/login" component={LoginCustomer}/>
       <Route exact path="/customer/getMovies" component={GetMovies}/>
       
     </Switch>

    </div>
  );
}

export default App;
