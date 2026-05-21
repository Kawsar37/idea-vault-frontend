import React from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 mt-10 lg:mt-20">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Ideas</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a className="text-xl">
              <FaXTwitter />
            </a>
            <a className="text-xl">
              <FaFacebookSquare />
            </a>
            <a className="text-xl">
              <FaInstagram />
            </a>
          </div>
        </nav>
      </footer>
      <hr />
      <aside className="text-center pb-4 mt-3">
        <small>
          Copyright © {new Date().getFullYear()} - All right reserved by Kawsar
        </small>
      </aside>
    </div>
  );
}
