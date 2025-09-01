import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { workData } from "../../data/workData";
import "./ProductCard.css";

const ProductCard = () => {
    const { id } = useParams();
    const product = workData.find((item) => item.id.toString() === id);

    const [mainImage, setMainImage] = useState(
        product?.images[0] || ""
    );

    const [selectedSize, setSelectedSize] = useState(null);

    const handleSelectSize = (size) => {
        setSelectedSize(size);
    };
    if (!product) {
        return (
            <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
                Product not found
            </h2>
        );
    }

    return (
        <div className="product-card">
            <div className="card-wrapper">
                <div className="card">
                    <div className="container">
                        <ul className="thumb">
                            {product.images.map((img, idx) => (
                                <li key={idx} onMouseEnter={() => setMainImage(img)}>
                                    <img src={img} alt={`${product.title} ${idx + 1}`} />
                                </li>
                            ))}
                        </ul>

                        <div className="imgbox">
                            <h2>{product.title}</h2>
                            <img src={mainImage} alt={product.title} className="t-shirt" />

                            <ul className="size">
                                <span>Size</span>
                                {product.sizes.split(",").map((e, index) => (
                                    <li
                                        key={index}
                                        className={selectedSize === e ? "active" : ""}
                                        onClick={() => handleSelectSize(e)}
                                    >
                                        {e}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>

                    {/* ✅ Keep rest of product details */}
                    <div className="product-content">
                        {/* <Link to={`/brand/${product.brand}`} className="product-link">
                            Visit {product.brand} Store
                        </Link> */}

                        {/* <div className="product-rating">
                            ⭐⭐⭐⭐☆ <span>{product.rating} ({product.reviews})</span>
                        </div> */}

                        <div className="product-price">
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
        </div>
    );
};

export default ProductCard;
