
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Filters from './components/Filters';
import ProductCard from './components/ProductCard';
import Body from './components/Body';

function App() {
  return (
    <div className="App">   
      <Header/> 
      <Body/>
      <Footer/>     
    </div>
  );
}

export default App;
