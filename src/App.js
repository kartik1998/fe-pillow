import Landing from './containers/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './containers/Dashboard';
import Plans from './containers/Plans';
import AddFunds from './containers/AddFunds';
import CompleteKYC from './containers/CompleteKYC';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { updateStorage } from './firebase/api';
function App() {
  updateStorage();
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/plans" component={Plans} />
      <Route path="/addFunds" component={AddFunds} />
      <Route path="/completeKYC" component={CompleteKYC} />
    </Router>
  );
}

export default App;
