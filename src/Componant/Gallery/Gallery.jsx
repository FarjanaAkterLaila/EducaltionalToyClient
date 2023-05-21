import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Gallery.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
const Gallery = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
      const offers = [
        {

          id: 1,
          title: 'Wooden Math Learning Board 1-100',
          offerImage:"https://i.ibb.co/ts51DSW/math-toys-for-preschoolers-1.jpg",
          description: '20% Offer',
         
        },
        {
          id: 2,
          title: 'PicassoTiles Magnet Building Tiles',
          offerImage:"https://i.ibb.co/HHgKtqj/1637170210-picassotiles-1637170202.jpg",
          description: '30% Offer',
          
        },
        {
          id: 3,
          title: 'Primary Science Deluxe Lab Set',
          offerImage:"https://i.ibb.co/hLFSW9f/primary-science-deluxe-1.jpg",
          description: '10% Offer',
          
        },
      ];
    return (
        <div>
            <h2 className="text-center pt-5">Toys Gallery</h2>
            <br /><br />
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-sm-6 col-xs-12 " data-aos="fade-up"
            data-aos-delay="200">
                        <div className="hovereffects">
                            <img src="https://i.ibb.co/Qk1CDB7/pexels-mikhail-nilov-8923952.jpg" height="300px" width="100%" alt="images" />
                            <div className="overlay">
                                <h2 className='text-center'>Toys Store</h2>

                            </div>
                        </div>

                    </div>


                    <div className="col-md-4 col-sm-6 col-xs-12" 
                    data-aos="fade-up"
            data-aos-delay="400">
                        <div className="hovereffects">
                            <img src="https://i.ibb.co/Z8RhztP/pexels-pavel-danilyuk-8763137.jpg" height="300px" width="100%" alt="images" />
                            <div className="overlay">
                                <h2>Wooden Montessori Math Toy</h2>

                            </div>
                        </div>

                    </div>




                    <div className="col-md-4 col-sm-6 col-xs-12"data-aos="fade-up"
            data-aos-delay="600">
                        <div className="hovereffects">
                            <img src="https://i.ibb.co/GMXPcPF/Montessori-Games-Baby-Wooden-Toys-3-D-Wooden-Puzzles-For-Babies-Kids-Learning-Toys-Educational-Toys.jpg" height="300px" width="100%" alt="images" />
                            <div className="overlay">
                                <h2>Montessori</h2>

                            </div>
                        </div>

                    </div>



                    <div className="col-md-4 col-sm-6 col-xs-12" data-aos="fade-up"
            data-aos-delay="200">
                        <div className="hovereffects">
                            <img src="https://i.ibb.co/hK43VpJ/istockphoto-669922316-1024x1024.jpg" height="300px" width="100%" alt="images" />
                            <div className="overlay">
                                <h2>Math toy</h2>

                            </div>
                        </div>

                    </div>



                    <div className="col-md-4 col-sm-6 col-xs-12" data-aos="fade-up"
            data-aos-delay="400">
                        <div className="hovereffects">
                            <img src="https://i.ibb.co/JnQbPMZ/240-F-245067800-jb3-Yyp25-WJ5-C8-Sim-LVz-Ae0-Pwgq-Oj-WOC6.jpg" height="300px" width="100%" alt="images" />
                            <div className="overlay">
                                <h2>Language toy</h2>

                            </div>
                        </div>

                    </div>



                    <div className="col-md-4 col-sm-6 col-xs-12" data-aos="fade-up"
            data-aos-delay="600">
                        <div className="hovereffects">
                            <img src="https://i.ibb.co/x5k1942/240-F-585935744-Gum4-U3-Pco-GALN9n-JQ8-TYDz-VXg-M4-GOA3t.jpg" height="300px" width="100%" alt="images" />
                            <div className="overlay">
                                <h2>Engineering toy</h2>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* extra section offer */}
            <Container>
            <h1 className=" iteam text-center mb-5 mt-5" data-aos="fade-up">
        Special Offers
      </h1>
      <Row>
        {offers.map((offer) => (
          <Col key={offer.id} md={4} data-aos="fade-up" data-aos-delay="200">
            <Card className="mb-4">
              <Card.Img variant="top" src={offer.offerImage} height="300px" width="100%" />
              <Card.Body className='text-center'>
                <Card.Title >{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
               
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    {/* product review */}
      <h1 className='pt-5 text-center text-warning'>Product Review</h1>
                    
      <div className="row row-cols-1 row-cols-md-2 g-4 mx-5 text center">
  <div className="col">
    <div className="card border-0 text-center h-100">
      <img
        src="https://i.ibb.co/ZH9Qpv4/math-toys-for-preschoolers-3.jpg"
        className="w-50 h-50 mx-auto mt-3 card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">
        "The Wooden Pattern Blocks and Boards have been a wonderful addition to our playtime activities. My children absolutely love the vibrant colors and different shapes of the wooden blocks. It has sparked their creativity and problem-solving skills as they try to recreate the patterns on the boards. The quality of the blocks is excellent, and they have held up well to hours of play. This toy has provided endless entertainment and educational value for my kids. Highly recommended!"
        </p>
      <div className='d-flex  justify-content-center align-items-center'>  <img
        src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?w=2000"
        className=" rounded-circle ms-2 mt-3 " style={{width:"50px"}}
        alt="..."
      />
       <div className='ms-2 mt-4'> <h5 className="text-primary">Nazmin</h5>
        <p>39/85, Dhaka</p></div></div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card border-0 text-center h-100">
    <img
        src="https://i.ibb.co/98SV3q6/math-toys-for-preschoolers-5.jpg"
        className="w-50 h-50 mx-auto mt-3 card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">
        " The Counting Bears set has been a fantastic learning tool for my preschooler. The colorful bears have made counting and sorting activities so much fun for them. The set comes with different sizes and colors, which adds to the engaging experience. I appreciate that it also includes activity cards with various math concepts to enhance learning. The bears are durable and easy to handle, making them perfect for little hands. I highly recommend the Counting Bears for early math exploration!"
        </p>
      <div className='d-flex  justify-content-center align-items-center'>  <img
        src="https://i.ibb.co/9bhfVCT/360-F-364211147-1qg-LVxv1-Tcq0-Ohz3-Faw-Ufrt-ONzz8nq3e.jpg"
        className=" rounded-circle ms-2 mt-3 " style={{width:"80px"}}
        alt="..."
      />
       <div className='ms-2 mt-4'> <h5 className="text-primary">Ali</h5>
        <p>39/85, Chittagong</p></div></div>
     
      </div>
    </div>
  </div>
  
    </div>
  </div>

    );
};

export default Gallery;