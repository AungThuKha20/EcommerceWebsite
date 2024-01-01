import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [showDiscountedProducts, setShowDiscountedProducts] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [showDiscountedProducts, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    fetchProducts();
  }, [showDiscountedProducts, searchQuery]);

  const fetchProducts = async () => {
    const api = await fetch("https://dummyjson.com/products");
    const data = await api.json();
    setProducts(data.products);
  };

  const filterProducts = (query) => {
    let filteredProducts = [];

    if (showDiscountedProducts) {
      filteredProducts = products.filter(
        (product) =>
          product.discountPercentage >= 15 &&
          product.title.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    return filteredProducts;
  };

  const toggleProducts = () => {
    setShowDiscountedProducts((prev) => !prev);
  };

  return (
    <ProductContext.Provider
      value={{
        products: filterProducts(searchQuery),
        toggleProducts,
        showDiscountedProducts,
        handleSearch
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
