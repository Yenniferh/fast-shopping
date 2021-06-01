import { useState, useEffect } from "react"
import { GetProducts } from "../Services/Api"

export default function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    GetProducts().then(res => {
      setProducts(res)
    })
  }, [])

  return (
    <div>
      {console.log(products)}
    </div>
  )
}