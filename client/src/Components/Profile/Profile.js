import React, { Component } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import Spinner from "../Spinner/spinner";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import UserProfile from "./Userprofile";
class Profile extends Component {
  state = {
    login: false,
    loading: true,
    name: "",
  };
  componentDidMount() {
    if (!this.props.isLogin) {
      axios
        .get("http://localhost:2020/", { withCredentials: true })
        .then((res) => {
          this.setState({ login: true, loading: false, name: res.data.name });
        })
        .catch((res) => {
          this.setState({ login: false, loading: false });
        });
    }
  }
  render() {
    let display, load;
    if (this.props.isLogin) {
      display = (
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <Home isLogin={this.state.login} />
              </div>
            )}
          />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <div>
                <div>
                  <Header name={this.props.name} />
                  <UserProfile />
                </div>
              </div>
            )}
          />
        </Switch>
      );
    } else {
      load = this.state.loading;
      if (!this.state.login) {
        display = (
          <div>
            <Nav />
            <div className="auth-wrapper">
              <div className="auth-inner">
                <h2>Welcome to Facility Booking!</h2>
              </div>
            </div>
          </div>
        );
      } else {
        display = (
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <div>
                  <Home isLogin={this.state.login} />
                </div>
              )}
            />
            <Route
              exact
              path="/profile"
              render={(props) => (
                <div>
                  <div>
                    <Header name={this.state.name} />
                    <UserProfile />
                  </div>
                </div>
              )}
            />
          </Switch>
        );
      }
    }
    return (
      <React.Fragment>
        {display}
        {load ? <Spinner /> : ""}
      </React.Fragment>
    );
  }
}
export default Profile;