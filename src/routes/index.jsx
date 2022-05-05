import { Route, Switch } from "react-router";
import Bag from "../pages/Bag";
import Shop from "../pages/Shop";
import Home from "../pages/Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/shop">
        <Shop />
      </Route>
      <Route exact path="/bag">
        <Bag />
      </Route>
    </Switch>
  );
}

export default Routes;
