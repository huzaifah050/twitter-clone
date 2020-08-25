import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoutes({ component: Component, ...rest }) {
  const auth = useSelector((state) => state.firebase.auth);
  console.log(auth);
  console.log(isLoaded(auth));
  console.log(isEmpty(auth));

  if (auth.uid && !isEmpty(auth)) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(props);
        return <Redirect to={{ pathname: '/welcome' }} />;
      }}
    />
  );
}

export default ProtectedRoutes;

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { isLoaded, isEmpty } from 'react-redux-firebase';
// import { useSelector } from 'react-redux';
// const PrivateRoute = ({ children, ...remainingProps }) => {
//   const auth = useSelector((state) => state.firebase.auth);
//   console.log(auth);
//   return (
//     <Route
//       {...remainingProps}
//       render={({ location }) =>
//         isLoaded(auth) && !isEmpty(auth) ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/',
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };
// export default PrivateRoute;
