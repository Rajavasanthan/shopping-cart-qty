function Product({product,handleAddtoCart,isInCart,handleRemoveItem}) {

  const handleClick = () => isInCart()?handleRemoveItem(product):handleAddtoCart(product)
  return (
    <div className="col-lg-4 mt-2">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://fastly.picsum.photos/id/83/200/200.jpg?hmac=PWpSDFTveI1bSJjmrf_vnw4ipqEELicSPpDf8jb89FI"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">Rs.{product.price}</p>
          <button onClick={handleClick} disabled={isInCart()} className="btn btn-primary">
          {isInCart()?'Added':'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
