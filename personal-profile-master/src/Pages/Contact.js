import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import '../App.css'; 
import SubmissionSuccess from './SubmissionSuccess';
const Contact = () => {
    const[formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    })
    const [alert, setAlert] = useState({ message: '', type: '' }); 
    const[isSubmitted, setIsSubmitted] = useState(false)
    const handleChange = (e) => {
      const{name, value} = e.target
      setFormData({...formData, [name]: value})
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      if(!formData.name || !formData.email || !formData.message){
        setAlert({message: 'Please fill in all fields', type: 'danger'})
      }else{
        setIsSubmitted(true)
      }
    }
    if(isSubmitted){
      return <SubmissionSuccess name = {formData.name} email = {formData.email} message = {formData.message}/>
    }
    
    return(

        <div className="container">
         
        <div className="row">
          <div className="col-md-8 mx-auto rounded border p-4 m-4">
            <h2 className="text-center mb-5">Contact</h2>
            {alert.message && (
            <div className={`alert alert-${alert.type} text-center`} role="alert">
              {alert.message}
            </div>
          )}
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="row mb-3">
                <label htmlFor="name" className="col-sm-4 col-form-label">Name</label>
                <div className="col-sm-8">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name"
                    name ="name"
                    value={formData.name}
                    onChange={handleChange} 
                  />
                </div>
              </div>
      
              {/* Email Field */}
              <div className="row mb-3">
                <label htmlFor="email" className="col-sm-4 col-form-label">Email address</label>
                <div className="col-sm-8">
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email"
                    name= "email"
                    aria-describedby="emailHelp"
                    value={formData.email}
                    onChange={handleChange} 
                  />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  
                </div>
              </div>
      
              {/* Message Field */}
              <div className="row mb-3">
                <label htmlFor="message" className="col-sm-4 col-form-label">Message</label>
                <div className="col-sm-8">
                  <textarea 
                    className="form-control" 
                    id="message"
                    name="message" 
                    rows="4"
                    value={formData.message}
                    onChange={handleChange} 
                  ></textarea>
                  
                </div>
              </div>
      
              {/* Submit Button */}
              <button type="submit" className="btn btn-primary col-sm-12" >Submit</button>
            </form>
          </div>
        </div>
      </div>
      
    )
}
export default Contact