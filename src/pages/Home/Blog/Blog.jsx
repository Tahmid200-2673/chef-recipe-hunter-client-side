import React, { useContext } from 'react';
import Pdf from "react-to-pdf";


const ref = React.createRef();



const Blog = () => {
    return (
   <div className='mt-5 container' style={{pageBreakInside: 'avoid'}}>
    <Pdf 
    targetRef={ref} 
    filename="blog.pdf"
   
    >
        {({ toPdf }) => 
        <button onClick={toPdf} >Generate Pdf</button>
        }
      </Pdf>


           <div ref={ref}> <div className="card bg-primary mt-5">
       <div className="card-body">
         <p>  <h5>1. Tell us the differences between uncontrolled and controlled components?</h5>
           <b>Uncontrolled components: <br /></b>
          Uncontrolled components state is managed by the browser, contrary <br /> to the application.
            They rely on browser to manage internal state, like form input elements <br /> text inputs and checkboxes.
            <br /> 
             <b>Controlled components: <br /></b>
         Controlled components state is managed by the application.
             The application sets and manages   the state of <br />component, then component displays that state.

             <br /> So these are the differences between uncontrolled and controlled components.</p>
          
        </div>
    </div>
    <div className="card bg-primary">
       <div className="card-body">
        <p>   <h5>2. How to validate React props using PropTypes?</h5>
          By using PropTypes to validate react props, I can catch errors and <br /> issues in the development 
            process and verify that my components are receiving correct props .<br />
            Here's how I can validate React props using PropTypes: <br />
           i. Import PropTypes library into component file <br />
           ii. Define propTypes object for component that contains expected prop types.<br />
           iii. Check the console , React will log a warning message to the console <br />
           iv.  Using the 'isRequired' method <br />
           So this is how I can validate React props using PropTypes.</p>
          
           
          
      </div>
    </div>
    
    <div className="card bg-primary">
       <div className="card-body">
        <p>   <h5>3. Tell us the difference between nodejs and express js?</h5>
          Node.js and Express.js are  popular technologies in the JavaScript for server-side applications. <br />
            Here are the differences between Node.js and Express.js: <br />
            <b>Node.js: <br /></b>
            i. Node.js is a runtime environment that runs JavaScript code outside <br />  of  browser, as an instance on a server. <br />
 ii. Node.js provides built-in modules and libraries that builds server-side <br /> applications, such as file system, networking, and HTTP handling. <br />

<b>Express.js: <br /></b>

i. Express.js is a web framework that provides a higher-level instance for building  <br />server-side applications.
 <br /> ii. Express.js provides features and utilities that simplify the process of building web<br /> applications, such as routing, middleware, and HTTP handling.

 <br /> So this are the key  differences of Node.js and Express.js.</p>
                    
          
      </div>
    </div>
    <div className="card bg-primary">
       <div className="card-body">
         <p>  <h5>4. What is a custom hook, and why will you create a custom hook?</h5>
           A custom hook is a function we used to extract reusable logic from a component, then share it between <br /> numerous components for 
            avoiding repeating the same code. Benefits of using Custom hook : <br />

           i. Makes the code cleaner <br />
           ii. Reduces the time to write the code <br />
           So for this cases I will create custom hook for my applications.
         </p>
                     
          
      </div>
    </div>
</div>
        </div>
    );
};

export default Blog;