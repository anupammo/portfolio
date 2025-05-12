"use client"; // Required for interactive components in Next.js App Router

import Link from "next/link";
import Image from 'next/image'

export default function TestimonisGrid() {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card rounded-0 my-3 p-4">
                                <div className="card-body">
                                    <Image src="/image/about/gracianna-winery.webp" width={150} height={50} loading="lazy"
                                        alt="Client of Anupam Mondal, Gracianna Winery - USA" />
                                    <figure>
                                        <blockquote className="blockquote">
                                            <p className="lead text-justify fs-6">Very good communication despite time difference
                                                between California and India. We will use Anupam again. Very generous and
                                                wonderful person.</p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer text-dark mt-3">
                                            <strong>Trini Amador 🇺🇸 </strong><cite title="Source Title">United States</cite>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card rounded-0 my-3 p-4">
                                <div className="card-body">
                                    <Image src="/image/about/1300-the-vet.webp" width={150} height={50} loading="lazy"
                                        alt="Client of Anupam Mondal, 1300 the vet - Australia" />
                                    <figure>
                                        <blockquote className="blockquote">
                                            <p className="lead text-justify fs-6">Great to work with this freelancer, very patient
                                                and dedicated to achieve the clients vision, My first choice for this type of
                                                work. AAA+++ 5 Stars.</p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer text-dark mt-3">
                                            <strong>Ben Newth 🇦🇺 </strong><cite title="Source Title">Australia</cite>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card rounded-0 my-3 p-4">
                                <div className="card-body">
                                    <Image src="/image/about/the-flooring-company.webp" width={66} height={50} loading="lazy"
                                        alt="Client of Anupam Mondal, the flooring company - USA" />
                                    <figure>
                                        <blockquote className="blockquote">
                                            <p className="lead text-justify fs-6">Am so glad, I found Anupam M to do my project. He
                                                is a professional that knows the work. the job was done as fast as he could. He
                                                is THE BEST.</p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer text-dark mt-3">
                                            <strong>Tsila R 🇮🇱 </strong><cite title="Source Title">Israel</cite>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card rounded-0 my-3 p-4">
                                <div className="card-body">
                                    <Image src="/image/about/sailing-dreams.webp" width={65} height={50} loading="lazy"
                                        alt="Client of Anupam Mondal, Sailing Dreams- Peru" />
                                    <figure>
                                        <blockquote className="blockquote">
                                            <p className="lead text-justify fs-6">For a good price he will do his best effort and
                                                will implement your requirements.</p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer text-dark mt-3">
                                            <strong>Nazcasoft S 🇵🇪 </strong><cite title="Source Title">Peru</cite>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card rounded-0 my-3 p-4">
                                <div className="card-body">
                                    <Image src="/image/about/august-beauty-lab.webp" width={62} height={50} loading="lazy"
                                        alt="Client of Anupam Mondal, August Beauty Lab - Lithuania" />
                                    <figure>
                                        <blockquote className="blockquote">
                                            <p className="lead text-justify fs-6">Another satisfactory work by Anupam. Definitely
                                                recommend</p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer text-dark mt-3">
                                            <strong>Tomas Volkevičius 🇱🇹 </strong><cite title="Source Title">Lithuania</cite>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
  }  