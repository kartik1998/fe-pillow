import Landing from './containers/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import { useContext } from 'react';
import { firebaseAuth } from './context/AuthContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  const { handleSignup } = useContext(firebaseAuth);
  console.log(handleSignup);
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
