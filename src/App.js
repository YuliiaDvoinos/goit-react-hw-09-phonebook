//react imports
import { Route, Switch } from "react-router";
import { lazy, Suspense, useEffect } from "react";
//redux imports
import authOperations from "./redux/auth/auth-operations";
import { useDispatch } from "react-redux";
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
// class App extends Component {
//   componentDidMount() {
//     this.props.getCurrentUser();
//   }
//   render() {
export default function App({ getCurrentUser }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute exact path={routes.HomePage}>
              <Home />
            </PublicRoute>

            <PublicRoute
              restricted
              path={routes.RegisterPage}
              redirectTo={routes.ContactsPage}
            >
              <Register />
            </PublicRoute>

            <PublicRoute
              restricted
              path={routes.LoginPage}
              redirectTo={routes.ContactsPage}
            >
              <Login />
            </PublicRoute>

            <PrivateRoute
              path={routes.ContactsPage}
              redirectTo={routes.LoginPage}
            >
              <ContactsPage />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}

// const mapDispatchToProps = {
//   getCurrentUser: authOperations.getCurrentUser,
// };
// export default connect(null, mapDispatchToProps)(App);
