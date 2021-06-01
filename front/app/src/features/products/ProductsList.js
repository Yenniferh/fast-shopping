import { useSelector } from 'react-redux'

export const ProductsList = () => {
  const products = useSelector(state => state.products)

  const renderProducts = products.map( product => (
    <article key={product.id_product} className='bg-white block sm:w-1/2 md:w-1/3 xl:h-1/4 p-6 shadow-md h-auto border-gray-50 m-3 rounded-md'>
      <h2 className='text-gray-800 text-xl font-semibold mb-1'>{product.name}</h2>
      <span className="bg-secondary text-white text-sm px-2 py-1 rounded-sm my-3 mr-2">{product.category}</span>
      <span className="bg-secondary text-white text-sm px-2 py-1 rounded-sm my-3 mr-2">{product.category}</span>
      <p className="text-gray-800 font-light mt-2">{product.description.substring(0, 100)}</p>
    </article>
  ))

  // TODO: implement renderCategories({product.id})

  return (
    <>
      <h2 className='text-2xl text-gray-700 font-semibold mb-3 block'>Products</h2>
      <section className="w-full sm:flex sm:flex-row sm:justify-center">
        {renderProducts}
      </section>
    </>
  )
}