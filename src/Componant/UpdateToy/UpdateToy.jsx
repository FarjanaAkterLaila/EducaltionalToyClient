

import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {
  const toy = useLoaderData();
  const { _id, name, sellername, category, price, quantity, image, description } = toy;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    
    fetch(`http://localhost:5000/post-toy/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      });
    console.log(data);
  }
  const ima = "https://i.ibb.co/JnQbPMZ/240-F-245067800-jb3-Yyp25-WJ5-C8-Sim-LVz-Ae0-Pwgq-Oj-WOC6.jpg";
  return (


    <div>
      <div className="w-100 h-100" style={{
        backgroundImage: `url(${ima})`, backgroundRepeat: "no-repeat"
        , backgroundSize: "100% 100%"
      }}>
        <h1 className="iteam text-center pt-5 fs-1 fw-bold">Updated Toy Details</h1>

        <div className=" d-flex justify-content-center
    align-items-center p-5">
          <div className="row">
            <div className="col-md-6 mx-auto bg-secondary px-5 pt-5 bg-opacity-75 text-white">

              <form onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}
                <label>Image</label>
                <input
                  className="p-2 m-3"
                  {...register("image")}
                  placeholder="image link"
                  type="url"
                  defaultValue={image}

                />
                <label>Toy Name</label>
                <input
                  className="p-2 m-3"

                  {...register("name")}
                  placeholder="name"
                  defaultValue={name}
                />
                <label>Seller Name</label>
                <input
                  className="p-2 m-3"

                  {...register("sellername")}

                  defaultValue={sellername}
                />
                {/* <input
              className="p-2 m-3"
              
              {...register("postedBy")}
              placeholder="your email"
              type="email"
              defaultValue={postedBy}
            /> */}
                <label>Category</label>
                <select className="p-2 m-3" {...register("category")}
                  defaultValue={category}>

                  <option value="Engineering Toy">Engineering Toy</option>
                  <option value="Math Toy">Math Toy</option>
                  <option value="Science Toy">Science Toy</option>
                  <option value="Language Toy">Language Toy</option>
                </select>
                <label>Price
                  <input
                    className="p-2 m-3"
                    {...register("price", { required: true })}
                    placeholder="price"
                    defaultValue={price}
                  /></label>
                {/* <input
              className="p-2 m-3"
              {...register("rating", { required: true })}
              placeholder="rating"
              defaultValue={rating}
            /> */}
                <label>Available quantity</label>
                <input
                  className="p-2 m-3"
                  {...register("quantity", { required: true })}
                  placeholder="Available quantity"
                  type="number"
                  defaultValue={quantity}
                />
                <label>Description
                  <input
                    className="p-2 m-3"
                    {...register("description")}
                    placeholder="description"
                    defaultValue={description}
                  />
                </label>
                <input className="submit-btn m-5" value="Update Toy" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

};

export default UpdateToy;