import "./Product.css"
const Product = (props) => {
  return (
    <div className="productcard">
        <h1 className='title'>{props.title}</h1>
        <img className="product-img" src={props.img} alt='product-image' />
        <p className='price'>{props.price}</p>
        <button className="button-4"> Add to Cart</button>
    </div>
  );
}

export default Product;