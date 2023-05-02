import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {  FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Left = () => {
    return (
        <div>
         {/* Social Media section */}
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup >
                    <ListGroup.Item variant="primary"> <FaFacebook></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item variant="primary"> <FaTwitter></FaTwitter> twitter </ListGroup.Item>
                    <ListGroup.Item variant="primary"><FaInstagram></FaInstagram> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            {/* <QZone></QZone> */}
            <div>
                {/* <img src={bg} alt="" /> */}
            </div>
       
           
        </div>
    );
};

export default Left;