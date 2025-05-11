"use client"; // Ensure this is a client component

import { useEffect } from "react";
import Image from "next/image";

export default function ClientSlider() {
  useEffect(() => {
    // Dynamically import Bootstrap JS only in the browser
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then((bootstrapModule) => {
        const carouselElement = document.querySelector("#carouselExample");
        if (carouselElement) {
          new bootstrapModule.Carousel(carouselElement, {
            interval: 3000, // Auto-slide every 3 seconds
            ride: "carousel",
          });
        }
      })
      .catch((err) => console.error("Bootstrap JS failed to load", err));
  }, []); // ✅ Runs only once when the component mounts

  return (
    <>
      <section className="bg-dark parallax" id="clients">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="lead text-center text-white text-shadow fs-3 mb-5">
                <span className="text-uppercase d-block fw-bold display-3">
                  Clients{" "}
                </span>
                <span>we've worked with, arround the Globe</span>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner mb-5">
                  <div className="carousel-item active">
                    <ul className="nav justify-content-center">
                      <li className="nav-item">
                        <Image
                          src="/image/brands/august-beauty-lab.jpg"
                          className="card border-0 m-2"
                          alt="August Beauty Lab"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/br-oil-tools.jpg"
                          className="card border-0 m-2"
                          alt="BR Oil Tools"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/capstone-trading-systems.jpg"
                          className="card border-0 m-2"
                          alt="Capstone Trading Systems"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/cpa-australia.jpg"
                          className="card border-0 m-2"
                          alt="CPA Australia"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/dubai-visas.jpg"
                          className="card border-0 m-2"
                          alt="Dubai Visas"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/elephant-overseas.jpg"
                          className="card border-0 m-2"
                          alt="Elephant Overseas"
                          width="150"
                          height="50"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="carousel-item">
                    <ul className="nav justify-content-center">
                      <li className="nav-item">
                        <Image
                          src="/image/brands/wealth-trust.jpg"
                          className="card border-0 m-2"
                          alt="Wealth Trust"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/gc-technologies.jpg"
                          className="card border-0 m-2"
                          alt="GC Technologiess"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/global-alliance.jpg"
                          className="card border-0 m-2"
                          alt="Global Alliance"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/gracianna-winery.jpg"
                          className="card border-0 m-2"
                          alt="Gracianna Winery"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/huxley.jpg"
                          className="card border-0 m-2"
                          alt="Huxley"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/india-arrival.jpg"
                          className="card border-0 m-2"
                          alt="India Arrival"
                          width="150"
                          height="50"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="carousel-item">
                    <ul className="nav justify-content-center">
                      <li className="nav-item">
                        <Image
                          src="/image/brands/kids-n-hers.jpg"
                          className="card border-0 m-2"
                          alt="Kids N Hers"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/quick-brain.jpg"
                          className="card border-0 m-2"
                          alt="Quick Brain"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/radiobillboards.jpg"
                          className="card border-0 m-2"
                          alt="Radio Billboards"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/ritehorn.jpg"
                          className="card border-0 m-2"
                          alt="Ritehorn"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/sailing-dreams.jpg"
                          className="card border-0 m-2"
                          alt="Sailing Dreams"
                          width="150"
                          height="50"
                        />
                      </li>
                      <li className="nav-item">
                        <Image
                          src="/image/brands/syncware.jpg"
                          className="card border-0 m-2"
                          alt="Syncware"
                          width="150"
                          height="50"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
