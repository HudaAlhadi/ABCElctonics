import logo from './logo.svg';
import './App.css';
import Header from './Components/layout/Header';
import { Fragment, useState, useContext, useReducer } from 'react';
import Meals from './Components/Meals/Meals';
import Cartt from './Components/Cart/Cartt';
import CartProvider from './Store/CartProvider';
import Form from './Components/HomeForm/Form';
import Footer from './Components/UI/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Navbar/Nav';


function App() {

  const [Isshow, setshowstate] = useState(false)
  const ShowModal = () => {
    setshowstate(true)
  }

  const HideModal = () => {
    setshowstate(false)
  }

  return (
    <CartProvider>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Meals />}>
          {Isshow && <Route path='/' element={<Cartt onHide={HideModal} />} />}

        </Route>
        <Route path='/contact' element={<Form> </Form>}> </Route>


      </Routes>
      <Footer> </Footer>
    </CartProvider>
  );
}

export default App;
