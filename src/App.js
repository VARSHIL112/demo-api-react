import logo from './logo.svg';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Productlist from './productlist';
import Singleproduct from './singleproduct';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Productlist/>}/>
     <Route path='/:id' element={<Singleproduct/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
