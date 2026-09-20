import Hero from "../components/hero/Hero";
import CollectionCard from "../components/collectionCard/CollectionCard";
import ProductCard from "../components/productCard/ProductCard";
import Campaign from "../components/campain/Campaign";
import products from "../data/products";
import Story from "../components/story/Story";

function Home() {
  const collections = [
    {
      name: "Rings",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
    },
    {
      name: "Necklaces",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
    },
    {
      name: "Earrings",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
    },
    {
      name: "Bracelets",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85",
    },
  ];

  return (
    <main>
      <Hero />

      <section className="section">
        <div className="section-heading">
          <p>EXPLORE</p>
          <h2>Collections</h2>
        </div>

        <div className="collection-grid">
          {collections.map((collection) => (
            <CollectionCard key={collection.name} {...collection} />
          ))}
        </div>
      </section>

      <Campaign />

      <section className="section">
        <div className="section-heading">
          <p>CURATED FOR YOU</p>
          <h2>Most Loved</h2>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="story">
        <div className="story-content">
          <p>OUR PHILOSOPHY</p>

          <h2>
            Beauty in
            <br />
            simplicity.
          </h2>

          <p>
            We believe jewellery should feel effortless, personal and timeless.
            Each piece is created with careful attention to detail and designed
            to be worn for years to come.
          </p>

          <a href="/about">Discover our story →</a>
        </div>
      </section>
    </main>
  );
}

export default Home;
