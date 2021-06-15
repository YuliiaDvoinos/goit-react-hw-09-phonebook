//react imports
import { Route, Switch } from "react-router";
import { Component, lazy, Suspense } from "react";
//redux imports
import authOperations from "./redux/auth/auth-operations";
import { connect } from "react-redux";
//components imports
import Spinner from "./components/Spinner";
import NavBar from "./components/NavBar";
import Container from "./components/Container/Container";
//other imports
import routes from "./routes";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const Home = lazy(() =>
  import("./pages/Home" /*webpackChunkName: "home-page"*/)
);
const Register = lazy(() =>
  import("./pages/Register" /*webpackChunkName: "register-page"*/)
);
const Login = lazy(() =>
  import("./pages/Login" /*webpackChunkName: "login-page"*/)
);
const ContactsPage = lazy(() =>
  import("./pages/Contacts" /*webpackChunkName: "contacts-page"*/)
);
class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path={routes.HomePage} component={Home} />
              <PublicRoute
                restricted
                path={routes.RegisterPage}
                redirectTo={routes.ContactsPage}
                component={Register}
              />
              <PublicRoute
                restricted
                path={routes.LoginPage}
                redirectTo={routes.ContactsPage}
                component={Login}
              />
              <PrivateRoute
                path={routes.ContactsPage}
                redirectTo={routes.LoginPage}
                component={ContactsPage}
              />
            </Switch>
          </Suspense>
        </Container>
      </div>
    );
  }
}
const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
