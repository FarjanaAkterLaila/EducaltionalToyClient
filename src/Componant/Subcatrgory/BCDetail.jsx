import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const BCDetail = () => {
    const det = useLoaderData();
    const { _id, name, sellername, category, price, Availablequantity, image ,description,rating } = det;
    console.log(det._id);
    return (
        
    
        <div>
            <Helmet><title>EduLerToys/Category Detail</title></Helmet>
       
        <div className='row mt-5'>

            <div className='col-sm-8 mx-auto '>
                <div className='card border-1'>
               
                    <img src={image} className="card-img-top " style={{ height: "400px", width: '100%' }} alt="..." />
                  
                    <h5 className="card-title mx-3 mt-4 fs-4 fw-bold">Name:  <span className='fs-3 fw-normal'>{name}</span></h5>
                    <h5 className="card-title mx-3 mt-4 fs-4 fw-bold">Seller Name:  <span className='fs-3 fw-normal'>{sellername}</span></h5>
                    <p className='fs-4 mx-3 fw-bold'>Description:  <span className='fs-5 fw-normal'>{description}</span></p>
                    <p className='fs-4 mx-3 fw-bold'>Rating:  <span className='fs-5 fw-normal'>{rating}</span></p>
                    <p className='fs-4 mx-3 fw-bold'>Category:  <span className='fs-5 fw-normal'>{category}</span></p>
                    <p className='fs-4 mx-3 fw-bold'> Price:  <span className='fs-5 fw-normal'>{price}</span></p>
                   </div>
                </div>


            </div>

          
        </div>
       
    
    );
};

export default BCDetail;