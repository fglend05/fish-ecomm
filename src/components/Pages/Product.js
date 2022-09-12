import React, { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div>
      <p>{category}</p>
      <img src={image} height={200} width={200} objecFit="contain" />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarRateIcon className="h-5" />
          ))}
      </div>
      {hasPrime && <></>}

      <p>{description}</p>
    </div>
  );
}

export default Product;
