import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import { PageHeader } from "react-bootstrap";
import { Modal, Table, Select } from "antd";
import Button from "@material-ui/core/Button";
import "./HomePage/HomePage.css";
class Details extends Component {
  state = {
    modalVisible: false,
  };
  modalState = () => {
    this.state.modalVisible = true;
  };
  componentDidMount() {
    console.log("component mounted");
    console.log("state", this.props);
  }
  render() {
    let userLogColumns = [
      {
        title: "User ID",
        dataIndex: "userid",
        key: "userid",
      },
      {
        title: "Serial No.",
        dataIndex: "serialno",
        key: "serialno",
      },
      {
        title: "Questions",
        dataIndex: "questions",
        key: "questions",
      },
      {
        title: "Correct Answers",
        dataIndex: "correctanswers",
        key: "correctanswers",
      },
      {
        title: "Given Answers",
        dataIndex: "givenanswers",
        key: "givenanswers",
      },

      {
        title: "Score",
        key: "action",
        render: () => (
          <Select defaultValue={0} style={{ width: 120 }}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
          </Select>
        ),
      },
    ];
    return (
      <div className="Homepages">
        <NavBar />
        <div style={{ marginTop: "90px" }}>
          <PageHeader style={{ color: "white" }}></PageHeader>
          <Table
            style={{
              marginTop: "20px",
              alignItems: "center",
              width: "85%",
              marginLeft: "9em",
              backgroundColor: "white",
              boxShadow: "1px 3px 23px 11px rgba(0,0,0,0.75)",
            }}
            dataSource={this.props.location.state.detailsValue.data}
            columns={userLogColumns}
          />

          <Button
            onClick={() => {
              this.props.history.push("/finalpage", {
                userName: this.props.location.state.userName,
                Id: this.props.location.state.Id,
              });
            }}
            style={{
              marginTop: "10px",
              backgroundColor: "#4c4c4c",
              color: "white",
              boxShadow: "1px 3px 23px 11px rgba(0,0,0,0.12)",
            }}
          >
            Qualify
          </Button>
        </div>
      </div>
    );
  }
}

export default Details;
