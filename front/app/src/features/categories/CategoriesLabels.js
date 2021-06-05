import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductCategories } from "./categoriesSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const CategoryLabel = (props) => {
  const { category } = props;
  return (
    <span
      key={category.id_category}
      className="bg-secondary text-white text-sm px-2 py-1 rounded-sm my-1 mr-2 leading-tight"
    >
      {category.name}
    </span>
  );
};

export const RenderCategories = (props) => {
  const { product_id } = props;
  const [productCategories, setProductCategories] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCategories = async () => {
      await dispatch(fetchProductCategories(product_id))
        .then(unwrapResult)
        .then((res) => {
          setProductCategories(res.categories);
        })
        .catch((err) => console.error(err));
    };
    fetchCategories();
  }, [dispatch, product_id]);

  return (
    <section className="flex flex-wrap">
      {productCategories.map((category) => (
        <CategoryLabel key={category.id_category} category={category} />
      ))}
    </section>
  );
};
