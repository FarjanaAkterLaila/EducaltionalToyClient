 import { getAuth } from "firebase/auth";
import { Button,Form } from "react-bootstrap";
 import {  Link, useLocation, useNavigate } from "react-router-dom";
import app from "../../Firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import {  FaGoogle } from 'react-icons/fa';


const Login = () => {
    const auth = getAuth(app);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'
    const [error, setError] = useState('');
    // const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email, password);
        // setError('');
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError('Email or password not found')
            })
    }
    return (
    
    <section className="mh-100  border m-5">
    <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <h3 className="text-center fs-1"> Login</h3>
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
                Don't Have an Account? <Link to='/reg' state={{from: location}} replace>Register</Link>
            </Form.Text>
            <br/>
            <Form.Text className="text-success">

            </Form.Text>
            
        </Form>
        <div className='text-center mt-4'><p >------------------------or----------------------</p>
        <Button  className='mb-2' variant="outline-primary">  Login with Google</Button>
        </div>
        </div>
           
           
            <div className="col-md-8 col-lg-7 col-xl-6">
             <img src="https://i.ibb.co/8rtmGGD/educational-toys-1-jpg.webp"
               className="img-fluid" alt="Phone image"/>
            </div>
       
         </div>
         </div>
  
    </section>
    );
};

export default Login;