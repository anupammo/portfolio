import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import CallCTA from "../components/CallCTA";

export default function Portfolio() {
  const breadcrumbListData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://anupammondal.in/",
      },
    ],
  };

  return (
    <>
      <Head>
        <Script
          id="breadcrumbList"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbListData),
          }}
        />
      </Head>
      <main>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-12">
                <h1 className="lead fs-2 py-4">
                  Anupam Mondal's Web Design and Development Portfolio
                </h1>
                <p className="lead fs-6 my-5">
                  Anupam Mondal showcases a diverse range of live web design and
                  web development projects, each a testament to expertise and
                  innovation. Offering comprehensive website development
                  services globally, Anupam specializes in Medical and
                  Healthcare, Education, and Business to Business (B2B) sectors.
                  These projects are not just about aesthetics; they are finely
                  tuned for Search Engine Optimization (SEO) with interactive
                  and modern responsive designs. Let's delve into some of the
                  standout projects:{" "}
                </p>
                <nav className="nav my-5">
                  <a
                    className="text-uppercase btn btn btn-outline-dark me-2 mb-2 px-4 py-2"
                    href="portfolio"
                  >
                    Portfolio
                  </a>
                  <a
                    className="text-uppercase btn btn btn-outline-dark me-2 mb-2 px-4 py-2"
                    href="about-us"
                  >
                    About Us
                  </a>
                </nav>
              </div>
              <div className="col-md-4 col-12">
                <Image
                  src="/image/svg/portfolio.svg"
                  className="img-fluid"
                  alt="Anupam Mondal's Web Design | Development Portfolio"
                  width={356}
                  height={356}
                />
              </div>
            </div>
          </div>
        </header>
        <section className="bg-anupam parallax">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="lead text-white text-shadow fs-3 mt-5">
                  <span className="text-uppercase d-block fw-bold display-3">
                    Ongoing{" "}
                  </span>{" "}
                  Website development projects, we're working on
                </h2>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <a
                  href="https://nivesguru.in/"
                  title="Nivesguru: Free Calculator Investment make easy for India"
                  alt="Nivesguru: Free Calculator Investment make easy for India"
                  target="_blank"
                >
                  <div className="card my-3">
                    <ul className="nav p-2">
                      <li className="nav-item">
                        <div className="rounded-circle bg-danger shadow mx-1 p-2"></div>
                      </li>
                      <li className="nav-item">
                        <div className="rounded-circle bg-warning shadow mx-1 p-2"></div>
                      </li>
                      <li className="nav-item">
                        <div className="rounded-circle bg-success shadow mx-1 p-2"></div>
                      </li>
                    </ul>
                    <Image
                      className="img-fluid img-shadow py-4"
                      src="/image/portfolio/3-devices-white-nivesguru.png"
                      alt=""
                      width={354}
                      height={149}
                    />
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a
                  href="https://sundarban-tour.com/"
                  title="Discover the Magic of Jungle wildlife in Sundarban Tour"
                  alt="Discover the Magic of Jungle wildlife in Sundarban Tour"
                  target="_blank"
                >
                  <div className="card my-3">
                    <ul className="nav p-2">
                      <li className="nav-item">
                        <div className="rounded-circle bg-danger shadow mx-1 p-2"></div>
                      </li>
                      <li className="nav-item">
                        <div className="rounded-circle bg-warning shadow mx-1 p-2"></div>
                      </li>
                      <li className="nav-item">
                        <div className="rounded-circle bg-success shadow mx-1 p-2"></div>
                      </li>
                    </ul>
                    <Image
                      className="img-fluid img-shadow py-4"
                      src="/image/portfolio/3-devices-white-sundarban-tour.png"
                      alt=""
                      width={354}
                      height={149}
                    />
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a
                  href="https://nivesguru.in/"
                  title="Nivesguru: Free Calculator Investment make easy for India"
                  alt="Nivesguru: Free Calculator Investment make easy for India"
                  target="_blank"
                >
                  <div className="card my-3">
                    <ul className="nav p-2">
                      <li className="nav-item">
                        <div className="rounded-circle bg-danger shadow mx-1 p-2"></div>
                      </li>
                      <li className="nav-item">
                        <div className="rounded-circle bg-warning shadow mx-1 p-2"></div>
                      </li>
                      <li className="nav-item">
                        <div className="rounded-circle bg-success shadow mx-1 p-2"></div>
                      </li>
                    </ul>
                    <Image
                      className="img-fluid img-shadow py-4"
                      src="/image/portfolio/3-devices-white-wheelguru.png"
                      title="Wheelguru: Top Bike, Scooter Mileage, Price, Specification"
                      alt="Wheelguru: Top Bike, Scooter Mileage, Price, Specification"
                      width={354}
                      height={149}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-12">
                <Image
                  src="/image/svg/portfolio.svg"
                  className="img-fluid"
                  alt="Expertise in Technological Innovation"
                  width={451}
                  height={451}
                />
              </div>
              <div className="col-md-7 col-12">
                <h2 className="lead fs-3 my-5">
                  Expertise in Technological Innovation
                </h2>
                <p className="lead fs-6 my-5">
                  Anupam Mondal stands as an authority in web design, web
                  development, web application development, and Search Engine
                  Optimization (SEO). His wealth of experience encompasses
                  full-stack development, ranging from Frontend with a focus on
                  User Interface (UI) and User Experience (UX) to backend
                  development involving databases, APIs, Web services, and
                  Server deployment. Ensuring security throughout the entire
                  Software Development Life Cycle (SDLC), Anupam provides
                  website development services to clients both nationally and
                  internationally. With a robust portfolio boasting over 100
                  projects on GitHub, Anupam utilizes frameworks such as
                  Bootstrap, ReactJS, AngularJS, CodeIgniter, and WordPress to
                  craft tailored solutions for businesses.
                </p>
                <nav className="nav my-5">
                  <a
                    className="text-uppercase btn btn btn-outline-dark me-2 mb-2 px-4 py-2"
                    href="portfolio"
                  >
                    Portfolio
                  </a>
                  <a
                    className="text-uppercase btn btn btn-outline-dark me-2 mb-2 px-4 py-2"
                    href="about-us"
                  >
                    About Us
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-anupam parallax">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="lead text-white text-shadow fs-3 mt-5">
                  <span className="text-uppercase d-block fw-bold display-3">
                    Recent{" "}
                  </span>{" "}
                  Website development projects, we're working on
                </h2>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <a
                  href="https://pstourism.in/about-us"
                  title="PS TourisM (PST) | Affordable and Quality Travel Services"
                  alt="PS TourisM (PST) | Affordable and Quality Travel Services"
                  target="_blank"
                >
                  <div className="card bg-light my-3">
                    <ul className="nav p-2">
                      <li className="nav-item">
                        <div className="rounded-circle bg-danger shadow mx-1 p-2"></div>
                      </li>
                      <li className="nav-item">
                        <div className="rounded-circle bg-warning shadow mx-1 p-2"></div>
                      </li>
                      <li className="nav-item">
                        <div className="rounded-circle bg-success shadow mx-1 p-2"></div>
                      </li>
                    </ul>
                    <Image
                      className="img-fluid img-shadow py-4"
                      src="/image/portfolio/3-devices-white-ps-tourism.png"
                      alt="PS TourisM (PST) | Affordable and Quality Travel Services"
                      width={451}
                      height={451}
                    />
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a
                  href="https://hawk-eye.net.in/"
                  title="HawkEye : A Unique Online Market Place"
                  alt="HawkEye : A Unique Online Market Place"
                  target="_blank"
                  noindex="true"
                >
                  <div className="card bg-light my-3">
                    <ul className="nav p-2">
                      <li className="nav-item">
                        <div className="rounded-circle bg-danger shadow mx-1 p-2"></div>
                      </li>
                      <li className="nav-item">
                        <div className="rounded-circle bg-warning shadow mx-1 p-2"></div>
                      </li>
                      <li className="nav-item">
                        <div className="rounded-circle bg-success shadow mx-1 p-2"></div>
                      </li>
                    </ul>
                    <Image
                      className="img-fluid img-shadow py-4"
                      src="/image/portfolio/3-devices-white-hawk-eye.png"
                      alt="HawkEye : A Unique Online Market Place"
                      width={451}
                      height={451}
                    />
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a
                  href="https://pstourism.in/about-us"
                  title="H3 Learning | Alternate High School Education in Pune"
                  alt="H3 Learning | Alternate High School Education in Pune"
                  target="_blank"
                >
                  <div className="card bg-light my-3">
                    <ul className="nav p-2">
                      <li className="nav-item">
                        <div className="rounded-circle bg-danger shadow mx-1 p-2"></div>
                      </li>
                      <li className="nav-item">
                        <div className="rounded-circle bg-warning shadow mx-1 p-2"></div>
                      </li>
                      <li className="nav-item">
                        <div className="rounded-circle bg-success shadow mx-1 p-2"></div>
                      </li>
                    </ul>
                    <Image
                      className="img-fluid img-shadow py-4"
                      src="/image/portfolio/3-devices-white-h3-learning.png"
                      alt="H3 Learning | Alternate High School Education in Pune"
                      width={451}
                      height={451}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-12 py-5">
                <h2 className="lead fs-3 my-5">
                  Free, Useful Web Applications Portfolio
                </h2>
                <p className="lead fs-6 my-5">
                  Anupam specializes in developing websites that are tailored
                  for niche businesses. His proven front-end and back-end
                  combinations ensure a seamless user experience coupled with a
                  focused branding strategy. Whether you are looking to
                  establish a new online presence or revamp an existing one,
                  Anupam provides optimized, well-designed, and search
                  engine-friendly websites. These websites are equipped with the
                  latest secure technology to help your business flourish and
                  outshine competitors.
                </p>
              </div>
              <div className="col-md-5 col-12">
                <Image
                  src="/image/svg/resume.svg"
                  className="img-fluid"
                  alt="Free, Useful Web Applications Portfolio"
                  width={451}
                  height={451}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-anupam parallax">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <a
                  href="https://anupammo.github.io/zodiac/"
                  alt="Free web app to check your zodiac sign"
                  title="Free web app to check your zodiac sign"
                  target="_blank"
                >
                  <div className="card shadow mx-auto border-0 my-4">
                    <Image
                      src="/image/portfolio/zodiac_sign_web_app_by_anupam.webp"
                      className="card-img"
                      alt="Free web app to check your zodiac sign"
                      width={356}
                      height={202}
                    />
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a
                  href="https://wordpress.org/plugins/smwpp-cta/"
                  alt="SMWPP-CTA WordPress plugin By Anupam Mondal"
                  title="SMWPP-CTA WordPress plugin By Anupam Mondal"
                  target="_blank"
                >
                  <div className="card shadow mx-auto border-0 my-4">
                    <Image
                      src="/image/portfolio/smwpp-cta-wordpress-plugin-anupam-mondal.webp"
                      className="card-img"
                      alt="SMWPP-CTA WordPress plugin By Anupam Mondal"
                      width={356}
                      height={202}
                    />
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a
                  href="https://sites.google.com/moe-dl.edu.my/cikguemas/kiraan-formula/kiraan-untung-gae-5x10x?authuser=0"
                  alt="Cikguemas Gold Investment Online Calculator"
                  title="Cikguemas Gold Investment Online Calculator"
                  target="_blank"
                  noindex="true"
                >
                  <div className="card shadow mx-auto border-0 my-4">
                    <Image
                      src="/image/portfolio/cikguemas_gold_investment_online_calculator_anupam_mondal.webp"
                      className="card-img"
                      alt="Cikguemas Gold Investment Online Calculator"
                      width={356}
                      height={202}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="lead fs-3 my-5">
                  Contact Anupam Mondal for Your Web Needs
                </h2>
                <p className="lead fs-6 my-5">
                  Whether you're seeking website design, development, or SEO
                  services, Anupam Mondal offers the best solutions. If you are
                  in Kolkata, West Bengal, Anupam can provide you with complete
                  web development services. His expertise lies in creating
                  websites that are not only visually appealing but also
                  optimized for search engines. If you're feeling unsure, don't
                  hesitate to reach out. A brief discussion about your project
                  requirements could save you valuable time and effort. Anupam
                  assures effective strategies tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-anupam parallax">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <a
                  href="http://www.1300thevet.com.au/"
                  alt="1300 The VET"
                  title="1300 The VET"
                  target="_blank"
                  noindex="true"
                >
                  <div className="card shadow mx-auto border-0 my-4">
                    <Image
                      src="/image/portfolio/1300thevet_web_design_development_anupam.webp"
                      className="card-img"
                      alt="1300 The VET"
                      width={356}
                      height={202}
                    />
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a
                  href="https://www.ozonepedia.com/"
                  alt="STP Kolkata | ETP Kolkata | Ozonepedia by Team Waterhouse"
                  title="STP Kolkata | ETP Kolkata | Ozonepedia by Team Waterhouse"
                  target="_blank"
                  noindex="true"
                >
                  <div className="card shadow mx-auto border-0 my-4">
                    <Image
                      src="/image/portfolio/complete_web_design_development_anupam.webp"
                      className="card-img"
                      alt="STP Kolkata | ETP Kolkata | Ozonepedia by Team Waterhouse"
                      width={356}
                      height={202}
                    />
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <a
                  href="https://nbpstechsolutions.in/"
                  alt="NBPS Tech Solutions Developed by Anupam Mondal"
                  title="NBPS Tech Solutions Developed by Anupam Mondal"
                  target="_blank"
                  noindex="true"
                >
                  <div className="card shadow mx-auto border-0 my-4">
                    <Image
                      src="/image/portfolio/nbpstech_web_development_anupam_mondal.webp"
                      className="card-img"
                      alt="NBPS Tech Solutions Developed by Anupam Mondal"
                      width={356}
                      height={202}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-12">
                <Image
                  src="/image/svg/portfolios.svg"
                  className="img-fluid"
                  alt="Experienced Full-Stack Developer"
                  width={451}
                  height={451}
                />
              </div>
              <div className="col-md-7 col-12">
                <h2 className="lead fs-3 my-5">
                  Experienced Full-Stack Developer at Your Service
                </h2>
                <p className="lead fs-6 my-5">
                  Anupam Mondal is an experienced and skilled full-stack
                  developer and website consultant, ready to assist with your
                  new business website or upgrade an existing one. With over 50
                  projects completed for international clients in the last 5
                  years, Anupam has garnered top reviews and 5-star ratings on
                  Google and Facebook. You don't need to search for a web
                  development company when you can contact Anupam, your
                  preferred freelancer. With the evolution of remote work in the
                  IT industry, Anupam ensures seamless collaboration regardless
                  of time zones or distance. Even in the post-pandemic era,
                  Anupam continues to deliver top-notch support, leveraging
                  smart technologies to provide the best output anytime,
                  anywhere.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <CallCTA />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
