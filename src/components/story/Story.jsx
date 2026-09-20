import React, { useRef, useState, useEffect } from "react";
import "./story.css";

// Tiffany & Co. sitesinden örnek ürün verileri (image_0.png referanslı)
const initialProducts = [
  {
    id: 1,
    title: "Two-row Ring",
    description: "Yellow Gold and Platinum with Diamonds",
    image: "/images/y-1.jpeg",
  },
  {
    id: 2,
    title: "Feather Pendant",
    description: "Yellow Gold",
    image: "/images/y-2.jpeg",
  },
  {
    id: 3,
    title: "Feather Stud Earrings",
    description: "",
    image: "/images/y-3.jpeg",
  },
  {
    id: 4,
    title: "Wings Rolo Pendant",
    description: "",
    image: "/images/y-4.jpeg",
  },
  {
    id: 5,
    title: "Wings Rolo Pendant",
    description: "",
    image: "/images/y-5.jpeg",
  },
  {
    id: 6,
    title: "Wings Rolo Pendant",
    description: "",
    image: "/images/y-6.jpeg",
  },
  {
    id: 7,
    title: "Wings Rolo Pendant",
    description: "",
    image: "/images/y-2.jpeg",
  },
  {
    id: 8,
    title: "Wings Rolo Pendant",
    description: "",
    image: "/images/y-4.jpeg",
  },
];

export default function Story() {
  const scrollRef = useRef(null);
  const [products, setProducts] = useState(initialProducts);
  const [thumbWidthPercent, setThumbWidthPercent] = useState(25);

  // Çizginin doluluk oranını hesaplar (resimler aksa da çizgi döngüsel dolar)
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScrollable = scrollWidth - clientWidth;

      if (totalScrollable > 0) {
        // Her 4 kartta bir çizginin %100 olup başa dönmesi için modül hesabı
        const cardWidth = 270; // kart genişliği + gap
        const currentCardIndex =
          Math.floor(scrollLeft / cardWidth) % initialProducts.length;

        const progress =
          ((currentCardIndex + 1) / initialProducts.length) * 100;
        setThumbWidthPercent(progress);
      }
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const amount = 270; // Bir kart kaydırma mesafesi

      if (direction === "right") {
        // En sona yaklaştıysak diziyi arkaya tekrar ekleyerek sonsuz döngü sağlar
        if (scrollLeft + clientWidth >= scrollWidth - amount) {
          setProducts((prev) => [
            ...prev,
            ...initialProducts.map((p) => ({ ...p, id: Math.random() })),
          ]);
        }
        scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
      } else if (direction === "left") {
        // En başa geldiysek ve sola basıldıysa dizinin başına eleman ekler
        if (scrollLeft <= 0) {
          setProducts((prev) => [
            ...initialProducts.map((p) => ({ ...p, id: Math.random() })),
            ...prev,
          ]);
          // Kaydırma pozisyonunu korumak için ufak bir offset
          setTimeout(() => {
            if (scrollRef.current) {
              scrollRef.current.scrollLeft = amount * initialProducts.length;
              scrollRef.current.scrollBy({ left: -amount, behavior: "smooth" });
            }
          }, 50);
        } else {
          scrollRef.current.scrollBy({ left: -amount, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <section className="popular-section">
      <div className="card-container" ref={scrollRef} onScroll={handleScroll}>
        {products.map((item) => (
          <div key={item.id} className="jewelry-card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <p className="card-title">{item.title}</p>
            {item.description && (
              <p className="card-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button
          className="nav-arrow left"
          onClick={() => scroll("left")}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="progress-track">
          <div
            className="progress-thumb"
            style={{ width: `${thumbWidthPercent}%` }}
          />
        </div>

        <button
          className="nav-arrow right"
          onClick={() => scroll("right")}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      <div className="action-wrapper">
        <button className="shop-popular-btn">SHOP STORY</button>
      </div>
    </section>
  );
}
