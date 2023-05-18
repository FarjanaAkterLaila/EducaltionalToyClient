import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    // const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('Registration page location', location)
    const from =  location.state?.from?.state?.from?.pathname || '/'
    console.log(from);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                event.target.reset();
                setSuccess('User has been created successfully');
                navigate(from, { replace: true })
                 updateUserData(result.user,name,photo)
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })

    }
    const updateUserData = (user,name,photo) => {
        updateProfile(user,{
            displayName: name,
            photoURL:photo
        })
        .then(()=>{
            console.log('user name and photo updated')
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
        <Container className='w-25 mx-auto mt-5 border p-5'>
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Photo URL" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                   
                    type="checkbox"
                    name="accept"
                    label= "Accept Terms and Conditions"  />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <br />
            <Form.Text className="text-secondary">
                Already Have an Account? <Link to="/login">Login</Link>
            </Form.Text>
            <br/>
            <Form.Text className="text-success">
            {success}
            </Form.Text>
            <Form.Text className="text-danger">
            {error}
            </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;