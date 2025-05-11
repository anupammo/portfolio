"use client"; // Ensure this is a client component

// import { useEffect } from "react";
import Image from "next/image";
import Counters from "./components/Counters";
import FlagsSlide from "./components/FlagsSlide";
import ClientSlider from "./components/ClientSlider";
import Testimonis from "./components/Testimonis";

export default function Home() {  
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="lead fs-2 my-4">
                Boost Your Business with Expert Web Design, Development, &amp;
                SEO Services by Anupam Mondal
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-12">
              <p className="lead fs-6 my-4">
                Are you in need of a cutting-edge website for your business?
                Perhaps you're looking to enhance or modernize your existing
                site with top-tier web design, web development, or SEO services.
              </p>
              <p className="lead fs-6 my-4">
                Look no further! I specialize in optimizing websites for
                superior placement on Search Engine Results Pages (SERPs) with
                sleek, lightweight designs that will elevate your business among
                clients. Let's delve into how I can transform your online
                presence for success.
              </p>
              <p className="lead fs-6 my-4">
                Anupam Mondal for website, SEO, web design, development. Boost
                Your Business with Expert Web Design, Development, &amp; SEO
                Services by Anupam Mondal.
              </p>
              <ul className="list-group list-group-flush my-5">
                <li className="list-group-item border-0 p-0">
                  <a
                    href="./services/digital-marketing"
                    className="nav-link txt-anupam h6"
                  >
                    Digital Marketing Services
                  </a>
                </li>
                <li className="list-group-item border-0 p-0">
                  <a
                    href="./services/web-design"
                    className="nav-link txt-anupam h6"
                  >
                    Web Design Services
                  </a>
                </li>
                <li className="list-group-item border-0 p-0">
                  <a
                    href="./services/web-development"
                    className="nav-link txt-anupam h6"
                  >
                    Web Development Services
                  </a>
                </li>
                <li className="list-group-item border-0 p-0">
                  <a
                    href="./services/website-seo"
                    className="nav-link txt-anupam h6"
                  >
                    Website SEO Services
                  </a>
                </li>
              </ul>
              <nav className="nav my-4">
                <a
                  className="text-uppercase btn btn-outline-dark me-2 mb-2 px-4 py-2"
                  href="portfolio"
                >
                  Portfolio
                </a>
                <a
                  className="text-uppercase btn btn-outline-dark me-2 mb-2 px-4 py-2"
                  href="about-us"
                >
                  About Us
                </a>
              </nav>
            </div>
            <div className="col-lg-4 col-12">
              <div className="card shadow">
                <Image
                  src="/image/profile/anupam-mondal-freelancer.webp"
                  width="354"
                  height="354"
                  className="img-fluid my-5"
                  alt="Anupam Mondal for Web Design | Development | SEO Servives"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="my-4 py-5" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 p-4">
              <h2 className="lead fs-3 my-5">
                <span>Web Design : </span>
                <span className="d-block fs-5 pt-2">
                  Crafting Engaging Experiences
                </span>
              </h2>
              <p className="lead fs-6 my-5">
                Discover exceptional web design services tailored to your needs.
                From captivating graphics to intuitive User Interface (UI) and
                User Experience (UX) design, I create websites that resonate
                with your audience. Embracing responsive design, your site will
                seamlessly adapt to any device, ensuring swift loading times
                that swiftly introduce your business and its offerings to
                potential customers.
              </p>
              <a
                className="text-uppercase btn btn-outline-dark me-2 px-4 py-2 mb-5"
                href="services/web-design"
              >
                Web Design Services
              </a>
            </div>
            <div className="col-lg-6 col-12 p-4 bg-light border rounded">
              <h2 className="lead fs-3 my-5">
                <span>Web Development : </span>
                <span className="d-block fs-5 pt-2">
                  Empowering Global Reach
                </span>
              </h2>
              <p className="lead fs-6 my-5">
                In the digital landscape, web development is crucial for
                businesses aiming to connect with a global audience to sell your
                products or your services as a Brand. I specialize in developing
                websites that not only showcase your products but also
                facilitate outreach to audiences across smartphones and
                desktops. With progressive web apps, your business remains
                accessible even when users are offline.
              </p>
              <a
                className="text-uppercase btn btn-outline-dark me-2 px-4 py-2 mb-5"
                href="services/web-development"
              >
                Web Development Services
              </a>
            </div>
            <div className="col-lg-6 col-12 p-4 bg-light border rounded">
              <h2 className="lead fs-3 my-5">
                <span>Website SEO : </span>
                <span className="d-block fs-5 pt-2">
                  Driving Your Online Success
                </span>
              </h2>
              <p className="lead fs-6 my-5">
                Think of SEO as the essential wheels for your digital presence.
                Search Engine Optimization (SEO) is a pivotal aspect of website
                design and development, prioritized for boosting visibility once
                your site goes live. In today's era of digital marketing, SEO
                stands as the most effective strategy for promoting services and
                products, ensuring your business thrives in the online realm.
              </p>
              <a
                className="text-uppercase  btn btn-outline-dark me-2 px-4 py-2 mb-5"
                href="services/website-seo"
              >
                Website SEO Services
              </a>
            </div>
            <div className="col-lg-6 col-12 p-4">
              <h2 className="lead fs-3 my-5">
                <span>Digital Marketing : </span>
                <span className="d-block fs-5 pt-2">
                  Grow with Organic Traffics & Leads
                </span>
              </h2>
              <p className="lead fs-6 my-5">
                Think of SEO as the essential wheels for your digital presence.
                Search Engine Optimization (SEO) is a pivotal aspect of website
                design and development, prioritized for boosting visibility once
                your site goes live. In today's era of digital marketing, SEO
                stands as the most effective strategy for promoting services and
                products, ensuring your business thrives in the online realm.
              </p>
              <a
                className="text-uppercase btn btn-outline-dark me-2 px-4 py-2 mb-5"
                href="services/digital-marketing"
              >
                Digital Marketing Services
              </a>
            </div>
          </div>
        </div>
      </section>
      <Counters />
      <FlagsSlide />
      <section className="bg-light" id="testimonial">
        <div className="gradient-bottom-bg">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-7 col-12">
                <div className="py-5">
                  <h2 className="lead fs-3 my-4">
                    Client Testimonials: Raving Reviews
                  </h2>
                  <p className="lead fs-6 my-5">
                    Join the ranks of satisfied clients worldwide who have
                    benefited from Anupam Mondal's expertise. Garnering acclaim
                    on Google, Facebook, and various platforms, my freelance
                    projects since 2016 have left a trail of positive reviews.
                    Each project is approached with dedication, aiming to
                    deliver outstanding results that exceed expectations.
                  </p>
                  <nav className="nav">
                    <a
                      className="text-uppercase btn btn-outline-dark me-2 mb-2 px-4 py-2"
                      href="portfolio"
                    >
                      Portfolio
                    </a>
                    <a
                      className="text-uppercase btn btn-outline-dark me-2 mb-2 px-4 py-2"
                      href="about-us"
                    >
                      About Us
                    </a>
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
      <section className="bg-light pt-5" id="connect">
        <div className="gradient-bottom-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-12">
                <div className="py-5">
                  <h2 className="lead fs-3 my-4">Connect with Anupam Mondal</h2>
                  <p className="lead fs-6 my-5">
                    Ready to elevate your web presence? Reach out to me via
                    WhatsApp for a chat or call regarding your web design, web
                    development, or website SEO needs. Whether you're seeking
                    guidance or a consultation, simply ping me or shoot an
                    email. I'm here to provide swift solutions that propel your
                    business forward. Let's create something exceptional
                    together!
                  </p>
                  <nav className="nav">
                    <a
                      className="text-uppercase btn btn-outline-dark me-2 px-3"
                      href="portfolio"
                    >
                      Portfolio
                    </a>
                    <a
                      className="btn btn-outline-dark me-2"
                      title="WhatsApp Anupam Mondal for Web Design | Development | SEO Services"
                      href="https://wa.me/919474460058?text=Boost%20Your%20Business%20with%20Expert%20Web%20Design%2C%20Development%2C%20%26%20SEO%20Services%20by%20Anupam%20Mondal%20-%20https%3A%2F%2Fanupammondal.in%2F"
                    >
                      <i className="bi bi-whatsapp"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark me-2"
                      title="Skype Anupam Mondal for Web Design | Development | SEO Services"
                      href="skype:live:anupam2skype?chat"
                    >
                      <i className="bi bi-skype"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark me-2"
                      title="Skype Anupam Mondal for Web Design | Development | SEO Services"
                      href="http://m.me/1600651796916334?text=Boost%20Your%20Business%20with%20Expert%20Web%20Design%2C%20Development%2C%20%26%20SEO%20Services%20by%20Anupam%20Mondal%20-%20https%3A%2F%2Fanupammondal.in%2F"
                    >
                      <i className="bi bi-messenger"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark me-2"
                      title="Skype Anupam Mondal for Web Design | Development | SEO Services"
                      href="tel:+919474450058"
                    >
                      <i className="bi bi-telephone-inbound-fill"></i>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="col-md-5 col-12">
                <div className="card bg-light border-white border-5">
                  <div className="silhouette">
                    <Image
                      src="/image/homepage/Online world-bro.svg"
                      className="img-fluid"
                      width="451"
                      height="451"
                      alt="Clients arround world of Anupam Mondal"
                      loading="lazy"
                    />
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
