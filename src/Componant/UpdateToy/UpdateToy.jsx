import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';


const UpdateToy = (props) => {
    const { handleJobUpdate } = props;
    return (
        
        <Modal  {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
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