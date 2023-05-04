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
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BlogLayout from "../layouts/BlogLayout";

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
    
    
  
    
    {
      path: 'indicator',
      element: <Main></Main>,
      children: [
        {
          path: ':id',
          element: <Chef></Chef>,
          loader: ({params}) => fetch(`https://b7a10-chef-recipe-hunter-server-side-tahmid200-2673.vercel.app/indicators/${params.id}`)
         
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
            fetch(`https://b7a10-chef-recipe-hunter-server-side-tahmid200-2673.vercel.app/chefs/${params.id}`)
        }
      ]
    },
    {
      path: 'blog',
      element: <BlogLayout></BlogLayout>,
     
    },
    {
      path:'*',
      element: <ErrorPage></ErrorPage>
    }
      
  ]);

  export default router;