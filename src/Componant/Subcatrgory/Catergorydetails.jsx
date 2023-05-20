import React from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Catergorydetails = ({job}) => {
  const navigate = useNavigate()
    const { _id, name, sellername, category, price, Availablequantity,image,description ,rating}= job || {};
    return (

<div>
<div className="col-md-10 mx-auto">
    <div className="card">
      <img src={image} className="card-img-top w-100" style={{height:"300px"}}alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: {price} years</p>
        <p className="card-text">Rating {rating}</p>
        <hr/>
        <div className='d-flex justify-content-between'>
         <div><Button onClick={()=>navigate(`/SubCdetail/${_id}`)}>View Recipes Button <FaArrowRight/></Button>
        
        </div> 
          {/* <div><p className='text-primary'><BiLike style={{fontSize:'1.5rem'}} className='mx-3 text-primary'/>{job.likes} </p></div> */}
          
        </div>
      </div>
      
    </div>
  </div>
     
   
</div>



    //     <div className="job col-md-12 col-sm-12 col-lg-6 ">
    //     <div className="row d-flex justify-content-center align-items-center single-card">
    //       <div className="col-md-4">
    //         <img
    //           className="w-100"
    //           src={image}
    //           alt=""
    //         />
    //       </div>
    //       <div className="col-md-8 card-right">
    //         <h2>{name}</h2>
    //         <p>{description}</p>
    //         <div className="all-skils d-flex  flex-wrap justify-content-around align-items-center">
    //           {/* {skills?.map((skill) => (
    //             <button className="bg-dark text-white p-1">{skill?.value}</button>
    //           ))} */}
    //         </div>
    //         <div className="card-footer text-start p-4 mt-3 d-flex justify-content-between ">
    //           <div className="div">salary: {price} BDT</div>
    //           {/* <div>Deadline: {deadline}</div>
    //         </div>
    //         <div className="d-flex justify-content-around">
    //           <p>vacancy:{vacancy}</p>
    //           <p>Category: {category}</p>
    //         </div> */}
    //         <div className="text-end">
    //           <button>
    //             View details <FaArrowRight />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   </div>
    );
};

export default Catergorydetails;