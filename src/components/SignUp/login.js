import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../Styles/login.css';

export class Loginpage extends React.Component {
    render() {
        return (
            <div>
                <Card className="login-card-body">

                    <Card.Body >
                        <Form className="login-form">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Submit
  </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}