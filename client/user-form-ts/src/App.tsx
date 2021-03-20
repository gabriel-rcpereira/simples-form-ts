import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './contexts';
import Dashboard from './components/pages/Dashboard';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Dashboard />            
            </Route>
          </Switch>        
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;