import React, { Component } from "react";
import * as firebase from "firebase/app";
import ReactTable from "react-table";

class Dashboard extends Component {
  state = {
    properties: [],
    loading: true
  };
  componentDidMount() {
    var database = firebase.database();
    var leadsRef = database.ref("properties").limitToFirst(25);
    leadsRef.on("value", (snapshot) => {
      var properties = snapshot.val();
      this.setState(() => ({
        properties,
        loading: false
      }));
    });
  }

  render() {
    const { properties, loading } = this.state;
    const columns = [
      {
        Header: "Date",
        accessor: "date"
      },
      {
        Header: "Image",
        accessor: "image",
        Cell: props => <img src={props.value} alt="img" width="50" height="50"/>
      },
      {
        Header: "Name",
        accessor: "name" // String-based value accessors!
      },
      {
        Header: "Description",
        accessor: "description" // String-based value accessors!
      },
      
    ];

    return (
      <div className="container">
        <ReactTable data={properties} columns={columns} />
        {loading && <div className="loader" />}
      </div>
    );
  }
}

export default Dashboard;
