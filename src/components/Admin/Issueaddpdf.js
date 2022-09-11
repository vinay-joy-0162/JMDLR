
import React, {Component}from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


class Pdfs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      // showIssue: false,
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
    console.log(this.state.show);
  };
  // handleCloseIssue = () => {
  //   this.setState({ showIssue: false });
  // };
  // handleShowIssue = () => {
  //   this.setState({ showIssue: true });
  //   console.log(this.state.showIssue);
  // };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"> React Bootstrap</Navbar.Brand>
         
        </Navbar>

        {/* <h2 style={{ textAlign: "center" }}>Volumes</h2> */}
        <Container>
          <Button style={{ float: "right" }} onClick={this.handleShow}>
            Add PDF
          </Button>
        </Container>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add PDF </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onSubmit}>
              <label htmlFor="Pdfname">Pdf Name</label>
              <input
                id="Pdfname"
                name="Pdfname"
                onChange={this.onChange}
                value={this.state.VolumeNo}
                type="text"
                className="form-control email-input"
                placeholder="Add the Name of PDF "
              />
              <br />
              <label htmlFor="Authorname">Author's Name </label>
              <input
                id="Authorname"
                name="Authorname"
                onChange={this.onChange}
                value={this.state.VolumeYear}
                type="text"
                className="form-control email-input"
                placeholder="Add the names of Authors "
              />

              <br />


              <label htmlFor="doilink">DOI</label>
              <input
                id="Doilink"
                name="Doilink"
                onChange={this.onChange}
                value={this.state.VolumeYear}
                type="text"
                className="form-control email-input"
                placeholder="DOI Link "
              />

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

      </div >
    );
  }
}
export default Pdfs;

// import ReactDOM from "react-dom";

// class FileUploadButton extends Component {
//   handleFileUpload = event => {
//     console.log(event.target.files[0].name);
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <input
//           ref="fileInput"
//           onChange={this.handleFileUpload}
//           type="file"
//           style={{ display: "none" }}
//           // multiple={false}
//         />
//         <button onClick={() => this.refs.fileInput.click()}>Upload File</button>
//       </React.Fragment>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<FileUploadButton />, rootElement);









