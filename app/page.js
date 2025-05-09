import Image from "next/image";
import styles from "./page.module.css";

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
      <section className="bg-dark parallax my-5" id="quantity">
        <div className="gradient-bottom-bg">
          <div className="my-5 py-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="lead text-white text-shadow fs-3 mb-5">
                    <span className="text-uppercase d-block fw-bold display-3">
                      Numbers{" "}
                    </span>{" "}
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
                        <span
                          className="text-color fw-bold display-5"
                          id="counter1"
                        >
                          1000
                        </span>
                        <span className="fs-1">+</span>
                        <br />
                        <span className="d-block fs-6 mt-4">
                          Website & Projets{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div className="card shadow my-3">
                    <div className="card-body">
                      <p className="lead text-center py-4">
                        <span className="d-block fs-4 mb-4">Consecutive </span>
                        <span
                          className="text-color fw-bold display-5"
                          id="counter2"
                        >
                          102
                        </span>
                        <span className="fs-1">+</span>
                        <br />
                        <span className="d-block fs-6 mt-4">
                          Months of Timeframe
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div className="card shadow my-3">
                    <div className="card-body">
                      <p className="lead text-center py-4">
                        <span className="d-block fs-4 mb-4">Served </span>
                        <span
                          className="text-color fw-bold display-5"
                          id="counter3"
                        >
                          80
                        </span>
                        <span className="fs-1">+</span>
                        <br />
                        <span className="d-block fs-6 mt-4">
                          Valued Clients
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div className="card shadow my-3">
                    <div className="card-body">
                      <p className="lead text-center py-4">
                        <span className="d-block fs-4 mb-4">Countries </span>
                        <span
                          className="text-color fw-bold display-5"
                          id="counter4"
                        >
                          16
                        </span>
                        <span className="fs-1">+</span>
                        <br />
                        <span className="d-block fs-6 mt-4">
                          Around the Globe
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark parallax" id="reviews">
        <div className="gradient-bottom-b">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleRide" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner py-4">
                                <div className="carousel-item active">
                                    <ul className="nav justify-content-center">
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/australia.png"
                                                    alt="Clients of Anupam from Australia" title="Australia" width="64"
                                                    height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">Australia</figcaption>
                                            </figure>
                                        </li>
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/austria.png"
                                                    alt="Clients of Anupam from Austria" title="Austria" width="64"
                                                    height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">Austria</figcaption>
                                            </figure>
                                        </li>
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/canada.png"
                                                    alt="Clients of Anupam from Canada" title="Canada" width="64"
                                                    height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">Canada</figcaption>
                                            </figure>
                                        </li>
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/ireland.png"
                                                    alt="Clients of Anupam from Ireland" title="Ireland" width="64"
                                                    height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">Ireland</figcaption>
                                            </figure>
                                        </li>
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/israel.png"
                                                    alt="Clients of Anupam from Israel" title="Israel" width="64"
                                                    height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">Israel</figcaption>
                                            </figure>
                                        </li>
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/lithuania.png"
                                                    alt="Clients of Anupam from Lithuania" title="Lithuania" width="64"
                                                    height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">Lithuania</figcaption>
                                            </figure>
                                        </li>
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/malaysia.png"
                                                    alt="Clients of Anupam from Malaysia" title="Malaysia" width="64"
                                                    height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">Malaysia</figcaption>
                                            </figure>
                                        </li>
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/mauritius.png"
                                                    alt="Clients of Anupam from Mauritius" title="Mauritius" width="64"
                                                    height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">Mauritius</figcaption>
                                            </figure>
                                        </li>
                                    </ul>
                                </div>
                                <div className="carousel-item">
                                    <ul className="nav justify-content-center">
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/nigeria.png"
                                                    alt="Clients of Anupam from Nigeria" title="Nigeria" width="64"
                                                    height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">Nigeria</figcaption>
                                            </figure>
                                        </li>
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/peru.png"
                                                    alt="Clients of Anupam from Peru" title="Peru" width="64"
                                                    height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">Peru</figcaption>
                                            </figure>
                                        </li>
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/puerto-rico.png"
                                                    alt="Clients of Anupam from Puerto Rico" title="Puerto Rico"
                                                    width="64" height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">Puerto R.</figcaption>
                                            </figure>
                                        </li>
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/saudi-arabia.png"
                                                    alt="Clients of Anupam from Saudi Arabia" title="Saudi Arabia"
                                                    width="64" height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">Saudi A.</figcaption>
                                            </figure>
                                        </li>
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/slovakia.png"
                                                    alt="Clients of Anupam from Slovakia" title="Slovakia" width="64"
                                                    height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">Slovakia</figcaption>
                                            </figure>
                                        </li>
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/south-africa.png"
                                                    alt="Clients of Anupam from South Africa" title="South Africa"
                                                    width="64" height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">S. Africa</figcaption>
                                            </figure>
                                        </li>
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/united-kingdom.png"
                                                    alt="Clients of Anupam from United Kingdom" title="United Kingdom"
                                                    width="64" height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">UK</figcaption>
                                            </figure>
                                        </li>
                                        <li className="nav-item px-2">
                                            <figure className="figure card shadow p-3">
                                                <Image src="/res/icons/countries/united-states-of-america.png"
                                                    alt="Clients of Anupam from United States" title="United States"
                                                    width="64" height="64" loading="lazy" />
                                                <figcaption className="lead text-center fs-6 pt-3">US</figcaption>
                                            </figure>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="bg-opacity-half">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card shadow border-0 my-3 p-4">
                                <div className="card-body">
                                    <Image src="/image/about/gracianna-winery.webp" width="150" height="50" loading="lazy"
                                        alt="Client of Anupam Mondal, Gracianna Winery - USA">
                                    <figure>
                                        <blockquote className="blockquote">
                                            <p className="lead text-justify fs-6 py-4">Very good communication despite time
                                                difference between California and India. We will use Anupam again. Very
                                                generous and wonderful person.</p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer text-dark mt-3">
                                            <strong>Trini Amador </strong>
                                            <cite className="d-block fs-5" title="Source Title">🇺🇸 United States</cite>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card shadow border-0 my-3 p-4">
                                <div className="card-body">
                                    <Image src="/image/about/1300-the-vet.webp" width="150" height="50" loading="lazy"
                                        alt="Client of Anupam Mondal, 1300 the vet - Australia">
                                    <figure>
                                        <blockquote className="blockquote">
                                            <p className="lead text-justify fs-6 py-4">Great to work with this freelancer,
                                                very patient and dedicated to achieve the clients vision, My first
                                                choice for this type of work. AAA+++ 5 Stars.</p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer text-dark mt-3">
                                            <strong>Ben Newth </strong>
                                            <cite className="d-block fs-5" title="Source Title">🇦🇺 Australia</cite>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card shadow border-0 my-3 p-4">
                                <div className="card-body">
                                    <Image src="/image/about/the-flooring-company.webp" width="66" height="50"
                                        loading="lazy" alt="Client of Anupam Mondal, the flooring company - USA">
                                    <figure>
                                        <blockquote className="blockquote">
                                            <p className="lead text-justify fs-6 py-4">Am so glad, I found Anupam M to do my
                                                project. He is a professional that knows the work. the job was done as
                                                fast as he could. He is THE BEST.</p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer text-dark mt-3">
                                            <strong>Tsila R </strong>
                                            <cite className="d-block fs-5" title="Source Title">🇮🇱 Israel</cite>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
      </section>
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
                                  <a className="text-uppercase btn btn-outline-dark me-2 mb-2 px-4 py-2"
                                      href="portfolio">Portfolio</a>
                                  <a className="text-uppercase btn btn-outline-dark me-2 mb-2 px-4 py-2" href="about-us">About
                                      Us</a>
                              </nav>
                          </div>
                      </div>
                      <div className="col-md-5 col-12 px-0 bg-light">
                          <div className="gradient-bottom-bg">
                              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                  <div className="carousel-inner">
                                      <div className="carousel-item active">
                                          <div className="card card-review shadow d-block mx-auto my-5 p-4 h-100">
                                              <div className="card-body">
                                                  <Image src="/image/clients/client-review-anupam-mondal-gracianna-100x100.webp"
                                                      width="100" height="100" loading="lazy"
                                                      className="border rounded-circle"
                                                      alt="Client of Anupam Mondal, Quantum Bullion - Indonesia" />
                                                  <figure>
                                                      <figcaption className="blockquote-footer text-dark mt-3">
                                                          <strong>Trini Amador </strong>
                                                          <cite className="d-block fs-5" title="Source Title">🇺🇸 United
                                                              States</cite>
                                                      </figcaption>
                                                      <blockquote className="blockquote">
                                                          <p className="lead text-justify fs-6 pt-3">Very good communication
                                                              despite time difference between California and India. We
                                                              will
                                                              use Anupam again. Very generous and wonderful person.</p>
                                                      </blockquote>
                                                  </figure>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="carousel-item">
                                          <div className="card card-review shadow d-block mx-auto my-5 p-4 h-100">
                                              <div className="card-body">
                                                  <Image src="/image/clients/thevet.webp" width="100" height="100"
                                                      loading="lazy" className="border rounded-circle"
                                                      alt="Client of Anupam Mondal, 1300 the vet - Australia" />
                                                  <figure>
                                                      <figcaption className="blockquote-footer text-dark mt-3">
                                                          <strong>Ben Newth </strong>
                                                          <cite className="d-block fs-5" title="Source Title">🇦🇺
                                                              Australia</cite>
                                                      </figcaption>
                                                      <blockquote className="blockquote">
                                                          <p className="lead text-justify fs-6 pt-3">Great to work with this
                                                              freelancer, very patient and dedicated to achieve the
                                                              clients
                                                              vision, My first choice for this type of work. AAA+++ 5
                                                              Stars.
                                                          </p>
                                                      </blockquote>
                                                  </figure>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="carousel-item">
                                          <div className="card card-review shadow d-block mx-auto my-5 p-4 h-100">
                                              <div className="card-body">
                                                  <Image src="/image/clients/client-review-anupam-mondal-100x100.webp"
                                                      width="100" height="100" loading="lazy"
                                                      className="border rounded-circle"
                                                      alt="Client of Anupam Mondal, Quantum Bullion - Indonesia" />
                                                  <figure>
                                                      <figcaption className="blockquote-footer text-dark mt-3">
                                                          <strong>Azizi Jazmi </strong>
                                                          <cite className="d-block fs-5" title="Source Title">🇲🇾
                                                              Malaysia</cite>
                                                      </figcaption>
                                                      <blockquote className="blockquote">
                                                          <p className="lead text-justify fs-6 pt-3">
                                                              This guy is excellent !! Great experience. Job done within
                                                              24
                                                              hour. I will surely contact him for my website now . 1 part
                                                              done
                                                              5 more to go.</p>
                                                      </blockquote>
                                                  </figure>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="bg-dark parallax" id="clients">
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <h3 className="lead text-center text-white text-shadow fs-3 mb-5">
                        <span className="text-uppercase d-block fw-bold display-3">Clients </span>
                        <span>we've worked with, arround the Globe</span>
                    </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner mb-5">
                            <div className="carousel-item active">
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <Image src="/image/brands/august-beauty-lab.jpg" className="card border-0 m-2"
                                            alt="August Beauty Lab" width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/br-oil-tools.jpg" className="card border-0 m-2"
                                            alt="BR Oil Tools" width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/capstone-trading-systems.jpg" className="card border-0 m-2"
                                            alt="Capstone Trading Systems" width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/cpa-australia.jpg" className="card border-0 m-2"
                                            alt="CPA Australia" width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/dubai-visas.jpg" className="card border-0 m-2"
                                            alt="Dubai Visas" width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/elephant-overseas.jpg" className="card border-0 m-2"
                                            alt="Elephant Overseas" width="150" height="50" />
                                    </li>
                                </ul>
                            </div>
                            <div className="carousel-item">
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <Image src="/image/brands/wealth-trust.jpg" className="card border-0 m-2"
                                            alt="Wealth Trust" width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/gc-technologies.jpg" className="card border-0 m-2"
                                            alt="GC Technologiess" width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/global-alliance.jpg" className="card border-0 m-2"
                                            alt="Global Alliance" width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/gracianna-winery.jpg" className="card border-0 m-2"
                                            alt="Gracianna Winery" width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/huxley.jpg" className="card border-0 m-2" alt="Huxley"
                                            width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/india-arrival.jpg" className="card border-0 m-2"
                                            alt="India Arrival" width="150" height="50" />
                                    </li>
                                </ul>
                            </div>
                            <div className="carousel-item">
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <Image src="/image/brands/kids-n-hers.jpg" className="card border-0 m-2"
                                            alt="Kids N Hers" width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/quick-brain.jpg" className="card border-0 m-2"
                                            alt="Quick Brain" width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/radiobillboards.jpg" className="card border-0 m-2"
                                            alt="Radio Billboards" width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/ritehorn.jpg" className="card border-0 m-2" alt="Ritehorn"
                                            width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/sailing-dreams.jpg" className="card border-0 m-2"
                                            alt="Sailing Dreams" width="150" height="50" />
                                    </li>
                                    <li className="nav-item">
                                        <Image src="/image/brands/syncware.jpg" className="card border-0 m-2" alt="Syncware"
                                            width="150" height="50" />
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
      <section className="bg-light pt-5" id="connect">
          <div className="gradient-bottom-bg">
              <div className="container">
                  <div className="row">
                      <div className="col-md-7 col-12">
                          <div className="py-5">
                              <h2 className="lead fs-3 my-4">Connect with Anupam Mondal</h2>
                              <p className="lead fs-6 my-5">Ready to elevate your web presence? Reach out to me via WhatsApp
                                  for a
                                  chat or call regarding your web design, web development, or website SEO needs. Whether
                                  you're seeking guidance or a consultation, simply ping me or shoot an email. I'm here to
                                  provide swift solutions that propel your business forward. Let's create something
                                  exceptional together!
                              </p>
                              <nav className="nav">
                                  <a className="text-uppercase btn btn-outline-dark me-2 px-3" href="portfolio">Portfolio</a>
                                  <a className="btn btn-outline-dark me-2"
                                      title="WhatsApp Anupam Mondal for Web Design | Development | SEO Services"
                                      href="https://wa.me/919474460058?text=Boost%20Your%20Business%20with%20Expert%20Web%20Design%2C%20Development%2C%20%26%20SEO%20Services%20by%20Anupam%20Mondal%20-%20https%3A%2F%2Fanupammondal.in%2F">
                                      <i className="bi bi-whatsapp"></i>
                                  </a>
                                  <a className="btn btn-outline-dark me-2"
                                      title="Skype Anupam Mondal for Web Design | Development | SEO Services"
                                      href="skype:live:anupam2skype?chat">
                                      <i className="bi bi-skype"></i>
                                  </a>
                                  <a className="btn btn-outline-dark me-2"
                                      title="Skype Anupam Mondal for Web Design | Development | SEO Services"
                                      href="http://m.me/1600651796916334?text=Boost%20Your%20Business%20with%20Expert%20Web%20Design%2C%20Development%2C%20%26%20SEO%20Services%20by%20Anupam%20Mondal%20-%20https%3A%2F%2Fanupammondal.in%2F">
                                      <i className="bi bi-messenger"></i>
                                  </a>
                                  <a className="btn btn-outline-dark me-2"
                                      title="Skype Anupam Mondal for Web Design | Development | SEO Services"
                                      href="tel:+919474450058">
                                      <i className="bi bi-telephone-inbound-fill"></i>
                                  </a>
                              </nav>
                          </div>
                      </div>
                      <div className="col-md-5 col-12">
                          <div className="card bg-light border-white border-5">
                              <div className="silhouette">
                                  <Image src="/image/homepage/Online world-bro.svg" className="img-fluid" width="451"
                                      height="451" alt="Clients arround world of Anupam Mondal" loading="lazy" />
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
