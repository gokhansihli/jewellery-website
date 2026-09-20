import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import products from "../data/products";

function Product() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  // Default to an array of images (using product.images or fallback to product.image)
  const images = product?.images ?? (product?.image ? [product.image] : []);

  // Track the currently selected image index
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Reset selected image index when route/product changes
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [id]);

  if (!product) {
    return (
      <main className="not-found">
        <h1>Product not found</h1>
        <Link to="/jewellery">Back to jewellery</Link>
      </main>
    );
  }

  return (
    <main className="product-page">
      <div className="product-detail-image">
        {/* Main Display Image */}
        <div className="main-image-container">
          <img
            src={images[selectedImageIndex] || product.image}
            alt={product.name}
          />
        </div>

        {/* Thumbnail Navigation (renders only if there are 2 or more images) */}
        {images.length > 1 && (
          <div className="product-thumbnails">
            {images.map((imgSrc, index) => (
              <button
                key={index}
                className={`thumbnail-btn ${index === selectedImageIndex ? "active" : ""}`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img src={imgSrc} alt={`${product.name} view ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="product-detail-info">
        <p className="product-category">{product.category}</p>

        <h1>{product.name}</h1>

        <p className="detail-price">£{product.price.toLocaleString()}</p>

        <p className="detail-description">{product.description}</p>

        <button className="add-to-bag">Add to bag</button>

        <div className="product-details">
          <details>
            <summary>Details</summary>
            <p>{product.details}</p>
          </details>

          <details>
            <summary>Delivery</summary>
            <p>Complimentary delivery on all orders.</p>
          </details>

          <details>
            <summary>Returns</summary>
            <p>Easy returns within 30 days.</p>
          </details>
        </div>
      </div>
    </main>
  );
}

export default Product;
