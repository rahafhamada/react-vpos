import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import ShopPage from "./pages/shop-page";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <ShopPage setIsOpen={setIsOpen} />}
        />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
