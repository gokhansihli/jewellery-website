import React, { useRef, useState, useEffect } from "react";
import "./story.css";

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

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScrollable = scrollWidth - clientWidth;

      if (totalScrollable > 0) {
        const cardWidth = 270;
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
      const amount = 270;

      if (direction === "right") {
        if (scrollLeft + clientWidth >= scrollWidth - amount) {
          setProducts((prev) => [
            ...prev,
            ...initialProducts.map((p) => ({ ...p, id: Math.random() })),
          ]);
        }
        scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
      } else if (direction === "left") {
        if (scrollLeft <= 0) {
          setProducts((prev) => [
            ...initialProducts.map((p) => ({ ...p, id: Math.random() })),
            ...prev,
          ]);
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
