import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllJobs from "./pages/AllJobs";
import HomeHolder from "./HomeHolder";
import Job from "./pages/Jobs";
import UserProfile from "./pages/UserProfile";
import JobProfile from "./pages/JobProfile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  let [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("client")) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  return (
    <div>
      <Router>
        <Switch>
          {/* Login Switch */}

          {!loggedIn && <Route exact path="/" component={Login} />}
          {loggedIn && <Route exact path="/" component={HomeHolder} />}

          {!loggedIn && <Route exact path="/signup" component={SignUp} />}

          {loggedIn && <Route exact path="/recent" component={HomeHolder} />}
          <Route exact path="/feature" component={HomeHolder} />
          {/* <Route exact path='/dash' component={Dash} /> */}

          {/* Job */}
          {loggedIn && <Route exact path="/jobs" component={AllJobs} />}
          {!loggedIn && <Route exact path="/jobs" component={Login} />}

          <Route exact path="/jobs/:id" component={Job} />

          <Route exact path="/category/ux" component={AllJobs} />
          <Route exact path="/category/graphics" component={AllJobs} />
          <Route exact path="/category/backend" component={AllJobs} />
          <Route exact path="/category/frontend" component={AllJobs} />

          {/* User */}
          <Route exact path="/u/:id" component={UserProfile} />
          <Route exact path="/u/:id/jobs" component={JobProfile} />
          {/* <Route path="*" component={}/> */}

          {loggedIn && <Route exact path="/profile" component={UserProfile} />}
          {!loggedIn && <Route exact path="/profile" component={Login} />}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
