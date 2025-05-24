import Head from "next/head";
import Script from "next/script";
import styles from "./page.module.css";

export const metadata = {
  title: "Developer & Digital Marketer Anupam Mondal - Insights & Tips",
  description:
    "Explore expert tips on web development, digital marketing, & more with Anupam Mondal. Stay updated with latest trends & strategies to boost your online presence",
  alternates: {
    canonical: "https://anupammondal.in/blog/",
  },
  openGraph: {
    title: "Developer & Digital Marketer Anupam Mondal - Insights & Tips",
    description:
      "Explore expert tips on web development, digital marketing, & more with Anupam Mondal. Stay updated with latest trends & strategies to boost your online presence",
    url: "https://anupammondal.in/blog/",
    images: ["https://anupammondal.in/image/meta/blog.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Blog() {
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
        <header className="parallax text-white">
          <div className={styles.glassEffect}>
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-8 col-md-6 col-12">
                  <h1 className="text-white">
                    <span className="d-block h3">
                      Welcome to <strong className="text-dark">Blog</strong> of{" "}
                    </span>
                    <span className="fw-bold d-block display-4">
                      <strong className="text-dark">Anupam</strong> Mondal{" "}
                    </span>
                    <span className="d-block h3 mt-3">
                      Insights on{" "}
                      <strong className="text-dark">Web Development</strong>{" "}
                      &amp;{" "}
                      <strong className="text-dark">Digital Marketing</strong>
                    </span>
                  </h1>
                  <p className="fs-6 mt-4 mt-4">
                    Explore expert insights and tips on web development, digital
                    marketing, and more on Anupam Mondal's blog. Stay updated
                    with the latest trends, strategies, and personal experiences
                    to enhance your online presence.
                  </p>
                  <p className="lead fw-bold mb-4">
                    Check out our expertise services
                  </p>
                  <ul className="nav">
                    <li className="nav-item">
                      <a
                        className="btn btn-outline-light rounded-pill px-4 me-2 mb-2"
                        href="../services/web-design"
                        type="button"
                      >
                        Web Design
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="btn btn-outline-light rounded-pill px-4 me-2 mb-2"
                        href="../services/web-development"
                        type="button"
                      >
                        Web Development
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="btn btn-outline-light rounded-pill px-4 me-2 mb-2"
                        href="../services/digital-marketing"
                        type="button"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="btn btn-outline-light rounded-pill px-4 me-2 mb-2"
                        href="../services/website-seo"
                        type="button"
                      >
                        Website SEO
                      </a>
                    </li>
                  </ul>
                  <div className="d-grid gap-2 d-md-flex justify-content-start"></div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <img
                    className="card shadow border-0 mb-2 mx-auto"
                    width={250}
                    src="https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg?uid=R1067383&amp;ga=GA1.1.23435495.1733852500&amp;semt=ais_hybrid"
                    alt=""
                  />
                  <img
                    className="card shadow border-0 mb-2 float-end"
                    width={250}
                    src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg?uid=R1067383&amp;ga=GA1.1.23435495.1733852500&amp;semt=ais_hybrid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/10-common-seo-mistakes.png"
                    className="rounded"
                    alt="10 Common SEO Mistakes and How to Avoid Them"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/10-common-seo-mistakes"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        10 Common SEO Mistakes and How to Avoid Them
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/the-benefits-of-using-bootstrap-5-for-web-development.png"
                    className="rounded"
                    alt="The Benefits of Using Bootstrap 5 for Web Development"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/benefits-of-using-bootstrap-5"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        The Benefits of Using Bootstrap 5 for Web Development
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/build-strong-online-brand-presence.png"
                    className="rounded"
                    alt="How to Build a Strong Online Brand Presence"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/build-strong-online-brand-presence"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        How to Build a Strong Online Brand Presence
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/comprehensive-seo-audit.png"
                    className="rounded"
                    alt="How to Conduct a Comprehensive SEO Audit"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/comprehensive-seo-audit"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        How to Conduct a Comprehensive SEO Audit
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/effective-content-marketing-strategies-for-startups.png"
                    className="rounded"
                    alt="Effective Content Marketing Strategies for Startups"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/effective-content-marketing-strategies-for-startups"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        Effective Content Marketing Strategies for Startups
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/effective-email-marketing-tips-for-small-businesses.png"
                    className="rounded"
                    alt="Effective Email Marketing Tips for Small Businesses"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/effective-email-marketing-tips-for-small-businesses"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        Effective Email Marketing Tips for Small Businesses
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/the-future-of-digital-marketing-trends-to-watch.png"
                    className="rounded"
                    alt="The Future of Digital Marketing: Trends to Watch"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/future-of-digital-marketing"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        The Future of Digital Marketing: Trends to Watch
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/how-to-create-engaging-social-media-campaigns.png"
                    className="rounded"
                    alt="How to Create Engaging Social Media Campaigns"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/how-to-create-engaging-social-media-campaigns"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        How to Create Engaging Social Media Campaigns
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/how-to-create-high-converting-landing-pages.png"
                    className="rounded"
                    alt="How to Create High-Converting Landing Pages"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/how-to-create-high-converting-landing-pages"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        How to Create High-Converting Landing Pages
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/the-importance-of-backlinks-in-seo.png"
                    className="rounded"
                    alt="The Importance of Backlinks in SEO"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/importance-of-backlinks-in-seo"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        The Importance of Backlinks in SEO
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/how-to-improve-website-load-speed-for-better-user-experience.png"
                    className="rounded"
                    alt="How to Improve Website Load Speed for Better User Experience"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/improve-website-load-speed"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        Improve Website Load Speed for Better User
                        Experience
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/optimize-website-for-mobile.png"
                    className="rounded"
                    alt="How to Optimize Your Website for Mobile Devices"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/optimize-website-for-mobile"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        How to Optimize Your Website for Mobile Devices
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/the-role-of-ux-design-in-digital-marketing.png"
                    className="rounded"
                    alt="The Role of UX Design in Digital Marketing"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/role-of-ux-design-in-digital-marketing"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        The Role of UX Design in Digital Marketing
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/how-to-stay-updated-with-the-latest-web-development-technologies.png"
                    className="rounded"
                    alt="How to Stay Updated with the Latest Web Development Technologies"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/stay-updated-with-web-development-technologies"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        Stay Updated with the Latest Web Development
                        Technologies
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/case-study-successful-digital-marketing-campaigns.png"
                    className="rounded"
                    alt="Case Study: Successful Digital Marketing Campaigns"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/successful-digital-marketing-campaigns"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        Case Study: Successful Digital Marketing Campaigns
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/top-tools-for-Web-designers-and-developers.png"
                    className="rounded"
                    alt="Top Tools for Web Designers and Developers"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/top-tools-for-web-designers-and-developers"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        Top Tools for Web Designers and Developers
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card lead shadow border-0 my-3">
                  <img
                    src="../image/blog/top-web-design-trends-2024.png"
                    className="rounded"
                    alt="Top Web Design Trends
                                for 2024"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/top-web-design-trends-2024"
                      className="nav-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        Top Web Design Trends for 2024
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/ultimate-guide-seo-small-businesses.png"
                    className="rounded"
                    alt="The Ultimate Guide to SEO for Small Businesses"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/ultimate-guide-seo-small-businesses"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        The Ultimate Guide to SEO for Small Businesses
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card shadow lead my-3">
                  <img
                    src="../image/blog/how-to-use-analytics-to-drive-marketing-decisions.png"
                    className="rounded"
                    alt="How to Use Analytics to Drive Marketing Decisions"
                  />
                  <div
                    className={`${styles.blogBottom} card-body text-white rounded-bottom`}
                  >
                    <a
                      href="../blog/use-analytics-to-drive-marketing-decisions"
                      className="nav-link stretched-link"
                    >
                      <h2 className="text-white fs-5 ps-3">
                        How to Use Analytics to Drive Marketing Decisions
                      </h2>
                    </a>
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
