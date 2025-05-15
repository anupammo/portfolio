// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import Counters from "./components/Counters";
// import FlagsSlide from "./components/FlagsSlide";
// import ClientSlider from "./components/ClientSlider";
// import Testimonis from "./components/Testimonis";
import styles from './page.module.css';

export default function Blog() {  
  return (
    <>
        <header className="parallax text-white">
            <div className={styles.glassEffect}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-8 col-md-6 col-12">
                            <h1 className="text-white">
                                <span className="d-block h3">Welcome to <strong className="text-dark">Blog</strong> of </span>
                                <span className="fw-bold d-block display-4"><strong className="text-dark">Anupam</strong> Mondal </span>
                                <span className="d-block h3 mt-3">Insights on <strong className="text-dark">Web Development</strong> &amp; <strong className="text-dark">Digital Marketing</strong></span>
                            </h1>
                            <p className="fs-6 mt-4 mt-4">Explore expert insights and tips on web development, digital marketing, and more on Anupam Mondal's blog. Stay updated with the latest trends, strategies, and personal experiences to enhance your online presence.</p>                        
                            <p className="lead fw-bold mb-4">Check out our expertise services</p>
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="btn btn-outline-light rounded-pill px-4 me-2 mb-2" href="../services/web-design" type="button">Web Design</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-light rounded-pill px-4 me-2 mb-2" href="../services/web-development" type="button">Web Development</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-light rounded-pill px-4 me-2 mb-2" href="../services/digital-marketing" type="button">Digital Marketing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-light rounded-pill px-4 me-2 mb-2" href="../services/website-seo" type="button">Website SEO</a>
                                </li>
                            </ul>
                            <div className="d-grid gap-2 d-md-flex justify-content-start">
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <img className="card shadow border-0 mb-2 mx-auto" width={250} src="https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg?uid=R1067383&amp;ga=GA1.1.23435495.1733852500&amp;semt=ais_hybrid" alt="" />
                            <img className="card shadow border-0 mb-2 float-end" width={250} src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg?uid=R1067383&amp;ga=GA1.1.23435495.1733852500&amp;semt=ais_hybrid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  );
}