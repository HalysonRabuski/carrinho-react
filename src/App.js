import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.component}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
