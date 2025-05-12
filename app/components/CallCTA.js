"use client"; // Required for interactive components in Next.js App Router

import Link from "next/link";
import Image from 'next/image'

export default function CallCTA() {
    return (
        <>
            <div className="card bg-anupam my-3 border-0">
                <div className="row g-0">
                    <div className="col-md-3">
                        <div className="txt-anupam" id="btn-cta">
                            <i className="bi bi-telephone-inbound-fill display-2"></i>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h2 className="text-white h3 my-3">Get Started Today</h2>
                            <p className="text-white fs-6 my-3">For all your website design, development, and SEO needs, <a className="text-white fw-bold" href="../contact">contact Anupam Mondal today</a> to elevate your online presence and propel your business towards success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }  