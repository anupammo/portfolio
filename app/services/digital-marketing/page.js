import Image from "next/image";
import CallCTA from "../../components/CallCTA";
import Counters from "../../components/Counters";
import Subscriptions from "@/app/components/Subscriptions";

export default function DigitalMarketing() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="my-5"><span className="text-dark">Digital Marketing</span> Services for your Business :
                                <span className="d-block text-dark fw-bold display-4">Anupam Mondal</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <h2 className="fs-3 my-4">Elevate Your Online Presence with Expert Digital Marketing</h2>
                            <p className="fs-6 my-5">In today's digital age, having a robust online presence is
                                crucial for any business. At Anupam Mondal's Digital Marketing Services, we specialize in
                                creating tailored strategies that drive traffic, increase engagement, and boost conversions.
                                With over 70 successful projects under our belt, we bring a wealth of experience and expertise
                                to help your business thrive online.</p>
                            <ul className="list-group list-group-flush my-5">
                                <li className="list-group-item border-0 p-0">
                                    <a href="../services/web-design" className="nav-link txt-anupam">
                                        <i className="bi bi-1-circle-fill me-2"></i>Web Design Services
                                    </a>
                                </li>
                                <li className="list-group-item border-0 p-0">
                                    <a href="../services/web-development" className="nav-link txt-anupam">
                                        <i className="bi bi-2-circle-fill me-2"></i>Web Developmet Services
                                    </a>
                                </li>
                                <li className="list-group-item border-0 p-0">
                                    <a href="../services/website-seo" className="nav-link txt-anupam">
                                        <i className="bi bi-3-circle-fill me-2"></i>Website SEO Services
                                    </a>
                                </li>
                            </ul>
                            <nav className="nav my-5">
                                <a className="text-uppercase btn btn-outline-dark me-2 mb-2 px-4 py-2"
                                    href="portfolio">Portfolio</a>
                                <a className="text-uppercase btn btn-outline-dark me-2 mb-2 px-4 py-2" href="about-us">About
                                    Us</a>
                            </nav>
                        </div>
                        <div className="col-md-4 col-12">
                            <Image src="/image/digital-marketing/digital-marketing.svg" className="img-fluid py-4"
                                alt="Digital Marketing Services" width={356} height={356} />
                        </div>
                    </div>
                </div>
            </header>
            <Subscriptions />
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
                                            <a className="nav-link d-block mb-3" href="mailto:a09051985@gmail.com"><strong>📬
                                                    a09051985@gmail.com</strong></a>
                                            <a className="nav-link d-block mb-3" href="tel:+919474460058">📞 <strong>+91 (947)
                                                    446-0058</strong></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card my-3 p-3">
                                    <div className="card-body p-0" id="visit-bg">
                                        <h2 className="text-uppercase h3 my-5">Visit </h2>
                                        <address className="lead pb-5">
                                            Protapnagar, Metiari, <br />West Bengal, 743330
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
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="h3 my-5">Our Services</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <Image src="/image/digital-marketing/search-engine-optimization-seo.svg"
                                            className="img-fluid rounded-start my-4" alt="Search Engine Optimization (SEO)" width={136} height={136} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h4 className="h5">Search Engine Optimization (SEO)</h4>
                                            <p className="fs-6 mb-0">Achieve higher rankings on search engines and attract
                                                organic traffic with our comprehensive SEO services. We conduct thorough keyword
                                                research, optimize on-page elements, and build high-quality backlinks to ensure
                                                your website stands out.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <Image src="/image/digital-marketing/social-media-marketing.svg"
                                            className="img-fluid rounded-start my-4" alt="Social Media Marketing" width={136} height={136} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h4 className="h5">Social Media Marketing</h4>
                                            <p className="fs-6 mb-0">Engage with your audience on platforms like Facebook,
                                                Instagram, and LinkedIn. Our social media strategies are designed to increase
                                                brand awareness, foster community engagement, and drive traffic to your website.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <Image src="/image/digital-marketing/content-marketing.svg"
                                            className="img-fluid rounded-start mt-3" alt="Content Marketing" width={136} height={136} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h4 className="h5">Content Marketing</h4>
                                            <p className="fs-6 mb-0">Create valuable and relevant content that resonates with
                                                your audience. From blog posts to infographics, we craft content that not only
                                                informs but also converts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <Image src="/image/digital-marketing/email-marketing.svg"
                                            className="img-fluid rounded-start my-2" alt="Email Marketing" width={136} height={136} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h4 className="h5">Email Marketing</h4>
                                            <p className="fs-6 mb-0">Nurture leads and build lasting relationships with
                                                personalized email campaigns. We design, write, and manage email marketing
                                                strategies that keep your audience engaged and informed.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <Image src="/image/digital-marketing/web-design-development.svg"
                                            className="img-fluid rounded-start my-2" alt="Web Design and Development" width={136} height={136} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h4 className="h5">Web Design & Development</h4>
                                            <p className="fs-6 mb-0">Your website is the cornerstone of your online presence.
                                                We design and develop responsive, user-friendly websites that are optimized for
                                                both search engines and user experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <Image src="/image/digital-marketing/pay-per-click-ppc-advertising.svg"
                                            className="img-fluid rounded-start my-2" alt="Pay-Per-Click (PPC) Advertising" width={136} height={136} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h4 className="h5">Pay-Per-Click (PPC) Advertising</h4>
                                            <p className="fs-6 mb-0">Maximize your ROI with targeted PPC campaigns. We create
                                                and manage ads on platforms like Google Ads to reach your ideal audience and
                                                drive immediate results.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Counters />
            <section className="bg-light pb-5" id="why">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="h3 my-5">Why Choose Us?</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <Image src="/image/digital-marketing/Achievement-bro.svg"
                                            className="img-fluid rounded-start" alt="Digital Marketing Services" width={136} height={136} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h4 className="h5 mt-3">Proven Track Record </h4>
                                            <p className="fs-6">With over 70 projects completed, we have a history of
                                                delivering results.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <Image src="/image/digital-marketing/customized-strategies.svg"
                                            className="img-fluid rounded-start" alt="Customized Strategies" width={136} height={136} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h4 className="h5 mt-3">Customized Strategies </h4>
                                            <p className="fs-6">We tailor our services to meet your specific business needs and
                                                goals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <Image src="/image/digital-marketing/expert-team.svg" className="img-fluid rounded-start"
                                            alt="Expert Team" width={136} height={136} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h4 className="h5 mt-3">Expert Team </h4>
                                            <p className="fs-6">Our team is proficient in the latest digital marketing trends
                                                and technologies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <Image src="/image/digital-marketing/transparent-reporting.svg"
                                            className="img-fluid rounded-start" alt="Customized Strategies" width={136} height={136} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h4 className="h5 mt-3">Transparent Reporting </h4>
                                            <p className="fs-6">We provide regular reports and updates to keep you informed of
                                                your progress.</p>
                                        </div>
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
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                                            aria-controls="collapseOne">What are digital marketing services?</button>
                                    </h4>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">Digital marketing services encompass a wide range of online strategies aimed at promoting your business and enhancing your online presence. These services include SEO, PPC advertising, social media marketing, content marketing, email marketing, and web design and development. Anupam Mondal, a digital marketing expert, offers comprehensive digital marketing services to help businesses reach their target audience and achieve their marketing goals.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">How can SEO benefit my digital marketing strategy?</button>
                                    </h4>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">SEO (Search Engine Optimization) is a critical component of digital marketing services. It involves optimizing your website and content to rank higher in search engine results, thereby increasing organic traffic to your site. With Anupam Mondal's expert SEO strategies, your business can improve its online visibility, attract more visitors, and convert them into loyal customers.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">What is PPC advertising and how does it work?</button>
                                    </h4>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">PPC (Pay-Per-Click) advertising is a digital marketing strategy where advertisers pay a fee each time their ad is clicked. It's a way to buy visits to your site rather than earning them organically. PPC can be highly effective when integrated into your digital marketing services, driving immediate traffic and leads. Anupam Mondal specializes in creating targeted PPC campaigns that maximize your return on investment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">How does social media marketing fit into digital marketing services?</button>
                                    </h4>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">Social media marketing involves using platforms like Facebook, Instagram, LinkedIn, and Twitter to promote your business and engage with your audience. It's an essential part of digital marketing services as it helps build brand awareness, drive traffic to your website, and foster community engagement. Anupam Mondal's expertise in social media marketing ensures your business leverages these platforms effectively to achieve your marketing objectives.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                            aria-controls="collapseFive">Why is content marketing important for my business?</button>
                                    </h4>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">Content marketing is a crucial element of digital marketing services that involves creating and sharing valuable content to attract and engage your target audience. High-quality content helps establish your business as an authority in your industry, improves SEO, and drives traffic to your website. Anupam Mondal's content marketing services focus on crafting compelling, SEO-optimized content that resonates with your audience and supports your overall marketing strategy.</p>
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