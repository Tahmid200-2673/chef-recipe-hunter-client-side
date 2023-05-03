import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Chef from "../pages/Home/Chef/Chef";
import RecipeLayout from "../layouts/RecipeLayout";
import Recipes from "../pages/Recipes/Recipes";
import Blog from "../pages/Home/Blog/Blog";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  
      {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [

          {
            path: '/',
           element: <Main></Main>
          },

        
          {
        
              path: 'login',
             element: <Login></Login>
        
         
          },
         {
        
           path: 'register',
            element: <Register></Register>
      
       
        },
        
        
       ]
     },
    
    
  
    //  {
    //    path: "/",
    //    element: <Main></Main>,
    //    children: [
    //     {
    //       path: "/",
    //        element: <Home></Home>,
         
    //      },
        
        
        
    //   ]
    //  },
    {
      path: 'indicator',
      element: <Main></Main>,
      children: [
        {
          path: ':id',
          element: <Chef></Chef>,
          loader: ({params}) => fetch(`http://localhost:5000/indicators/${params.id}`)
         
        },
        
        
      ]
      
    },
    {
      path: 'chefs',
      element: <RecipeLayout></RecipeLayout>,
      children: [
        {
          path: ':id',
          element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/chefs/${params.id}`)
        }
      ]
    },
    {
      path: 'blog',
      element: <Blog></Blog>,
     
    },
      
  ]);

  export default router;