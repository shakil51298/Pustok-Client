import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeMain from './Components/Home/HomeMain/HomeMain';
import LoginPage from './Components/LoginPage/LoginPage';
import { createContext, useState } from 'react';
import FeaturedBooks from './Components/Home/FeaturedBooks/FeaturedBooks';
import ProtectedPage from './Components/LoginPage/ProtectedPage/ProtectedPage';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import CheckOut from './Components/CheckOut/CheckOut';
import DashBoard from './Components/DashBoard/Dashboard/DashBoard';
import AddBooks from './Components/DashBoard/AddBooks/AddBooks';
import AddAdmin from './Components/DashBoard/AddAdmin/AddAdmin';
import OrderDetails from './Components/OrderDetails/OrderDetails';
import PaymentGateWay from './Components/PaymentSystem/PaymentGateWay/PaymentGateWay';
import OrderList from './Components/DashBoard/OrderList/OrderList';
import AllAdmins from './Components/DashBoard/AllAdmins/AllAdmins';
import CoustomerReview from './Components/DashBoard/CoustomerReview/CoustomerReview';
import UserProfile from './Components/UserProfille/UserProfile';

export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState([])
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h1>{loggedInUser.email}</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeMain></HomeMain>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/dashboard">
            <DashBoard/>
          </Route>
          <ProtectedPage path="/checkOut/:booksId">
            <CheckOut/>
          </ProtectedPage>
          <Route path="/addBook">
            <AddBooks/>
          </Route>
          <Route path="/orderList">
            <OrderList/>
          </Route>
          <ProtectedPage path="/review">
            <CoustomerReview/>
          </ProtectedPage>
          <ProtectedPage path="/userProfile">
            <UserProfile/>
          </ProtectedPage>
          <Route path="/payment/:bookId/:bookPrice">
            <PaymentGateWay/>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin/>
          </Route>
          <Route path="/allAdmin">
            <AllAdmins/>
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
