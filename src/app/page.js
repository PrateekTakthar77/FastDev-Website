import Image from "next/image";

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
                                    <Image
                                        src="/img/banner/five/banner-5-thumb-1.png"
                                        alt="Banner Thumbnail"
                                        width={500}  // Use appropriate width
                                        height={500} // Use appropriate height
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
                                            style={{
                                                backgroundImage: "url('assets/img/feature/five/feature-5-thumb-1.jpg')",
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
                                                backgroundImage: "url('assets/img/feature/five/feature-5-thumb-1.jpg')",
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
                                                backgroundImage: "url('assets/img/feature/five/feature-5-thumb-1.jpg')",
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
                    <Image src="/img/shape/line-5-shape-1.png" alt="shape" width={120} height={60} />
                </div>
            </section>

            <section className="video-area tp-benifits-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-6 col-lg-6 order-2 order-lg-1">
                            <div className="tp-benifits-5-thumb">
                                <div className="tp-benifits-5-thumb-1">
                                    <Image
                                        src="/img/about/five/about-5-thumb-1.jpg"
                                        alt="About Image 1"
                                        width={500}
                                        height={350}
                                    />
                                </div>
                                <div className="tp-benifits-5-thumb-2 overlay-anim">
                                    <div className="tp-thumb-common-overlay-red wow"></div>
                                    <Image
                                        src="/img/about/five/about-5-thumb-2.jpg"
                                        alt="About Image 2"
                                        width={500}
                                        height={350}
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
                                            <Image
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

            <section className="project-area tp-project-4 fix pb-120 pt-115">
                <div
                    className="tp-project-4-bg"
                    style={{
                        backgroundImage: "url('/img/project/five/project-5-bg-1.jpg')",
                    }}
                ></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="tp-section tp-section-red mb-65">
                                <span className="tp-section-sub-title">Recently Completed Work</span>
                                <h4 className="tp-section-title">Improve & Enhance the Tech Projects</h4>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-4">
                            <div className="tp-project-4-button text-center text-lg-end">
                                <a href="projects.html" className="tp-btn-red">
                                    View All Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-project-4-list">
                    <div className="container-fluid">
                        <div className="row gx-0">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="tp-project-4-item mb-30 wow fadeInUp">
                                    <div className="tp-project-4-thumb">
                                        <a href="projects-details.html">
                                            <Image
                                                src="/img/project/five/project-5-1.jpg"
                                                alt="Project 1"
                                                width={500}
                                                height={350}
                                            />
                                        </a>
                                    </div>
                                    <div className="tp-project-4-content">
                                        <h5>
                                            <a href="projects-details.html">IT Consulting & Solutions</a>
                                        </h5>
                                        <span>Technology</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="tp-project-4-item mb-30 wow fadeInUp">
                                    <div className="tp-project-4-thumb">
                                        <a href="projects-details.html">
                                            <Image
                                                src="/img/project/five/project-5-2.jpg"
                                                alt="Project 2"
                                                width={500}
                                                height={350}
                                            />
                                        </a>
                                    </div>
                                    <div className="tp-project-4-content">
                                        <h5>
                                            <a href="projects-details.html">Custom Web Development</a>
                                        </h5>
                                        <span>Technology</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="tp-project-4-item mb-30 wow fadeInUp">
                                    <div className="tp-project-4-thumb">
                                        <a href="projects-details.html">
                                            <Image
                                                src="/img/project/five/project-5-3.jpg"
                                                alt="Project 3"
                                                width={500}
                                                height={350}
                                            />
                                        </a>
                                    </div>
                                    <div className="tp-project-4-content">
                                        <h5>
                                            <a href="projects-details.html">Cybersecurity Protection</a>
                                        </h5>
                                        <span>Technology</span>
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
