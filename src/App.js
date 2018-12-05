import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import * as firebase from "firebase";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";

firebase.initializeApp({
  apiKey: "AIzaSyCc8FxGSQALmp6x5rs4hIey7na5iug10vU",
  authDomain: "reactfire-7b424.firebaseapp.com",
  databaseURL: "https://reactfire-7b424.firebaseio.com",
  projectId: "reactfire-7b424",
  storageBucket: "reactfire-7b424.appspot.com",
  messagingSenderId: "236977303164"
});

firebase.database.enableLogging(true);
firebase.database.enableLogging(function(logMessage) {
  // Add a timestamp to the messages.
  console.log(new Date().toISOString() + ': ' + logMessage);
});

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div className="limiter">
            <Routes />
          </div>
          <ToastContainer />
        </>
      </Router>
    );
  }
}

export default App;
