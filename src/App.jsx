import './App.css'
import Footer from './components/Footer/Footer';
import Home from "./Home"
// import Cases from './Pages/Cases/Cases';
// import Sobre from './Pages/Sobre/Sobre';
import Newsletters from './Pages/Conteudo/Newsletters/Newsletters';
import FAQ from './Pages/FAQ/FAQ';
import ServicosCompleto from './Pages/ServicosCompleto/ServicosCompleto';

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Outlet,
} from "react-router-dom";

import Newsletter from './popups/Newsletter/Newsletter';




/* Esse Root define quais coisas são constantes. Ele faz com que a Navbar
  Apareça sempre no nosso site */
const Root = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
};
// Coloca as rotas no nosso site (Cria o BrowserRouter e cria Rotas a partir de elementos)
const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path= "/" element={<Root />}>
            <Route index element={<Home/>}></Route>
            {/* <Route path="/cases" element ={<Cases />}></Route> */}
            <Route path="/home" element ={<Home />}></Route>
            {/* <Route path="/sobre" element = {<Sobre/>}></Route> */}
            <Route path="/servicos" element = {<ServicosCompleto/>}></Route>
            <Route path="/newsletters" element = {<Newsletters/>}></Route>
            <Route path="/faq" element = {<FAQ/>}></Route>
        </Route>

    )
);

function App() {  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
