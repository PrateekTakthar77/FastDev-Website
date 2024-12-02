import '../../public/css/bootstrap.css';
import '../../public/css/animate.css';
import '../../public/css/swiper-bundle.css';
import '../../public/css/slick.css';
import '../../public/css/magnific-popup.css';
// import '../../public/css/font-awesome-pro.css';
import '../../public/css/flaticon_tecz.css';
import '../../public/css/spacing.css';
import '../../public/css/main.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <>
            <section className="banner-area tp-banner-5-bg" style={{ backgroundImage: 'url(/img/banner/five/banner-5-bg-1.jpg)' }}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="tp-banner-5-wrapper">
                                <span className="tp-banner-5-sub-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                    BEST IT SOLUTION FOR YOU
                                </span>
                                <h4 className="tp-banner-5-title wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".7s">
                                    Technology Solutions for Future
                                </h4>
                                <div className="tp-banner-5-info d-flex align-items-center wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".9s">
                                    <div className="tp-banner-5-btn">
                                        <a className="tp-btn-red" href="about.html">Discover More</a>
                                    </div>
                                    <div className="tp-banner-5-video d-flex align-items-center">
                                        <a className="popup-video" href="https://www.youtube.com/watch?v=tUP5S4YdEJo">
                                            <i className="flaticon-play"></i>
                                        </a>
                                        <span>Watch Our <br /> Showcase</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-banner-5-thumb">
                                <div className="tp-banner-5-thumb-1">
                                    <img
                                        src="/img/banner/five/banner-5-thumb-1.png"
                                        alt="Banner Thumbnail"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-slider-2-social d-none d-lg-block">
                    <span>Follow us _ </span>
                    <a href="#">Fb</a>
                    <a href="#">Tw</a>
                    <a href="#">Yt</a>
                    <a href="#">In</a>
                </div>
            </section>
            <section className="feature-area tp-feature-5-wrap pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-feature-5 mb-40">
                                <div className="tp-feature-5-item">
                                    <div className="tp-feature-5-front d-flex align-items-center">
                                        <div className="tp-feature-5-front-icon">
                                            <i className="flaticon-data-protection"></i>
                                        </div>
                                        <div className="tp-feature-5-front-content">
                                            <h5 className="tp-feature-5-front-title">
                                                Internet & Cyber Security Solution
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="tp-feature-5-back">
                                        <div
                                            className="tp-feature-5-back-bg"
                                            data-background="/img/feature/five/feature-5-thumb-1.jpg" // Changed from style to data-background
                                        >
                                            <div className="tp-feature-5-back-content text-center">
                                                <p>We’re a team of creatives who are excited about unique ideas</p>
                                                <a href="services-details.html">Find Your Solution</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="tp-feature-5 mb-40">
                                <div className="tp-feature-5-item">
                                    <div className="tp-feature-5-front d-flex align-items-center">
                                        <div className="tp-feature-5-front-icon">
                                            <i className="flaticon-project-management"></i>
                                        </div>
                                        <div className="tp-feature-5-front-content">
                                            <h5 className="tp-feature-5-front-title">
                                                Custom IT <br /> & Cyber Solution
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="tp-feature-5-back">
                                        <div
                                            className="tp-feature-5-back-bg"
                                            style={{
                                                backgroundImage: "url('/img/feature/five/feature-5-thumb-1.jpg')",
                                            }}
                                        >
                                            <div className="tp-feature-5-back-content text-center">
                                                <p>
                                                    We’re a team of creatives who are excited about unique ideas
                                                </p>
                                                <a href="services-details.html">Find Your Solution</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="tp-feature-5 mb-40">
                                <div className="tp-feature-5-item">
                                    <div className="tp-feature-5-front d-flex align-items-center">
                                        <div className="tp-feature-5-front-icon">
                                            <i className="flaticon-technical-support"></i>
                                        </div>
                                        <div className="tp-feature-5-front-content">
                                            <h5 className="tp-feature-5-front-title">Expert IT Consultant</h5>
                                        </div>
                                    </div>
                                    <div className="tp-feature-5-back">
                                        <div
                                            className="tp-feature-5-back-bg"
                                            style={{
                                                backgroundImage: "url('/img/feature/five/feature-5-thumb-1.jpg')",
                                            }}
                                        >
                                            <div className="tp-feature-5-back-content text-center">
                                                <p>
                                                    We’re a team of creatives who are excited about unique ideas
                                                </p>
                                                <a href="services-details.html">Find Your Solution</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-feature-5-shape-1">
                    <img src="/img/shape/line-5-shape-1.png" alt="shape" width={120} height={60} />
                </div>
            </section>

            <section className="video-area tp-benifits-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-6 col-lg-6 order-2 order-lg-1">
                            <div className="tp-benifits-5-thumb">
                                <div className="tp-benifits-5-thumb-1">
                                    <img
                                        src="/img/about/five/about-5-thumb-1.jpg"
                                        alt="About Image 1"
                                    />
                                </div>
                                <div className="tp-benifits-5-thumb-2 overlay-anim">
                                    <div className="tp-thumb-common-overlay-red wow"></div>
                                    <img
                                        src="/img/about/five/about-5-thumb-2.jpg"
                                        alt="About Image 2"
                                    />
                                </div>
                                <div className="tp-benifits-5-wrap">
                                    <div className="tp-benifits-5-contact">
                                        <div className="tp-benifits-5-contact-icon">
                                            <i className="fa-solid fa-phone-flip"></i>
                                        </div>
                                        <div className="tp-benifits-5-contact-content">
                                            <span>Call Anytime</span>
                                            <a href="tel:0123456789">+99 (786) 8765</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6 col-lg-6 order-1 order-lg-2">
                            <div
                                className="tp-video-two-wrapper p-relative pb-120 wow fadeInLeft"
                                data-wow-duration="1s"
                                data-wow-delay=".6s"
                            >
                                <div className="tp-section tp-section-red mb-35">
                                    <span className="tp-section-sub-title">Check Our Benefits</span>
                                    <h4 className="tp-section-title">We're Partner of Your Innovations</h4>
                                    <div className="tp-section-title-wrapper">
                                        <p>
                                            System is a term used to refer to an organized collection of symbols and processes that may
                                            be used to operate on such symbols.
                                        </p>
                                    </div>
                                    <div className="tp-section-title-info d-flex align-items-center mt-30">
                                        <div className="tp-section-title-info-icon">
                                            <i className="flaticon-project"></i>
                                        </div>
                                        <div className="tp-section-title-info-text">
                                            <span>
                                                Lorem ipsum is simply free text dolor sit <br /> am adipi we daily ipsum
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-video-two-list mb-50">
                                    <ul>
                                        <li>
                                            <span>
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            Perspiciatis omnis natus error
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            Donec gravida imperdie
                                        </li>
                                    </ul>
                                </div>
                                <div className="tp-about-details d-flex align-items-center flex-wrap">
                                    <div className="tp-about-btn mr-30 mb-10">
                                        <a className="tp-btn-red" href="about.html">
                                            Discover More
                                        </a>
                                    </div>
                                    <div className="tp-about-avatar d-flex align-items-center mb-10">
                                        <div className="tp-about-avatar-thumb">
                                            <img
                                                src="/img/about/one/avatar-1.png"
                                                alt="Avatar"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <div className="tp-about-avatar-info">
                                            <h5 className="tp-about-avatar-title">Harry Newman</h5>
                                            <span>Co Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing-area tp-price-wrap pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-section tp-section-red mb-65 text-center">
                                <span className="tp-section-sub-title">Our pricing plans</span>
                                <h4 className="tp-section-title">Choose Your Optimal <br /> Pricing Plans</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Basic Plan */}
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-price mb-40 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s">
                                <div className="tp-price-thumb">
                                    <img src="/img/pricing/pricing-thumb-1.jpg" alt="Basic Plan" />
                                </div>
                                <div className="tp-price-icon mb-20">
                                    <i className="flaticon-airplane"></i>
                                </div>
                                <div className="tp-price-badge mb-20">
                                    <span>Basic Plan</span>
                                </div>
                                <div className="tp-price-heading mb-40">
                                    <div className="tp-price-content">
                                        <h4 className="tp-price-value">$49<span>/monthly</span></h4>
                                    </div>
                                </div>
                                <div className="tp-price-features mb-45">
                                    <ul>
                                        <li>24/7 System monitoring</li>
                                        <li className="tp-price-inactive">Security management</li>
                                        <li className="tp-price-inactive">Unlimited Download</li>
                                        <li>Remote support</li>
                                    </ul>
                                </div>
                                <div className="tp-price-btn">
                                    <a href="contact.html">Start Free Trial</a>
                                </div>
                            </div>
                        </div>

                        {/* Standard Plan */}
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-price active mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                                <div className="tp-price-thumb">
                                    <img src="/img/pricing/pricing-thumb-2.jpg" alt="Standard Plan" />
                                </div>
                                <div className="tp-price-icon mb-20">
                                    <i className="flaticon-rocket"></i>
                                </div>
                                <div className="tp-price-badge mb-20">
                                    <span>Standard Plan</span>
                                </div>
                                <div className="tp-price-heading mb-40">
                                    <div className="tp-price-content">
                                        <h4 className="tp-price-value">$59<span>/monthly</span></h4>
                                    </div>
                                </div>
                                <div className="tp-price-features mb-45">
                                    <ul>
                                        <li>24/7 System monitoring</li>
                                        <li className="tp-price-inactive">Security management</li>
                                        <li>Unlimited Download</li>
                                        <li className="tp-price-inactive">Remote support</li>
                                    </ul>
                                </div>
                                <div className="tp-price-btn">
                                    <a href="contact.html">Start Free Trial</a>
                                </div>
                            </div>
                        </div>

                        {/* Premium Plan */}
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-price mb-40 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s">
                                <div className="tp-price-thumb">
                                    <img src="/img/pricing/pricing-thumb-3.jpg" alt="Premium Plan" />
                                </div>
                                <div className="tp-price-icon mb-20">
                                    <i className="flaticon-speed"></i>
                                </div>
                                <div className="tp-price-badge mb-20">
                                    <span>Premium plan</span>
                                </div>
                                <div className="tp-price-heading mb-40">
                                    <div className="tp-price-content">
                                        <h4 className="tp-price-value">$89<span>/monthly</span></h4>
                                    </div>
                                </div>
                                <div className="tp-price-features mb-45">
                                    <ul>
                                        <li>24/7 System monitoring</li>
                                        <li>Security management</li>
                                        <li>Unlimited Download</li>
                                        <li>Remote support</li>
                                    </ul>
                                </div>
                                <div className="tp-price-btn">
                                    <a href="contact.html">Start Free Trial</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-price-shape-1">
                    <img src="/img/shape/line-5-shape-2.png" alt="Shape" />
                </div>
            </section>

            {/* Services Section */}
            <section className="services-area tp-services-5-bg pt-115 pb-70" style={{ backgroundImage: 'url(/images/services-bg.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-section tp-section-red-white text-center mb-50">
                                <span className="tp-section-sub-title">What We Provide</span>
                                <h4 className="tp-section-title">We Provide our Clients <br /> Best IT Services</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Consultancy Service */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tp-services-5 mb-40">
                                <div className="tp-services-5-icon mb-25">
                                    <i className="flaticon-consultant"></i>
                                </div>
                                <div className="tp-services-5-content">
                                    <h5 className="tp-services-5-title under-line-white mb-25">
                                        <a href="services-details.html">Consultancy</a>
                                    </h5>
                                    <p>A consulting firm or consultancy <br /> provides expertise in various areas.</p>
                                </div>
                            </div>
                        </div>

                        {/* Development Service */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tp-services-5 mb-40">
                                <div className="tp-services-5-icon mb-25">
                                    <i className="flaticon-coding"></i>
                                </div>
                                <div className="tp-services-5-content">
                                    <h5 className="tp-services-5-title under-line-white mb-25">
                                        <a href="services-details.html">Development</a>
                                    </h5>
                                    <p>We offer software development services <br /> tailored to your business needs.</p>
                                </div>
                            </div>
                        </div>

                        {/* Marketing Service */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tp-services-5 mb-40">
                                <div className="tp-services-5-icon mb-25">
                                    <i className="flaticon-advertisig-agency"></i>
                                </div>
                                <div className="tp-services-5-content">
                                    <h5 className="tp-services-5-title under-line-white mb-25">
                                        <a href="services-details.html">Marketing</a>
                                    </h5>
                                    <p>Helping businesses reach their target audience <br /> through innovative strategies.</p>
                                </div>
                            </div>
                        </div>

                        {/* Software Service */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tp-services-5 mb-40">
                                <div className="tp-services-5-icon mb-25">
                                    <i className="flaticon-solution"></i>
                                </div>
                                <div className="tp-services-5-content">
                                    <h5 className="tp-services-5-title under-line-white mb-25">
                                        <a href="services-details.html">Software</a>
                                    </h5>
                                    <p>We provide software solutions to streamline <br /> your business processes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="brand-area mb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-brand-5-wrap text-center mb-95">
                                <h5 className="tp-brand-5-wrap-title">Who Trust Us</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tp-brand-5-item mb-40 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".7s">
                                <div className="tp-brand-5-thumb">
                                    <img src="/img/brand/five/brand-5-thumb-1.jpg" alt="" />
                                </div>
                                <div className="tp-brand-5-item-logo text-center">
                                    <img src="/img/brand/five/brand-5-logo-2.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tp-brand-5-item mb-40 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                                <div className="tp-brand-5-thumb">
                                    <img src="/img/brand/five/brand-5-thumb-1.jpg" alt="" />
                                </div>
                                <div className="tp-brand-5-item-logo text-center">
                                    <img src="/img/brand/five/brand-5-logo-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tp-brand-5-item mb-40 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                                <div className="tp-brand-5-thumb">
                                    <img src="/img/brand/five/brand-5-thumb-1.jpg" alt="" />
                                </div>
                                <div className="tp-brand-5-item-logo text-center">
                                    <img src="/img/brand/five/brand-5-logo-3.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tp-brand-5-item mb-40 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">
                                <div className="tp-brand-5-thumb">
                                    <img src="/img/brand/five/brand-5-thumb-1.jpg" alt="" />
                                </div>
                                <div className="tp-brand-5-item-logo text-center">
                                    <img src="/img/brand/five/brand-5-logo-4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-area tp-blog-5 pb-90 pt-120">
                <div className="tp-blog-5-bg" data-background="/img/blog/five/blog-5-bg-1.jpg"> </div>
                <div className="container">
                    <div className="row">
                        <div className="tp-section tp-section-red text-center mb-35">
                            <span className="tp-section-sub-title">Our Latest Update</span>
                            <h4 className="tp-section-title">Check Our Inside Story</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-blog-5-item mb-30 tp-thumb-common fix">
                                <div className="tp-thumb-common-overlay-red wow"></div>
                                <div className="tp-blog-5-thumb">
                                    <img src="/img/blog/five/blog-5-thumb-1.jpg" alt="" />
                                </div>
                                <div className="tp-blog-5-content">
                                    <div className="tp-blog-5-content-post d-flex align-items-center">
                                        <div className="tp-blog-5-content-post-icon">
                                            <i className="flaticon-manufacturing"></i>
                                        </div>
                                        <div className="tp-blog-5-content-post-content">
                                            <p>Posted by</p>
                                            <span>Tecz</span>
                                        </div>
                                    </div>
                                    <div className="tp-blog-5-content-main">
                                        <div className="tp-blog-5-content-info d-flex align-items-center mb-20">
                                            <div className="tp-blog-5-content-info-item mr-35">
                                                <span><i className="flaticon-user"></i> Salim Rana</span>
                                            </div>
                                            <div className="tp-blog-5-content-info-item">
                                                <span><i className="fa-light fa-message"></i> 1 Comment</span>
                                            </div>
                                        </div>
                                        <h5 className="tp-blog-5-title mb-30">
                                            <a href="blog-details.html">The highly creative UI from a silicon valley</a>
                                        </h5>
                                        <div className="tp-blog-5-tags">
                                            <a href="blog-details.html">Digital</a>
                                            <a href="blog-details.html">Cyber</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-blog-5-item mb-30 tp-thumb-common fix">
                                <div className="tp-thumb-common-overlay-red wow"></div>
                                <div className="tp-blog-5-thumb">
                                    <img src="/img/blog/five/blog-5-thumb-1.jpg" alt="" />
                                </div>
                                <div className="tp-blog-5-content">
                                    <div className="tp-blog-5-content-post d-flex align-items-center">
                                        <div className="tp-blog-5-content-post-icon">
                                            <i className="flaticon-manufacturing"></i>
                                        </div>
                                        <div className="tp-blog-5-content-post-content">
                                            <p>Posted by</p>
                                            <span>Tecz</span>
                                        </div>
                                    </div>
                                    <div className="tp-blog-5-content-main">
                                        <div className="tp-blog-5-content-info d-flex align-items-center mb-20">
                                            <div className="tp-blog-5-content-info-item mr-35">
                                                <span><i className="flaticon-user"></i> Salim Rana</span>
                                            </div>
                                            <div className="tp-blog-5-content-info-item">
                                                <span><i className="fa-light fa-message"></i> 2 Comments</span>
                                            </div>
                                        </div>
                                        <h5 className="tp-blog-5-title mb-30">
                                            <a href="blog-details.html">Exploring the power of AI in modern tech</a>
                                        </h5>
                                        <div className="tp-blog-5-tags">
                                            <a href="blog-details.html">AI</a>
                                            <a href="blog-details.html">Tech</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-blog-5-item mb-30 tp-thumb-common fix">
                                <div className="tp-thumb-common-overlay-red wow"></div>
                                <div className="tp-blog-5-thumb">
                                    <img src="/img/blog/five/blog-5-thumb-1.jpg" alt="" />
                                </div>
                                <div className="tp-blog-5-content">
                                    <div className="tp-blog-5-content-post d-flex align-items-center">
                                        <div className="tp-blog-5-content-post-icon">
                                            <i className="flaticon-manufacturing"></i>
                                        </div>
                                        <div className="tp-blog-5-content-post-content">
                                            <p>Posted by</p>
                                            <span>Tecz</span>
                                        </div>
                                    </div>
                                    <div className="tp-blog-5-content-main">
                                        <div className="tp-blog-5-content-info d-flex align-items-center mb-20">
                                            <div className="tp-blog-5-content-info-item mr-35">
                                                <span><i className="flaticon-user"></i> Salim Rana</span>
                                            </div>
                                            <div className="tp-blog-5-content-info-item">
                                                <span><i className="fa-light fa-message"></i> 3 Comments</span>
                                            </div>
                                        </div>
                                        <h5 className="tp-blog-5-title mb-30">
                                            <a href="blog-details.html">Innovations in cloud computing for businesses</a>
                                        </h5>
                                        <div className="tp-blog-5-tags">
                                            <a href="blog-details.html">Cloud</a>
                                            <a href="blog-details.html">Business</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
