// import React, { useEffect, useState } from 'react';

// const Chef = () => {
//  const [chefs,setChefs] = useState([]);

//  useEffect(()=>{
//     fetch('http://localhost:5000/chefs')
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

const mystyle = {
    width:"12rem" , height:"10rem", left:"25rem"
     
};



const Chef = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/chefs')
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
              <Card.Img variant="top" src={chef.picture} style={mystyle}/>
              <Card.Body>
                <Card.Title>{chef.name}</Card.Title>
                <Card.Text>Years of experience: {chef.experience}</Card.Text>
                <Card.Text>Number of recipes: {chef.recipes.length}</Card.Text>
                <Card.Text><FaRegThumbsUp/>  Likes: {chef.likes}</Card.Text>
                <Button variant="primary">View Recipes</Button>
              </Card.Body>
            </Card> 
          
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Chef;