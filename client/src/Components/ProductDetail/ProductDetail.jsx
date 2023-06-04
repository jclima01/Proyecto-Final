import React, { useEffect, useRef } from "react";
import style from "./ProductDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, getReviews } from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddToCart from "../EcommerceCliente/AddToCart/AddToCart";
import ProductReview from "../../Components/ProductReview/ProductReview";


const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const reviews = useSelector((state) => state.reviews);
  const sumRatings = reviews.reduce((acc, review) => acc + review.rating, 0); // Suma de los elementos del array
  const averageRatings = sumRatings / reviews.length; // Promedio de las revisiones
  
  console.log('Reviews:', reviews);
  console.log('Rating:', averageRatings);
  console.log('Description:', product.description);
  console.log('Product:', product);
  
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(productId));
    dispatch(getReviews(productId))
  }, []);

  

  return (
    <>
      <div className={style.detailContainer}>
      <div className={style.navButtons}>
          <Link to="/homecliente">
            <button className={style.button}>go back</button>
          </Link>

          <Link to="/cart">
            <button className={style.button}>go cart</button>
          </Link>
        </div>
        <div className={style.cardContainer}>
          <div>
            <h2 className={style.h2}>{product.productName}</h2>
            <img
              src={product.imageUrl}
              alt={product.productName}
              className={style.img}
            />
            <p>Rating: {averageRatings} </p> 
            <p>Stock: {product.stocks}</p>
            <p>Price: ${product.price}</p>  
            <p>Comments: {product.comments}</p>
          </div>
          <div className={style.descriptionContainer}>
            <p className={style.description}>{product?.description}</p>
            <div>
              {product.categories?.map((categorie) => {
                return <div>{categorie.categoryName}</div>;
              })}
            </div>
          </div>

          <AddToCart product={product} stock={product.stocks} />
        </div>
        <ProductReview/>
      </div>
    </>
  );
};

export default ProductDetail;
