

import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import "./footer.css";

import us from "../assets/usflag.png";
import amex from "../assets/amex.png";
import gpay from "../assets/gpay.png";
import apple from "../assets/apple.png";
import paypal from "../assets/paypal.jpg";
import master from "../assets/master.png";

const Footer = () => {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          {/* LEFT */}
          <div className="footer-left">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettā muse.</p>

            <div className="subscribe-box">
              <input type="text" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="footer-right">

            <div className="contact">
              <h4>{isMobile ? "CALL US" : "CONTACT US"}</h4>

              {isMobile ? (
                <div className="contact-row">
                  <span>+44 221 133 5360</span>
                  <span className="dot">♦</span>
                  <span>customercare@mettāmuse.com</span>
                </div>
              ) : (
                <>
                  <p>+44 221 133 5360</p>
                  <p>customercare@mettāmuse.com</p>
                </>
              )}
            </div>

            <div className="currency-section">
              <h4>CURRENCY</h4>

              <div className="currency-box">
                <img src={us} alt="flag" />
                <span className="dot">•</span>
                <span>USD</span>
              </div>

              <p className="currency-desc">
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>

          </div>
        </div>

        <hr />

        {/* BOTTOM */}
        <div className="footer-bottom">

          {/* mettā muse */}
          <div className="footer-section">
            <div className="footer-title" onClick={() => toggle("muse")}>
              <h4>mettā muse</h4>
              {isMobile && (
                <FiChevronDown className={`arrow ${open === "muse" ? "rotate" : ""}`} />
              )}
            </div>

            {(isMobile ? open === "muse" : true) && (
              <div className="footer-links">
                <p>About Us</p>
                <p>Stories</p>
                <p>Artisans</p>
                <p>Boutiques</p>
                <p>Contact Us</p>
                <p>EU Compliances Docs</p>
              </div>
            )}
          </div>

          {/* QUICK LINKS */}
          <div className="footer-section">
            <div className="footer-title" onClick={() => toggle("links")}>
              <h4>QUICK LINKS</h4>
              {isMobile && (
                <FiChevronDown className={`arrow ${open === "links" ? "rotate" : ""}`} />
              )}
            </div>

            {(isMobile ? open === "links" : true) && (
              <div className="footer-links">
                <p>Orders & Shipping</p>
                <p>Join/Login as a Seller</p>
                <p>Payment & Pricing</p>
                <p>Return & Refunds</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            )}
          </div>

          {/* FOLLOW US */}
 <div className="footer-section">
  <div className="footer-title" onClick={() => toggle("social")}>
    <h4>FOLLOW US</h4>
    {isMobile && (
      <FiChevronDown className={`arrow ${open === "social" ? "rotate" : ""}`} />
    )}
  </div>

  {/* ONLY SOCIAL ICONS TOGGLE */}
  {(isMobile ? open === "social" : true) && (
    <div className="social-icons">
      <FaInstagram />
      <FaLinkedin />
    </div>
  )}

  {/* 🔥 ALWAYS VISIBLE (OUTSIDE TOGGLE) */}
  <h4 className="payments-title">mettā muse ACCEPTS</h4>

  <div className="payments">
    <img src={gpay} alt="gpay" />
    <img src={master} alt="mastercard" />
    <img src={paypal} alt="paypal" />
    <img src={amex} alt="amex" />
    <img src={apple} alt="apple pay" />
  </div>
</div>

        </div>

        {/* COPYRIGHT */}
        <p className="copyright">
          Copyright © 2023 mettāmuse. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;