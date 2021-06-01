import { CartButton } from './CartButton'
import {Link} from 'react-router-dom'
import FastCart from '../assets/images/FastCart.svg'

export const Navbar = () => {
  return (
    <header className="flex justify-between bg-white p-2 mb-4 md:px-8 md:py-2 border-gray-100">
      <div className=" inline-flex items-center">
        <Link to="/">
          <img src={FastCart} alt="Fast shopping logo" />
        </Link>
        <Link to="/">
          <h1 className="ml-1 text-2xl md:text-3xl font-bold text-gray-900">Fast Shopping</h1>
        </Link>
      </div>
      <nav>
        <CartButton/>
      </nav>
    </header>
  )
}