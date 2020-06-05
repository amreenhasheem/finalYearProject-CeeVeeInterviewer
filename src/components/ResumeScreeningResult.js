import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import { Table } from "antd";
import "./HomePage/HomePage.css";

class ResumeScreeningResult extends Component {
  state = {
    passedApplicants: [],
  };
  componentDidMount() {
    this.getApplicants();
    console.log(
      "Passed applicants after screening ",
      this.state.passedApplicants
    );
  }
  getApplicants = (_) => {
    fetch("http://localhost:4000/applicantdetails")
      .then((response) => response.json())
      .then((response) => this.setState({ passedApplicants: response.data }))
      .catch((err) => console.error(err));
  };
  render() {
    let passedApplicantsColumn = [
      {
        title: "ID",
        dataIndex: "appid",
        key: "appid",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "College",
        dataIndex: "college",
        key: "college",
      },
      {
        title: "Email ID",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "10th Percentage",
        dataIndex: "tenthmarks",
        key: "tenthmarks",
      },
      {
        title: "12th Percentage",
        dataIndex: "twelfthmarks",
        key: "twelfthmarks",
      },
      {
        title: "Engineering CGPA",
        dataIndex: "engggpa",
        key: "engggpa",
      },
      {
        title: "Skills",
        dataIndex: "skills",
        key: "skills",
      },
    ];
    return (
      <div className="Homepages">
        <NavBar />
        <div style={{ marginTop: "90px" }}>
          <Table
            style={{
              alignItems: "center",
              width: "85%",
              marginLeft: "9em",
              backgroundColor: "white",
              boxShadow: "1px 3px 23px 11px rgba(0,0,0,0.75)",
            }}
            dataSource={this.state.passedApplicants}
            columns={passedApplicantsColumn}
          ></Table>
        </div>
      </div>
    );
  }
}

export default ResumeScreeningResult;
