import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3>About Us</h3>
                    <p>Your favorite place to order delicious food online. Fresh ingredients, quick delivery, and excellent service!</p><br/>
                    <p>Wide Range of Options: From street food to gourmet meals, we partner with a variety of restaurants to cater to every taste</p><br/>
                    <p>Fast & Reliable Delivery: With our efficient delivery network, your food reaches you hot and fresh every time.</p><br/>
                    <p>Easy to Use: Our intuitive app and website make it simple to browse menus, place orders, and track your delivery</p><br/>
                    <p>Affordable Pricing: Enjoy exclusive deals, discounts, and combo offers that keep your wallet happy</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Who We Are</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#"> Work With Us</a></li>
                        <li><a href="#"> Investor Relations</a></li>
                        <li><a href="#"> Report Fraud</a></li>
                        <li><a href="#">  Press Kit</a></li>
                        <li><a href="#"> Contact Us</a></li>

        </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3><br/>
                    <p>Email: support@foodorder.com</p><br/>
                    <p>Phone: +123 456 7890</p><br/>
                    <p>Address: 123 Food Street, Food City</p><br/>
                    <div class="footer-social"><br/>
                        <a href="#"><img src="/public/fb.jpeg" alt="Facebook"/></a><br/><br/>
                        <a href="#"><img src="/public/insta.jpeg" alt="Instagram"/></a><br/><br/>
                        <a href="#"><img src="/public/WhatsApp.png" alt="Whatsapp"/></a><br/><br/>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Food Order Website. All Rights Reserved Made By Piyush Daryapurkar</p>
            </div>
        </footer>
    </>
  )
}

export default Footer
