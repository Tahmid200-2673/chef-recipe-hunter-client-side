import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Chef from "../pages/Home/Chef/Chef";
import RecipeLayout from "../layouts/RecipeLayout";
import Recipes from "../pages/Recipes/Recipes";
import Blog from "../pages/Home/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
         
        },
        
        
        
      ]
    },
    {
      path: "indicator/:id",
      element: <Main></Main>,
      children: [
        {
          path: ":id",
          element: <Chef></Chef>,
          loader: ({params}) => fetch(`http://localhost:5000/indicators/${params.id}`)
         
        },
        
        
      ]
      
    },
    {
      path: "chefs",
      element: <RecipeLayout></RecipeLayout>,
      children: [
        {
          path: ":id",
          element: <Recipes></Recipes>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/chefs/${params.id}`)
        }
      ]
    },
    {
      path: "blog",
      element: <Blog></Blog>,
     
    },
      
  ]);

  export default router;