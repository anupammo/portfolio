"use client"; // Ensure this is a client component
import styles from '../page.module.css'; // Import CSS Module

import { useEffect } from "react";
import Image from "next/image";

export default function Testimonis() {
  useEffect(() => {
    // Dynamically import Bootstrap JS only in the browser
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then((bootstrapModule) => {
        const carouselElement = document.querySelector("#carouselExampleSlidesOnly");
        if (carouselElement) {
          new bootstrapModule.Carousel(carouselElement, {
            interval: 5000, // Auto-slide every 3 seconds
            ride: "carousel",
          });
        }
      })
      .catch((err) => console.error("Bootstrap JS failed to load", err));
  }, []); // ✅ Runs only once when the component mounts

  return (
    <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className={`card shadow d-block mx-auto my-5 p-4 h-100 ${styles.cardreview}`}>
                        <div className="card-body">
                        <Image
                            src="/image/clients/client-review-anupam-mondal-gracianna-100x100.webp"
                            width="100"
                            height="100"
                            loading="lazy"
                            className="border rounded-circle"
                            alt="Client of Anupam Mondal, Quantum Bullion - Indonesia"
                        />
                        <figure>
                            <figcaption className="blockquote-footer text-dark mt-3">
                            <strong>Trini Amador </strong>
                            <cite
                                className="d-block fs-5"
                                title="Source Title"
                            >
                                🇺🇸 United States
                            </cite>
                            </figcaption>
                            <blockquote className="blockquote">
                            <p className="lead text-justify fs-6 pt-3">
                                Very good communication despite time
                                difference between California and India. We
                                will use Anupam again. Very generous and
                                wonderful person.
                            </p>
                            </blockquote>
                        </figure>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className={`card shadow d-block mx-auto my-5 p-4 h-100 ${styles.cardreview}`}>
                        <div className="card-body">
                        <Image
                            src="/image/clients/thevet.webp"
                            width="100"
                            height="100"
                            loading="lazy"
                            className="border rounded-circle"
                            alt="Client of Anupam Mondal, 1300 the vet - Australia"
                        />
                        <figure>
                            <figcaption className="blockquote-footer text-dark mt-3">
                            <strong>Ben Newth </strong>
                            <cite
                                className="d-block fs-5"
                                title="Source Title"
                            >
                                🇦🇺 Australia
                            </cite>
                            </figcaption>
                            <blockquote className="blockquote">
                            <p className="lead text-justify fs-6 pt-3">
                                Great to work with this freelancer, very
                                patient and dedicated to achieve the clients
                                vision, My first choice for this type of work.
                                AAA+++ 5 Stars.
                            </p>
                            </blockquote>
                        </figure>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className={`card shadow d-block mx-auto my-5 p-4 h-100 ${styles.cardreview}`}>
                        <div className="card-body">
                        <Image
                            src="/image/clients/client-review-anupam-mondal-100x100.webp"
                            width="100"
                            height="100"
                            loading="lazy"
                            className="border rounded-circle"
                            alt="Client of Anupam Mondal, Quantum Bullion - Indonesia"
                        />
                        <figure>
                            <figcaption className="blockquote-footer text-dark mt-3">
                            <strong>Azizi Jazmi </strong>
                            <cite
                                className="d-block fs-5"
                                title="Source Title"
                            >
                                🇲🇾 Malaysia
                            </cite>
                            </figcaption>
                            <blockquote className="blockquote">
                            <p className="lead text-justify fs-6 pt-3">
                                This guy is excellent !! Great experience. Job
                                done within 24 hour. I will surely contact him
                                for my website now . 1 part done 5 more to go.
                            </p>
                            </blockquote>
                        </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
