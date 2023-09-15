import React, { useState } from 'react'

const Form = () => {

    const [input,setInput]=useState({
        username:"",
        email:"",
        password:"",
        checkbox:""

    })

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.targe.value;

        setInput(values=>({...values, [name]:value}))
    }
    const handleSubmit = (e)=>{
        
        alert("Form Submit")
    }

  return (
    
    <div className="myCard">
      <div className="row">
        <div className="col-md-6">
          <div className="myLeftCtn">
            <form className="myForm text-center" onSubmit={handleSubmit}>
              <header>Create new account</header>
              <div className="form-group pb-3">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  className="myInput"
                  placeholder="Username"
                  name="username"
                  value={input.username}
                  onChange={handleChange}
                  id="username"
                  required
                />
              </div>

              <div className="form-group pb-3">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  className="myInput"
                  placeholder="Email"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                  id="email"
                  required
                />
              </div>

              <div className="form-group pb-3">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  className="myInput"
                  placeholder="Password"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  id="password"
                  required
                />
              </div>
              <div className="form-group">
                
                  <input type="checkbox" id="check_1" name="checkbox"
                  value={input.checkbox} onChange={handleChange} required /> <small>I read and agree to Terms & Conditions</small>
                  <div className="invalid-feedback">You must check the box</div>
                
              </div>

              <input type="submit" value="Create Account"  className="butt"/>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <div className="myRightCtn">
            <div className="box">
              <header>Hello World</header>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt odit voluptatibus dignissimos totam voluptas maxime nam eum veritatis culpa!</p>
              <input type="button" value="Learn More" className="butt_out"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Form