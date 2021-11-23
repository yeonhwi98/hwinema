import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyled } from "./Style/GlobalStyled";
import { router } from "./router";
import { Header } from "./Components/Header";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Header />
      <Switch>
        <Route path={router.home} exact>
          home
        </Route>
        <Route path={router.detail}>detail</Route>
        <Route path={router.search}>search</Route>
        <Route path={router.contact}>contact</Route>

        <Route>pagenotfound</Route>
      </Switch>
    </Router>
  );
}

export default App;
