import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from './components/Page';
import Homepage from './components/Homepage';

function App() {
  return (
    <Page>
      <div className="App">
        <Router>
          <Switch>
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
