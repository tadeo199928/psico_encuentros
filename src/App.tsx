import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Inicio";
import About from "./pages/SobreMi";
import Contact from "./pages/Contacto";
import Post from "./pages/Post";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="Sobremi" element={<About />} />
        <Route path="Contacto" element={<Contact />} />
        <Route path="Publicaciones" element={<Post />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;