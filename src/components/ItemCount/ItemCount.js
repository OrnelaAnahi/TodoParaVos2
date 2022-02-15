import { useState } from 'react'
import './ItemCount.css'

export default function ItemCount ({ stock, initial, onAdd }) {
  const [cantidad, setCantidad] = useState(initial)
  function sumarCantidad () {
    setCantidad(cantidad + 1)
    if (cantidad >= stock) {
      setCantidad(stock)
    }
  }
  function restarCantidad () {
    setCantidad(cantidad - 1)
    if (cantidad <= initial) {
      setCantidad(initial)
    }
  }
  return (
    <div className='cajaDeCantidad'>
      <p>Producto</p>
      <div className='botonCantidad'>
        <button className='btnCantidad' onClick={restarCantidad}>-</button>
        <p className='pCantidad'>{cantidad}</p>
        <button className='btnCantidad' onClick={sumarCantidad}>+</button>
      </div>
    </div>
  )
}
