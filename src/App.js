import Header from './components/Header';
import Introduction from './components/Introduction'
import Chapters from './components/Chapters';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer';
import './App.css';



function App() {
  return (
    <div className="App">
     <Header/>
     <Introduction/>
     <Chapters/>
     <Partners/>
     <Footer/>
    </div>
  );
}

export default App;
