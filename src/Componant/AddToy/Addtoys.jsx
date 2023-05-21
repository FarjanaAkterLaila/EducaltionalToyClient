import { useForm } from "react-hook-form";
import './Addtoy.css'
import { useContext } from "react";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";
const Addtoys = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
 
    fetch("https://edu-ler-toy-server-farjanaakterlaila.vercel.app/post-toy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      });
    console.log(data);
  }
  return (
    <div className=" d-flex justify-content-center
        align-items-center p-5">
          <Helmet><title>EduLerToys/Add Toys</title></Helmet>
      <div className="row">
        <div className="col-md-4">
          <img
            className="w-100"
            src="https://i.ibb.co/YhZ8ncX/toys-are-tools-logo-thumnail.jpg"
            alt=""
          />
        </div>
        <div className="col-md-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="p-2 m-3"
              {...register("image")}
              placeholder="image link"
              type="url"

            />
            <input
              className="p-2 m-3"

              {...register("name")}
              placeholder="name"

            />
            <input
              className="p-2 m-3"

              {...register("sellername")}

              defaultValue={user?.displayName}
            />
            <input
              className="p-2 m-3"
              value={user?.email}
              {...register("postedBy")}
              placeholder="your email"
              type="email"

            />
            <select className="p-2 m-3" {...register("category")}>
              <option value="Engineering">Engineering Toy</option>
              <option value="Math">Math Toy</option>
              <option value="Science">Science Toy</option>
              <option value="Language">Language Toy</option>
            </select>
            <input
              className="p-2 m-3"
              {...register("price", { required: true })}
              placeholder="price"
                  type="number"
            />
            <input
              className="p-2 m-3"
              {...register("rating", { required: true })}
              placeholder="rating"
              type="number"
            //defaultValue="4.5"
            />
            <input
              className="p-2 m-3"
              {...register("quantity", { required: true })}
              placeholder="Available quantity"
              type="number"
            />
            <input
              className="p-2 m-3"
              {...register("description")}
              placeholder="description"
            />
            <input className="submit-btn" value="Added Toy" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addtoys;