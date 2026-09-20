import { Link } from "react-router";
import "./campaign.css";

function Campaign() {
  return (
    <section className="campaign">
      <div className="campaign-image">
        <img src="/images/mokume-1.jpg" alt="The ZEY&MUS collection" />
      </div>

      <div className="campaign-content">
        <p className="eyebrow">THE COLLECTION</p>

        <h2>
          Mokume
          <br />
          GANE.
        </h2>

        <p>
          Inspired by the timeless movement of an ancient tree, frozen in metal.
        </p>

        <Link to="/product/5">Shop the collection →</Link>
      </div>
    </section>
  );
}

export default Campaign;
