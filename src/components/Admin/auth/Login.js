import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import { Link, withRouter } from "react-router-dom";

import Card from 'react-bootstrap/Card';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to home
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/admin/archives");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/admin/archives"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email.toLowerCase(),
            password: this.state.password
        };

        this.props.loginUser(userData);
    }

    toggleEye = (e) => {
        const togglePassword = document.querySelector('#togglePassword');
        const password = document.querySelector('#password');

        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        // toggle the eye slash icon
        togglePassword.classList.toggle('a');
        if(togglePassword.classList.contains('a')){
            togglePassword.innerHTML = "Hide password";
        }else{
            togglePassword.innerHTML = "Show password";
        }
    }


    render() {
        const { errors } = this.state;
        return (<div>
            <div className="big-container">
            <div className="container">
                <Card className="login-card" >
                    <Card.Body>
                        <Card.Title className="login-text">Let's Login!</Card.Title>
                        <div className="card-text" tag="div">
                            <form noValidate onSubmit={this.onSubmit}>


                                <div className="form-row">
                                    <div className="col">
                                        <input
                                            onChange={this.onChange}
                                            id="email"
                                            type="email"
                                            className="form-control email-input"
                                            placeholder="Email"
                                            required
                                        />
                                       
                                        <div className="invalid-feedback" style={{ display: "inline-block" }}>
                                            {errors.email} {errors.emailNotFound}
                                        </div>
                                 
                                        <input
                                            onChange={this.onChange}
                                            id="password"
                                            type="password"
                                            className="form-control password-input"
                                            placeholder="Password"
                                            required
                                        />
                                        <u><p id="togglePassword" onClick={this.toggleEye.bind(this)}>Show password</p></u>

                                        <div className="invalid-feedback" style={{ display: "inline-block" }}>
                                            {errors.password} {errors.passwordincorrect}
                                        </div>

                                        <Link to="/forgot-password-email"><div>Forgot Password</div></Link>
                                    </div> 
                                </div> 

                                <input type="submit" className="go-button d-flex mx-auto mt-2" value="Lets Login!" />
                            </form>
                        </div>

                    </Card.Body>
                </Card>
            </div>
        </div></div>

        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
