import "./ProductCard.css"
export const ProductCard = ({product}) => {
  return (
    <div className="productCard">
        <img src={product.image} alt="" />
        <p className="name">{product.name}</p>
        <div className="action">
            <p>{product.price}</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
}
