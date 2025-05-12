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
                            <h1 className="my-5">Best <span className="text-dark">Web Design</span> Services for your Business :
                                <span className="d-block text-dark fw-bold display-4">Anupam Mondal</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <h2 className="fs-3 my-4">Elevate Your Online Presence with Professional Web Design</h2>
                            <p className="fs-6 my-4">In an increasingly digital world, your website is often the first impression
                                potential clients have of your business. At Anupam Mondal's Web Design Services, we specialize
                                in creating visually stunning, user-friendly, and highly functional websites that capture your
                                brand's essence and drive business success. Our approach combines creative design, technical
                                expertise, and strategic thinking to deliver exceptional websites that not only look great but
                                also perform exceptionally well.</p>
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
                            <img src="../image/web-design/Content structure-amico.svg" className="img-fluid"
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
                                    <h3 className="text-center h5 mb-4">Responsive Web Design</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse2"
                                        aria-expanded="false" aria-controls="collapse2"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse2">
                                        <p className="fs-6 my-4">Optimizing the content and structure of your website is crucial for
                                            improving its search engine rankings. Our on-page SEO services include optimizing
                                            title tags, meta descriptions, headers, and content for relevant keywords. We also
                                            focus on improving the overall user experience by ensuring your website is
                                            mobile-friendly, fast-loading, and easy to navigate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">UX / UI Design</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse3"
                                        aria-expanded="false" aria-controls="collapse3"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse3">
                                        <p className="fs-6 my-4">Content is king in the world of SEO. Our content optimization
                                            services involve creating high-quality, engaging, and keyword-rich content that
                                            resonates with your target audience. We ensure that your content is not only
                                            optimized for search engines but also provides value to your readers. From blog
                                            posts and articles to infographics and videos, we help you create content that
                                            attracts and converts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">Custom Web Design</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse1"
                                        aria-expanded="false" aria-controls="collapse1"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse1">
                                        <p className="fs-6 my-4">Effective SEO starts with thorough keyword research. We identify
                                            the most relevant and high-value keywords for your business to ensure your website
                                            ranks high in search engine results. Our keyword research process includes analyzing
                                            search volume, competition, and user intent to pinpoint the best keywords for your
                                            target audience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">SEO Web Design</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse5"
                                        aria-expanded="false" aria-controls="collapse5"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse5">
                                        <p className="fs-6 my-4">Our web design process includes comprehensive SEO optimization. We
                                            incorporate SEO best practices to ensure your site ranks high in search engine
                                            results and attracts organic traffic. SEO (Search Engine Optimization) is an
                                            essential aspect of web design. Our SEO web design services ensure that your website
                                            is optimized for search engines from the ground up. We conduct thorough keyword
                                            research, optimize on-page elements such as titles, meta descriptions, and headers,
                                            and build high-quality backlinks to improve your site's search engine rankings. Our
                                            goal is to help you attract more visitors, increase your online visibility, and grow
                                            your business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">E-commerce Solutions</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse6"
                                        aria-expanded="false" aria-controls="collapse6"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse6">
                                        <p className="fs-6 my-4">Sell your products online with a powerful, easy-to-use e-commerce
                                            website. We integrate secure payment gateways, streamline navigation, and create a
                                            seamless shopping experience for your customers. Our e-commerce solutions are
                                            designed to help you sell your products and services online effectively. We build
                                            robust e-commerce platforms that are secure, scalable, and user-friendly. From
                                            product catalog management and shopping cart integration to secure payment
                                            processing and order management, we provide end-to-end e-commerce solutions that
                                            drive sales and enhance customer satisfaction.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h3 className="text-center h5 mb-4">Mobile-Friendly Design</h3>
                                    <button className="btn btn-outline-dark rounded-circle d-block mx-auto fw-bold py-2"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse4"
                                        aria-expanded="false" aria-controls="collapse4"><i className="bi bi-chevron-down"></i>
                                    </button>
                                    <div className="collapse" id="collapse4">
                                        <p className="fs-6 my-4">Ensure your website is accessible and functional on mobile devices
                                            with our mobile-friendly design services. We optimize for speed and usability to
                                            provide the best experience for mobile users. With the increasing use of smartphones
                                            and tablets, it's crucial that your website is optimized for mobile devices. Our
                                            mobile-friendly design services focus on creating websites that load quickly, are
                                            easy to navigate, and provide a seamless user experience on mobile devices. This not
                                            only improves user satisfaction but also helps you reach a wider audience and
                                            increase your site's visibility in search engine results.</p>
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
                                        <img src="../image/web-design/client-centric-approach.svg"
                                            className="img-fluid rounded-start mt-4" alt="Expert Team" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="h5">Client-Centric Approach </h3>
                                            <p className="fs-6 mb-0">We work closely with you throughout the design process to
                                                ensure your vision is realized. Our collaborative approach ensures that your
                                                website meets your expectations and achieves your business goals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="../image/seo/transparent-reporting.svg" className="img-fluid rounded-start mt-4"
                                            alt="Customized Strategies" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="h5">Transparent Process </h3>
                                            <p className="fs-6 mb-0">We maintain open communication throughout the design
                                                process, providing regular updates and progress reports. We believe in
                                                transparency and honesty, and we are committed to delivering exceptional service
                                                and results.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="../image/seo/customized-strategies.svg" className="img-fluid rounded-start mt-4"
                                            alt="Customized Strategies" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="h5">Unique Designs </h3>
                                            <p className="fs-6 mb-0">Our designs are tailored to reflect your brand and meet
                                                your business needs. We create visually stunning websites that stand out from
                                                the competition & leave a lasting impression on your visitors.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="../image/web-design/responsive-mobile-friendly.svg"
                                            className="img-fluid rounded-start mt-3" alt="Customized Strategies" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="h5">Responsive & Mobile-Friendly </h3>
                                            <p className="fs-6 mb-0">We create responsive web designs that look and function
                                                perfectly on all devices. Our mobile-friendly design services ensure that your
                                                site provides a consistent and enjoyable user experience, regardless of the
                                                device being used.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="../image/web-design/seo-integration.svg" className="img-fluid rounded-start mt-3"
                                            alt="Expert Team" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="h5">SEO Integration </h3>
                                            <p className="fs-6 mb-0">We build websites with SEO in mind to help you attract
                                                more visitors and convert leads. Our SEO web design services ensure that your
                                                site is optimized for search engines from the ground up.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="../image/web-design/experienced-team.svg" className="img-fluid rounded-start mt-3"
                                            alt="Expert Team" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="h5">Experienced Team </h3>
                                            <p className="fs-6 mb-0">Our team has extensive experience in web design and stays
                                                up-to-date with the latest trends and technologies. We have a proven track
                                                record of delivering high-quality websites that achieve results.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="../image/seo/comprehensive-services.svg" className="img-fluid rounded-start"
                                            alt="Customized Strategies" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h3 className="h5 my-4">Comprehensive Solutions </h3>
                                            <p className="fs-6 mb-0">From custom web design and UX/UI design to e-commerce
                                                solutions and SEO optimization, we provide a full range of web design services
                                                to help you succeed online.</p>
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
                    <div className="row">
                        <div className="col-12">
                            <p className="fs-6 my-4"> Whether you're looking to redesign your existing website or create a new one
                                from scratch, we have the expertise and experience to deliver a website that exceeds your
                                expectations. Let's work together to create a website that not only looks great but also drives
                                results.</p>
                            <p className="fs-6 my-4">At Anupam Mondal's Web Design Services, we are passionate about creating
                                websites that make a difference. Our goal is to help you succeed online by providing web design
                                services that are tailored to your unique needs and goals. Contact us today to learn more about
                                our services and how we can help you achieve your online objectives. We look forward to working
                                with you and helping you achieve your business goals through professional web design.</p>
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
                                            aria-controls="collapseOne">What are web design services?</button>
                                    </h4>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">Web design services encompass a range of tasks aimed at creating and maintaining websites. This includes custom website design, responsive web design, user interface (UI) design, user experience (UX) design, and integrating SEO best practices. These services ensure that your website is visually appealing, user-friendly, and optimized for both search engines and users.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">Why are responsive web design services important for my business?</button>
                                    </h4>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">Responsive web design services are crucial because they ensure your website looks and functions perfectly across all devices, including desktops, tablets, and smartphones. With a responsive design, you can improve user experience, increase mobile traffic, and enhance your site's SEO performance, leading to higher engagement and conversions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">How do professional web design services benefit my online presence?</button>
                                    </h4>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">Professional web design services enhance your online presence by creating a visually appealing, user-friendly website that reflects your brand identity. These services include custom web design, UX/UI design, and SEO integration, ensuring your site ranks higher in search engine results, attracts organic traffic, and provides a seamless experience for visitors.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">How do professional web design services benefit my online presence?</button>
                                    </h4>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">Web design services encompass a range of tasks aimed at creating and maintaining websites. This includes custom website design, responsive web design, user interface (UI) design, user experience (UX) design, and integrating SEO best practices. These services ensure that your website is visually appealing, user-friendly, and optimized for both search engines and users.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button shadow-none bg-white txt-anupam fs-5 px-0" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                            aria-controls="collapseFive">How do SEO web design services improve my website's performance?</button>
                                    </h4>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                        <div className="accordion-body fs-6 px-0">
                                            <p className="fs-6">SEO web design services improve your website's performance by integrating search engine optimization best practices into the design process. This includes conducting keyword research, optimizing on-page elements like meta tags and headers, creating high-quality content, and ensuring fast load times and mobile-friendliness. These efforts boost your site's visibility in search engine results, attract more organic traffic, and improve overall user experience.</p>
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