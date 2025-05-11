"use client"; // Ensure this is a client component
import styles from "../page.module.css"; // Import CSS Module

import { useEffect } from "react";
import Image from "next/image";

import AnimatedCounter from "../components/AnimatedCounter";

export default function Testimonials() {
  return (
        <>
            <section className="bg-dark parallax my-5" id="quantity">
                <div className="gradient-bottom-bg">
                <div className="my-5 py-5">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <h2 className="lead text-white text-shadow fs-3 mb-5">
                            <span className="text-uppercase d-block fw-bold display-3">Numbers </span>
                            that Matter to us for reference
                        </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-xs-6">
                            <div className="card shadow my-3">
                                <div className="card-body">
                                    <p className="lead text-center py-4">
                                        <span className="d-block fs-4 mb-4">Managed </span>
                                        <AnimatedCounter targetNumber={1000} duration={5000} />
                                        <span className="fs-1">+</span>
                                        <br />
                                        <span className="d-block fs-6 mt-4">Website & Projets</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="card shadow my-3">
                                <div className="card-body">
                                    <p className="lead text-center py-4">
                                        <span className="d-block fs-4 mb-4">Consecutive </span>
                                        <AnimatedCounter targetNumber={102} duration={5000} />
                                        <span className="fs-1">+</span>
                                        <br />
                                        <span className="d-block fs-6 mt-4">Months of Timeframe</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="card shadow my-3">
                                <div className="card-body">
                                    <p className="lead text-center py-4">
                                        <span className="d-block fs-4 mb-4">Served </span>
                                        <AnimatedCounter targetNumber={80} duration={5000} />
                                        <span className="fs-1">+</span>
                                        <br />
                                        <span className="d-block fs-6 mt-4">Valued Clients</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="card shadow my-3">
                                <div className="card-body">
                                    <p className="lead text-center py-4">
                                        <span className="d-block fs-4 mb-4">Countries </span>
                                        <AnimatedCounter targetNumber={16} duration={5000} />
                                        <span className="fs-1">+</span>
                                        <br />
                                        <span className="d-block fs-6 mt-4">Around the Globe</span>
                                    </p>
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
