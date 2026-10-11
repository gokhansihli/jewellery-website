import { Link } from "react-router";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="footer-newsletter">
          <p>NEED ASSISTANCE?</p>
          <h2>We are here to help you</h2>
          <p>
            Reach out to our team at <strong>zeymusjewellery@gmail.com</strong>{" "}
            for personalized guidance.
          </p>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h4>SHOP</h4>
          <Link to="/jewellery">Jewellery</Link>
          <Link to="/jewellery?category=rings">Rings</Link>
          <Link to="/jewellery?category=necklaces">Necklaces</Link>
          <Link to="/jewellery?category=earrings">Earrings</Link>
        </div>

        <div>
          <h4>ABOUT</h4>
          <Link to="/about">Our Story</Link>
          <a href="#">Craftsmanship</a>
          <a href="#">Materials</a>
        </div>

        <div>
          <h4>CLIENT CARE</h4>
          <Link to="/about">Contact Us</Link>
          <a href="#">Delivery</a>
          <a href="#">Returns</a>
          <a href="#">Care Guide</a>
        </div>

        <div>
          <h4>FOLLOW</h4>
          <a href="https://www.instagram.com/zeymusjewellery/">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61594724524056">
            Facebook
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 ZEY&MUS</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}

export default Footer;
