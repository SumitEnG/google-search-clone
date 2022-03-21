import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './component/home/search-page/Search';
import Homepage from './component/homepage/Homepage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Routes>
         <Route path='/' element={<Homepage/>}/> 
         <Route path='/search' element={<Search/>}/>
         </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
