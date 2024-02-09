import React from 'react'
import NavBar from '../NavBar'

const SignUp = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

              <div class="card bg-warning">
                <div class="card-body">

                  <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <label htmlFor="" className="form-label">UserName</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <label htmlFor="" className="form-label">Email</label>
                      <input type="email" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <label htmlFor="" className="form-label">Password</label>
                      <input type="password" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <button className="btn btn-success">SignUp</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp