import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import { PageHeader } from "react-bootstrap";
import { Table } from "antd";
import Button from "@material-ui/core/Button";
import * as axios from "axios";
import { withRouter } from "react-router-dom";
import "./HomePage.css";

class HomePage extends Component {
  state = {
    user1: [],
    userValue: [],
  };
  componentDidMount() {
    this.getUser();
  }
  getUser = (_) => {
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((response) => this.setState({ user1: response.data }))
      .catch((err) => console.error(err));
  };
  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    let userColumns = [
      {
        title: "User ID",
        dataIndex: "userid",
        key: "userid",
        filteredValue: filteredInfo.userid || null,
        onFilter: (value, record) => record.userid.includes(value),
        sorter: (a, b) => a.userid.length - b.userid.length,
        sortOrder: sortedInfo.columnKey === "userid" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "First Name",
        dataIndex: "firstname",
        key: "firstname",
        filteredValue: filteredInfo.firstname || null,
        onFilter: (value, record) => record.firstname.includes(value),
        sorter: (a, b) => a.firstname.length - b.firstname.length,
        sortOrder: sortedInfo.columnKey === "firstname" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Last Name",
        dataIndex: "lastname",
        key: "lastname",
        filteredValue: filteredInfo.lastname || null,
        onFilter: (value, record) => record.lastname.includes(value),
        sorter: (a, b) => a.lastname.length - b.lastname.length,
        sortOrder: sortedInfo.columnKey === "lastname" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Username",
        dataIndex: "username",
        key: "username",
        filteredValue: filteredInfo.username || null,
        onFilter: (value, record) => record.username.includes(value),
        sorter: (a, b) => a.username.length - b.username.length,
        sortOrder: sortedInfo.columnKey === "username" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Password",
        dataIndex: "password",
        key: "password",
      },
      {
        title: "Email ID",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Phone Number",
        dataIndex: "phone",
        key: "phone",
      },
      {
        title: "College",
        dataIndex: "college",
        key: "college",
        filteredValue: filteredInfo.college || null,
        onFilter: (value, record) => record.college.includes(value),
        sorter: (a, b) => a.college.length - b.college.length,
        sortOrder: sortedInfo.columnKey === "college" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Button
            size="small"
            style={{
              backgroundColor: "#4c4c4c",
              color: "white",
              boxShadow: "1px 3px 23px 11px rgba(0,0,0,0.12)",
            }}
            onClick={() => {
              console.log();
              console.log(record);
              axios
                .get(`http://localhost:4000/users/` + record.userid)
                .then((response) => {
                  console.log("response for details ", response.data);

                  this.props.history.push("/details", {
                    userName: record.firstname,
                    Id: record.userid,
                    detailsValue: response.data,
                  });
                });
            }}
          >
            View Details
          </Button>
        ),
      },
    ];

    return (
      <div className="Homepages">
        <NavBar />

        <div style={{ marginTop: "90px" }}>
          <Button style={{ color: "white" }} onClick={this.clearAll}>
            Clear Filters
          </Button>

          <Table
            style={{
              alignItems: "center",
              width: "85%",
              marginLeft: "9em",
              backgroundColor: "white",
              boxShadow: "1px 3px 23px 11px rgba(0,0,0,0.75)",
            }}
            dataSource={this.state.user1}
            columns={userColumns}
            onChange={this.handleChange}
          ></Table>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);
