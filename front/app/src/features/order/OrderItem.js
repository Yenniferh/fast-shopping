import { useDispatch } from 'react-redux';
import { removeOrderItem } from './orderSlice';
import DeleteIcon from '../../assets/images/Delete.svg';

export const OrderItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(removeOrderItem(item));
  };

  return (
    <div className='h-auto sm:h-36 bg-white shadow-sm rounded-md flex-col flex sm:flex-row w-full '>
      <div className='inline-flex flex-col sm:mr-2 sm:justify-center'>
        <h2 className='text-gray-800 text-xl font-semibold mb-1'>
          {item.name}
        </h2>
        <p className='text-gray-800 text-sm font-semibold'>
          Stock: <span className='text-gray-600 font-normal'>{item.stock}</span>
        </p>
      </div>
      <div className='inline-flex flex-row sm:flex-col sm:justify-center items-center sm:mr-2'>
        <h3 className='text-gray-800 text-sm sm:text-lg font-semibold sm:font-normal'>
          Unit Price:
        </h3>
        <p className='text-gray-800 text-sm sm:font-semibold ml-1 sm:ml-0'>
          ${item.price}
        </p>
      </div>
      <div className='inline-flex flex-row sm:flex-col w-20 items-center sm:mr-2'>
        <h3 className='text-gray-800 text-sm sm:text-lg font-semibold mr-1 sm:font-normal sm:text-center'>
          Qty:
        </h3>
        <p className='text-gray-800 text-sm sm:text-lg'>{item.quantity}</p>
      </div>
      <button
        className='h-8 w-8 inline-flex items-center sm:mr-2 order-first sm:order-3 ml-auto sm:ml-0'
        onClick={() => handleClick(item)}
      >
        <img
          className='w-full h-full'
          src={DeleteIcon}
          alt={`Delete ${item.name}`}
        />
      </button>
      <div className='inline-flex flex-row sm:flex-col justify-end sm:justify-center items-center sm:mr-2'>
        <p className='text-gray-800 font-semibold text-lg leading-snug p-2'>
          ${item.price * item.quantity}
        </p>
      </div>
    </div>
  );
};
