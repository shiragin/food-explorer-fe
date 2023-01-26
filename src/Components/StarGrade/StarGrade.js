import { useEffect, useState } from "react";
import "./StarGradecss.css";

export default function StarGrade({ dbRating }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    setRating(dbRating);
    setHover(dbRating);
  }, []);

  const handaleRating = () => {
    console.log(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={
              index <= ((rating && hover) || hover) ? "Fill" : "NoFill"
            }
            onClick={() => {
              setRating(index);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      <button onClick={handaleRating}>&#x2713;</button>
    </div>
  );
}
