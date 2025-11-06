
import { Outlet } from "react-router-dom";
import Header from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;