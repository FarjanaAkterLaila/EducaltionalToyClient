import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Button, Table } from 'react-bootstrap';
import UpdateToy from '../UpdateToy/UpdateToy';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    // const [searchText, setSearchText] = useState("");
    const [modalShow, setModalShow] = React.useState(false);
    // const [control, setControl] = useState(false);
    useEffect(()=>{
fetch(`http://localhost:5000/myToys/${user?.email}`) 
.then((res) => res.json())
.then((data) => {
  console.log(data);
  setToys(data);
});
}, [user]);
    
    return (
        <div>
        <div className="my-jobs-container">
          <h1 className="iteam text-center p-4 ">ALL My Toys</h1>
          {/* <div className="search-box p-2 text-center">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              className="p-1"
            />{" "}
             <button onClick={handleSearch}>Search</button> 
          </div> */}
          <Table striped bordered hover className="container">
            <thead>
              <tr>
                <th>#</th>
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
                toys.map((toy, index)=>(
                    <tr>
                         <td>{index + 1}</td>
                <td>{toy.name}</td>
                <td>{toy.sellername}</td>
                <td>{toy.category}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Edit
                  </Button>
                  <UpdateToy
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    toy={toy}
                    // handleJobUpdate={handleJobUpdate}
                  />
                </td>
                <td>
                  {" "}
                  <button>Delete</button>
                </td>
                    </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
      </div>
    );
};

export default MyToys;