import './NavBar.css'

export default function NavBar () {
  return (
    <nav className='nav'>
      <ul className='ulNav'>
        <li className='liNav'>
          <a className='linksNav' href='index.html'>Inicio</a>
        </li>
        <li className='liNav'>
          <a className='linksNav' href='productos.html'>Catalogo</a>
        </li>
        <li className='liNav'>
          <a className='linksNav' href='locales.html'>Sucursales</a>
        </li>
        <li className='liNav'>
          <a className='linksNav' href='contactos.html'>Nosotros</a>
        </li>
        <li className='liNav'>
          <a className='linksNav' href='envios.html'>Envios</a>
        </li>
      </ul>
    </nav>
  )
}
