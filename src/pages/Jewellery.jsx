import { useSearchParams } from "react-router";
import ProductCard from "../components/productCard/ProductCard";
import products from "../data/products";

function Jewellery() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  const filteredProducts = products.filter((product) => {
    if (
      category &&
      product.category?.toLowerCase() !== category.toLowerCase()
    ) {
      return false;
    }

    if (searchQuery) {
      const term = searchQuery.toLowerCase();
      const nameMatch = product.name?.toLowerCase().includes(term);
      const categoryMatch = product.category?.toLowerCase().includes(term);
      return nameMatch || categoryMatch;
    }

    return true;
  });

  return (
    <main className="listing-page">
      <div className="listing-header">
        <p>THE COLLECTION</p>

        <h1>
          {searchQuery
            ? `Results for "${searchQuery}"`
            : category
              ? category.charAt(0).toUpperCase() + category.slice(1)
              : "Jewellery"}
        </h1>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products">No products match your search.</p>
        )}
      </div>
    </main>
  );
}

export default Jewellery;
