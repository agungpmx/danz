import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import './App.css';
import { useSelector } from "react-redux"
import Layout from './Layout';
function App() {
  const { base, routes} = useSelector(state => state?.router)



  return (
      <Router>
        <Switch>
          {/* <Route exact path="/">
            <Redirect to="/home" />
          </Route> */}
          <Layout>
          {
            base?.map((item, index ) => (
              <Route exact key={index} path={item.path} component={() => (
                routes[index]
              )}/>
            ))
          }
          </Layout>
        </Switch>
      </Router>
  );
}

export default App;
