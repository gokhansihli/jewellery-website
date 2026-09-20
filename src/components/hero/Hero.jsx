import { Link } from "react-router";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <img
        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=2200&q=85"
        alt="Luxury jewellery"
      />

      <div className="hero-content">
        <p className="eyebrow">THE NEW COLLECTION</p>

        <h1>
          Timeless
          <br />
          Elegance
        </h1>

        <p>Jewellery designed to become part of your story.</p>

        <Link to="/jewellery" className="hero-button">
          Discover the collection
        </Link>
      </div>
    </section>
  );
}

export default Hero;
