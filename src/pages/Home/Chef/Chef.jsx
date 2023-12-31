// import React, { useEffect, useState } from 'react';

// const Chef = () => {
//  const [chefs,setChefs] = useState([]);

//  useEffect(()=>{
//     fetch('https://b7a10-chef-recipe-hunter-server-side-tahmid200-2673.vercel.app/chefs')
//     .then(res => res.json())
//     .then(data => setChefs(data))
//     .catch(error => console.error(error))

//  },[])

//     return (
//         <div className='mt-5'>
//         {
//             chefs && chefs.map(chef => <p key={chef.id}>
//                 {chef.name}
//             </p>)
//         }  
//         </div>
//     );
// };
// export default Chef;

import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import './Chef.css'
import { Link, useLoaderData, useParams } from 'react-router-dom';

const mystyle = {
    height:"10rem"
    
     
};





const Chef = () => {
    const {id} = useParams();

  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch('https://b7a10-chef-recipe-hunter-server-side-tahmid200-2673.vercel.app/chefs')
      .then(res => res.json())
      .then(data => setChefs(data))
      .catch(error => console.error(error))
  }, []);

  return (
   <div className="mt-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {chefs.map((chef) => (
          <Col key={chef.id}>
             <Card style={{height:"27rem"}}>
              <Card.Img variant="top" src={chef.picture} className="cardImg" style={mystyle}/>
              <Card.Body>
                <Card.Title>{chef.name}</Card.Title>
                <Card.Text>Years of experience: {chef.experience}</Card.Text>
                <Card.Text>Number of recipes: {chef.recipes.length}</Card.Text>
                <Card.Text><FaRegThumbsUp/>  Likes: {chef.likes}</Card.Text>
                <Link to={`/chefs/${chef.id}`}>
                <Button variant="primary">View Recipes</Button>
                </Link>
              </Card.Body>
            </Card> 
          
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Chef;