import Image from "next/image";
import CallCTA from "../../components/CallCTA";
import Subscriptions from "@/app/components/Subscriptions";

export default function WebsiteSEO() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="my-5">Website <span className="text-dark">SEO services</span> that boost Businesses :
                                <span className="d-block text-dark fw-bold display-4">Anupam Mondal</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <h2 className="fs-3 my-4">Boost Your Online Visibility with Expert SEO Services</h2>
                            <p className="fs-6 my-4">In today's competitive digital landscape, having a strong online presence is essential for any business. At Anupam Mondal's SEO Services, we specialize in enhancing your visibility and driving organic traffic to your website. Our comprehensive SEO strategies are designed to meet the unique needs of your business and help you achieve your online goals.</p>
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
                                    <h3 className="text-center h5 mb-4">Keyword Research</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse2"
                                        aria-expanded="false" aria-controls="collapse2"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse2">
                                        <p className="fs-6 my-4">Effective SEO starts with thorough keyword research. We identify the most relevant and high-value keywords for your business to ensure your website ranks high in search engine results. Our keyword research process includes analyzing search volume, competition, and user intent to pinpoint the best keywords for your target audience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">Technical SEO</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse5"
                                        aria-expanded="false" aria-controls="collapse5"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse5">
                                        <p className="fs-6 my-4">Technical SEO is the backbone of a well-optimized website. We conduct a thorough audit of your website's technical aspects, including site speed, mobile responsiveness, URL structure, and more. Our goal is to ensure that search engines can easily crawl and index your website, improving its overall performance and visibility.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">On-Page SEO</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse3"
                                        aria-expanded="false" aria-controls="collapse3"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse3">
                                        <p className="fs-6 my-4">Optimizing content & structure of website is crucial for improving its search engine rankings. Our on-page SEO services include optimizing title tags, meta descriptions, headers & content for relevant keywords. We also focus on improving the overall UI / UX by ensuring your website is mobile-friendly, fast-loading & easy to navigate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">Link Building</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse6"
                                        aria-expanded="false" aria-controls="collapse6"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse6">
                                        <p className="fs-6 my-4">Building high-quality backlinks is essential for improving your website's authority and search engine rankings. Our link building services involve acquiring relevant and authoritative backlinks from reputable websites. We use ethical and effective strategies to build a strong backlink profile that enhances your website's credibility and boosts its rankings.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">Local SEO</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse4"
                                        aria-expanded="false" aria-controls="collapse4"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse4">
                                        <p className="fs-6 my-4">If your business serves a specific geographic area, local SEO is crucial for attracting local customers. Our local SEO services include optimizing your Google My Business profile, creating local citations, and targeting location-based keywords. We help you rank higher in local search results, driving more traffic to your business from nearby customers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">SEO Analytics & Reporting</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse7"
                                        aria-expanded="false" aria-controls="collapse7"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse7">
                                        <p className="fs-6 my-4">Tracking the performance of your SEO efforts is essential for continuous improvement. Our SEO analytics and reporting services provide you with detailed insights into your website's performance, including keyword rankings, traffic, and conversions. We use this data to refine our strategies and ensure that your SEO efforts are delivering the desired results.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">Content Optimization</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse1"
                                        aria-expanded="false" aria-controls="collapse1"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse1">
                                        <p className="fs-6 my-4">Content is king in the world of SEO. Our content optimization services involve creating high-quality, engaging, and keyword-rich content that resonates with your target audience. We ensure that your content is not only optimized for search engines but also provides value to your readers. From blog posts and articles to infographics and videos, we help you create content that attracts and converts.</p>
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
                                            <h3 className="h5">Proven Track Record</h3>
                                            <p className="fs-6 mb-0">With over 70 projects completed, we have a history of delivering results.</p>
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
                                            <h3 className="h5">Customized Strategies</h3>
                                            <p className="fs-6 mb-0">We tailor our services to meet your specific business needs and goals.</p>
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
                                            <h3 className="h5">Expert Team</h3>
                                            <p className="fs-6 mb-0">Our team of SEO experts stays up-to-date with the latest industry trends and best practices to ensure your website remains competitive.</p>
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
                                            <h3 className="h5">Ethical Practices</h3>
                                            <p className="fs-6 mb-0">We adhere to ethical SEO practices and use only white-hat techniques to improve your website's rankings.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="../image/svg/seo-integration.svg" className="img-fluid rounded-start mt-3"
                                            alt="Expert Team" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="h5">Comprehensive Services</h3>
                                            <p className="fs-6 mb-0">From keyword research and content optimization to link building and local SEO, we offer a full range of SEO services to help you succeed.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="../image/svg/experienced-team.svg" className="img-fluid rounded-start mt-3"
                                            alt="Expert Team" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="h5">Transparent Reporting</h3>
                                            <p className="fs-6 mb-0">We provide regular reports and updates to keep you informed of your SEO campaign's progress and performance.</p>
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
                                            aria-controls="collapseOne">What are Website SEO services?</button>
                                    </h4>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">Website SEO services encompass a range of strategies and practices designed to improve your website's visibility in search engine results. This includes keyword research, on-page SEO, content optimization, technical SEO, and link building. By implementing these services, Anupam Mondal ensures that your website attracts organic traffic and ranks higher on search engines.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">Why is keyword research important in website SEO services?</button>
                                    </h4>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">Keyword research is a critical component of website SEO services as it helps identify the search terms your target audience is using. By optimizing your content with these keywords, you can increase your visibility in search engine results and attract relevant traffic. Anupam Mondal’s professional SEO services include thorough keyword research to ensure your website targets high-value search terms effectively.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">How does on-page SEO improve my website's performance?</button>
                                    </h4>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">On-page SEO involves optimizing individual pages on your website to rank higher in search engine results. This includes optimizing title tags, meta descriptions, headers, and content for relevant keywords. With Anupam Mondal’s on-page SEO services, you can improve your website's relevance and visibility, making it easier for search engines to understand and rank your content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">What is the role of technical SEO in website SEO services?</button>
                                    </h4>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">Technical SEO is essential for ensuring that search engines can easily crawl and index your website. This includes optimizing site speed, mobile responsiveness, URL structure, and fixing any technical issues that could affect your rankings. Anupam Mondal’s technical SEO services focus on improving the overall performance and accessibility of your website, leading to better search engine rankings.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                            aria-controls="collapseFive">How do link building and local SEO contribute to effective website SEO services?</button>
                                    </h4>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">Link building involves acquiring high-quality backlinks from authoritative websites, which enhances your site's credibility and improves search engine rankings. Local SEO focuses on optimizing your website to attract local customers by targeting location-based keywords and optimizing your Google My Business profile. Together, these strategies enhance your online presence and drive targeted traffic. With Anupam Mondal’s expertise in link building and local SEO, your website will achieve better visibility and engagement.</p>
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