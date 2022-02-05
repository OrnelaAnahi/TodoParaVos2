import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
function App() {
  return (
    <>
      <header className='header'>
        <h1 className='tituloPrincipal'>Todo para vos</h1>
        <NavBar/>
      </header>
    </>
  );
}

export default App;
