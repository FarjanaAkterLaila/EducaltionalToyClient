// import { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import { Table } from 'react-bootstrap';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Table } from "react-bootstrap";
import ToyRow from "./ToyRow";

// import ToyRow from './ToyRow';

const Toys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const url =`http://localhost:5000/post-toy?postedBy=${user?.email}`;
  useEffect(()=>{
fetch(url)
.then(res=>res.json())
.then(data => setToys(data))
  },[])
  // const [toys, setToys] = useState([]);
  const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/post-toy/${id}`, {
                           method: 'DELETE'
                      })
                 .then(res => res.json())
                 .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                      alert('deleted successful');
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining);
                    }
                 })
         }
     }

return(
  <div>
    <div className="my-jobs-container">
        <h1 className="iteam text-center p-4 ">ALL My Toys</h1>
        <Table striped bordered hover className="container">
          <thead>
            <tr>
              <th>Img</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
           <tbody>
            {
              toys.map(toy => <ToyRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
               // handleBookingConfirm={handleBookingConfirm}
               ></ToyRow>
                )
            }
          </tbody> 
        </Table>
      </div> 
  </div>
)











  // const [searchText, setSearchText] = useState("");
 // const [modalShow, setModalShow] = React.useState(false);
  // const [control, setControl] = useState(false);
//   useEffect(() => {
//     fetch(`http://localhost:5000/myToys/${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setToys(data);
//       });
//   }, [user]);
//   const handleDelete = id => {
//     const proceed = confirm('Are You sure you want to delete');
//     if (proceed) {
//         fetch(`http://localhost:5000/myToys/${id}`, {
//             method: 'DELETE'
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.deletedCount > 0) {
//                     alert('deleted successful');
//                     const remaining = toys.filter(toy => toy._id !== id);
//                     setToys(remaining);
//                 }
//             })
//     }
// }
  // return (
  //   <div>
     
  //   </div>
  // );
};

export default Toys;