import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { signIn } from "../../config/api";
import { jwtDecode } from "jwt-decode";
// import { toast } from 'react-toastify'; // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS file for react-toastify
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/vendor/unicons-2.0.1/css/unicons.css";
import "../../assets/vendor/OwlCarousel/assets/owl.carousel.css";
import "../../assets/vendor/OwlCarousel/assets/owl.theme.default.min.css";
import "../../assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "../../styles/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/night-mode.css";

const SignIn = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false); // State to manage password visibility
    const navigate = useNavigate();

    const handleSignIn = async (event) => {
        event.preventDefault();
        setMessage("");
        try {
            const response = await signIn(userName, password);
            if (response.status === 200) {
                const jwtToken = response.headers.get("json-web-token");
                if (jwtToken) {
                    localStorage.setItem("token", jwtToken);
                    const decoded = jwtDecode(jwtToken);
                    const role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                    if (["ADMIN", "VISITOR", "CHECKINGSTAFF", "EVENTOPERATOR", "SPONSOR"].includes(role)) {
                        navigate("/");
                    } else {
                        window.location.href = "/";
                    }
                    const userName = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
                    setMessage("Sign in successful!");
                }
            } else if (response.status === 401) {
                setMessage("Please check your email and password.");
                localStorage.removeItem("token");
            } else if (response.status === 500) {
                setMessage("Server Error: Please try again later.");
                localStorage.removeItem("token");
            } else {
                setMessage("Unexpected Error: Please try again.");
                localStorage.removeItem("token");
            }
        } catch (err) {
            setMessage("Network Error: Please check your connection.");
            localStorage.removeItem("token");
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="form-wrapper">
            <div className="app-form">
                <div className="app-form-sidebar">
                    <div className="sidebar-sign-logo">
                        <img src="images/logo.svg" alt="Logo" />
                    </div>
                    <div className="sign_sidebar_text">
                        <h1>Không bỏ lỡ bất kỳ sự kiện Cùng FEventopia</h1>
                    </div>
                </div>
                <div className="app-form-content">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-md-10">
                                <div className="app-top-items">
                                    <Link to="/">
                                        <div className="sign-logo" id="logo">
                                            <img src="images/logo.svg" alt="Logo" />
                                            <img className="logo-inverse" src="images/dark-logo.svg" alt="Dark Logo" />
                                        </div>
                                    </Link>
                                    <div className="app-top-right-link">
                                        Chưa có tài khoản?
                                        <Link className="sidebar-register-link" to="/sign-up">Đăng kí</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-md-7">
                                <div className="registration">
                                    <form onSubmit={handleSignIn}>
                                        <h2 className="registration-title">ĐĂNG NHẬP VÀO FEVENTOPIA</h2>
                                        {message && <div className="alert alert-info">{message}</div>}
                                        <div className="form-group mt-5">
                                            <label className="form-label">Email/ Tên tài khoản*</label>
                                            <input
                                                className="form-control h_50"
                                                type="text"
                                                placeholder="Nhập Email hoặc tên tài khoản"
                                                value={userName}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group mt-4">
                                            <div className="field-password">
                                                <label className="form-label">Mật khẩu*</label>
                                                <Link className="forgot-pass-link" to="/forgot-password">Quên mật khẩu?</Link>
                                            </div>
                                            <div className="loc-group position-relative">
                                                <input
                                                    className="form-control h_50"
                                                    type={passwordVisible ? "text" : "password"}
                                                    placeholder="Nhập mật khẩu"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                                <span className="pass-show-eye" onClick={togglePasswordVisibility}>
                                                    <i className={passwordVisible ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                                                </span>
                                            </div>
                                        </div>
                                        <button className="main-btn btn-hover w-100 mt-4" type="submit">ĐĂNG NHẬP <i className="fas fa-sign-in-alt ms-2"></i></button>
                                    </form>
                                    <div className="new-sign-link">
                                        Chưa có tài khoản?
                                        <Link className="signup-link" to="/sign-up">Đăng kí</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright-text">
                        <p className="mb-0">© 2024, <strong>FEventopia</strong>. All rights reserved. Powered by FPT University</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;