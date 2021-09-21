import Landing from './containers/Landing';
import Login from './components/Login';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
