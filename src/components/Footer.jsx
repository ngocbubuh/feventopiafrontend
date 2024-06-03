import React from "react";

function Footer() {
    return (
        <footer className="footer mt-auto">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-content">
                                <h4><strong>HỖ TRỢ</strong></h4>
                                <ul className="footer-link-list">
                                    <li><a href="about_us.html" className="footer-link">Về Chúng tôi</a></li>
                                    <li><a href="help_center.html" className="footer-link">Trung Tâm Hỗ trợ</a></li>
                                    <li><a href="faq.html" className="footer-link">FAQ</a></li>
                                    <li><a href="contact_us.html" className="footer-link">Liên hệ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-content">
                                <h4><strong>DỊCH VỤ</strong></h4>
                                <ul className="footer-link-list">
                                    <li><a href="create.html" className="footer-link">Sự kiện nổi bật</a></li>
                                    <li><a href="sell_tickets_online.html" className="footer-link">Mua vé</a></li>
                                    <li><a href="privacy_policy.html" className="footer-link">Chính sách Bảo mật</a></li>
                                    <li><a href="term_and_conditions.html" className="footer-link">Điều khoản dịch vụ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-content">
                                <h4>TRƯỜNG ĐẠI HỌC FPT</h4>
                                <ul className="footer-link-list">
                                    <li><a href="pricing.html" className="footer-link">Pricing</a></li>
                                    <li><a href="our_blog.html" className="footer-link">Blog</a></li>
                                    <li><a href="refer_a_friend.html" className="footer-link">Refer a Friend</a></li>
                                </ul>
                                <address>Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
                                </address>
                                <li><a className="footer-link" href="tel:(028)73005588"> (028) 7300 5588</a></li>
                                <li><a className="footer-link" href="mailto:daihoc.hcm@fpt.edu.vn">daihoc.hcm@fpt.edu.vn</a>
                                </li>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-content">
                                <h4><strong>KẾT NỐI MẠNG XÃ HỘI</strong></h4>
                                <ul className="social-links">
                                    <li><a href="https://www.facebook.com/FPTU.HCM/" className="social-link"><i
                                        className="fab fa-facebook-square"></i></a></li>
                                    <li><a href="https://www.instagram.com/fptuniversityhcm/" className="social-link"><i
                                        className="fab fa-instagram"></i></a></li>
                                    <li><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCfNrlxNgcTZDJ3jZeSSSJxg"
                                        className="social-link"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-copyright-text">
                                <p className="mb-0">© 2024, <strong>FEventopia</strong>. All rights reserved. Powered by FPT
                                    University</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;