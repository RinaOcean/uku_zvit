import Header from './components/Header';
import Introduction from './components/Introduction'
import Chapters from './components/Chapters';
import Partners from './components/Partners/Partners';
import './App.css';


function App() {
  return (
    <div className="App">
     <Header/>
     <Introduction/>
     <Chapters/>
     <Partners/>
    </div>
  );
}

export default App;
