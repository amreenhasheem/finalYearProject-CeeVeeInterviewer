import React, { Component } from "react";
import "./NavBar.css";
import { Modal } from "antd";
import { Icon } from "@material-ui/core";

class NavBar extends Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
          <div class="container">
            <a class="navbar-brand" href="/resumeform">
              <img
                src="https://cdn.onlinewebfonts.com/svg/img_362230.png"
                height="40"
                alt=""
              />
            </a>
            {/* <Icon><img src=""></img></Icon> */}
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/home">
                    Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={this.showModal}>
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/resumescreeningresult">
                    {" "}
                    Resume Details
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Modal
          title="About Us"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>
            <b>Aim</b>
            <br />
            Our aim is to automate the technical interview process beginning
            with scanning the resume and retrieving skills.
            <br />
            The interview environment is simulated in a VR headset and a virtual
            assistant, in place of a HR.
            <br />
            It will ask a preceding questions based on the previous answers
            given, in an adaptive questionnaire manner to check his knowledge in
            the required fields.
          </p>
          <br />
          <p>
            <b>Our Objectives are:</b>
            <br />
            <b>-></b>To automate test paper evaluation process and to provide
            score to student based on correctness of the answer.
            <br />
            <b>-></b>To Keep record of student performance and to reduce the
            stress of having to go and physically be present in institutions..
          </p>
          <p></p>
        </Modal>
      </div>
    );
  }
}

export default NavBar;
