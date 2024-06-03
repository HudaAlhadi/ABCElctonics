import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Form} from 'react-router-dom';
import Loading from './Components/UI/Card/Loading.js';
import Header from './Components/layout/Header';
import { FavProvider } from './Store/FavProvider.js';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';
import Footer from './Components/UI/Footer/Footer';
import ContactForm from './Components/Forms/Form.js';
import Categories from './Pages/Filters/Catogries.js/Category.js';
import { useEffect } from 'react';
import LoginForm  from './Components/Forms/LoginForm.js'
import Modal from './Components/UI/Modal';
import ProductItemdetail from './Components/ProductItem/ProductItemdetail.js';
import TopBar from './Components/UI/layout/TopBar';
import StripeContainer from './Components/Forms/StripeContainer.js';
import NotFound from './Components/Notfound/Notfound.js';
import RegisterForm from './Components/Forms/RegisterForm.js';
import Fav from './Components/FavoriteList/Fav.js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Components/Forms/Checkout.js';
import { Elements } from '@stripe/react-stripe-js';
import  AuthProvider  from './Store/authprovider.js';
import React from 'react';
import ProductProvider  from './Store/productProvider.js';
import Home from './Dashboard/pages/home/home,.js';
import Login from './Dashboard/pages/login/login.js';
import List from './Dashboard/table/Table.js';
import Single from './Dashboard/pages/single/single.js';
import About from '../src/Pages/Filters/About/About.js';
import UserProvider from './Store/userprovider.js';
import Products from './Dashboard/pages/products/products.js';
import { useContext } from 'react';
import Account from './Dashboard/userdashboard/account.js';
import ProductContext from './Store/productcontext.js';
import { OrderProvider } from './Store/orderprovider.js';
import Orderdetails from './Dashboard/userdashboard/orderdetails.js';
const stripePromise = loadStripe('pk_test_51OkXtgADZFVDcmEJvZcz2gtTds3iO5dnAvZh9vJSWHAuipS97U7VZ5pCCPL7R2Mta5tTbLPmCnGMB42cOeLC2bUr00LAIbn7dB');

function App() {
  const [Isshow, setshowstate] = useState(false);
  const {products, isloading, fetchproducts}= useContext(ProductContext)
console.log(isloading)

  const ShowModal = () => {
    setshowstate(true);
  };

  const HideModal = () => {
    setshowstate(false);
  };
  return ( 
    <Router>
<UserProvider> 
      <AuthProvider>
      <FavProvider>     
        <CartProvider>
        <ProductProvider> 
        <OrderProvider> 
          <TopBar />
          <Header products= {products} onShow={ShowModal} />
          {Isshow && <Cart onHide={HideModal} />}
          <Elements stripe={stripePromise}>
            <Routes>
              <Route path='/account/myorders' element={ <Account> </Account>} />
              <Route path="/" element={<Categories />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="/meals/:productId" element={<ProductItemdetail products={products} />} />
              <Route path="/user/register" element={<RegisterForm />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/about" element={<About />} />
              <Route path="/favorite" element={<Fav products={products} />} />
              <Route path="/admin/admin/products" element={<Products />} />
              <Route path ='/account/myorders/:orderID' element={<Orderdetails/> }/>
              <Route path='/admin' element ={<Home/>}/>
            </Routes>
          </Elements>
          <Footer />
          </OrderProvider> 
          </ProductProvider>
        </CartProvider>
      </FavProvider>
      </AuthProvider>
      </UserProvider>
    </Router>
  );
}

export  {App};
