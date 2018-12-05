import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import { signup } from "../../apis/auth";

class Signup extends Component {
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

  registerUser = () => {
    const { email, password } = this.state;
    this.setState(() => ({
      loading: true
    }));
    signup(email, password)
      .then(user => {
        toast.success("Register Successfully");
        this.setState(() => ({
          loading: false
        }));
        this.props.history.push("/");
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
            <span className="login100-form-title p-b-53">Sign Up</span>
            <Input label="Email" name="email" onChange={this.handleChange} />
            <Input
              label="Password"
              name="password"
              onChange={this.handleChange}
              secret
            />
            <Button text="Sign Up" onClick={this.registerUser} />
            <div className="w-full text-center p-t-55">
              <span className="txt2">Already member?</span>

              <Link to="/" className="txt2 bo1">
                Sign in now
              </Link>
            </div>
          </form>
        </div>
        {loading && <div className="loader" />}
      </div>
    );
  }
}

export default Signup;
