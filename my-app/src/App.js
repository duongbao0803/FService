import { Routes, Route, Link, redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import PackagePage from "./page/PackagePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/AboutUs/About";
import OrderPage from "./page/OrderPage";
import PD from "./page/packageDetail";
import Login from "./components/Authen/Login";
import Admin from "./components/AdminPage/Admin";
import InfoUser from "./components/TableUser/ListUser";
import NotFound from "./components/NotFound/NotFound";
import PackageDetail from "./page/packageDetail";
import ListPackage from "./components/packageDetail/ListPackage";
import ListUser from "./components/TableUser/ListUser";
import ConfirmVnpay from "./page/confirmVnpay";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/package" element={<PackagePage />} />
        <Route path="/orderPage" element={<OrderPage />} />
        <Route path="/confirm" element={<ConfirmVnpay />} />
        <Route path="/authen" element={<Login />} />
        <Route path="/board" element={<ListUser />} />
        <Route path="/detail/:id" element={<PackageDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
