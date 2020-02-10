import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "react-bootstrap";
import "./components/styles.css";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Messages from "./components/Messages/Messages";
import NotFound from "./components/Not Found/NotFound";

class App extends React.Component {
  render() {
    const ComponentToHide = props => {
      const { location } = props;

      if (location.pathname.match("/Login")) {
        return null;
      } else if (location.pathname.match("/Message")) {
        return <Messages />;
      } else if (location.pathname.match("/")) {
        return <Sidebar />;
      } else {
        return <NotFound />;
      }
    };

    const ComponentThatHides = withRouter(ComponentToHide);

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/Login" component={Login} name="active" />
            <ComponentThatHides />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
