import { PersonCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Login() {
    const initial={
        name:'',
        password:''
        }

    const[user,setUser]=useState(initial);
    
    const onValueChange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
      };
    
    const handleSubmit = async (e) =>
         {
            e.preventDefault();
            console.log("user add", user);
         } 
    let inputfield = [ 
                        { 
                             id:"1",  
                             fieldname:"Enter your name:",
                             fieldvalue:"name",
                             
                        },
                        {
                            id:"2",
                            fieldname:"Enter your Password:",
                            fieldvalue:"password",
                            
                        }
                        ]; 

  return (
    <>     
    <div className="container mt-5">
    
    <PersonCircle size={100} className="mt-4"/>
    <h4 className='mt-2'>Login Form</h4>
    <form className="mt-2" onSubmit={handleSubmit}>             
               { inputfield.map((inputfields, index) => {
                    return (
                            <div key={index} > 
                                <div className="row mt-3">
                                    <div className="col-lg-12"><label>  {inputfields.fieldname} </label></div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12"> 
                                    <input type="text" 
                                        name= {inputfields.fieldvalue} 
                                        placeholder=  {inputfields.fieldname}
                                        onChange={(e)=>onValueChange(e)} /> 
                                </div>
                                </div>
                            </div>
                    );
                })}  
           
                
        <div className="row mt-4">
            <div className="col-lg-4"></div>
            <div className="col-lg-4"> <input type="submit" /></div>
            <div className="col-lg-4"></div>
        </div>
    </form>
    <div className='row mt-2'>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"> <Link to ="/register">Click here to Registration </Link></div>
            <div className="col-lg-4"></div>
    </div>
    </div>
  

    

    </>
  )
}

export default Login


/*
required modules

react-bootstrap-icons
react-bootstrap
*/
