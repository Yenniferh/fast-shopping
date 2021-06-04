import { Link } from "react-router-dom";
import Cart from "../assets/images/Cart.svg";
import { useSelector } from "react-redux";
import { selectAllOrderItemsLength } from "../features/order/orderSlice";

export const CartButton = () => {
  const numCartItems = useSelector(selectAllOrderItemsLength) || 0;

  const cartIcon = (
    <Link to="/cart">
      <span className="inline-flex rounded-full justify-center items-center p-2 pr-3 m-2 bg-white shadow-sm">
        <img className=" w-8 h-8 " src={Cart} alt="Shopping Cart" />
      </span>
    </Link>
  );

  return (
    <div className="relative inline-block">
      {cartIcon}
      <span className="absolute inline-flex top-1 right-1 text-sm bg-fuchsia-500 text-white rounded-full h-6 w-6 justify-center items-center">
        {numCartItems}
      </span>
    </div>
  );
};
