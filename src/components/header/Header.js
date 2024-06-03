import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <header className="header">
            <div className="header-inner">
                <nav className="navbar navbar-expand-lg bg-barren barren-head navbar fixed-top justify-content-sm-start pt-0 pb-0">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon">
                                <i className="fa-solid fa-bars"></i>
                            </span>
                        </button>
                        <Link className="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 me-auto" to="/">
                            <div className="res-main-logo">
                                <img src="images/logo-icon.svg" alt="Logo" />
                            </div>
                            <div className="main-logo" id="logo">
                                <img src="images/logo.svg" alt="Logo" />
                                <img className="logo-inverse" src="images/dark-logo.svg" alt="Dark Logo" />
                            </div>
                        </Link>
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <div className="offcanvas-logo" id="offcanvasNavbarLabel">
                                    <img src="images/logo.svg" alt="Logo" />
                                </div>
                                <button type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                            <div className="offcanvas-body">
                                <div className="offcanvas-top-area">
                                    <div className="create-bg">
                                        <Link to="/create" className="offcanvas-create-btn">
                                            <i className="fa-solid fa-calendar-days"></i>
                                            <span>MUA VÉ NGAY!</span>
                                        </Link>
                                    </div>
                                </div>
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe_5">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/"><strong>TRANG CHỦ</strong></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/explore"><strong>KHÁM PHÁ</strong></Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <strong>HỖ TRỢ</strong>
                                        </Link>
                                        <ul className="dropdown-menu dropdown-submenu">
                                            <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
                                            <li><Link className="dropdown-item" to="/help_center">CÂU HỎI THƯỜNG GẶP</Link></li>
                                            <li><Link className="dropdown-item" to="/contact_us">LIÊN HỆ</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pages
                                        </Link>
                                        <ul className="dropdown-menu dropdown-submenu">
                                            <li>
                                                <Link className="dropdown-item submenu-item" to="#">Other Pages</Link>
                                                <ul className="submenu dropdown-menu">
                                                    <li><Link className="dropdown-item pe-5" to="/sign_in">Sign In</Link></li>
                                                    <li><Link className="dropdown-item pe-5" to="/sign_up">Sign Up</Link></li>
                                                    <li><Link className="dropdown-item pe-5" to="/forgot_password">Forgot Password</Link></li>
                                                    <li><Link className="dropdown-item pe-5" to="/about_us">About Us</Link></li>
                                                    <li><Link className="dropdown-item pe-5" to="/checkout">Checkout</Link></li>
                                                    <li><Link className="dropdown-item pe-5" to="/checkout_premium">Checkout Premium</Link></li>
                                                    <li><Link className="dropdown-item pe-5" to="/invoice">Invoice</Link></li>
                                                    <li><Link className="dropdown-item pe-5" to="/coming_soon">Coming Soon</Link></li>
                                                    <li><Link className="dropdown-item pe-5" to="/error_404">Error 404</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item submenu-item" to="#">Create Event</Link>
                                                <ul className="submenu dropdown-menu">
                                                    <li><Link className="dropdown-item pe-5" to="/create">Create</Link></li>
                                                    <li><Link className="dropdown-item pe-5" to="/create_venue_event">Create Venue Event</Link></li>
                                                    <li><Link className="dropdown-item pe-5" to="/create_online_event">Create Online Event</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item submenu-item" to="#">Events View</Link>
                                                <ul className="submenu dropdown-menu">
                                                    <li><Link className="dropdown-item pe-5" to="/online_event_detail_view">Online Event Detail View</Link></li>
                                                    <li><Link className="dropdown-item pe-5" to="/venue_event_detail_view">Venue Event Detail View</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link className="dropdown-item" to="/booking_confirmed">Booking Confirmed</Link></li>
                                            <li><Link className="dropdown-item" to="/attendee_profile_view">Attendee Profile View</Link></li>
                                            <li><Link className="dropdown-item" to="/organiser_profile_view">Organiser Profile View</Link></li>
                                            <li><Link className="dropdown-item" to="/my_organisation_dashboard">Organization Dashboard</Link></li>
                                            <li><Link className="dropdown-item" to="/sell_tickets_online">Sell Tickets Online</Link></li>
                                            <li><Link className="dropdown-item" to="/refer_a_friend">Refer a Friend</Link></li>
                                            <li><Link className="dropdown-item" to="/term_and_conditions">Terms & Conditions</Link></li>
                                            <li><Link className="dropdown-item" to="/privacy_policy">Privacy Policy</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="offcanvas-footer">
                                <div className="offcanvas-social">
                                    <h5>KẾT NỐI MẠNG XÃ HỘI</h5>
                                    <ul className="social-links">
                                        <li><a href="#" className="social-link"><i className="fab fa-facebook-square"></i></a></li>
                                        <li><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#" className="social-link"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right-header order-2">
                            <ul className="align-self-stretch">
                                <li>
                                    <Link to="/explore_events" className="create-btn btn-hover">
                                        <i className="fa-solid fa-calendar-days"></i>
                                        <span><strong>MUA VÉ NGAY!</strong></span>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown account-dropdown">
                                    <a href="#" className="account-link" role="button" onClick={toggleDropdown} aria-expanded={dropdownOpen ? "true" : "false"}>
                                        <img src="images/profile-imgs/img-13.jpg" alt="Profile" />
                                        <i className="fas fa-caret-down arrow-icon"></i>
                                    </a>
                                    <ul className={`dropdown-menu dropdown-menu-account dropdown-menu-end ${dropdownOpen ? "show" : ""}`} aria-labelledby="accountClick">
                                        {/* Dropdown menu content */}
                                        <li>
                                            <div className="dropdown-account-header">
                                                <div className="account-holder-avatar">
                                                    <img src="images/profile-imgs/img-13.jpg" alt="Profile" />
                                                </div>
                                                <h5>[Họ tên]</h5>
                                                <p>[Email]</p>
                                            </div>
                                        </li>
                                        <li className="profile-link">
                                            <Link to="/member_profile_view" className="link-item">Tài khoản FEventopia</Link>
                                            <Link to="/sign_in" className="link-item">Đăng xuất</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="night_mode_switch__btn">
                                        <div id="night-mode" className="fas fa-moon fa-sun"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="overlay"></div>
            </div>
        </header>
    );
};

export default Header;
