"use client"; // Required for interactive components in Next.js App Router

import Link from "next/link";
import Image from 'next/image';

export default function Subscriptions() {
    return (
        <>
            <section id="subscription" className="bg-light mt-5">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="h3 my-5">Our Subscription plans</h2>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card shadow mx-auto my-3 border-0" style={{width: "270px"}}>
                                <div className="card-header bg-anupam">
                                    <h2 className="text-white h4 px-2 py-3">
                                        <span className="d-block">Web Design </span>
                                        <span className="d-block h4">Services </span>
                                        <span className="h6 mt-3">starting </span>
                                        <span className="h5">₹ </span>
                                        <span className="fw-bold fs-4">500</span>
                                        <span className="h6">/hr.</span>
                                    </h2>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush fs-6 mb-3">
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>Mockup design</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>Responsive HTML</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>Media Optimisation</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>Content update</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>Hosting support</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-anupam">
                                    <a className="text-white nav-link fs-5 px-3 py-1" href="../services/digital-marketing">₹ <span className="fw-bold fs-4">30,000
                                        </span>/mo.</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card shadow mx-auto my-3 border-0" style={{width: "270px"}}>
                                <div className="card-header bg-dark">
                                    <h2 className="text-white h4 px-2 py-3">
                                        <span className="d-block">Digital Marketing </span>
                                        <span className="d-block h4">Services </span>
                                        <span className="h6 mt-3">starting </span>
                                        <span className="h5">₹ </span>
                                        <span className="fw-bold fs-4">400</span>
                                        <span className="h6">/hr.</span>
                                    </h2>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush fs-6 mb-3">
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle text-black h5 me-2"></i>Search Engine Optimization</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle text-black h5 me-2"></i>Social Media Marketing</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle text-black h5 me-2"></i>Web Design &amp; Development</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle text-black h5 me-2"></i>Pay-Per-Click Advertising</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle text-black h5 me-2"></i>Email Marketing</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-dark">
                                    <a className="text-white nav-link fs-5 px-3 py-1" href="../services/web-design">₹ <span className="fw-bold fs-4">25,000
                                        </span>/mo.</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card shadow mx-auto my-3 border-0" style={{width: "270px"}}>
                                <div className="card-header bg-anupam">
                                    <h2 className="text-white h4 px-2 py-3">
                                        <span className="d-block">Web Development </span>
                                        <span className="d-block h4">Services </span>
                                        <span className="h6 mt-3">starting </span>
                                        <span className="h5">₹ </span>
                                        <span className="fw-bold fs-4">750</span>
                                        <span className="h6">/hr.</span>
                                    </h2>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush fs-6 mb-3">
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>Page Optimisation</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>Best Web vitals</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>Responsive UI / UX</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>Content Strategy</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>SEO enhancement</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-anupam">
                                    <a className="text-white nav-link fs-5 px-3 py-1" href="../services/web-development">₹ <span className="fw-bold fs-4">40,000
                                        </span>/mo.</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card shadow mx-auto my-3 border-0" style={{width: "270px"}}>
                                <div className="card-header bg-anupam">
                                    <h2 className="text-white h4 px-2 py-3">
                                        <span className="d-block">Website SEO </span>
                                        <span className="d-block h4">Services </span>
                                        <span className="h6 mt-3">starting </span>
                                        <span className="h5">₹ </span>
                                        <span className="fw-bold fs-4">300</span>
                                        <span className="h6">/hr.</span>
                                    </h2>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush fs-6 mb-3">
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>On-page SEO</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>SEO Strategy (Persona)</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>Technical SEO</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>Social Signaling</li>
                                        <li className="list-group-item border-0 p-1"><i className="bi bi-check2-circle txt-anupam h5 me-2"></i>Quality Backlinks</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-anupam">
                                    <a className="text-white nav-link fs-5 px-3 py-1" href="../services/website-seo">₹ <span className="fw-bold fs-4">20,000
                                        </span>/mo.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}  