import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import { login } from "../../apis/auth";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value
    }));
  };

  loginUser = () => {
    const { email, password } = this.state;
    this.setState(() => ({
      loading: true
    }));
    login(email, password)
      .then(user => {
        toast.success("Login Successfully");
        this.setState(() => ({
          loading: false
        }));
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="container-login100 bgImage">
        <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <form className="login100-form validate-form flex-sb flex-w">
            <span className="login100-form-title p-b-53">Sign In</span>
            <Input label="Email" name="email" onChange={this.handleChange} />
            <Input
              label="Password"
              name="password"
              onChange={this.handleChange}
              secret
            />
            <Button text="Sign In" onClick={this.loginUser} />
            <div className="w-full text-center p-t-55">
              <span className="txt2">Not a member?</span>

              <Link to="/signup" className="txt2 bo1">
                Sign up now
              </Link>
            </div>
          </form>
        </div>
        {loading && <div className="loader" />}
      </div>
    );
  }
}

export default Login;
