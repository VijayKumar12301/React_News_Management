import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./Register.css";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { addUser } from "../../service/user";
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();
  const userSchema = yup.object({
    userName: yup
      .string("Only String is allowed")
      .required("field is required"),
    emailID: yup.string().email().required("Email is required"),
    department: yup.string(),
    phoneNumber: yup.number().required("Phone number is required"),
    password: yup.string().required("Password is required"),
  });

  const userProfile = useFormik({
    initialValues: {
      userName: "",
      emailID: "",
      department: "",
      phoneNumber: 0,
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: () => {
      addUser(userProfile.values)
        .then((res) => {
          if (res.status === 201) {
            alert("User Added Successfully");
            console.log(res.data);
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    },
    onReset: () => {},
  });

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Form onSubmit={userProfile.handleSubmit} className="mycontainer">
            <h1 className="text-center mb-4">Register New User</h1>

            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                name="userName"
                type="text"
                value={userProfile.values.userName}
                placeholder="Enter username"
                onChange={userProfile.handleChange}
              />
              {userProfile.errors.userName && (
                <small className="error">{userProfile.errors.userName}</small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                name="emailID"
                type="email"
                value={userProfile.values.emailID}
                placeholder="Enter email"
                onChange={userProfile.handleChange}
              />
              {userProfile.errors.emailID && (
                <small className="error">{userProfile.errors.emailID}</small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control
                name="department"
                type="text"
                value={userProfile.values.department}
                placeholder="Enter department"
                onChange={userProfile.handleChange}
              />
              {userProfile.errors.department && (
                <small className="error">{userProfile.errors.department}</small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                name="phoneNumber"
                type="number"
                value={userProfile.values.phoneNumber}
                placeholder="Enter phone number"
                onChange={userProfile.handleChange}
              />
              {userProfile.errors.phoneNumber && (
                <small className="error">{userProfile.errors.phoneNumber}</small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={userProfile.values.password}
                placeholder="Enter password"
                onChange={userProfile.handleChange}
              />
              {userProfile.errors.password && (
                <small className="error">{userProfile.errors.password}</small>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" className="mb-3 w-100">
              Submit
            </Button>

            <Button
              type="button"
              onClick={userProfile.handleReset}
              className="w-100"
              style={{ backgroundColor: "red", color: "black" }}
            >
              Reset
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
