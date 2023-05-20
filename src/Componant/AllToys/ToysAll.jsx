import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ARow from "./ARow";


const ToysAll = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/alltoy')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
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
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View details</th>
              
            </tr>
          </thead>
          <tbody>
            {
             services.map(toy => <ARow
                key={toy._id}
                toy={toy}
               // handleDelete={handleDelete}
              // handleBookingConfirm={handleBookingConfirm}
              ></ARow>
              )
            }
          </tbody>
        </Table>
      </div>


        </div>
    );
};

export default ToysAll;