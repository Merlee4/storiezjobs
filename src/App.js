import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Job from './pages/Jobs';

function App() {
  return (
    <Router className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-primary-700">
      <Switch>
        <Route path='/' component={Home} />
        <Route exact path='/jobs' component={Job} />

        {/* Job */}
        <Route path='/jobs/:id' component={Job} />
      </Switch>
    </Router>
  );
}

export default App;
