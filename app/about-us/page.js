"use client"; // Ensure this is a client component
// import { useEffect } from "react";
// import Image from "next/image";
import Counters from "../components/Counters";
// import FlagsSlide from "./components/FlagsSlide";
import ClientSlider from "../components/ClientSlider";
import Testimonis from "../components/Testimonis";

export default function About() {
    return (
      <>
        <Counters />
        <section className="bg-light" id="testimonial">
          <div className="gradient-bottom-bg">
              <div className="container py-5">
                  <div className="row">
                      <div className="col-md-7 col-12">
                          <div className="py-5">
                              <h2 className="lead fs-3 my-4">Client Testimonials: Raving Reviews</h2>
                              <p className="lead fs-6 my-5">Join the ranks of satisfied clients worldwide who have benefited
                                  from Anupam Mondal's expertise. Garnering acclaim on Google, Facebook, and various
                                  platforms, my freelance projects since 2016 have left a trail of positive reviews. Each
                                  project is approached with dedication, aiming to deliver outstanding results that exceed
                                  expectations.</p>
                              <nav className="nav">
                                  <a className="text-uppercase btn btn-outline-dark me-2 mb-2 px-4 py-2" href="portfolio">Portfolio</a>
                                  <a className="text-uppercase btn btn-outline-dark me-2 mb-2 px-4 py-2" href="about-us">About
                                      Us</a>
                              </nav>
                          </div>
                      </div>
                      <div className="col-md-5 col-12 px-0 bg-light">
                          <div className="gradient-bottom-bg">
                            <Testimonis />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        <ClientSlider />
      </>
    );
}