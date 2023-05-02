import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Home = () => {
    const dynamic = useParams();
 
    
    const chefs = useLoaderData();
    console.log(chefs)
    return (
        <div>
           
          <h2></h2>
            
               
              
           
        </div>
    );
};

export default Home;