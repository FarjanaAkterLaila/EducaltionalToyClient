import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ARow from "./ARow";

import { BsSearch } from "react-icons/bs";
const ToysAll = () => {
    const [services, setServices] = useState([]);
    
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetch('https://edu-ler-toy-server-farjanaakterlaila.vercel.app/alltoy')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const handleSearch = () => {
      fetch(`http://localhost:5000/search/${searchText}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setServices(data);
        });
    };
  
    return (
        <div>
 <div className="my-jobs-container">
        <h1 className="iteam text-center p-4 ">ALL My Toys</h1>
        <div className="input-group d-flex justify-content-center">
        <div className="form-outline  p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="form-control"
           
          />{" "}
          </div><div>
          <button onClick={handleSearch} className="btn btn-primary my-2"> <BsSearch style={{fontSize:"1.3rem"}}/></button>
        </div>
        </div>
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