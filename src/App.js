import React from 'react';
import { Switch, Route } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import { routes } from './routes';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              component={route.component}
              path={route.path}
            />
          ))}
        </Switch>
      </main>
      <Footer />
    </div>
  );
}