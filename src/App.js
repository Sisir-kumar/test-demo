
import './App.css';
import { Switch ,Route,BrowserRouter as Router} from "react-router-dom";
import AllWallet from './component/Home';
import NewWallet from './component/NewWallet';
import CheckBalance from './component/CheckBalance';
import AddFunds from './component/AddFunds';

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/" component={AllWallet} />        
          <Route exact path="/check_balance" component={CheckBalance} />        
          <Route exact path="/addfund" component={AddFunds} />        
          <Route exact  path="/newwallet"component={NewWallet} />            
        </Switch>
      </Router>
    </div>
  );
}

export default App;
