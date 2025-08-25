import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthScreen from './components/AuthScreen';
import LandingScreen from './components/LandingScreen';
import Dashboard from './components/Dashboard/DashboardTabs';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Switch>
        {!isAuthenticated ? (
          <Route path="/" exact>
            <AuthScreen onAuthenticate={handleAuthentication} />
          </Route>
        ) : (
          <>
            <Route path="/" exact>
              <LandingScreen />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;