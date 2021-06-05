import { useDispatch } from "react-redux";
import { removeOrderItem } from "./orderSlice";
import DeleteIcon from "../../assets/images/Delete.svg";
import { RenderCategories } from "../categories/CategoriesLabels";
import { useState, useEffect } from "react";
import { setItemQuantity } from "./orderSlice";
import Select from "react-select";

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

export const OrderItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [selectedOption, setSelectedOption] = useState(quantity);

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(removeOrderItem(item));
  };

  useEffect(() => {
    const { id_product, stock } = item;
    const quantity = Number(selectedOption.value);
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
            <Select
              defaultValue={quantity}
              onChange={setSelectedOption}
              options={options}
            />
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
