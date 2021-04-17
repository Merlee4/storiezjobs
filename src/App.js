import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllJobs from './pages/AllJobs';
import Home from './pages/Home';
import Job from './pages/Jobs';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/recent' component={Home} />
          <Route exact path='/feature' component={Home} />
          {/* <Route exact path='/dash' component={Dash} /> */}

          {/* Job */}
          <Route exact path='/jobs' component={AllJobs} />
          <Route exact path='/jobs/:id' component={Job} />
          <Route exact path='/jobs/category/:id' component={Job} />

          {/* User */}
          <Route exact path='/u/:id' component={UserProfile} />
          {/* Authnp */}
          <Route exact path='/u/:id' component={UserProfile} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
