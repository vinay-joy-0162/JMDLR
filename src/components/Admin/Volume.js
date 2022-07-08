import React from "react";

import "./Volume.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
class Volume extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      showIssue: false,
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
    console.log(this.state.show);
  };
  handleCloseIssue = () => {
    this.setState({ showIssue: false });
  };
  handleShowIssue = () => {
    this.setState({ showIssue: true });
    console.log(this.state.showIssue);
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"> React Bootstrap</Navbar.Brand>
          </Container>
        </Navbar>

        <h2 style={{ textAlign: "center" }}>Volumes</h2>
        <Container>
          <Button style={{ float: "right" }} onClick={this.handleShow}>
            Add Volume
          </Button>
        </Container>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Volume </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onSubmit}>
              <label htmlFor="VolumeNo">Add Volume Title </label>
              <input
                id="VolumeNo"
                name="VolumeNo"
                onChange={this.onChange}
                value={this.state.VolumeNo}
                type="text"
                className="form-control email-input"
                placeholder="Add the title of volume "
              />
              <br />
              <label htmlFor="VolumeNo">Add Volume Year </label>
              <input
                id="VolumeYear"
                name="VolumeYear"
                onChange={this.onChange}
                value={this.state.VolumeYear}
                type="text"
                className="form-control email-input"
                placeholder="Add the year of volume  "
              />

              <br />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <br></br>

        <br></br>
        <Container>
          <div>
            <Card>
              <Card.Header>
                <span style={{ fontSize: "25px" }}>Volume 4 2021</span>{" "}
                <Button
                  style={{ float: "right" }}
                  onClick={this.handleShowIssue}
                >
                  Add Issue
                </Button>{" "}
                <Modal
                  show={this.state.showIssue}
                  onHide={this.handleCloseIssue}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Add Issue </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form onSubmit={this.onSubmit}>
                      <label htmlFor="IssueNo">Add Volume Title </label>
                      <input
                        id="IssueNo"
                        name="IssueNo"
                        onChange={this.onChange}
                        value={this.state.IssueNo}
                        type="text"
                        className="form-control email-input"
                        placeholder="Add the title of Issue "
                      />
                      <br />
                      <label htmlFor="IssueNo">Add Issue Year </label>
                      <input
                        id="IssueYear"
                        name="IssueYear"
                        onChange={this.onChange}
                        value={this.state.IssueYear}
                        type="text"
                        className="form-control email-input"
                        placeholder="Add the year of Issue  "
                      />

                      <br />
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleCloseIssue}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={this.handleCloseIssue}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Header>

              <Card.Body>
                <div class="grid-container">
                  <div class="grid-item">1</div>
                  <div class="grid-item">2</div>
                  <div class="grid-item">3</div>
                  <div class="grid-item">4</div>
                  <div class="grid-item">5</div>
                  <div class="grid-item">6</div>
                  <div class="grid-item">7</div>
                  <div class="grid-item">8</div>
                  <div class="grid-item">9</div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

export default Volume;
