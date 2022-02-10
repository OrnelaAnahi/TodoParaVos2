import './App.css'
import NavBar from './components/NavBar/NavBar'
import Logo from './components/Logos/logo.png'
import ItemListContainer from './components/itemListContainer/itemListContainer'
function App () {
  return (
    <>
      <header className='header'>
        <img src={Logo} className='logo' />
        <h1 className='tituloPrincipal'>Todo para vos</h1>
        <NavBar />
      </header>
      <ItemListContainer />
    </>
  )
}

export default App
