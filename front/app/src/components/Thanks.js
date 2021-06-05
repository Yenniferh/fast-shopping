import { useHistory } from "react-router-dom";
import { Button } from "./Objects";

export const Thanks = (props) => {
  const history = useHistory();

  const handleClick = () => {
    console.log("me voy");
    console.log("ya me fui");
    history.push("/");
  };

  let content;
  try {
    const { id_order, user_fullname } = props.location.state;
    if (id_order && user_fullname) {
      console.log("Gracias por comprar");
      content = (
        <>
          <h1 className="text-center text-3xl my-8">
            Thanks for your purchase
          </h1>
          <p className="text-xl font-light text-center text-gray-900 leading-tight mb-6">
            <span className="text-secondary font-normal">{user_fullname}</span>,
            we have created your order #
            <span className="text-secondary font-normal">{id_order}</span>. Your
            items will be soon at your door.
          </p>
          <Button
            onClick={() => handleClick()}
            className="w-32 self-center mb-8"
          >
            Start Again
          </Button>
        </>
      );
    }
  } catch (error) {
    console.log("Entré");
    content = (
      <h1 className="text-center text-3xl my-8">You do not have orders</h1>
    );
  }

  return <div className="flex flex-col justify-center pt-20">{content}</div>;
};
