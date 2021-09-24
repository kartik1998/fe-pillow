import Landing from './containers/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Blog from './components/dashboard/Blog';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Blog} />
    </Router>
  );
}

export default App;
