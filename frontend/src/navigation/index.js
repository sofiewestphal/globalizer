import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import MainMenu from '../components/MainMenu';
import Footer from '../components/Footer';
import BrowsingScreen from '../screens/browsingScreen';
import LandingScreen from '../screens/LandingScreen';
import CreateActivityScreen from '../screens/CreateActivityScreen';
import YourActivitiesScreen from '../screens/YourActivitiesScreen';

const Auth = ({
  component: Comp, loggedIn, path, ...rest
}) => (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (!loggedIn) {
          return <Comp {...props} />;
        }
        return <Redirect to="/browse" />;
      }}
    />
  );

const ProtectedRoute = ({
  component: Comp, loggedIn, path, ...rest
}) => (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (loggedIn) {
          return (
            <div>
              <MainMenu />
              <Comp {...props} />
              <Footer />
            </div>
          );
        }
        return <Redirect to="/landing" />;
      }}
    />
  );

const Navigation = ({ userId }) => (
  <div className="page">
    <Switch>
      {/* <Route exact path="/" component={LandingScreen} /> */}
      <Auth path="/landing" loggedIn={userId !== ''} component={LandingScreen} />
      <ProtectedRoute path="/browse" loggedIn={userId !== ''} component={BrowsingScreen} />
      <ProtectedRoute path="/create" loggedIn={userId !== ''} component={CreateActivityScreen} />
      <ProtectedRoute path="/activities" loggedIn={userId !== ''} component={YourActivitiesScreen} />
      <ProtectedRoute path="/" loggedIn={userId !== ''} component={BrowsingScreen} />
      {/* <Route path="/browse" component={App} /> */}
    </Switch>
  </div>
);

// const App = () => (
//   <div className="page">
//     <MainMenu />
//     <Switch>
//       <Route path="/browse" component={BrowsingScreen} />
//       <Route path="/create" component={CreateActivityScreen} />
//       <Route path="/activities" component={YourActivitiesScreen} />
//     </Switch>
//     <Redirect to="/browse" />
//   </div>
// );

Navigation.propTypes = {
  userId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

const mapStateToProps = state => ({
  userId: state.auth.userId,
});

export default withRouter(connect(mapStateToProps)(Navigation));
