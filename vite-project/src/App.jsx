import React from 'react'
import Navbar from './Navbar'
import Login from './Login';
import Home from './Home';
import Admin from './Admin';
import GetData from './GetData';
import Register from './Register';
import Admin_login from './Admin_login';
import Cosmetics from './categories/Cosmetics';
import Food from './categories/Food';
import Furniture from './categories/Furniture';
import Pet from './categories/Pet';
import Mobile from './categories/Mobile';
import Access from './categories/Access';
import Temp from './Temp';
import Cart from './Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add_Product from './admin/Add_Product';
import Available_products from './admin/Available_products';
import Orders from './admin/Orders';
import AllProducts from './admin/Available/AllProducts';

import AAccessories from './admin/Available/AAccessories';
import ACosmetics from './admin/Available/ACosmetics';
import AFood from './admin/Available/AFood';
import AFurniture from './admin/Available/AFurniture';
import AMobile from './admin/Available/AMobile';
import APet from './admin/Available/APet';

import EditAccessories from './admin/Available/Edit/EditAccessories';
import EditCosmetics from './admin/Available/Edit/EditCosmetics';
import EditFood from './admin/Available/Edit/EditFood';
import EditFurniture from './admin/Available/Edit/EditFurniture';
import EditPet from './admin/Available/Edit/EditPet';
import EditMobile from './admin/Available/Edit/EditMobile';


export default function App() {
  return (
    <div>
      <Router>
        <Navbar>
        </Navbar>
        <Routes>
          <Route path="/" element={<Temp></Temp>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/home' element={<Home></Home>}>

            <Route path='cosmetics' element={<Cosmetics></Cosmetics>}></Route>
            <Route path='food' element={<Food></Food>}></Route>
            <Route path='furniture' element={<Furniture></Furniture>}></Route>
            <Route path='pet' element={<Pet></Pet>}></Route>
            <Route path='mobile_laptops' element={<Mobile></Mobile>}></Route>
            <Route path='accessories' element={<Access></Access>}></Route>

          </Route>

          <Route path='/admin' element={<Admin></Admin>}>

          <Route path='getdata' element={<GetData></GetData>}></Route>
          <Route path='add' element={<Add_Product></Add_Product>}></Route>
          <Route path='orders' element={<Orders></Orders>}></Route>

          <Route path='available' element={<Available_products></Available_products>}>

          <Route path='all' element={<AllProducts></AllProducts>}></Route>
          <Route path='cosmetics' element={<ACosmetics></ACosmetics>}></Route>
          <Route path='food' element={<AFood></AFood>}></Route>
          <Route path='furniture' element={<AFurniture></AFurniture>}></Route>
          <Route path='pet' element={<APet></APet>}></Route>
          <Route path='mobile' element={<AMobile></AMobile>}></Route>
          <Route path='accessories' element={<AAccessories></AAccessories>}></Route>
          <Route path='edit/:id' element={<EditAccessories></EditAccessories>}></Route>
          <Route path='editcosmetics/:id' element={<EditCosmetics></EditCosmetics>}></Route>
          <Route path='editfood/:id' element={<EditFood></EditFood>}></Route>
          <Route path='editfurniture/:id' element={<EditFurniture></EditFurniture>}></Route>
          <Route path='editpet/:id' element={<EditPet></EditPet>}></Route>
          <Route path='editmobile/:id' element={<EditMobile></EditMobile>}></Route>

          </Route>



          </Route>
          <Route path='/admin_login' element={<Admin_login></Admin_login>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
