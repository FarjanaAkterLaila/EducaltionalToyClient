import { useForm } from "react-hook-form";
import './Addtoy.css'
const Addtoys = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch("http://localhost:5000/post-toy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);}
    return (
        <div className=" d-flex justify-content-center
        align-items-center p-5" style={{height:"100vh"}}>
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
                // defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <input
                className="p-2 m-3"
                {...register("name")}
                placeholder="name"
                // defaultValue="Web developer"
              />
              <input
                className="p-2 m-3"
                {...register("seller name")}
                placeholder="seller name"
                // defaultValue="Web developer"
              />
    <input
                className="p-2 m-3"
                // value={user?.email}
                {...register("seller email")}
                placeholder="your email"
                type="email"
              />
                 <select className="p-2 m-3" {...register("category")}>
                <option value="Engineering Toy">Engineering Toy</option>
                <option value="Math Toy">Math Toy</option>
                <option value="Science Toy">Science Toy</option>
                <option value="Language Toy">Language Toy</option>
              </select>
              <input
                className="p-2 m-3"
                {...register("price", { required: true })}
                placeholder="price"
                // defaultValue="300tk"
              />
              <input
                className="p-2 m-3"
                {...register("rating", { required: true })}
                placeholder="rating"
                // defaultValue="4.5"
              />
              <input
                className="p-2 m-3"
                {...register("Available quantity", { required: true })}
                placeholder="Available quantity"
                type="number"
              />
           
              {/* <select className="p-2 m-3" {...register("status")}>
                <option value="remote">Remote</option>
                <option value="offline">Offline</option>
              </select> */}
            
              {/* <input
                className="p-2 m-3"
                {...register("deadline")}
                placeholder="deadline"
                type="date"
              /> */}
            
              
              <input
                className="p-2 m-3"
                {...register("description")}
                placeholder="description"
              />
              <input className="submit-btn" value="Added Toy" type="submit" />
            </form>
          </div>
          {/* <div className="col-md-4">
            <img
              className="w-100"
              src="https://i.ibb.co/rthZ75K/pngtree-job-vacancy-with-join-our-team-recruitment-vector-design-png-image-6419066-removebg-preview.png"
              alt=""
            />
          </div> */}
        </div>
      </div>
    );
};

export default Addtoys;