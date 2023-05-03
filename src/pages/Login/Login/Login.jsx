import React, { useContext, useState } from 'react';
import { Button, Container,Form } from 'react-bootstrap';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import { FaGithub, FaGoogle } from 'react-icons/fa';



const Login = () => {
   
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');



    const { signIn, signInWithGoogle , signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    
    const from = location.state?.from?.pathname || '/'


    const handleLogin = event => {
      
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess(' Successfully SignIn');
                navigate(from, { replace: true })
              
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

       
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    } 
    const handleGithubSignIn = () => {
        signInWithGithub()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    } 


    return (
        <Container className='w-25 mx-auto'>
        <h3>Please Login</h3>
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>

            
            <Button variant="primary" type="submit">
                Login
            </Button>
            <br />
            <Form.Text className="text-secondary">
                Don't Have an Account? <Link to="/register">Register</Link>
            </Form.Text>
            <br /><br />
            <Form.Text className="text-success mx-5 my-5">
            <button onClick={handleGoogleSignIn} className="btn btn-dark" style={{width:"20rem"}}><FaGoogle /> Google</button>
            </Form.Text>
            <br /><br />
            <Form.Text className="text-danger mx-5 mt-5">
            <button onClick={handleGithubSignIn} className="btn btn-dark" style={{width:"20rem"}}><FaGithub /> Github</button>
            </Form.Text>
        </Form>
        <p className='text-danger'>{error}</p>
           <p className='text-success'>{success}</p>
    </Container>
    );
};

export default Login;