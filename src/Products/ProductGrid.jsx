import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./product.css";

const ProductGrid = ({showFilter}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => { setProducts(data)
      setLoading(false)})
      .catch((err) => console.log(err));
  }, []);



  if (loading) {
    return <h2>Loading products...</h2>;
  }


  return (
    <div className={`product-grid ${!showFilter ? "full-width" : ""}`}>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductGrid;