import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ARow = ({toy}) => {
    const { _id, name, sellername, category, price, quantity, image } = toy;
    return (
        <tr>
      <td>
        <img style={{
          width
            : '50px', height: '50px'
        }}
          className='rounded mx-auto d-block img-fluid' src={image}></img></td>
      <td>{name}</td>
      <td>{sellername}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
         <Link to={`/detalies/${_id}`}> 
        <Button variant="primary">
          View Details
        </Button>
         </Link> 
      </td>
      
    </tr>
    );
};

export default ARow;