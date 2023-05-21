import  { useEffect, useState } from 'react';
import './Subcategory.css'
import Catergorydetails from './Catergorydetails';
const Subcategory = () => {

    const [jobs, setJob] = useState([]);
  const [activeTab, setActiveTab] = useState("Science");

  useEffect(() => {
    fetch(`https://edu-ler-toy-server-farjanaakterlaila.vercel.app/toycat/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setJob(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
    return (
         <div>
        <h1 className="iteam fs-2 text-center mt-5 p-5">Shop by category</h1>
        <div className=" text-center">
          <div className="text-center w-100 m-auto">
            <div className="d-flex justify-content-center align-items-center">
              <div
                onClick={() => handleTabClick("Science")}
                className={`tab iteam fs-4 Science ${
                  activeTab == "Science" ? " bg-secondary text-white" : ""
                }`}
              >
                Science Toys
              </div>
              <div
                onClick={() => handleTabClick("Engineering")}
                className={`tab iteam fs-4 Engineering ${
                  activeTab == "Engineering" ? " bg-secondary text-white" : ""
                }`}
              >
                Engineering toys
              </div>
              <div
                onClick={() => handleTabClick("Language")}
                className={`tab iteam fs-4 Language ${
                  activeTab == "Language" ? " bg-secondary text-white" : ""
                }`}
              >
               Language Toys
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-1 mx-5 mt-5">
          {jobs?.map((job) => (
            <Catergorydetails 
            key={job._id}
            job={job}>

            </Catergorydetails>
          ))}
        </div>
      </div>
    );
};

export default Subcategory;