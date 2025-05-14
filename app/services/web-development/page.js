import Image from "next/image";
import CallCTA from "../../components/CallCTA";
import Subscriptions from "@/app/components/Subscriptions";

export default function WebDevelopment() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="my-5">Expert <span className="text-dark">Web development</span> Services for Business : <span
                                    className="d-block text-dark fw-bold display-4">Anupam Mondal</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <h2 className="fs-3 my-4">Transform Your Vision into Reality with Expert Web Development</h2>
                            <p className="fs-6 my-4">In the digital world, your website is often the first impression potential clients have of your business. At Anupam Mondal's Web Development Services, we specialize in creating visually appealing, user-friendly, and highly functional websites that capture your brand's essence and drive business growth.</p>
                            <ul className="list-group list-group-flush my-5">
                                <li className="list-group-item border-0 p-0">
                                    <a href="./services/digital-marketing" className="nav-link txt-anupam">
                                        <i className="bi bi-1-circle-fill me-2"></i>Digital Marketing Services
                                    </a>
                                </li>
                                <li className="list-group-item border-0 p-0">
                                    <a href="./services/web-development" className="nav-link txt-anupam">
                                        <i className="bi bi-2-circle-fill me-2"></i>Web Developmet Services
                                    </a>
                                </li>
                                <li className="list-group-item border-0 p-0">
                                    <a href="./services/website-seo" className="nav-link txt-anupam">
                                        <i className="bi bi-3-circle-fill me-2"></i>Website SEO Services
                                    </a>
                                </li>
                            </ul>
                            <nav className="nav my-5">
                                <a className="text-uppercase btn btn-outline-dark me-2 mb-2 px-4 py-2"
                                    href="../portfolio">Portfolio</a>
                                <a className="text-uppercase btn btn-outline-dark me-2 mb-2 px-4 py-2" href="../about-us">About
                                    Us</a>
                            </nav>
                        </div>
                        <div className="col-md-4 col-12">
                            <img src="../image/svg/content-structure.svg" className="img-fluid"
                                alt="Web design services" />
                        </div>
                    </div>
                </div>
            </header>
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="my-5">Our Services</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">Custom Site Development</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse2"
                                        aria-expanded="false" aria-controls="collapse2"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse2">
                                        <p className="fs-6 my-4">We build websites from scratch, tailored to your unique business needs. Whether it's a informational site or a e-commerce platform, we ensure your website is fully customized and optimized for performance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">Responsive Design</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse3"
                                        aria-expanded="false" aria-controls="collapse3"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse3">
                                        <p className="fs-6 my-4">Our responsive web designs ensure your website looks and functions perfectly on all devices — desktops, tablets, and smartphones. We prioritize user experience to keep your visitors engaged and satisfied.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">E-commerce Solutions</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse1"
                                        aria-expanded="false" aria-controls="collapse1"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse1">
                                        <p className="fs-6 my-4">Sell your products online with a powerful, easy-to-use e-commerce website. We integrate secure payment gateways, streamline navigation, and create a seamless shopping experience for your customers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">CMS Integration</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse5"
                                        aria-expanded="false" aria-controls="collapse5"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse5">
                                        <p className="fs-6 my-4">Take control of your content with our Content Management System (CMS) integration services. We work with popular platforms like WordPress, Joomla, and Drupal to make managing your website simple and efficient.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">SEO Optimization</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse6"
                                        aria-expanded="false" aria-controls="collapse6"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse6">
                                        <p className="fs-6 my-4">Our web development process includes comprehensive SEO optimization to ensure your site ranks high in search engine results. From keyword research to on-page SEO, we cover all aspects to increase your online visibility.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">Website Maintenance</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse4"
                                        aria-expanded="false" aria-controls="collapse4"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse4">
                                        <p className="fs-6 my-4">Keep your website running smoothly with our ongoing maintenance services. We provide regular updates, security checks, and performance optimization to ensure your website remains trendy, optimised, up-to-date and secure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Subscriptions />
            <section id="why">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="my-5">Why Choose Us?</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="../image/svg/client-centric-approach.svg"
                                            className="img-fluid rounded-start mt-4" alt="Expert Team" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="h5">Transparent Process</h3>
                                            <p className="fs-6 mb-0">We maintain open communication throughout the development process, providing regular updates and progress reports.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="../image/svg/transparent-reporting.svg" className="img-fluid rounded-start mt-4"
                                            alt="Customized Strategies" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="h5">SEO-Driven</h3>
                                            <p className="fs-6 mb-0">We incorporate SEO best practices into every aspect of web development to help you attract more visitors and convert leads.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="../image/svg/customized-strategies.svg" className="img-fluid rounded-start mt-4"
                                            alt="Customized Strategies" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="h5">Experienced Team</h3>
                                            <p className="fs-6 mb-0">Our team has extensive experience in web development and stays up-to-date with the latest trends and technologies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="../image/svg/responsive-mobile-friendly.svg"
                                            className="img-fluid rounded-start mt-3" alt="Customized Strategies" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="h5">Tailored Solutions</h3>
                                            <p className="fs-6 mb-0">We develop websites that are perfectly aligned with your business objectives.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <CallCTA />
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
                                            aria-controls="collapseOne">What do your web development services include?</button>
                                    </h4>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">Our web development services cover a comprehensive range of tasks aimed at building high-quality websites. This includes custom website development, responsive web design, CMS integration, SEO optimization, e-commerce website development, and ongoing website maintenance. Each project is tailored to meet your business needs and deliver a professional web development solution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">Why is responsive web design important in web development services?</button>
                                    </h4>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">Responsive web design ensures your website looks and functions perfectly across all devices, including desktops, tablets, and smartphones. This is crucial for providing a user-friendly web design experience and improving SEO rankings. By incorporating responsive web design into our web development services, Anupam Mondal ensures that your site engages users effectively, no matter how they access it.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">How can e-commerce website development benefit my business?</button>
                                    </h4>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">E-commerce website development creates a robust, secure, and user-friendly online store for your business. Our services include integrating secure payment gateways, optimizing for SEO, and ensuring a seamless shopping experience. With Anupam Mondal's expertise in e-commerce website development, your online store will attract and retain customers, driving sales and business growth.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">What is the role of SEO optimization in your web development services?</button>
                                    </h4>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">SEO optimization is integral to our web development services, as it helps improve your website’s visibility in search engine results. This includes keyword research, on-page SEO, and technical SEO. By integrating SEO best practices during the development process, Anupam Mondal ensures your website attracts organic traffic and ranks higher on search engines, ultimately boosting your online presence.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                            aria-controls="collapseFive">How does CMS integration enhance website management?</button>
                                    </h4>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">CMS integration allows for easy management and updating of your website's content without needing advanced technical skills. Our web development services include integrating popular CMS platforms like WordPress, Joomla, and Drupal. With Anupam Mondal’s professional web development, you can effortlessly manage your site’s content, improving user engagement and SEO performance.</p>
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