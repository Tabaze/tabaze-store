import React from "react";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { Link } from "react-router-dom"; // use this for navigation
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        {/* Product Images */}
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img
                src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                alt="Nike Shoe 1"
              />
              <img
                src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                alt="Nike Shoe 2"
              />
              <img
                src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                alt="Nike Shoe 3"
              />
              <img
                src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                alt="Nike Shoe 4"
              />
            </div>
          </div>
          <div className="img-select">
            <div className="img-item">
              <button type="button" data-id="1">
                <img
                  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                  alt="Nike Shoe 1"
                />
              </button>
            </div>
            <div className="img-item">
              <button type="button" data-id="2">
                <img
                  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                  alt="Nike Shoe 2"
                />
              </button>
            </div>
            <div className="img-item">
              <button type="button" data-id="3">
                <img
                  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                  alt="Nike Shoe 3"
                />
              </button>
            </div>
            <div className="img-item">
              <button type="button" data-id="4">
                <img
                  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                  alt="Nike Shoe 4"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Product Content */}
        <div className="product-content">
          <h2 className="product-title">Nike Shoes</h2>

          {/* Changed from <a href="#"> to <Link> */}
          <Link to="/brand/nike" className="product-link">
            Visit Nike Store
          </Link>

          <div className="product-rating">
            ⭐⭐⭐⭐☆ <span>4.7 (21)</span>
          </div>

          <div className="product-price">
            <p className="last-price">
              Old Price: <span>$257.00</span>
            </p>
            <p className="new-price">
              New Price: <span>$249.00 (5%)</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>About this item: </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet veniam tempora fuga tenetur placeat sapiente architecto
              illum soluta consequuntur.
            </p>
            <ul>
              <li>Color: <span>Black</span></li>
              <li>Available: <span>In stock</span></li>
              <li>Category: <span>Shoes</span></li>
              <li>Shipping Area: <span>Worldwide</span></li>
              <li>Shipping Fee: <span>Free</span></li>
            </ul>
          </div>

          <div className="purchase-info">
            <input type="number" min="1" defaultValue="1" />
            <button type="button" className="btn">
              Add to Cart <UilShoppingCart />
            </button>
            <button type="button" className="btn">
              Compare
            </button>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <p>Share At: </p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
