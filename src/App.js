
import './App.css';
import Login from './component/Login';
import Home from './component/Home'
 import Product from './component/Product'
  import Elecctronic from './component/product/Elecctronic'
  import Jewellery from './component/product/Jewellery'
  import Menscloth from './component/product/Menscloth'
 import   Womencloth from './component/product/Womencloth'
import Navbar  from './component/Navbar'
import User from './component/User'
import Contact from './component/Contact';
import { Route,Routes } from 'react-router-dom';
import Protected from './component/Protected/Protected';
import Logout from './component/Logout';
import Eitem from './ItemApi/Eitem';
function App() {
  return (
   <>
   
{/* <Navbar/> */}
{/* <User/> */}

{/* <Eitem/> */}




<Routes>
       <Route path='*' element={<Login/>} />
      <Route  path='/Home' element={ <Home/>} />
      <Route path='/Product' element={<Product/>} />
      <Route path='/Electronic' element={<Elecctronic/>} />
      <Route path='/Jewellery' element={<Jewellery/>} />
      <Route path='/Menscloth' element={<Menscloth />} />
      <Route path='/Womencloth' element={<Womencloth />} />
      <Route path='/User' element={<User />} />
      <Route path='/User' element={<Logout />} />

      <Route path='/Contact' element={<Contact />} />
      
      

   </Routes> 







   {/* <Login/> */}
   {/* <Home/> */}
   {/* <Product/> */}
   {/* <Elecctronic/> */}
   {/* <Jewellery/> */}
  {/* <Menscloth /> */}
  {/* <Womencloth /> */}


{/* <Navbar/> */}
   </>
  );
}

export default App;
