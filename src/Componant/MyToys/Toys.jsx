

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Table } from "react-bootstrap";
import ToyRow from "./ToyRow";
import Swal from 'sweetalert2'
const Toys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const url = `http://localhost:5000/post-toy?postedBy=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setToys(data))
  }, [])
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/post-toy/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Deleted Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              });
              const remaining = toys.filter(toy => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  }

  return (
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

};

export default Toys;