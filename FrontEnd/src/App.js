import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './Component/Navigation';
import SignUpScreen from './Screens/SignUpScreen';
import SignInScreen from './Screens/SignInScreen';
import ProductScreen from './Screens/ProductScreen';
import CategoryScreen from './Screens/CategoryScreen';
import AdminScreen from './Screens/AdminScreen';
import CustomerNavigation from './Component/CustomerNavigation';
import AdminHomeScreen from './Screens/AdminHomeScreen';
import HomeScreen from './Screens/HomeScreen';
import { Container } from 'react-bootstrap';
import AdminNavigation from './Component/AdminNavigation';
import UpdateProfileScreen from './Screens/UpdateProfileScreen';
import UpdatePasswordScreen from './Screens/UpdatePasswordScreen';
import CustomerScreen from './Screens/CustomerScreen';
import AddProductScreen from './Screens/AddProductScreen';
import AddCategoryScreen from './Screens/AddCategoryScreen';
import UpdateProductScreen from './Screens/UpdateProductScreen';
import CustCategoryScreen from './Screens/CustCategoryScreen';
import ShowProductScreen from './Screens/ShowProductScreen';
import Address from './Screens/Address';
import AddUpdAddress from './Screens/AddUpdAddress'
import OrderScreen from './Screens/OrderScreen';
import ShowCartScreen from './Screens/ShowCartScreen'
import OrderDetails from './Screens/OrderDetails';
import AdminOrderList from './Screens/AdminOrderList';
import UpdateOrder from './Screens/UpdateOrder';
import UpdateCart from './Screens/UpdateCartScreen';
import ContactScreen from './Screens/ContactScreen';

function App() {
     return (

          <Router>
               <div>
                    <Navigation />
                    <AdminNavigation />
                    <CustomerNavigation />
                    <div className="Container">

                         <Switch>
                              <Route path='/' exact component={HomeScreen} />
                              <Route path='/aboutus' exact component={ContactScreen} />
                              <Route path='/AdminHome' exact component={AdminHomeScreen} />
                              <Route path='/Home' exact component={HomeScreen} />
                              <Route path='/signup' component={SignUpScreen} />
                              <Route path='/signin' exact component={SignInScreen} />
                              <Route path='/product' component={ProductScreen} />
                              <Route path='/category' component={CategoryScreen} />
                              <Route path='/admin' component={AdminScreen} />
                              <Route path='/customer' component={CustomerScreen} />
                              <Route path='/updateProfile' exact component={UpdateProfileScreen} />
                              <Route path='/updatePassword' component={UpdatePasswordScreen} />
                              <Route path='/addProduct' component={AddProductScreen} />
                              <Route path='/addCategory' component={AddCategoryScreen} />
                              <Route path='/updateProduct/:id' exact component={UpdateProductScreen} />
                              <Route path='/address' exact component={Address} />
                              <Route path='/addAddress/:id' exact component={AddUpdAddress} />
                              <Route path='/orderList' exact component={OrderScreen} />
                              <Route path='/cart' exact component={ShowCartScreen} />
                              <Route path='/updateCart/:id' exact component={UpdateCart} />
                              <Route path='/orderDetails' component={OrderDetails} />
                              <Route path='/adminOrder' exact component={AdminOrderList} />
                              <Route path='/updateOrder/:id' exact component={UpdateOrder} />
                              <Route path='/custCategoryList' component={CustCategoryScreen} />
                              <Route path='/showProductList' exact component={ShowProductScreen} />
                              <Route path='/showProductList/:id' exact component={ShowProductScreen} />
                         </Switch>
                    </div>
               </div>
          </Router>



     );
}

export default App;
