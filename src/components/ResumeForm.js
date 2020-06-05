import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import { Navbar, PageHeader } from "react-bootstrap";
import {
  Button,
  Modal,
  Table,
  Card,
  Form,
  Checkbox,
  Input,
  layout,
  Select,
  form,
} from "antd";
import "./HomePage/HomePage.css";
class ResumeForm extends Component {
  state = {
    applicant: {
      appid: "Ented ID sent in mail",
      name: "Enter Full Name",
      email: "Enter Email ID",
      college: "Enter college name",
      tenthmarks: "Enter 10th Percentage",
      twelfthmarks: "Enter 10th Percentage",
      engggpa: "Enter Engineering CGPA",
      skills: "yes /no ",
    },
    visible: false,
  };

  addApplicantDetails = (_) => {
    this.setState({
      visible: true,
    });
    const { applicant } = this.state;
    fetch(
      `http://localhost:4000/add?appid=${applicant.appid}&name=${applicant.name}&email=${applicant.email}&college=${applicant.college}&tenthmarks=${applicant.tenthmarks}&twelfthmarks=${applicant.twelfthmarks}&engggpa=${applicant.engggpa}&skills=${applicant.skills}`
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
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
    const { applicant } = this.state;
    return (
      <div className="Homepages">
        <NavBar />

        <Card
          title="Please Fill Your Details"
          style={{
            marginTop: "40px",
            width: 700,
            marginLeft: "550px",
            boxShadow: "1px 3px 23px 11px rgba(0,0,0,0.12)",
          }}
        >
          <Modal
            title="Your submission has been recorded."
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>
              {" "}
              Please refer your Email.
              <br /> We will notify you if you have been selected for the next
              round. <br />
              Thank You and All the best.
            </p>
          </Modal>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              value={applicant.appid}
              label="ID"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please enter your userId sent through mail ",
                },
              ]}
              onChange={(e) =>
                this.setState({
                  applicant: { ...applicant, appid: e.target.value },
                })
              }
            >
              <Input />
            </Form.Item>
            <Form.Item
              value={applicant.name}
              label="Full Name"
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please enter your Full Name ",
                },
              ]}
              onChange={(e) =>
                this.setState({
                  applicant: { ...applicant, name: e.target.value },
                })
              }
            >
              <Input />
            </Form.Item>
            <Form.Item
              value={applicant.email}
              label="Email Id"
              name="emailid"
              rules={[
                {
                  required: true,
                  message: "Please enter your Email Id ",
                },
              ]}
              onChange={(e) =>
                this.setState({
                  applicant: { ...applicant, email: e.target.value },
                })
              }
            >
              <Input />
            </Form.Item>
            <Form.Item
              value={applicant.college}
              label="College"
              name="college"
              rules={[
                {
                  required: true,
                  message: "Please enter the name of your college ",
                },
              ]}
              onChange={(e) =>
                this.setState({
                  applicant: { ...applicant, college: e.target.value },
                })
              }
            >
              <Input />
            </Form.Item>
            <Form.Item
              value={applicant.tenthmarks}
              label="10th Percentage"
              name="10percent"
              rules={[
                {
                  required: true,
                  message: "Please enter your 10th percentage",
                },
              ]}
              onChange={(e) =>
                this.setState({
                  applicant: { ...applicant, tenthmarks: e.target.value },
                })
              }
            >
              <Input />
            </Form.Item>
            <Form.Item
              value={applicant.twelfthmarks}
              label="12th Percentage"
              name="12percent"
              rules={[
                {
                  required: true,
                  message: "Please enter your 12th percentage",
                },
              ]}
              onChange={(e) =>
                this.setState({
                  applicant: { ...applicant, twelfthmarks: e.target.value },
                })
              }
            >
              <Input />
            </Form.Item>
            <Form.Item
              value={applicant.engggpa}
              label="Engineering CGPA"
              name="cgpa"
              rules={[
                {
                  required: true,
                  message: "Please enter your current CGPA ",
                },
              ]}
              onChange={(e) =>
                this.setState({
                  applicant: { ...applicant, engggpa: e.target.value },
                })
              }
            >
              <Input />
            </Form.Item>
            <Form.Item
              value={applicant.skills}
              onChange={(e) =>
                this.setState({
                  applicant: { ...applicant, skills: e.target.value },
                })
              }
              label="Are you familiar with Java,Machine Learning,SQL,Operating System and Computer Networks? yes/no"
              name="skills"
              rules={[
                {
                  required: true,
                  message: "Please enter Yes or No ",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                onClick={this.addApplicantDetails}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default ResumeForm;
