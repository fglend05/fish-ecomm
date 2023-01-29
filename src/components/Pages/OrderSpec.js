import React from "react";

export const OrderSpec = ({ sellerName, image, title, qty, description }) => {
  return (
    <>
      <div className="pl-5 my-3">
        <span className="">Sold from: {sellerName}</span>
      </div>
      <div className="grid grid-cols-5">
        <img
          src={image}
          className="object-contain h-[200px] w-[200px]"
          alt=""
        />
        <div className="col-span-3 mx-5">
          <p>{title}</p>
          {/* <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarRateIcon key={i} className="h-2 text-yellow-500" />
              ))}
          </div> */}
          <div>Weight: {qty} kg</div>

          <p className="text-xs my-2 line-clamp-3">{description}</p>
          {/* <Currency quantity={phPrice} currency="PHP" /> */}

          {/* {hasPrime && (
            <div className="flex items-center space-x-2">
              <img src="" alt="" loading="lazy" />
              <p className="text-xs text-gray-500">Free Delivery</p>
            </div>
          )} */}
        </div>
        <div className="h-full w-full">
          <div className="">
            <p>Status: </p>
          </div>
        </div>
      </div>
    </>
  );
};
