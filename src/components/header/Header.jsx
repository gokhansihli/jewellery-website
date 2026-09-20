import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import products from "../../data/products.js";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const productList = Array.isArray(products) ? products : [];

  const filteredProducts =
    searchQuery.trim() === ""
      ? []
      : productList.filter((product) => {
          const nameMatch = product.name
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase());
          const categoryMatch = product.category
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase());
          return nameMatch || categoryMatch;
        });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen || searchOpen) return;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen, searchOpen]);

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [searchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/jewellery?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery("");
      setMenuOpen(false);
    }
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <header
        className={`header ${isVisible ? "header--visible" : "header--hidden"}`}
      >
        <div className="header-inner">
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
          </button>

          <Link to="/" className="logo">
            ZEY&MUS
          </Link>

          <nav className={`navigation ${menuOpen ? "open" : ""}`}>
            <Link to="/jewellery" onClick={() => setMenuOpen(false)}>
              Jewellery
            </Link>
            <Link
              to="/jewellery?category=rings"
              onClick={() => setMenuOpen(false)}
            >
              Rings
            </Link>
            <Link
              to="/jewellery?category=necklaces"
              onClick={() => setMenuOpen(false)}
            >
              Necklaces
            </Link>
            <Link
              to="/jewellery?category=earrings"
              onClick={() => setMenuOpen(false)}
            >
              Earrings
            </Link>
            <Link
              to="/jewellery?category=bracelets"
              onClick={() => setMenuOpen(false)}
            >
              Bracelets
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </nav>

          <div className="header-icons">
            <button
              type="button"
              aria-label="Search"
              className="header-icon-btn"
              onClick={() => setSearchOpen(true)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {searchOpen && (
        <div className="search-modal">
          <div className="search-container">
            <div className="search-modal-header">
              <button
                className="search-modal-close-btn"
                onClick={closeSearch}
                aria-label="Close search"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="search-modal-form">
              <input
                type="text"
                placeholder="Search ZEY & MUS"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="search-modal-input"
              />
              <button type="submit" className="search-modal-submit-btn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </form>

            {searchQuery.trim() !== "" && (
              <div className="search-results-container">
                {filteredProducts.length > 0 ? (
                  <div className="search-grid">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="search-card"
                        onClick={closeSearch}
                      >
                        <div className="search-card-image-wrapper">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="search-card-image"
                          />
                        </div>
                        <span className="search-card-category">
                          {product.category}
                        </span>
                        <h4 className="search-card-title">{product.name}</h4>
                        <span className="search-card-price">
                          ${product.price}
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="search-no-results">
                    No results found for "{searchQuery}"
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
