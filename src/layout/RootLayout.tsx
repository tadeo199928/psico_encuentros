import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="app-root-layout">
      <Header />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
