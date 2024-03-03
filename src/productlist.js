import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function Productlist() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [limit, setlimit] = useState(15);
  useEffect(() => {
    getallproducts();
  }, [search, limit]);

  const getallproducts = async () => {
    const responce = await axios.get(
      `https://dummyjson.com/products/search?q=${search}&limit=${limit}`
    );
    // console.log("responce", responce.data.products);
    setProducts(responce.data.products);
  };
  console.log("product", products);
  return (
    <div>
      <input
        placeholder="search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={limit} onChange={(e) => setlimit(e.target.value)}>
        <option value={2}>2</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
      <h1>Productlist</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.images[0]} height={200} width={200} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h2>{product.price}</h2>
          <h2>{product.discountPercentage}</h2>
          <Rating initialValue={product.rating} />
          <Link to={`/${product.id}`} className="btn btn-dark">View Details</Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Productlist;
