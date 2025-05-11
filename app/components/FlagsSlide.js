"use client"; // Ensure this is a client component

import { useEffect } from "react";
import Image from "next/image";

export default function FlagsSlide() {
  useEffect(() => {
    // Dynamically import Bootstrap JS only in the browser
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then((bootstrapModule) => {
        const carouselElement = document.querySelector("#carouselExampleRide");
        if (carouselElement) {
          new bootstrapModule.Carousel(carouselElement, {
            interval: 3000, // Auto-slide every 3 seconds
            ride: "carousel",
          });
        }
      })
      .catch((err) => console.error("Bootstrap JS failed to load", err));
  }, []); // ✅ Runs only once when the component mounts

  return (
    <>
      <section className="bg-dark parallax" id="reviews">
        <div className="gradient-bottom-b">
          <div className="container py-5">
            <div className="row">
              <div className="col-12">
                <div
                  id="carouselExampleRide"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner py-4">
                    <div className="carousel-item active">
                      <ul className="nav justify-content-center">
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/australia.png"
                              alt="Clients of Anupam from Australia"
                              title="Australia"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              Australia
                            </figcaption>
                          </figure>
                        </li>
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/austria.png"
                              alt="Clients of Anupam from Austria"
                              title="Austria"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              Austria
                            </figcaption>
                          </figure>
                        </li>
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/canada.png"
                              alt="Clients of Anupam from Canada"
                              title="Canada"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              Canada
                            </figcaption>
                          </figure>
                        </li>
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/ireland.png"
                              alt="Clients of Anupam from Ireland"
                              title="Ireland"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              Ireland
                            </figcaption>
                          </figure>
                        </li>
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/israel.png"
                              alt="Clients of Anupam from Israel"
                              title="Israel"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              Israel
                            </figcaption>
                          </figure>
                        </li>
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/lithuania.png"
                              alt="Clients of Anupam from Lithuania"
                              title="Lithuania"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              Lithuania
                            </figcaption>
                          </figure>
                        </li>
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/malaysia.png"
                              alt="Clients of Anupam from Malaysia"
                              title="Malaysia"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              Malaysia
                            </figcaption>
                          </figure>
                        </li>
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/mauritius.png"
                              alt="Clients of Anupam from Mauritius"
                              title="Mauritius"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              Mauritius
                            </figcaption>
                          </figure>
                        </li>
                      </ul>
                    </div>
                    <div className="carousel-item">
                      <ul className="nav justify-content-center">
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/nigeria.png"
                              alt="Clients of Anupam from Nigeria"
                              title="Nigeria"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              Nigeria
                            </figcaption>
                          </figure>
                        </li>
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/peru.png"
                              alt="Clients of Anupam from Peru"
                              title="Peru"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              Peru
                            </figcaption>
                          </figure>
                        </li>
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/puerto-rico.png"
                              alt="Clients of Anupam from Puerto Rico"
                              title="Puerto Rico"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              Puerto R.
                            </figcaption>
                          </figure>
                        </li>
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/saudi-arabia.png"
                              alt="Clients of Anupam from Saudi Arabia"
                              title="Saudi Arabia"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              Saudi A.
                            </figcaption>
                          </figure>
                        </li>
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/slovakia.png"
                              alt="Clients of Anupam from Slovakia"
                              title="Slovakia"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              Slovakia
                            </figcaption>
                          </figure>
                        </li>
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/south-africa.png"
                              alt="Clients of Anupam from South Africa"
                              title="South Africa"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              S. Africa
                            </figcaption>
                          </figure>
                        </li>
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/united-kingdom.png"
                              alt="Clients of Anupam from United Kingdom"
                              title="United Kingdom"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              UK
                            </figcaption>
                          </figure>
                        </li>
                        <li className="nav-item px-2">
                          <figure className="figure card shadow p-3">
                            <Image
                              src="/res/icons/countries/united-states-of-america.png"
                              alt="Clients of Anupam from United States"
                              title="United States"
                              width={64}
                              height={64}
                              loading="lazy"
                            />
                            <figcaption className="lead text-center fs-6 pt-3">
                              US
                            </figcaption>
                          </figure>
                        </li>
                      </ul>
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
