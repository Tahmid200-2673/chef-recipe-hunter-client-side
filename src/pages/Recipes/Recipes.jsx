

  import React, { useEffect, useState } from 'react';
  import { Card, Button, ListGroup,  Spinner } from 'react-bootstrap';
  import { FaHeart, FaRegStar,  FaStar } from 'react-icons/fa';
  import { useParams } from 'react-router-dom';
  
  
  import Rating from 'react-rating';
  import LazyLoad from 'react-lazy-load';
  import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  import './Recipes.css';

   const mystyle = {
        width:"50rem" , height:"50rem", 
   
        };

  const Recipes = () => {
      const { id } = useParams();
    const [chef, setChef] = useState(null);

   
    const notify = () => toast("Added to Favorites");

    const handleClick = event => {
      event.currentTarget.disabled = true;
      console.log('button clicked');
      notify();
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
  
  

  
<LazyLoadImage
    alt={picture.alt}
    effect="blur"
    src={picture} 
    style={mystyle}/>
  
   
    <div className="banner-text">
      <h2>{name}</h2>
      <p><b>Description:</b> {bio}</p>
      <p><b>Likes:</b> {likes}</p>
      <p><b>Recipes:</b> {recipes.length}</p>
      <p><b>Years of experience:</b> {experience}</p>
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
              {/* <Button className='mt-2' onClick={notify} ><FaHeart/> Add to favorites</Button> */}
               <Button className='mt-2' onClick={handleClick} ><FaHeart/> Add to favorites</Button>

              <ToastContainer />
            
            </Card.Body>
          </Card>
        ))}
           
      </div>
    
      </div>
    );
  };
  

  export default Recipes;



