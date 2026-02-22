import { createBrowserRouter } from "react-router-dom";
import LayOut from "./components/LayOut.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import VoucherPage from "./pages/VoucherPage.jsx";
import SalePage from "./pages/Salepage.jsx";
import ProductCreatePage from "./pages/ProductCreatePage.jsx";
import ProductEditPage from "./pages/ProductEditPage.jsx";

const router =createBrowserRouter([
    {
        path: "/",
        element:<LayOut/>,
        errorElement:<NotFoundPage/>,
        children: [
           
            {
               index: "true",
                element: <DashBoard/>
            },
            {
                path: "/product",
                element: <ProductPage/>
            },
            {
                path: "/product/create",
                element: <ProductCreatePage/>
            },
            {
                path: "/product/edit/:id",
                element: <ProductEditPage/>
            },
            {
                path: "/sale",
                element: <SalePage/>
            },
            {
                path: "/voucher",
                element: <VoucherPage/>
            }


        ]
    }

  

])
export default router