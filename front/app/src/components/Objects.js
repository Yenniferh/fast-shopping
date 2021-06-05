// Form Label
export const Label = (props) => {
  const { name, children } = props;
  return (
    <label
      className="table-cell mr-2 text-lg text-gray-900 font-light"
      htmlFor={name}
    >
      {children}
    </label>
  );
};

// Form Input
export const Input = (props) => {
  const { name, value, onChange, className = "", type = "text" } = props;
  const basicStyles =
    "table-cell w-full border border-gray-300 text-gray-800 py-1 px-2 my-2 ml-2 rounded-md transition duration-500 ease-in-out focus:outline-none focus:border-fuchsia-500 ";
  return (
    <input
      type={type}
      className={basicStyles + className}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export const Required = () => {
  return <span className="text-red-600 font-medium">*</span>;
};

export const Button = (props) => {
  const { onClick, children, className } = props;
  const style =
    "focus:outline-none text-white px-3 py-1 rounded-md text-md font-medium bg-primary ";
  return (
    <button className={className ? style + className : style} onClick={onClick}>
      {children}
    </button>
  );
};
