import { Link } from "react-router";
import "./CollectionCard.css";

function CollectionCard({ name, image }) {
  return (
    <Link
      to={`/jewellery?category=${name.toLowerCase()}`}
      className="collection-card"
    >
      <img src={image} alt={name} />

      <div className="collection-overlay">
        <h3>{name}</h3>
        <span>Explore</span>
      </div>
    </Link>
  );
}

export default CollectionCard;
