import CheckOut from "../pages/CheckOut/CheckOut";
import DeleteUser from "../pages/DeleteUser/DeleteUser";
import Getuser from "../pages/GetUser/Getuser";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PostingProducts from "../pages/PostingProducts/PostingProducts";
import Signup from "../pages/SignUp/Signup";
import UpdateUser from "../pages/Updateuser/UpdateUser";
import GetProducts from "../pages/getProducts/GetProducts";
import SingleProductPage from "../pages/singleproductpage/SingleProductPage";




const routes = [

    {
        path:'/',
        element: <Home/>
    },

    {
        path:'/login',
        element: <Login />
    },

    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/getuser',
        element:<Getuser />
    },
    {
        path:'/deleteuser',
        element:<DeleteUser />
    },
    {
        path:'/updateuser',
        element:<UpdateUser />
    },
    {
        path:'/posting-products',
        element:<PostingProducts />
    },
    {
        path:'/get-products',
        element:<GetProducts />
    },
    {
        path:'/get-products/:id',
        element:<SingleProductPage />
    },
    {
        path:'/checkout',
        element:<CheckOut />
    },

]

export { routes };