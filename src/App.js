import Landing from './containers/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Blog from './containers/Dashboard';
import Plans from './containers/Plans';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Blog} />
      <Route path="/plans" component={Plans} />
    </Router>
  );
}

export default App;
