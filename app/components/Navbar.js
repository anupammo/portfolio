"use client"; // Required for interactive components in Next.js App Router

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container">
            <Link className="navbar-brand" href="../">Anupam Mondal</Link>
            <button className="navbar-toggler shadow-none collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto fs-6 mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" href="../">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="../services/digital-marketing">Digital Marketing</Link>
                            </li>
                            <li><Link className="dropdown-item" href="../services/web-design">Web Design</Link></li>
                            <li><Link className="dropdown-item" href="../services/web-development">Web Development</Link></li>
                            <li><Link className="dropdown-item" href="../services/website-seo">Website SEO</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="../about-us">About</Link></li>
                            <li><Link className="dropdown-item" href="../portfolio">Portfolio</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="../contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="../blog/">Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}