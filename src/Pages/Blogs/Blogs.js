import React from 'react';
import img from '../../../src/assets/Images/2.png'
import img1 from '../../../src/assets/Images/3.PNG'
import img2 from '../../../src/assets/Images/4.PNG'
import img3 from '../../../src/assets/Images/5.PNG'
import img4 from '../../../src/assets/Images/6.PNG'
import useTitle from '../../hook/useTitle';
const Blogs = () => {
    useTitle('Blogs');
    return (
        <div>
            <div>

                <div className='text-center mt-5 '>
                    <img className='inline' src={img} alt="" width={300} />

                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-6 mb-10'>
                {/* question 01 */}
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Album" /></figure>
                    <div className="card-body flex justify-center items-start">
                        <h2 className="card-title">What are the difference between SQL and NoSQL ?</h2>

                        <div className="card-actions justify-end">
                            {/* The button to open modal */}
<label htmlFor="my-modal1" className="btn">View Answer</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal1" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    
  <table className="table w-full">

<thead>
    <tr>
        <th></th>
        <th>SQL</th>
        <th>NoSQL</th>

    </tr>
</thead>
<tbody>

    <tr>
        <th>1</th>
        <td>Relational database <br />
            management system</td>
        <td>Non-relational or distributed <br /> database system.</td>

    </tr>

    <tr>
        <th>2</th>
        <td>Vertically Scalable</td>
        <td>Horizontally scalable</td>

    </tr>

    <tr>
        <th>3</th>
        <td>These databases are <br />
            best suited for <br /> complex queries</td>
        <td>They have dynamic schema</td>

    </tr>
</tbody>
</table>
    <div className="modal-action">
      <label htmlFor="my-modal1" className="btn">Got it</label>
    </div>
  </div>
</div>
                        </div>
                    </div>
                </div>
                {/* question 02 */}
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Album" /></figure>
                    <div className="card-body flex justify-center items-start">
                        <h2 className="card-title">What is JWT, and how does it work?</h2>

                        <div className="card-actions justify-end">
                            {/* The button to open modal */}
<label htmlFor="my-modal2" className="btn">View Answer</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal2" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    
                                    <p className="py-4">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
    <div className="modal-action">
      <label htmlFor="my-modal2" className="btn">Got it</label>
    </div>
  </div>
</div>
                        </div>
                    </div>
                </div>
                {/* question 03 */}
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Album" /></figure>
                    <div className="card-body flex justify-center items-start">
                        <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>

                        <div className="card-actions justify-end">
                            {/* The button to open modal */}
<label htmlFor="my-modal3" className="btn">View Answer</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    
  <table className="table w-full">

<thead>
    <tr>
        <th></th>
        <th>Javascript</th>
        <th>NodeJS</th>

    </tr>
</thead>
<tbody>

    <tr>
        <th>1</th>
        <td>Javascript is a <br /> programming language that <br /> is used for writing <br /> scripts on the website.</td>
        <td>NodeJS is a Javascript <br /> runtime environment.</td>

    </tr>

    <tr>
        <th>2</th>
        <td>	Javascript can only be <br /> run in the browsers.</td>
        <td>We can run Javascript outside <br /> the browser with the help of NodeJS.</td>

    </tr>

    <tr>
        <th>3</th>
        <td>Javascript is used <br /> in frontend development.</td>
        <td>Nodejs is used in <br /> server-side development.</td>

    </tr>
</tbody>
</table>
    <div className="modal-action">
      <label htmlFor="my-modal3" className="btn">Got it</label>
    </div>
  </div>
</div>
                        </div>
                    </div>
                </div>
                {/* question 04 */}
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={img4} alt="Album" /></figure>
                    <div className="card-body flex justify-center items-start">
                        <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>

                        
                        <div className="card-actions justify-end">
                            {/* The button to open modal */}
<label htmlFor="my-modal4" className="btn">View Answer</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal4" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    
                                   <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
    <div className="modal-action">
      <label htmlFor="my-modal4" className="btn">Got it</label>
    </div>
  </div>
</div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-3xl font-bold text-center my-10'>Thank you Everybody!</h1>
        </div>
    );
};

export default Blogs;



