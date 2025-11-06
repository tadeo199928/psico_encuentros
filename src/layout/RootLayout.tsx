import { Outlet } from "react-router-dom";
import Header from "../components/Navigation/NavBar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
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