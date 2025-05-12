"use client"; // Required for interactive components in Next.js App Router

import Link from "next/link";
import Image from 'next/image'

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
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card shadow border-0 my-3">
                                <div className="card-header bg-anupam">
                                    <h2 className="text-white h2 p-3">
                                        <span className="d-block">Web Design </span>
                                        <span className="h4">Services </span>
                                        <span className="d-block h6 mt-3">starting </span>
                                        <span className="h5">₹</span>
                                        <span>800 </span>
                                        <span className="h4">/ hour</span>
                                    </h2>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush fs-6 mb-3">
                                        <li className="list-group-item border-0">Mockup design</li>
                                        <li className="list-group-item border-0">Responsive HTML</li>
                                        <li className="list-group-item border-0">Media Optimisation</li>
                                        <li className="list-group-item border-0">Content update</li>
                                        <li className="list-group-item border-0">Hosting support</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-anupam">
                                    <a className="text-white nav-link fs-5 px-4 py-1" href="#">₹<span className="fs-4">30,000
                                        </span>/ month</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card shadow border-0 my-3">
                                <div className="card-header bg-anupam">
                                    <h2 className="text-white h2 p-3">
                                        <span className="d-block">Web Development </span>
                                        <span className="h4">Services </span>
                                        <span className="d-block h6 mt-3">starting </span>
                                        <span className="h5">₹</span>
                                        <span>1200 </span>
                                        <span className="h4">/ hour</span>
                                    </h2>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush fs-6 mb-3">
                                        <li className="list-group-item border-0">Page Optimisation</li>
                                        <li className="list-group-item border-0">Best Web vitals</li>
                                        <li className="list-group-item border-0">Responsive UI / UX</li>
                                        <li className="list-group-item border-0">Content Strategy</li>
                                        <li className="list-group-item border-0">SEO enhancement</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-anupam">
                                    <a className="text-white nav-link fs-5 px-4 py-1" href="#">₹<span className="fs-4">40,000
                                        </span>/ month</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card shadow border-0 my-3">
                                <div className="card-header bg-anupam">
                                    <h2 className="text-white h2 p-3">
                                        <span className="d-block">Website SEO </span>
                                        <span className="h4">Services </span>
                                        <span className="d-block h6 mt-3">starting </span>
                                        <span className="h5">₹</span>
                                        <span>1600 </span>
                                        <span className="h4">/ hour</span>
                                    </h2>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush fs-6 mb-3">
                                        <li className="list-group-item border-0">On-page SEO</li>
                                        <li className="list-group-item border-0">SEO Strategy (Persona)</li>
                                        <li className="list-group-item border-0">Technical SEO</li>
                                        <li className="list-group-item border-0">Social Signaling</li>
                                        <li className="list-group-item border-0">Quality Backlinks</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-anupam">
                                    <a className="text-white nav-link fs-5 px-4 py-1" href="#">₹<span className="fs-4">20,000
                                        </span>/ month</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}  