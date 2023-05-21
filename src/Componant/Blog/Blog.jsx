
import { Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Blog = () => {
 
  return (
    <div className='iteam'>
      <Helmet><title>EduLerToys/Blog Page</title></Helmet>
      <div className='d-flex justify-content-around bg-light text-center p-5'>
        <h1>Blog page</h1>
       
      </div>

      
      <div className='border border-info bg-primary bg-opacity-10 p-4 mx-5'>
        <h2>1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
        <h5>Answer:
          Access Token:A user's authorisation to access particular resources or carry out operations on a server is demonstrated by an access token, which serves as a credential. It can only be received after successful authentication and has a short lifespan. Each time a request to access protected resources is made to the server, the access token is included.
          <br></br>Refresh Token:
          Along with the access token, a refresh token is also obtained; it is a persistent credential. When the current access token expires, it is used to get a new one. A new access token is obtained by exchanging refresh tokens, which have a longer lifespan, with the authentication server.
          <br></br>Storage on the client-side:
         Access tokens can be kept in browser storage features like local storage or session storage, HTTP-only cookies, or memory variables.
         It's crucial to store access tokens safely to avoid illegal access.
         The application's security requirements will choose the storage technique to use.


          <br></br>
        </h5>
      </div>
      <div className='border border-info bg-primary bg-opacity-10 mt-4 p-4 mx-5'>
        <h2>2.Compare SQL and NoSQL databases?
        </h2>
        <h5>Answer:<br></br>
        <Table striped bordered hover className='mt-4 border-primary'>
            <thead>
              <tr>

                <th>SQL</th>
                <th>NoSQL</th>

              </tr>
            </thead>
            <tbody>
              <tr>

                <td>Stands for Structured Query Language.</td>
                <td>Stands for Not Only SQL.</td>

              </tr>
              <tr>

                <td>Data is stored in tables with columns and rows.</td>
                <td>Data is stored in collections or documents.</td>

              </tr>
              <tr>
                <td>Supports JOIN and complex queries.</td>

                <td>Does not support JOIN and complex queries.</td>
              </tr>
            </tbody>
          </Table>
        </h5>
      </div>

      <div className='border border-info bg-primary bg-opacity-10 mt-4 p-4 mx-5'>
        <h2>3.What is express js? What is Nest JS?</h2>
        <h5>Answer:<br></br>
        Express.js:  Express.js is a minimal Node.js web application framework that makes it easier to create online applications and APIs. It offers a flexible and simple approach, and is well-liked for both its efficiency and performance.
        <br></br>
        Nest.js: A progressive Node.js framework called Nest.js is based on Express.js. A strong infrastructure for creating scalable and maintainable server-side apps is provided by it, which makes use of TypeScript and concepts from Angular. The developer productivity and code structure are improved by the incorporation of features like dependency injection, modules, and validation.
        </h5>
      </div>
      <div className='border border-info bg-primary bg-opacity-10 mt-4 p-4 mx-5'>
        <h2>4.What is MongoDB aggregate and how does it work ?</h2>
        <h5>Answer:<br></br>
        The framework known as MongoDB's aggregate enables you to carry out sophisticated data aggregation operations on collections of documents. It offers a strong set of stages and operators for processing and transforming data.
        <br></br>The aggregate feature of MongoDB processes and transforms data in collections of documents via a pipeline of steps. Each stage in the pipeline applies a particular operation to the documents before sending the updated information to the following level. Filtering, grouping, sorting, projecting, and other procedures are examples of phases. The aggregate in MongoDB also offers a broad selection of operators for performing computations, transformations, and data manipulations. The aggregate operation creates the ultimate result depending on the actions carried out at the pipeline's end. </h5>

      </div>
    </div>
       
    );
};

export default Blog;