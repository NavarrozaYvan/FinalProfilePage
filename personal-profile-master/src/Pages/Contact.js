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

     <div className="container page-container mt-5">
      <h2 className="display-4 mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="form-control"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      
              {/* Submit Button */}
              <button type="submit" className="btn btn-primary col-sm-12" >Submit</button>
            </form>
          </div>
        </div>
      </div>
      
    )
}
export default Contact
