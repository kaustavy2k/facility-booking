import React, { Component } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import Spinner from "../Spinner/spinner";
import Facilities from "../Facilities/Facilities";
import Header from "../Header/Header";
class Home extends Component {
  state = {
    login: false,
    loading: true,
  };
  componentDidMount() {
    axios
      .get("http://localhost:2020/", { withCredentials: true })
      .then((res) => {
        this.setState({ login: true, loading: false });
      })
      .catch((res) => {
        this.setState({ login: false, loading: false });
      });
  }
  render() {
    let display;
    let load = this.state.loading;
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
        <div>
          <Header />
          <Facilities />
        </div>
      );
    }
    return (
      <React.Fragment>
        {display}
        {load ? <Spinner /> : ""}
      </React.Fragment>
    );
  }
}
export default Home;
