
import { Outlet } from "react-router-dom";
import Header from "../components/Navigation/NavBar";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;