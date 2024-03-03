import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
function Singleproduct() {
  const [product, setProducts] = useState();
  // console.log(setProducts);
  const param = useParams();
  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    const responce = await axios.get(
      `https://dummyjson.com/products/${param.id}`
    );
    console.log("responce", responce);
    setProducts(responce.data);
  };
  console.log("products", product);
  console.log("param", param.id);
  return (
    <div>
        
      <div>
        <img src={product?.images?.[0]} height={200} width={200} />
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <h2>{product?.price}</h2>
        <h2>{product?.discountPercentage}</h2>
        <Rating initialValue={product?.rating} />
        <hr />
        {product?.images?.map((image) => (
          <img src={image} height={200} width={200} />
        ))}
      </div>
      <button className="btn btn-dark"><Link to="/" className="text-white text-decoration-none">Go Back</Link></button>
      
    </div>
  );
}

export default Singleproduct;
