import { Link } from "react-router";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <p>STAY CONNECTED</p>

        <h2>Discover our latest collections</h2>

        <form>
          <input type="email" placeholder="Email address" />

          <button type="submit">Subscribe</button>
        </form>
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
          <a href="#">Contact Us</a>
          <a href="#">Delivery</a>
          <a href="#">Returns</a>
          <a href="#">Care Guide</a>
        </div>

        <div>
          <h4>FOLLOW</h4>
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="#">Facebook</a>
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
