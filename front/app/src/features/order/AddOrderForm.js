import { Link, useHistory } from "react-router-dom";
import { Label, Input, Required, Button } from "../../components/Objects";
import {
  postUser,
  postOrder,
  postOrderItem,
  selectIDOrder,
} from "./orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const AddOrderForm = (props) => {
  const { form, handleChange, total, items } = props;
  const [isOrderReady, setIsOrderReady] = useState(false);
  const id_order = useSelector(selectIDOrder);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    async function SendItems(items) {
      items.forEach((item) => {
        const { id_product, quantity, subtotal } = item;
        dispatch(
          postOrderItem({
            id_product,
            quantity,
            subtotal,
            id_order: id_order,
          })
        );
      });
    }
    if (id_order !== 0 && isOrderReady) {
      SendItems(items);
    }
  }, [id_order, items, dispatch, isOrderReady]);

  if (isOrderReady) {
    history.push({
      pathname: "/thanks",
      state: {
        id_order: id_order,
        user_fullname: form.full_name,
      },
    });
  }

  const onSubmit = async (form, total) => {
    try {
      const { id_user, full_name, address, phone, email } = form;
      await dispatch(postUser({ id_user, full_name, address, phone, email }));
      await dispatch(postOrder({ id_user, total }));
      setIsOrderReady(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="flex justify-center items-center flex-col w-full md:w-2/3 lg:w-1/2 rounded-sm shadow-sm">
        <h2 className="text-xl font-semibold text-gray-700 my-3">
          Customer Information
        </h2>
        <form className="table p-3">
          <div className="table-row">
            <Label name="full_name">
              Full Name
              <Required />
            </Label>
            <Input
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
            />
          </div>
          <div className="table-row">
            <Label name="id_user">
              ID
              <Required />
            </Label>
            <Input
              name="id_user"
              value={form.id_user}
              onChange={handleChange}
            />
          </div>
          <div className="table-row">
            <Label name="address">
              Address
              <Required />
            </Label>
            <Input
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </div>
          <div className="table-row">
            <Label name="phone">
              Phone Number
              <Required />
            </Label>
            <Input name="phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="table-row">
            <Label name="email">
              Email
              <Required />
            </Label>
            <Input name="email" value={form.email} onChange={handleChange} />
          </div>
        </form>
      </section>
      <div>
        <Button className="my-4" onClick={() => onSubmit(form, total)}>
          Save Post
        </Button>
        <Link to="/" className="text-primary ml-4 hover:underline text-sm">
          Back to list
        </Link>
      </div>
    </>
  );
};
