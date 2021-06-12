import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllJobs from './pages/AllJobs';
import Home from './pages/Home';
import Job from './pages/Jobs';
import UserProfile from './pages/UserProfile';
import JobProfile from './pages/JobProfile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {

  let [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    if(sessionStorage.getItem("client")){
      setLoggedIn(!loggedIn)
    }
  },[])

  return (
    <div>
      <Router>
        <Switch>
          {/* Login Switch */}
          {loggedIn && <Route exact path='/' component={Home} />}
          {!loggedIn && <Route exact path='/' component={Login} />}

          {!loggedIn && <Route exact path='/signup' component={SignUp} />}

          {loggedIn && <Route exact path='/recent' component={Home} />}
          <Route exact path='/feature' component={Home} />
          {/* <Route exact path='/dash' component={Dash} /> */}

          {/* Job */}
          <Route exact path='/jobs' component={AllJobs} />
          <Route exact path='/jobs/:id' component={Job} />
          <Route exact path='/jobs/category/:id' component={Job} />

          {/* User */}
          <Route exact path='/u/:id' component={UserProfile} />
          <Route exact path='/u/:id/jobs' component={JobProfile} />
          {/* <Route path="*" component={}/> */}

          <Route exact path='/profile' component={UserProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
