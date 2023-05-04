

  import React, { useEffect, useState } from 'react';
  import { Card, Button, ListGroup, ToastContainer, Spinner } from 'react-bootstrap';
  import { FaHeart, FaRegStar, FaRegThumbsUp, FaStar } from 'react-icons/fa';
  import { useParams } from 'react-router-dom';
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Rating from 'react-rating';
  import LazyLoad from 'react-lazy-load';
  import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

  import './Recipes.css';

   const mystyle = {
        width:"50rem" , height:"50rem", 
   
        };

  const Recipes = () => {
      const { id } = useParams();
    const [chef, setChef] = useState(null);

    const [showToaster, setShowToaster] = useState(false);

    const handleAddToFavorites = () => {
      setShowToaster(true);
      toast.success("Added to favorites!");  //set the state variable to true when the button is clicked
    };

     useEffect(() => {
       fetch(`https://b7a10-chef-recipe-hunter-server-side-tahmid200-2673.vercel.app/chefs/${id}`)
         .then(res => res.json())
         .then(data => setChef(data))
         .catch(error => console.error(error))
     }, [id]);

    if (!chef) {
      return <Spinner animation="border" variant="primary" />;
    }

    const { picture, name, bio, likes, recipes, experience } = chef;

    return (
       
      <div>
  <div className="banner my-5">
  
  {/* <div className="banner-image" ><img src={picture} alt={name} style={mystyle}/></div> */}

  
<LazyLoadImage
    alt={picture.alt}
    effect="blur"
    src={picture} 
    style={mystyle}/>
  
   
    <div className="banner-text">
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>Likes: {likes}</p>
      <p>Recipes: {recipes.length}</p>
      <p>Years of experience: {experience}</p>
    </div>
  </div>
     
         <div className="recipes mt-5">
        {recipes.slice(0, 3).map(recipe => (
          <Card key={recipe.id} className="recipe">
            <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
              <ListGroup>
                <br />
                <h5>Ingredients:</h5>
                {recipe.ingredients.slice(0, 5).map((ingredient, index) => (
                  <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
              
                ))}
              </ListGroup>
          
              <br />
                <h5>Cooking Method:</h5>
              <Card.Text>{recipe.cookingMethod}</Card.Text>
              {/* <Card.Text>Rating: {recipe.rating}</Card.Text> */}
              <Rating
                        placeholderRating={recipe.rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <Card.Text>Rating: {recipe.rating}</Card.Text>
                    <br />
              <Button className='mt-2' onClick={() => handleAddToFavorites()}><FaHeart/> Add to favorites</Button>
            
            </Card.Body>
          </Card>
        ))}
             {showToaster && <ToastContainer />}
      </div>
    
      </div>
    );
  };
  

  export default Recipes;



