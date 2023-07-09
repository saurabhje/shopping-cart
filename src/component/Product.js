
const Product = (props) => {
  return (
    <div className="productcard">
        <img className="product-img" src={props.img} alt='product-image' />
        <div className='title'>{props.title}</div>
        <p className='price'>{props.price}</p>
        This is a productCard
    </div>
  );
}

export default Product;