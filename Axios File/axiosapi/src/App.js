
import './App.css';
import { Route, Routes } from 'react-router-dom';
import View from './component/View';
import Add from './component/Add';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<View/>}/>
      <Route path='/add' element={<Add/>}/>
     </Routes>
    </div>
  );
}

export default App;
