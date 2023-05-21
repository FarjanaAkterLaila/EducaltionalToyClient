
import { Button, Card } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Catergorydetails = ({ job }) => {
  const navigate = useNavigate();
  const { _id, name, sellername, category, price, Availablequantity, image, description, rating } =
    job || {};

  return (
    <div className="col-md-4 mb-4 mx-auto">
      <Card className="h-100">
        <Card.Img variant="top" src={image} style={{height:"300px"}} alt="..." />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-muted">Seller: {sellername}</Card.Text>
          <Card.Text>Price:  {price} </Card.Text>
          <Card.Text>Rating: {rating}</Card.Text>
         
          <div className="text-center">
            <Button variant="primary" onClick={() => navigate(`/SubCdetail/${_id}`)}>
              View Details <FaArrowRight />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Catergorydetails;