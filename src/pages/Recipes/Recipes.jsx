// import React from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';

// const Recipes = () => {
//     const {id} = useParams();
//     const chefRecipes = useLoaderData();
  
//     return (
//         <div>
//              <div className="banner">
//         <img src={chefRecipes.picture} alt={chef.name} />
//         <h2>{chef.name}</h2>
//         <p>{chef.bio}</p>
//         <p>Likes: {chef.likes}</p>
//         <p>Recipes: {chef.recipes.length}</p>
//         <p>Years of experience: {chef.yearsOfExperience}</p>
//       </div>
//       <div className="recipes">
//         {chef.recipes.map(recipe => (
//           <div key={recipe.id} className="recipe">
//             <h3>{recipe.name}</h3>
//             <ul>
//               {recipe.ingredients.map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//             </ul>
//             <p>{recipe.cookingMethod}</p>
//             <p>Rating: {recipe.rating}</p>
//             <button>Add to favorites</button>
//           </div>
//         ))}
//       </div>
//         </div>
//     );
// };

// export default Recipes;


// import React from 'react';
// import {  useParams, useLoaderData } from 'react-router-dom';

// const Recipes = () => {
//     const  chef  = useLoaderData();
//     console.log(chef);
//     const { id, picture ,name , bio ,likes , recipes , yearsOfExperience } = chef || {};
//     // const { chef } = useRouteData();
    
       


  
//     return (
//         <div>
//              <div className="banner">
//         <img src={picture} alt={name} />
//         <h2>{chef.name}</h2>
//         <p>{bio}</p>
//         <p>Likes: {likes}</p>
//         <p>Recipes: {recipes.length}</p>
//         <p>Years of experience: {yearsOfExperience}</p>
//       </div>
//       <div className="recipes">
//         {chef.recipes.map(recipe => (
//           <div key={recipe.id} className="recipe">
//             <h3>{recipe.name}</h3>
//             <ul>
//               {recipe.ingredients.map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//             </ul>
//             <p>{recipe.cookingMethod}</p>
//             <p>Rating: {recipe.rating}</p>
//             <button>Add to favorites</button>
//           </div>
//         ))}
//       </div>
//         </div>
//     );
// };

// export default Recipes;


// import React from 'react';
// import { useParams, useLoaderData } from 'react-router-dom';

// const Recipes = () => {
//   const chef = useLoaderData() || {};
//   console.log(chef);
//   const { id, picture, name, bio, likes, recipes, yearsOfExperience } = chef;

//   return (
//     <div>
//       <div className="banner">
//         <img src={picture} alt={name} />
//         <h2>{name}</h2>
//         <p>{bio}</p>
//         <p>Likes: {likes}</p>
//         <p>Recipes: {recipes?.length || 0}</p>
//         <p>Years of experience: {yearsOfExperience}</p>
//       </div>
//       <div className="recipes">
//         {recipes?.map(recipe => (
//           <div key={recipe.id} className="recipe">
//             <h3>{recipe.name}</h3>
//             <ul>
//               {recipe.ingredients.map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//             </ul>
//             <p>{recipe.cookingMethod}</p>
//             <p>Rating: {recipe.rating}</p>
//             <button>Add to favorites</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Recipes;

import React, { useEffect, useState } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const mystyle = {
    width:"50rem" , height:"50rem", 
     
};

const Recipes = () => {
    const { id } = useParams();
  const [chef, setChef] = useState(null);

   useEffect(() => {
     fetch(`http://localhost:5000/chefs/${id}`)
       .then(res => res.json())
       .then(data => setChef(data))
       .catch(error => console.error(error))
   }, [id]);

  if (!chef) {
    return <div>Loading...</div>;
  }

  const { picture, name, bio, likes, recipes, yearsOfExperience } = chef;

  return (
    <div>
      <div className="banner mb-5">
        <img src={picture} alt={name} style={mystyle}/>
        <h2>{name}</h2>
        <p>{bio}</p>
        <p>Likes: {likes}</p>
        <p>Recipes: {recipes.length}</p>
        <p>Years of experience: {yearsOfExperience}</p>
      </div>
      {/* <div className="recipes">
        {recipes.slice(0, 3).map(recipe => (
          <div key={recipe.id} className="recipe">
            <h3>{recipe.name}</h3>
            <ul>
              {recipe.ingredients.slice(0, 5).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>{recipe.cookingMethod}</p>
            <p>Rating: {recipe.rating}</p>
            <button>Add to favorites</button>
          </div>
        ))}
      </div> */}
       <div className="recipes mb-5">
      {recipes.slice(0, 3).map(recipe => (
        <Card key={recipe.id} className="recipe">
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            <ListGroup>
              {recipe.ingredients.slice(0, 5).map((ingredient, index) => (
                <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
              
              ))}
            </ListGroup>
          
            <Card.Text>{recipe.cookingMethod}</Card.Text>
            <Card.Text>Rating: {recipe.rating}</Card.Text>
            <Button>Add to favorites</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </div>
  );
};
  

export default Recipes;
