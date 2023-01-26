import axios from "axios";
import { useEffect, useState } from "react";
import { useUserContext } from "../../Context/UserContext";
import "./StarGradecss.css";

export default function StarGrade({ id }) {
  const [showV, setShowV] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const { logUser } = useUserContext();
  useEffect(() => {
    setRating();
    setHover();
  }, []);

  const handaleRating = () => {
    const infoSend = {
      value: rating,
      bol: true,
    };

    axios
      .put(`http://localhost:8080/recipes/rate/${id}`, infoSend)
      .then((res) => {
        if (res.data.ok) {
          setShowV(false);
          logUser.savedrecipes=res.data.meals
        }
      });
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
              setShowV(true);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      {showV && <button onClick={handaleRating}>&#x2713;</button>}
    </div>
  );
}
