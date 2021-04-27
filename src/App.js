import Drawer from "./components/Drawer/MiniDrawer";
import PrivateRoute from "./AuthService/PrivateRoute/PrivateRoute.Route";
import React, {useState} from "react";
import SignIn from "./components/SignIn/SignIn.component";
import { Switch, Route, BrowserRouter as Router, Redirect} from "react-router-dom";

function App(){

  /*
      signed determines if the current session has a authedcated user or not
      updateSigned is drilled down as props to update it at various children
  */
  const [signed,updateSigned] = useState(false);
    
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <PrivateRoute Component={Drawer} display={signed} updateDisplay={updateSigned}/>
            </Route>
            <Route exact path="/signin"> 
              {
                signed?
                <Redirect to="/" />:
                <SignIn signed={signed}  updateSigned={updateSigned}/>

              } 
            </Route>
          </Switch>
        </Router>
      </div>
    )
}

export default App;
