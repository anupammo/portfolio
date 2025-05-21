import Head from 'next/head';
import Image from "next/image";
import Script from "next/script";
import CallCTA from "../components/CallCTA";

export const metadata = {
  title: "Contact us for Website Design, Development & SEO in Kolkata",
  description:
    "Contact Anupam Mondal for top-notch website design, development, and SEO services in Kolkata. Enhance your online presence today!",
  alternates: {
    canonical: "https://anupammondal.in/contact",
  },
  openGraph: {
    title: "Contact us for Website Design, Development & SEO in Kolkata",
    description:
      "Contact Anupam Mondal for top-notch website design, development, and SEO services in Kolkata. Enhance your online presence today!",
    url: "https://anupammondal.in/contact",
    images: ["https://anupammondal.in/image/meta/contact.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Contact() {
  
  const breadcrumbListData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Contact",
        item: "https://anupammondal.in/contact",
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
              <div className="col-lg-6 col-md-6 col-12">
                <h1 className="lead fs-2 my-5">
                  Contact Anupam Mondal for Trendy Website Design, Development,
                  and SEO in Kolkata
                </h1>
                <p className="lead fs-6 my-5">
                  In today's digital age, having a website with a trendy and
                  modern look, coupled with exceptional User Interface (UI) and
                  User Experience (UX), is crucial for businesses to stand out.
                  Anupam Mondal offers comprehensive services in website design,
                  development, and SEO, ensuring your online presence not only
                  looks great but also automatically attracts attention.
                </p>
                <nav className="nav my-5">
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
              <div className="col-lg-2 col-md-6 col-12"></div>
              <div className="col-lg-4 col-md-6 col-12">
                <Image
                  src="/image/svg/contact-us.svg"
                  className="img-fluid py-5"
                  alt="Anupam Mondal - Website Design | Development | SEO"
                  width={356}
                  height={356}
                />
              </div>
            </div>
          </div>
        </header>
        <section className="bg-anupam parallax">
          <div className="gradient-bottom-bg pt-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card my-3 p-3">
                    <div className="card-body p-0" id="time-bg">
                      <h2 className="text-uppercase h3 my-5">Opening hours</h2>
                      <table className="table table-borderless mb-5">
                        <tbody className="lead fw-bold fs-6">
                          <tr>
                            <td>Monday - Friday</td>
                            <td>12pm - 8pm</td>
                          </tr>
                          <tr className="text-danger">
                            <td>Saturday - Sunday</td>
                            <td>Closed</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card my-3 p-3">
                    <div className="card-body p-0" id="reach-bg">
                      <h2 className="text-uppercase h3 my-5">Reach </h2>
                      <div className="mb-5">
                        <a
                          className="nav-link d-block mb-3"
                          href="mailto:a09051985@gmail.com"
                        >
                          <strong>📬 a09051985@gmail.com</strong>
                        </a>
                        <a
                          className="nav-link d-block mb-3"
                          href="tel:+919474460058"
                        >
                          📞 <strong>+91 (947) 446-0058</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card my-3 p-3">
                    <div className="card-body p-0" id="visit-bg">
                      <h2 className="text-uppercase h3 my-5">Visit </h2>
                      <address className="lead pb-5">
                        Protapnagar, Metiari, <br />
                        West Bengal, 743330
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <CallCTA />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="card shadow-none border-0 rounded-0 mb-3">
                  <div className="card-body">
                    <a
                      href="https://www.freelancer.in/u/anupammondal"
                      className="stretched-link"
                      target="_blank"
                    >
                      <p className="text-center text-primary h3">
                        <strong>freelancer</strong>
                      </p>
                    </a>
                    <hr
                      className="border-primary mx-auto"
                      style={{ width: "0%" }}
                    />
                    <p className="lead text-center">
                      <span className="badge bg-primary text-white h3">5</span>
                      <span className="text-primary">★ ★ ★ ★ ★</span>
                      <br />
                      <span className="text-primary">
                        Rated preferred freelancer
                      </span>
                    </p>
                  </div>
                </div>
                <div className="card shadow-none border-0 rounded-0 mb-3">
                  <div className="card-body bg-dark">
                    <a
                      href="https://github.com/anupammo"
                      className="stretched-link"
                      target="_blank"
                    >
                      <p className="text-center text-white h3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        <strong>GitHub</strong>
                      </p>
                    </a>
                    <hr className="bg-white mx-auto" style={{ width: "0%" }} />
                    <p className="lead text-center text-white">
                      100+ Public projects <br />
                      HTML, PHP, JavaScript, SQL
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card shadow border-0 rounded-0 mb-3">
                  <div className="card-body">
                    <Image
                      className="img-fluid d-block mx-auto py-1"
                      src="/image/reviews/anupam-clients-review-facebook-2.webp"
                      alt="USA client review on facebook for Anupam Mondal"
                      width="320"
                      height="152"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="card shadow border-0 rounded-0 mb-3">
                  <div className="card-body">
                    <Image
                      className="img-fluid d-block mx-auto py-1"
                      src="/image/reviews/anupam-clients-review-facebook-3.webp"
                      alt="client review on facebook for Anupam Mondal"
                      width="320"
                      height="125"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card shadow-none border-0 rounded-0 mb-3">
                  <div className="card-body">
                    <a
                      href="https://www.linkedin.com/in/anupammondal"
                      className="stretched-link"
                      target="_blank"
                    >
                      <p className="text-center text-primary h3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-linkedin"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                        </svg>
                        <strong>Linkedin</strong>
                      </p>
                    </a>
                    <hr
                      className="border-primary mx-auto"
                      style={{ width: "0%" }}
                    />
                    <p className="lead text-center text-primary">
                      15 years experience as <br />
                      Trainer / Developer / Freelancer
                    </p>
                  </div>
                </div>
                <div className="card shadow-none border-0 rounded-0 mb-3">
                  <div className="card-body bg-primary">
                    <a
                      href="https://www.facebook.com/anupammondal.in"
                      className="stretched-link"
                      target="_blank"
                    >
                      <p className="text-center text-white h3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                        </svg>
                        <strong>facebook</strong>
                      </p>
                    </a>
                    <hr
                      className="border-white mx-auto"
                      style={{ width: "0%" }}
                    />
                    <p className="lead text-center text-white">
                      <span className="badge bg-light text-primary">5</span>
                      <span className="text-light">★ ★ ★ ★ ★</span>
                      <br />
                      Page Ratings &amp; Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <Image
                  src="/image/svg/mobile-marketing.svg"
                  className="img-fluid py-5"
                  alt="Website Design with SEO Focus"
                  width={356}
                  height={356}
                />
              </div>
              <div className="col-lg-2 col-md-6 col-12"></div>
              <div className="col-lg-6 col-md-6 col-12 py-5">
                <h2 className="lead fs-3 my-4">
                  Modern Website Design with SEO Focus
                </h2>
                <p className="lead fs-6 my-5">
                  Anupam understands the importance of an appealing website
                  design that is also optimized for search engines. His approach
                  includes a meticulous SEO strategy that encompasses both
                  on-page and off-page techniques. Through thorough
                  business-relevant keyword research, Anupam ensures your
                  website ranks well on search engines like Google and Bing.
                  Employing white hat SEO techniques, he aims for the best
                  Search Engine Results Page (SERP) performance. Backlinks from
                  social media activities are also utilized to attract organic
                  traffic from the web.
                </p>
                <nav className="nav my-5">
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
          </div>
        </section>
        <section className="bg-anupam py-4" id="website-development">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 py-5">
                <h2 className="text-white lead fs-3 my-4">
                  Website Development for Niche Businesses
                </h2>
                <p className="text-white lead fs-6 my-5">
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
                <nav className="nav my-5">
                  <a
                    className="text-uppercase btn btn-outline-light me-2 mb-2 px-4 py-2"
                    href="portfolio"
                  >
                    Portfolio
                  </a>
                  <a
                    className="text-uppercase btn btn-light me-2 mb-2 px-4 py-2"
                    href="about-us"
                  >
                    About Us
                  </a>
                </nav>
              </div>
              <div className="col-lg-2 col-md-6 col-12"></div>
              <div className="col-lg-4 col-md-6 col-12">
                <Image
                  src="/image/svg/mobile-marketing.svg"
                  className="img-fluid my-5 py-5"
                  alt="Website for Niche Businesses"
                  width={356}
                  height={356}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <Image
                  src="/image/svg/navigation.svg"
                  className="img-fluid py-5"
                  alt="Experienced Full-Stack Developer"
                  width={356}
                  height={356}
                />
              </div>
              <div className="col-lg-2 col-md-6 col-12"></div>
              <div className="col-lg-6 col-md-6 col-12 py-5">
                <h2 className="lead fs-3 my-4">
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
          </div>
        </section>
        <section className="bg-anupam parallax" id="google-map">
          <div className="gradient-bottom-bg">
            <div className="container py-5">
              <div className="row mt-5">
                <div className="col-md-6 col-12">
                  <div className="card bg-white border-0 mb-3">
                    <div className="card-body px-4">
                      <h2 className="lead fs-3 my-5">
                        <span className="text-uppercase d-block fw-bold display-3 pb-3">
                          Contact{" "}
                        </span>
                        <span className="text-dark">
                          Anupam Mondal for Your Web Needs
                        </span>
                      </h2>
                      <p className="lead fs-6">
                        Whether you're seeking website design, development, or
                        SEO services, Anupam Mondal offers the best solutions.
                        If you are in Kolkata, West Bengal, Anupam can provide
                        you with complete web development services. His
                        expertise lies in creating websites that are not only
                        visually appealing but also optimized for search
                        engines.
                      </p>
                      <p className="lead fs-6">
                        If you're feeling unsure, don't hesitate to reach out. A
                        brief discussion about your project requirements could
                        save you valuable time and effort. Anupam assures
                        effective strategies tailored to your needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="card bg-white border-0 mb-3">
                    <div className="card-body p-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.68943268116!2d88.51291011495721!3d22.440712185250774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020d742e64f2f9%3A0x1bdd170f2df2e34e!2sAnupam%20Mondal!5e0!3m2!1sen!2sin!4v1681072166114!5m2!1sen!2sin"
                        height="450"
                        style={{ width: "100%", border: "0px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Find us on Google Map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faqs">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="h3 my-5">FAQ : Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="accordion accordion-flush" id="accordionFaq">
                  <div className="accordion-item">
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        How can I get in touch with Anupam Mondal?
                      </button>
                    </h4>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFaq"
                    >
                      <div className="accordion-body fs-6 px-0">
                        <p className="fs-6">
                          You can contact Anupam Mondal through the contact form
                          on this page, via email at{" "}
                          <a href="mailto:a09051985@gmail.com">
                            a09051985@gmail.com
                          </a>
                          , or by phone at{" "}
                          <a href="tel:+919474460058">+91 (947) 446-0058</a>.
                          You can also reach out through our social media
                          profiles.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What services does Anupam Mondal offer?
                      </button>
                    </h4>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFaq"
                    >
                      <div className="accordion-body fs-6 px-0">
                        <p className="fs-6">
                          Anupam Mondal offers a range of services including
                          website design, development, SEO, and digital
                          marketing. Whether you need a new website or
                          improvements to your existing one, we can help.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What is the turnaround time for a website project?
                      </button>
                    </h4>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFaq"
                    >
                      <div className="accordion-body fs-6 px-0">
                        <p className="fs-6">
                          The turnaround time for a website project depends on
                          the complexity and requirements. Typically, a standard
                          website can take between 4 to 6 weeks from start to
                          finish. We'll provide a detailed timeline after
                          discussing your specific needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        What payment methods do you accept?
                      </button>
                    </h4>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFaq"
                    >
                      <div className="accordion-body fs-6 px-0">
                        <p className="fs-6">
                          We accept various payment methods including credit
                          cards, bank transfers, and online payment gateways
                          like PayPal. We’ll provide detailed payment
                          instructions once the project is confirmed.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Do you offer support after the website is live?
                      </button>
                    </h4>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFaq"
                    >
                      <div className="accordion-body fs-6 px-0">
                        <p className="fs-6">
                          Yes, we offer ongoing support and maintenance services
                          to ensure your website remains updated, secure, and
                          running smoothly. You can choose from our various
                          support packages based on your needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
