import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrderItem } from "../order/orderSlice";
import { selectAllProducts, fetchProducts } from "./productsSlice";
import { RenderCategories } from "../categories/CategoriesLabels";
import { Paginator } from "../../components/Paginator";
import Spinner from "../../assets/images/Spinner.svg";

import { Button } from "../../components/Objects";

const ProductCard = ({ product, handleClick }) => {
  return (
    <article
      className="bg-white h-auto sm:w-5/12 p-6 shadow-md m-3 rounded-md float-left"
      key={product.id_product}
    >
      <h2 className="text-gray-800 text-xl font-semibold mb-1">
        {product.name}
      </h2>
      <RenderCategories product_id={product.id_product} />
      <p className="text-gray-800 mt-3">
        {product.description.substring(0, 100)}
      </p>
      <div className="flex flex-row justify-between mt-3">
        <Button onClick={() => handleClick(product)}>Add to cart</Button>
        <span className="text-xl font-medium">${product.price}</span>
      </div>
    </article>
  );
};

export const ProductsList = () => {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const handleClick = (product) => {
    dispatch(addOrderItem(product));
  };

  let content;
  if (productStatus === "loading") {
    content = (
      <div className="">
        <img
          src={Spinner}
          alt="Spinner"
          className="animate-spin h-20 w-20 md:h-32 md:w-32 mx-auto my-10"
        />
      </div>
    );
  } else if (productStatus === "succeeded") {
    content = (
      <Paginator
        data={products}
        RenderComponent={ProductCard}
        RenderComponentHandleClick={handleClick}
        pageLimit={5}
        dataLimit={20}
      />
    );
  } else if (productStatus === "failed") {
    content = <div className="text-red-600 text-sm font-semibold">{error}</div>;
  }

  return (
    <section className="w-full flex flex-col sm:flex-row justify-center items-center flex-wrap">
      {content}
    </section>
  );
};
