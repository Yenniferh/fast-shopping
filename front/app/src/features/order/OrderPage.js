import { selectAllOrderItems } from "./orderSlice";
import { AddOrderForm } from "./AddOrderForm";
import { useSelector, useDispatch } from "react-redux";
import { calculatesTotal, selectTotal } from "./orderSlice";
import { OrderItem } from "./OrderItem";
import { useEffect, useState } from "react";

export const OrdersPage = () => {
  const orderItems = useSelector(selectAllOrderItems);
  const dispatch = useDispatch();
  const total = useSelector(selectTotal);
  const formSchema = {
    full_name: "",
    id_user: 0,
    address: "",
    phone: "",
    email: "",
  };
  const [form, setForm] = useState(formSchema);

  useEffect(() => {
    dispatch(calculatesTotal());
  }, [dispatch, orderItems]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  let content;
  if (orderItems.length === 0) {
    content = (
      <div className="text-xl text-center text-gray-600 font-medium my-3">
        The cart is empty.
      </div>
    );
  } else {
    content = orderItems.map((item) => (
      <OrderItem key={item.id_product} item={item} />
    ));
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center mb-20">
        <div className="w-full md:w-11/12 lg:w-5/6 p-6 m-3">
          {content}
          <h2
            className="self-end text-xl font-medium mt-6 text-right"
            hidden={!total}
          >
            Total: ${total}
          </h2>
        </div>
      </section>
      <AddOrderForm
        handleChange={handleChange}
        form={form}
        total={total}
        items={orderItems}
      />
    </>
  );
};
