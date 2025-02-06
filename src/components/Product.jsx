import React from 'react';

function Product(props) {
  return (
    <article>
        <span>{props.ProductLabel}</span>
        <img src={props.productImage} alt="afbeelding van een handbag" />
        <h4>{props.productName}</h4>
        <p>€{props.productPrice}</p>
    </article>
    )
}

export default Product;