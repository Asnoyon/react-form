import React from 'react'

const Form = () => {
  return (
    
    <div className="myCard">
      <div className="row">
        <div className="col-md-6">
          <div className="myLeftCtn">
            <div className="myForm text-center ">
              <header>Create new account</header>
              <div className="form-group pb-3">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  className="myInput"
                  placeholder="Username"
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
                  id="password"
                  required
                />
              </div>
              <div className="form-group">
                
                  <input type="checkbox" id="check_1" name="check_1" required /> <small>I read and agree to Terms & Conditions</small>
                  <div className="invalid-feedback">You must check the box</div>
                
              </div>

              <input type="submit" value="Create Account" className="butt"/>
            </div>
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