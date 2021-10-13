import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import AuthProvider from "./components/context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  //const { user } = useFirebase();

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/profile">
              <Profile></Profile>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
           
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
