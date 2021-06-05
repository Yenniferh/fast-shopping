import { useDispatch } from "react-redux";
import { removeOrderItem } from "./orderSlice";
import DeleteIcon from "../../assets/images/Delete.svg";
import { RenderCategories } from "../categories/CategoriesLabels";
import { useState, useEffect } from "react";
import { setItemQuantity } from "./orderSlice";

export const OrderItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [selectedOption, setSelectedOption] = useState(quantity);

  const handleChange = (e) => {
    setSelectedOption(Number(e.target.value));
  };

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(removeOrderItem(item));
  };

  useEffect(() => {
    const { id_product, stock } = item;
    const quantity = Number(selectedOption);
    setQuantity(quantity);
    dispatch(setItemQuantity({ id_product, quantity, stock }));
  }, [dispatch, item, selectedOption]);

  return (
    <div className="grid-container">
      <div className="item header">
        <h2 className="text-gray-800 text-xl font-semibold mb-1">
          {item.name}
        </h2>
        <RenderCategories product_id={item.id_product} />
        <p className="text-gray-800 text-sm font-semibold">
          Stock: <span className="text-gray-600 font-normal">{item.stock}</span>
        </p>
      </div>
      <div className="item details">
        <div className="inline-flex flex-row md:flex-col md:my-1 md:justify-center md:items-center">
          <h3 className="text-gray-800 text-sm md:text-lg font-semibold md:font-normal">
            Unit Price:
          </h3>
          <p className="text-gray-800 text-sm md:font-semibold ml-1 md:ml-0">
            ${item.price}
          </p>
        </div>
        <div className="inline-flex flex-row md:flex-col md:my-1 md:justify-center md:items-center">
          <h3 className="text-gray-800 text-sm md:text-lg font-semibold mr-1 md:font-normal">
            Qty:
          </h3>
          <p className="text-gray-800 text-sm md:text-lg">
            <select
              name={"quantity-" + item.id_product}
              onChange={(e) => handleChange(e)}
              value={quantity}
              className="w-16 leading-tight"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
        </div>
        <div className="inline-flex flex-row md:flex-col md:my-1 self-end md:justify-center md:items-center md:self-center">
          <p className="text-gray-800 font-semibold text-lg leading-snug my-2">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
      <button className="item remover" onClick={() => handleClick(item)}>
        <img
          className="w-8 h-8 ml-auto md:m-0"
          src={DeleteIcon}
          alt={`Delete ${item.name}`}
        />
      </button>
    </div>
  );
};
