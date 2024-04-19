import "./CartCard.css";
export const CartCard = ({product}) => {
  return (
    <div className="cartCard">
        <img src={product.image} alt="" />
        <p className="productsName">{product.name}</p>
        <p className="productsPrice">{product.price}</p>
        <button>Remove</button>
    </div>
  )
}
