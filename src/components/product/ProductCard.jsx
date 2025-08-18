import React from "react";
import { useParams, Link } from "react-router-dom";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { workData } from "../../data/workData"; // your data file
import "./ProductCard.css";

const ProductCard = () => {
    const { id } = useParams(); // get id from URL
    const product = workData.find((item) => item.id.toString() === id);

    if (!product) {
        return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Product not found</h2>;
    }

    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="product-imgs">
                    <div className="img-display">
                        <div className="img-showcase">
                            {product.images.map((img, idx) => (
                                <img key={idx} src={img} alt={`${product.title} ${idx + 1}`} />
                            ))}
                        </div>
                    </div>
                    <div className="img-select">
                        {product.images.map((img, idx) => (
                            <div className="img-item" key={idx}>
                                <button type="button" data-id={idx + 1}>
                                    <img src={img} alt={`${product.title} ${idx + 1}`} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="product-content">
                    <h2 className="product-title">{product.title}</h2>

                    <Link to={`/brand/${product.brand}`} className="product-link">
                        Visit {product.brand} Store
                    </Link>

                    <div className="product-rating">
                        ⭐⭐⭐⭐☆ <span>{product.rating} ({product.reviews})</span>
                    </div>

                    <div className="product-price">
                        {/* <p className="last-price">
              Old Price: <span>${product.oldPrice}</span>
            </p> */}
                        <p className="new-price">
                            Price: <span>${product.price}</span>
                        </p>
                    </div>

                    <div className="product-detail">
                        <h2>About this item: </h2>
                        <p>{product.description}</p>
                        <ul>
                            <li>Color: <span>{product.color}</span></li>
                            <li>Available: <span>{product.stock ? "In stock" : "Out of stock"}</span></li>
                            <li>Category: <span>{product.category}</span></li>
                            <li>Shipping Area: <span>Worldwide</span></li>
                            <li>Shipping Fee: <span>Free</span></li>
                        </ul>
                    </div>

                    <div className="purchase-info">
                        <input type="number" min="1" defaultValue="1" />
                        <button className="button selected">
                            <UilShoppingCart className="work-button-icon" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;
