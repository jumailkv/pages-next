"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
    alert("Product added to cart!");
  };

  return (
    <div
      className="product-card shadow-lg"
      style={{
        background: "#f7f2f2ff",
        color: "black",
        borderRadius: "20px",
        padding: "18px",
        position: "relative",
        overflow: "hidden",
        transition: "0.3s",
      }}
    >

      {/* Image Box */}
      <div
        style={{
          background: "#7d9a43ff",
          borderRadius: "15px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "230px",
          overflow: "hidden",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transition: "0.4s",
          }}
          className="product-img"
        />
      </div>

      {/* Product Info */}
      <div style={{ marginTop: "15px" }}>
        <div style={{ opacity: 0.6, fontSize: "14px" }}>
          {product.category}
        </div>

        <h4
          style={{
            marginTop: "5px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          {product.title}
        </h4>

        {/* Price Row */}
        <div className="d-flex justify-content-between align-items-center mt-2">
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            ₹{product.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-between mt-3 gap-2">
          <Link
            href={`/products/${product.id}`}
            className="btn btn-outline-light"
            style={{
              width: "50%",
              borderRadius: "10px",
              padding: "8px 0",
              fontWeight: 500,
            }}
          >
            View
          </Link>

          <button
            onClick={handleAddToCart}
            className="btn btn-warning"
            style={{
              width: "50%",
              borderRadius: "10px",
              padding: "8px 0",
              fontWeight: 600,
            }}
          >
            Add
          </button>
        </div>
      </div>

      {/* Hover Effect */}
      <style>
        {`
          .product-card:hover .product-img {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
}
