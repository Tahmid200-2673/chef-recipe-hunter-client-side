import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Left from '../pages/Shared/Left/Left';
import Right from '../pages/Shared/Right/Right';
import Banner from '../pages/Shared/Banner/Banner';
import Chef from '../pages/Home/Chef/Chef';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import Recipes from '../pages/Recipes/Recipes';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const RecipeLayout = () => {
    return (
        <div>
          <NavigationBar></NavigationBar>
          
           <Container>
                <Row>
                    
                    <Col lg={12}>
                     <Recipes></Recipes>
                     
                    </Col>
                    
                </Row>
            </Container>
           <Footer></Footer>  
        </div>
    );
};

export default RecipeLayout;