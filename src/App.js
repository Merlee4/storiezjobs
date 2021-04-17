import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Job from './pages/Jobs';


function App() {
  return (
    <div className=" bg-blue-50 bg-opacity-50">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/recent' component={Home} />
          <Route exact path='/feature' component={Home} />
          {/* <Route exact path='/dash' component={Dash} /> */}

          {/* Job */}
          <Route exact path='/jobs/:id' component={Job} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
