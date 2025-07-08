import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import LayOut from "../../Components/LayOut/LayOut";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
import { productUrl } from "../../Api/endPoints";
import classes from "./Search.module.css";

function Search() {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchQuery = searchParams.get('q');

  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      // Since the fake store API doesn't have search, we'll fetch all products and filter
      axios
        .get(`${productUrl}/products`)
        .then((res) => {
          const filteredResults = res.data.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setResults(filteredResults);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [searchQuery]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>
          Search Results for "{searchQuery}"
        </h1>
        <p style={{ padding: "30px" }}>
          {results.length} result{results.length !== 1 ? 's' : ''} found
        </p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.Products_container}>
            {results.length > 0 ? (
              results.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  renderDesc={false}
                  renderAdd={true}
                />
              ))
            ) : (
              <div className={classes.no_results}>
                <h3>No products found</h3>
                <p>Try different keywords or browse our categories</p>
              </div>
            )}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Search;