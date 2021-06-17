import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";

// /**
//  * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
//  * - В противном случае рендерит компонент
//  */
// const PublicRoute = ({
//   component: Component,
//   isAuthenticated,
//   redirectTo,
//   ...routeProps
// }) => (
//   <Route
//     {...routeProps}
//     render={(props) =>
//       isAuthenticated && routeProps.restricted ? (
//         <Redirect to={redirectTo} />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PublicRoute);
export default function PublicRoute({
  isAuthenticated,
  children,
  redirectTo,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
