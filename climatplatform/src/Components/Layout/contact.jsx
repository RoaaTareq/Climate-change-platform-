import React from "react";
import "./CSS/contact.css";
import { FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <span className="contact-text">
                            <FaMapMarkerAlt className="icon-list" /> 2072 Pinnickinick Street, WA 98370
                        </span>
                        <span className="contact-text">
                            <FaEnvelope className="icon-list" />
                            info@website.com
                        </span>
                    </div>
                    <div>
                        <FaTwitter className="icon" />
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
