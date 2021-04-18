import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeMain from './Components/Home/HomeMain/HomeMain';
import LoginPage from './Components/LoginPage/LoginPage';
import { createContext, useState } from 'react';
import ProtectedPage from './Components/LoginPage/ProtectedPage/ProtectedPage';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import CheckOut from './Components/CheckOut/CheckOut';
import DashBoard from './Components/DashBoard/Dashboard/DashBoard';
import AddBooks from './Components/DashBoard/AddBooks/AddBooks';
import AddAdmin from './Components/DashBoard/AddAdmin/AddAdmin';
import PaymentGateWay from './Components/PaymentSystem/PaymentGateWay/PaymentGateWay';
import OrderList from './Components/DashBoard/OrderList/OrderList';
import AllAdmins from './Components/DashBoard/AllAdmins/AllAdmins';
import CoustomerReview from './Components/DashBoard/CoustomerReview/CoustomerReview';
import UserProfile from './Components/UserProfille/UserProfile';
import DefaultProtectedPage from './Components/DefaultProtectedPage/DefaultProtectedPage';
import ManageShop from './Components/DashBoard/ManageShop/ManageShop';

export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState([])
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeMain></HomeMain>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <ProtectedPage path="/dashboard">
            <DashBoard />
          </ProtectedPage>
          <ProtectedPage path="/checkOut/:booksId">
            <CheckOut />
          </ProtectedPage>
          <Route path="/addBook">
            <AddBooks />
          </Route>
          <Route path="/orderList">
            <OrderList />
          </Route>
          <ProtectedPage path="/review">
            <CoustomerReview />
          </ProtectedPage>
          <ProtectedPage path="/manageShop">
            <ManageShop/>
          </ProtectedPage>
          <ProtectedPage path="/userProfile">
            <UserProfile />
          </ProtectedPage>
          <Route path="/payment/:bookId/:bookPrice">
            <PaymentGateWay />
          </Route>
          <DefaultProtectedPage path="/addAdmin">
            <AddAdmin />
          </DefaultProtectedPage>
          <DefaultProtectedPage path="/allAdmin">
            <AllAdmins />
          </DefaultProtectedPage>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
