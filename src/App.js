import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyled } from "./Style/GlobalStyled";
import { router } from "./router";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home/Home";
import { Detail } from "./Components/Detail/Detai";
import { Search } from "./Components/Search/Search";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Header />
      <Switch>
        <Route path={router.home} exact>
          <Home>home</Home>
        </Route>
        <Route path={router.detail}>
          <Detail>detail</Detail>
        </Route>
        <Route path={router.search}>
          <Search>search</Search>
        </Route>
        <Route path={router.contact}>
          <Contact>contact</Contact>
        </Route>

        <Route>pagenotfound</Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
