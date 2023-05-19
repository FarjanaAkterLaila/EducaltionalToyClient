
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const UpdateToy = (props) => {
  console.log(props);
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();

    const { handleJobUpdate } = props;
    console.log(handleJobUpdate);
    return (
        
        <Modal  {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
         <form  className="container text-center" onSubmit={handleSubmit(handleJobUpdate)}>
              {errors.exampleRequired && <span>This field is required</span>}
              
              <input
                className="p-2 m-3"
               
                {...register("name")}
                placeholder="name"
                defaultValue={props?.toy?.name}
              />
                <input
            className="text-input d-none"
            {...register("_id")}
            value={props?.toy?._id}
          />

              <input
                className="p-2 m-3"
               
                {...register("sellername")}
               
                defaultValue={props?.toy?.sellername}
              />
    <input
                className="p-2 m-3"
                 value={props?.toy?.postedBy}
                {...register("postedBy")}
                placeholder="your email"
              type="email"
                  
              />
                 <select className="p-2 m-3" {...register("category")}
                 defaultValue={props?.toy?.category}
                 >
                <option value="Engineering Toy">Engineering Toy</option>
                <option value="Math Toy">Math Toy</option>
                <option value="Science Toy">Science Toy</option>
                <option value="Language Toy">Language Toy</option>
              </select>
              <input
                className="p-2 m-3"
                {...register("price", { required: true })}
                placeholder="price"
                defaultValue={props?.toy?.price}
              />
              <input
                className="p-2 m-3"
                {...register("rating", { required: true })}
                placeholder="rating"
                 //defaultValue="4.5"
                 defaultValue={props?.toy?.rating}
              />
              <input
                className="p-2 m-3"
                {...register("quantity", { required: true })}
                placeholder="Available quantity"
                type="number"
                defaultValue={props?.toy?.quantity}
              />
              <input
                className="p-2 m-3"
                {...register("description")}
                placeholder="description"
                defaultValue={props?.toy?.description}
              />
                <input className="submit-btn" value="Update Job" type="submit" />
            </form> 
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
        //   {/* <form
        //     className="container text-center"
        //     onSubmit={handleSubmit(handleJobUpdate)}
        //   >
        //     {errors.exampleRequired && <span>This field is required</span>}
        //     <input
        //       className="text-input"
        //       {...register("title")}
        //       placeholder="title"
        //       defaultValue={props?.job?.title}
        //     />
        //     <input
        //       className="text-input d-none"
        //       {...register("_id")}
        //       value={props?.job?._id}
        //     />
  
        //     <input
        //       className="text-input"
        //       {...register("salary", { required: true })}
        //       placeholder="salary"
        //       defaultValue={props?.job?.salary}
        //     />
        //     <input
        //       className="text-input"
        //       {...register("vacancy", { required: true })}
        //       placeholder="vacancy"
        //       defaultValue={props?.job?.vacancy}
        //     />
        //     <select
        //       className="text-input"
        //       {...register("category")}
        //       defaultValue={props?.job?.category}
        //     >
        //       <option value="Engineering">engineering</option>
        //       <option value="Editor">Editor</option>
        //       <option value="writer">Writer</option>
        //       <option value="Developer">Developer</option>
        //     </select>
        //     <select className="text-input" {...register("status")}>
        //       <option value="remote">Remote</option>
        //       <option value="offline">Offline</option>
        //     </select>
        //     <input
        //       className="text-input"
        //       {...register("image")}
        //       placeholder="image link"
        //       type="url"
        //       defaultValue={props?.job?.image}
        //     />
        //     <input
        //       className="text-input"
        //       {...register("deadline")}
        //       placeholder="deadline"
        //       type="date"
        //       defaultValue={props?.job?.deadline}
        //     />
        //     <input className="submit-btn" value="Update Job" type="submit" />
        //   </form> */}
    //     {/* </Modal.Body>
    //     <Modal.Footer> */}
    //       {/* <Button onClick={props.onHide}>Close</Button> */}
    //       {/* <button className="bg-danger">Update</button> */}
    //     {/* </Modal.Footer>
    //   </Modal> */}
    );
};

export default UpdateToy;