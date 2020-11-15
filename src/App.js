import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './components/Homepage'

const AppStyles = styled.div`
  .App {
    text-align: center;
  }
`;

function App() {
  return (
    <AppStyles>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <Homepage/>
            </Route>
          </Switch>
        </Router>
      </div>
    </AppStyles>
  );
}

export default App;
