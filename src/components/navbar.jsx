import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
    return (
        <header>
            <div id="header-sticky" className="tp-header-area tp-header-transparent tp-header-4">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-4 col-md-3 col-6">
                            <div className="logo">
                                <Link href="/">
                                    <Image width={115} height={50} src="/img/logo/logo-red.png" alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 d-none d-xl-block">
                            <div className="main-menu">
                                <nav id="mobile-menu" className="tp-main-menu-content">
                                    <ul>
                                        <li className="has-dropdown">
                                            <Link href="/">Home</Link>
                                            <div className="tp-submenu has-homemenu menu-fix-width">
                                                <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-5">
                                                    <div className="col homemenu active">
                                                        <div className="homemenu-thumb">
                                                            <Image width={100} height={50} src="/img/menu/home-1.jpg" alt="" />
                                                        </div>
                                                        <div className="homemenu-btn">
                                                            <Link href="/">Multi Page</Link>
                                                            <Link href="/index-one-page">One Page</Link>
                                                        </div>
                                                        <div className="demo-name">
                                                            <span>Home 01</span>
                                                        </div>
                                                    </div>
                                                    {/* Additional home menu items go here */}
                                                </div>
                                            </div>
                                        </li>
                                        <li className="has-dropdown">
                                            <Link href="/about">Pages</Link>
                                            <ul className="tp-submenu">
                                                <li><Link href="/about">About</Link></li>
                                                {/* Other submenu items go here */}
                                            </ul>
                                        </li>
                                        {/* Add other menu sections here */}
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-8 col-md-9 col-6">
                            <div className="tp-header-right d-flex align-items-center justify-content-end">
                                <div className="tp-header-cart ml-30">
                                    <button className="tp-header-cart-btn cartmini-open-btn p-relative" type="button">
                                        <i className="flaticon-shopping-cart"></i>
                                        <span>3</span>
                                    </button>
                                </div>
                                <div className="d-none d-md-block">
                                    <div className="tp-header-4-contact d-flex align-items-center">
                                        <div className="tp-header-4-contact-icon">
                                            <i className="fa-solid fa-phone-flip"></i>
                                        </div>
                                        <div className="tp-header-4-contact-content">
                                            <span>Call Anytime</span>
                                            <a href="tel:0123456789">+99 (786) 8765</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-header-btn ml-30 d-none d-lg-block">
                                    <Link href="/contact" className="tp-btn-red">Get Solution</Link>
                                </div>
                                <div className="offcanvas-btn d-xl-none ml-20">
                                    <button className="offcanvas-open-btn">
                                        <i className="fa-solid fa-bars"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
