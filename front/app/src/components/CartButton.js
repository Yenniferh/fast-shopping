import { Link } from 'react-router-dom'
import Cart from "../assets/images/Cart.svg"
export const CartButton = () => {
  const cartIcon = (
    <Link to="/">
      <span className="inline-flex rounded-full justify-center items-center p-2 pr-3 m-2 bg-white shadow-md">
        <img 
          className=" w-8 h-8 "
          src={Cart}
          alt="Shopping Cart"
        />
      </span>
    </Link>
  )
  return (
    <div className="relative inline-block">
      {cartIcon}
      <span className="px-1 absolute top-1 right-1 bg-pink-600 text-sm bg-primary text-white rounded-sm">3</span>
    </div>
  )
}