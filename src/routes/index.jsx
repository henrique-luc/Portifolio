import { Route, Switch } from "react-router-dom";
import { Resume } from "../pages/Resume";
import { AboutMe } from "../pages/AboutMe";
import { Contacts } from "../pages/Contacts";
import { Projects } from "../pages/Projects";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Resume} />
    <Route exact path="/sobre-mim" component={AboutMe} />
    <Route exact path="/contatos" component={Contacts} />
    <Route exact path="/projetos" component={Projects} />
  </Switch>
);
