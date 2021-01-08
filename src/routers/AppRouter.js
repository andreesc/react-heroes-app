import {
	BrowserRouter as Router,
	Switch
} from 'react-router-dom';
import LoginScreen from "./../components/login/LoginScreen";

import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import {useContext} from 'react';
import {AuthContext} from "../auth/AuthContext";
import PublicRoute from "./PublicRoute";

function AppRouter () {

    const {user} = useContext(AuthContext);

 return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        	<PublicRoute isAuthenticated={user.logged} exact path="/login" component={LoginScreen} />
        	<PrivateRoute
                path="/"
                component={DashboardRoutes}
                isAuthenticated={user.logged}
            />
        </Switch>
      </div>
    </Router>
  );
}
export default AppRouter;