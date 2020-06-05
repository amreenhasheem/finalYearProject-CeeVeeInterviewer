import React, { Component } from "react";
import { PageHeader, Panel, Image, Button } from "react-bootstrap";
import NavBar from "./NavBar/NavBar";
import { Card } from "antd";
import "./HomePage/HomePage.css";

const imageHack = {
  height: "200px",
};
const linkHackerRank = {
  paddingTop: "30px",
};
class FinalPage extends Component {
  render() {
    return (
      <div className="Homepages">
        <NavBar />
        <div className="appicantInfoOnCodingTestPage">
          <Card
            style={{
              width: "50%",
              marginLeft: "360px",
              marginTop: "40px",
              boxShadow: "1px 3px 23px 11px rgba(0,0,0,0.75)",
            }}
          >
            <p style={{ fontSize: "30px", font: "blackletter" }}>
              <b>CONGRATULATIONS ON FINISHING THE TEST </b>
            </p>{" "}
            <br /> <br />
            <p style={{ fontSize: "20px" }}>
              {" "}
              ID : {this.props.location.state.Id} <br />
              userName : {this.props.location.state.userName}
            </p>
            <p>
              <img
                style={imageHack}
                src="https://cdn.clipart.email/876754ebbd9665ab3df299cd82361781_arbitrary-file-read-vulnerability-in-hackerrank_2917-1667.png"
                alt="hackerrank"
              />
            </p>
            <p>
              <Button
                bsSize="large"
                bsStyle="success"
                href="https://www.hackerrank.com/"
              >
                Click to take test
              </Button>
            </p>
          </Card>
        </div>
      </div>
    );
  }
}

export default FinalPage;
