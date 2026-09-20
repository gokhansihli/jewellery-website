import { Link } from "react-router";
import "./productCard.css";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image">
        <img src={product.image} alt={product.name} />

        <button
          className="wishlist"
          aria-label={`Add ${product.name} to wishlist`}
          onClick={(event) => event.preventDefault()}
        >
          ♡
        </button>
      </Link>

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <h3>{product.name}</h3>

        <p className="product-price">£{product.price.toLocaleString()}</p>
      </div>
    </article>
  );
}

export default ProductCard;
