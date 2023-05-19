import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Header = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  const handleTouchStart = () => {
    setShowTooltip(true);
  };

  const handleTouchEnd = () => {
    setShowTooltip(false);
  };
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div className="bg-primary bg-opacity-10">
         <Container fluid>
             <Navbar collapseOnSelect expand="lg"  variant="light">
      <Container>
        <img src="https://i.ibb.co/Vt1gdvh/Clown-Squares4.png"/>
        <Navbar.Brand href="#home" className='Navname fs-1 fw-bold fw-bold text-primary'>EduLerToys</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fs-4">
            <Link className="iteam text-decoration-none text-black" to='/'>Home</Link>
            <Link  className="iteam text-decoration-none text-black px-md-3 " to='/'>All Toys</Link>
            {
            user &&
           <> <Link className="iteam text-decoration-none text-black pe-md-3" to='/myToy' >My Toys</Link>
           <Link className="iteam text-decoration-none text-black pe-md-3" to='/addtoy' >Add Toys</Link></>
           }
            <Link className="iteam text-decoration-none text-black" to='/blog' >Blog</Link>
          
           
          </Nav>
          <Nav>
           
            {user && 
       ( <div onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
          <img src={user.photoURL} alt="" style={{width
        :'50px'}} 
        className='rounded-circle mx-3 img-fluid' 
        />
         <div style={{position:'absolute', left: '75%',transform: 'translateX(-25%)',color: 'rgb(210, 83, 128)',padding: '0 10px',top:"0px",right:"10px",cursor: 'pointer'}}>
        
        <span style={{bottom: '80%',left: '100%',opacity: showTooltip ? 1 : 0,color: 'rgb(153, 98, 122)',padding: '0 15px',fontSize:'1.5rem'}}>{user.displayName}</span>
      </div>
      </div>
         )}
         
           
            { user ?
              <Button onClick={handleLogOut}  variant="secondary">Logout</Button> :

              <Link to ='/login'>
                <Button variant="btn btn-outline-info">Login</Button>
                </Link>
                 } 
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
        </div>
    );
};

export default Header;