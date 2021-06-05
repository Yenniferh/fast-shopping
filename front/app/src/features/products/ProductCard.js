import { RenderCategories } from "../categories/CategoriesLabels";
import { Button } from "../../components/Objects";

export const ProductCard = ({ product, handleClick }) => {
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
