import Head from 'next/head';
import Image from "next/image";
import Script from "next/script";
import Counters from "../components/Counters";
import Testimonis from "../components/Testimonis";
import ClientSlider from "../components/ClientSlider";
import TestimonisGrid from "../components/TestimonisGrid";

export const metadata = {
  title: "About freelancer, web designer, developer Anupam Mondal",
  description:
    "Expert freelancer Anupam Mondal: Web designer & developer with 17+ years in IT. Offering top-notch SEO, UI/UX, and responsive designs. Proven success across various industries.",
  alternates: {
    canonical: "https://anupammondal.in/about-us",
  },
  openGraph: {
    title: "About freelancer, web designer, developer Anupam Mondal",
    description:
      "Expert freelancer Anupam Mondal: Web designer & developer with 17+ years in IT. Offering top-notch SEO, UI/UX, and responsive designs. Proven success across various industries.",
    url: "https://anupammondal.in/about-us",
    images: ["https://anupammondal.in/about-us/image/meta/homepage.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
    
  const breadcrumbListData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://anupammondal.in/about-us/",
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
              <div className="col-12">
                <h1 className="lead fs-2 py-5">
                  Anupam Mondal: Expert Freelancer, Web Designer, and Developer
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <p className="lead fs-6 my-5">
                  Anupam Mondal, a renowned freelancer based in Kolkata, West
                  Bengal, has been serving businesses, clients, and
                  organizations as a web designer, developer, and website SEO
                  specialist since 2016. With a portfolio boasting over 70
                  successfully completed projects, including more than 50
                  national and international ventures, Anupam Mondal has
                  established a reputation for excellence. His clientele spans
                  across various regions including the United States, Canada,
                  Australia, Saudi Arabia, Israel, South Africa, and his home
                  country of India. With an impressive 17 years of experience in
                  the IT industry, Anupam Mondal stands as a five-star rated
                  preferred freelancer in Kolkata, West Bengal.{" "}
                </p>
                <p className="lead fs-6 my-5">
                  He has lent his expertise to diverse sectors such as
                  Education, Manufacturing, Engineering, Information Technology,
                  Real Estate, Medical and Healthcare, Investment and Finance,
                  Tours and Travels, as well as Fashion and Beauty. Anupam is
                  committed to utilizing his vast experience to propel his
                  clients towards substantial business growth.
                </p>
              </div>
              <div className="col-md-1 col-12"></div>
              <div className="col-md-5 col-12">
                <Image
                  src="image/svg/about-us-page.svg"
                  className="img-fluid py-5"
                  alt="Anupam Mondal: Expert Freelancer, Web Designer | Developer"
                  height={301}
                  width={451}
                />
              </div>
            </div>
          </div>
        </header>
        <TestimonisGrid />
        <Counters />
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
                      benefited from Anupam Mondal's expertise. Garnering
                      acclaim on Google, Facebook, and various platforms, my
                      freelance projects since 2016 have left a trail of
                      positive reviews. Each project is approached with
                      dedication, aiming to deliver outstanding results that
                      exceed expectations.
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
        <section className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="lead fs-3 my-5">
                  A Glimpse into Anupam Mondal's Journey
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-12">
                <Image
                  src="/image/svg/front-end-development.svg"
                  className="img-fluid py-5"
                  alt="Anupam Mondal's Journey"
                  width={356}
                  height={356}
                />
              </div>
              <div className="col-md-2 col-12"></div>
              <div className="col-md-6 col-12">
                <p className="lead fs-6 my-4">
                  Hailing from Kolkata, West Bengal, Anupam Mondal embarked on
                  his professional journey as a computer teacher/trainer in
                  2005. Over the years, he has evolved into a dedicated
                  professional well-versed in various technologies. Anupam now
                  provides valuable consultations to businesses and
                  organizations, aiding them in their website growth on digital
                  platforms as a full-stack developer. His prowess in the field
                  is evident through the glowing reviews left by happy and
                  satisfied clients on social media platforms like Facebook and
                  Google. Before transitioning to freelancing in 2016, Anupam
                  honed his skills in the IT and education sectors as a
                  Faculty/Trainer.{" "}
                </p>
                <p className="lead fs-6 my-4">
                  Additionally, armed with both basic and advanced knowledge of
                  Finance, Accounting, and Taxation, Anupam brings a holistic
                  approach to his projects. He actively engages in productive
                  discussions and is always eager to share knowledge on
                  technologies, strategies, and innovations.
                </p>
                <a
                  className="text-uppercase btn btn btn-outline-dark my-4 px-4 py-2"
                  href="portfolio"
                >
                  My Portfolio
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
                  Expertise as a Freelancer, Web Designer, and Web Developer
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <p className="lead fs-6 my-5">
                  Anupam Mondal's journey as a freelancer in web design, web
                  development, and website SEO began in 2016. Whether it's
                  front-end, back-end, or full-stack development, Anupam brings
                  a 360-degree approach to web development projects. His
                  expertise lies in web technologies such as User Interface
                  (UI), User Experience (UX), and Search Engine Optimization
                  (SEO) to ensure optimal rankings and performance across
                  smartphones, tablets, and desktops. Anupam delivers
                  mobile-first, responsive designs tailored to niche businesses,
                  ensuring a stunning online presence.
                </p>
                <p className="lead fs-6 my-5">
                  His proficiency extends to new and effective back-end
                  development techniques, along with skilled server management,
                  to maximize online traffic responses. Anupam's approach
                  involves crafting strategies for business growth based on
                  proven methods backed by statistics and analytical reports. A
                  dedicated and skilled professional, he possesses in-depth
                  knowledge in SDLC stack-development for SAAS-based web apps
                  and products, ensuring robust and scalable solutions for his
                  clients.
                </p>
                <div className="pb-3">
                  <a
                    className="text-uppercase btn btn btn-outline-dark me-2 mb-2 px-4 py-2"
                    href="contact"
                  >
                    Contact me
                  </a>
                </div>
              </div>
              <div className="col-md-2 col-12"></div>
              <div className="col-md-4 col-12">
                <Image
                  src="/image/svg/programming.svg"
                  className="img-fluid py-5"
                  alt="Expertise as a Freelancer Web Designer | Developer"
                  width={356}
                  height={356}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
