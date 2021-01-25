import { FaShoppingCart } from "react-icons/fa";
import React from "react";

function Cards(props) {
  console.log(props.url);
  return (
    <>
      <div className="imageGallery imageGallery2">
        <div className="addCartView">
          <a href="#" className="addCartButton">
            <FaShoppingCart style={{ marginRight: "10px" }} />
            Add To Cart
          </a>
        </div>
        <div className="details">
          <img
            className="galleryImage"
            src="https://cdn.shopify.com/s/files/1/0332/6420/5963/products/pr14-1_540x.jpg?v=1581496167"
            alt=""
          />
          <div className="desc">
            <div className="title">{props.title}</div>
            <div className="price">Rs. {props.price}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
