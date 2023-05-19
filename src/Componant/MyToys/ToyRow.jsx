
import { Button } from 'react-bootstrap';
import { AiOutlineDelete } from "react-icons/ai";
const ToyRow = ({toy , handleDelete}) => {
  console.log(toy._id)
    const {_id, name, sellername, category, price, quantity, image} = toy;
    return (
        <tr>
          <td>
            <img style={{width
        :'50px',height:'50px'}} 
        className='rounded mx-auto d-block img-fluid' src={image}></img></td>  
<td>{name}</td>
<td>{sellername}</td>
<td>{category}</td>
<td>{price}</td>
<td>{quantity}</td>
<td>
 <Button variant="primary">
   Edit
 </Button>
 
  </td>
<td>
 
 <div className='text-center'><button onClick={() => handleDelete(_id)} className='rounded-circle border border-0'><AiOutlineDelete  style={{fontSize:'2rem',color:"D21312"}}/></button></div>
 {/* <button onClick={() => handleDelete(_id)}>Delete</button> */}
</td>
   </tr>
    );
};

export default ToyRow;