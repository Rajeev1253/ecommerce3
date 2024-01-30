import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main">
        <div className="hekto">
          <h1>Hekto</h1>
          <div className="inputField">
            <input placeholder="Enter  Email Adress"></input>
            <button>Sign up</button>
          </div>
          <div className="contact">
            <p>Contact Info</p>
            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
        </div>
        <div className="categories">
          <h1>Categories</h1>
          <ul>
            <li>Laptop & Component</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>
        <div className="CustomerCare">
          <h1>Customer Care</h1>
          <ul>
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>
        <div className="pages2">
        <h1>Pages</h1>
            <ul>
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
            </ul>

        </div>
      </div>
    </div>
  );
};

export default Footer;
