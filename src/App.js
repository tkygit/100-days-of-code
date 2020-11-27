import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from './components/Page';
import Homepage from './components/Homepage';
import GetStarted from './components/GetStarted';
import MyProgress from './components/MyProgress';

function App() {
  return (
    <Page>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/get-started">
              <GetStarted/>
            </Route>
            <Route path="/my-progress">
              <MyProgress/>
            </Route>
            <Route path="/">
              <Homepage/>
            </Route>
          </Switch>
        </Router>
      </div>
    </Page>
  );
}

export default App;
