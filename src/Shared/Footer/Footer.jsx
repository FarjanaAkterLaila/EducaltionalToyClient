import { FaFacebook ,FaInstagramSquare ,FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="mt-5 bg-secondary bg-opacity-10">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-3">
                {/* <div className='rounded mx-auto d-block'> */}
                <img src="https://i.ibb.co/Vt1gdvh/Clown-Squares4.png"/>
                {/* </div> */}
                    <h1 className="Navname fw-bold text-primary display-6">EduLerToys</h1>
                    <p className="text-primary bg-opacity-10">39/8, Bandor ,Chattogram</p>
                    <p className="text-primary bg-opacity-10">Phone: +045879638 14</p>
                    <p className="text-primary bg-opacity-10">Email:EduLerToys@gmail.com</p>
                </div>
                <div className="col-md-1 ">
                    <h6 className='text-primary bg-opacity-25'>Explore</h6>
                    <p><a className="text-decoration-none text-primary bg-opacity-10" href="">Home</a></p>
                    <p><a className="text-decoration-none text-primary bg-opacity-10" href="">about</a></p>
                    <p><a className="text-decoration-none text-primary bg-opacity-10" href="">Contact us</a></p>
                    <p><a className="text-decoration-none text-primary bg-opacity-10" href="">Login</a></p>
                </div>
                <div className="col-md-1 ">
                    <h6 className='text-primary bg-opacity-25'>Legal Tream</h6>
                    <p><a className="text-decoration-none text-primary bg-opacity-10" href="">Trems</a></p>
                    <p><a className="text-decoration-none text-primary bg-opacity-10" href="">Privacy</a></p>
                    
                </div>
                <div className="col-md-2 ">
                    <h6  className='text-primary bg-opacity-25'>Follow us</h6>
                   <FaFacebook className='text-primary '/>
             <FaInstagramSquare className='text-primary mx-4' />
             <FaWhatsapp className='text-primary'/>
                </div>
                <div className="col-md-4 text-primary bg-opacity-10">
                    <h6  className='text-primary bg-opacity-25'>Subscribe</h6>
                   
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn btn-outline-secondary mx-4" type="button" id="button-addon2">Subscribe</button>
                      </div>
                </div>
            </div>
        </div>
        <div className="text-center text-primary bg-opacity-10 py-3">
            <p>&copy; Copyright EduLerToys. All Rights Reserved</p>
        </div>
    </footer>
    );
};

export default Footer;