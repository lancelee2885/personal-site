import React, {useState} from 'react';

function SignupFrom () {
  const [formData, setFormData] = useState({fullName:'123', email:'', message:''});

  function handleChange(evt) {

    const {name, value} = evt.target;

    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  return (
    <div className="SignupForm">
      <h1>Sign Up</h1>
      <form className="form-group">
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="form-control"    
            name="fullName"
            id="fullName"
            onChange={handleChange}
            value={formData.fullName}
            style={{ width: "20rem", margin: "10px auto" }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="form-control"  
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            style={{ width: "20rem", margin: "10px auto" }}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input
            className="form-control"
            name="message"
            id="message"
            onChange={handleChange}
            value={formData.message}
            style={{ width: "20rem", margin: "10px auto" }}
          />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  ) 
}

export default SignupFrom;
