import React from 'react'

const Form = () => {
  return (
    <div class="container">
    <div class="myCard">
      <div class="row">
        <div class="col-md-6">
          <div class="myLeftCtn">
            <div class="myForm text-center ">
              <header>Create new account</header>
              <div class="form-group pb-3">
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  class="myInput"
                  placeholder="Username"
                  id="username"
                  required
                />
              </div>

              <div class="form-group pb-3">
                <i class="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  class="myInput"
                  placeholder="Email"
                  id="email"
                  required
                />
              </div>

              <div class="form-group pb-3">
                <i class="fa-solid fa-lock"></i>
                <input
                  type="password"
                  class="myInput"
                  placeholder="Password"
                  id="password"
                  required
                />
              </div>
              <div class="form-group">
                
                  <input type="checkbox" id="check_1" name="check_1" required /> <small>I read and agree to Terms & Conditions</small>
                  <div class="invalid-feedback">You must check the box</div>
                
              </div>

              <input type="submit" value="Create Account" class="butt"/>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="myRightCtn">
            <div class="box">
              <header>Hello World</header>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt odit voluptatibus dignissimos totam voluptas maxime nam eum veritatis culpa!</p>
              <input type="button" value="Learn More" class="butt_out"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Form