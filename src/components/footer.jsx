import React from 'react';
import Link from 'next/link'; // If using Next.js for navigation

function Footer() {
    return (
        <footer>
            <div className="footer-area tp-footer-red theme-bg-2">
                <div className="tp-footer-top pt-115 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="tp-footer-widget footer-col-1 mb-40 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".4s">
                                    <div className="tp-footer-widget-logo mb-15">
                                        <Link href="/">
                                            <img src="../img/logo/logo-red-2.png" alt="fw-logo" />
                                        </Link>
                                    </div>
                                    <div className="tp-footer-widget-content">
                                        <p>Desires to obtain pain of itself, because it is pain, but occasionally circum</p>
                                        <div className="tp-footer-widget-content-list">
                                            <div className="tp-footer-widget-content-list-item">
                                                <i className="fa-solid fa-square-phone"></i>
                                                <a href="tel:0123456789">+92 487 (9098) 98765</a>
                                            </div>
                                            <div className="tp-footer-widget-content-list-item">
                                                <i className="fa-solid fa-envelope"></i>
                                                <a href="mailto:info@example.com">info@example.com</a>
                                            </div>
                                            <div className="tp-footer-widget-content-list-item">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <a href="#">27 Division St, Sans Francisco, USA</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-footer-widget tp-footer-col-2 mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                                    <h4 className="tp-footer-widget-title mb-30">Our Navigation</h4>
                                    <div className="tp-footer-widget-link">
                                        <ul>
                                            <li><Link href="/about"><i className="fa-sharp fa-solid fa-plus"></i> About Tecz</Link></li>
                                            <li><Link href="/team"><i className="fa-sharp fa-solid fa-plus"></i> Meet the Team</Link></li>
                                            <li><Link href="/blog"><i className="fa-sharp fa-solid fa-plus"></i> News & Media</Link></li>
                                            <li><Link href="/projects"><i className="fa-sharp fa-solid fa-plus"></i> Our Projects</Link></li>
                                            <li><Link href="/contact"><i className="fa-sharp fa-solid fa-plus"></i> Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-footer-widget tp-footer-col-3 mb-40 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".8s">
                                    <h4 className="tp-footer-widget-title mb-40">Our Navigation</h4>
                                    <div className="tp-footer-widget-gallery">
                                        <div className="tp-footer-widget-gallery-all">
                                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                                <div key={num} className="tp-footer-widget-gallery-single-item">
                                                    <Link href="#">
                                                        <div className="tp-footer-widget-gallery-item">
                                                            <div className="tp-footer-widget-gallery-thumb">
                                                                <img src={`../img/footer/one/gallery/fw-g-${num}.jpg`} alt={`Gallery ${num}`} />
                                                                <div className="tp-footer-widget-gallery-social">
                                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="tp-footer-widget tp-footer-col-4 mb-40 wow fadeInUp" data-wow-duration="1.4s" data-wow-delay="1s">
                                    <h4 className="tp-footer-widget-title mb-20">Subscribe</h4>
                                    <div className="tp-footer-widget-newsletter-wrap">
                                        <form action="#">
                                            <div className="tp-footer-widget-newsletter-wrapper">
                                                <div className="tp-footer-widget-newsletter-input">
                                                    <input type="email" placeholder="Get News & Updates" />
                                                </div>
                                                <div className="tp-footer-widget-newsletter-submit">
                                                    <button type="submit">
                                                        <i className="fa-regular fa-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="tp-footer-widget-newsletter-content">
                                            <p>Our expertise, as well as our passion for web design, sets us agencies.</p>
                                            <div className="tp-footer-widget-newsletter-social">
                                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="tp-footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <div className="tp-footer-copyright">
                                    <span>Copyright © 2023 Tecz by <a target="_blank" href="https://themeforest.net/user/hixstudio/portfolio">HixStudio</a> All Rights Reserved</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5">
                                <div className="tp-footer-terms">
                                    <Link href="#">Terms of Use</Link>
                                    <Link href="#">Privacy Policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tp-footer-red-shape-1">
                    <img src="../img/footer/two/footer-red-shape-1.png" alt="Shape 1" />
                </div>
                <div className="tp-footer-red-shape-2">
                    <img src="../img/footer/two/footer-red-shape-2.png" alt="Shape 2" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
