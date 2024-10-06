import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { config } from "../Components/AxiosConfig";
import Swal from "sweetalert2";
import Notif from "../Components/Notif";
import cookies from 'js-cookies';

const Signup = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    city: ''
  })

  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    city: ''
  })


  const handleChange = (event) => {
    let { name, value } = event.target
    setUser({ ...user, [name]: value })
    // console.log(user)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let is_valid = true;
    let err = error;

    // if(user.password.length<8 || user.password !== user.confirmPassword){
    //   is_valid = false;
    //   err.password = "Password cannot be less than 8 characters"
    //   err.confirmPassword = "Password does not match"
    // }

    if (user.password.length < 8) {
      is_valid = false;
      err.password = "Password cannot be less than 8 characters"
    }

    if (user.confirmPassword !== user.password) {
      is_valid = false;
      err.confirmPassword = "Password does not match"
    }

    setError(err)

    if (is_valid) {
      const fd = new FormData()
      fd.append('fullname', user.name)
      fd.append('email_address', user.email)
      fd.append('password', user.password)
      fd.append('telephone', user.phone)
      fd.append('city', user.city)

      let url = 'http://solidrockschool.com.ng/api/people/application/create'

      axios.post(url, fd, config)
        .then(response => {
          if (response.data.status == 200) {
            // Notif({
            //   title: 'Saved',
            //   message: 'User saved successfully',
            //   type: 'success',
            //   duration: 4000
            // })

            Swal.fire("Success")
          } else {
            Notif({
              title: 'Error ',
              message: response.data.message,
              type: 'danger',
              duration: 4000
            })
          }
        })
        .catch((err) => {
          Notif({
            title: 'Error ',
            message: "Error Signing Up "+ err,
            type: 'warning',
          })
        })

    }

  }

  const Alert = () => {
    Swal.fire("SweetAlert2 is working!");
  }

  const Alert2 = () => {
    // Notif({
    //   title: 'Hello peoples',
    //   message: 'This chair is effing uncomfy',
    //   type: 'success',
    //   duration: 4000
    // })

    cookies.setItem('foo', 'bar');
    Notif({
      title: 'Cookie saved',
      message: "saved cookies",
      type: 'default',
    })

  }


  return (
    <div>
      <Header page={"signup"} />
      <section className="job-bg user-page">
        <div className="container  text-center">
          <div className="user-account-content">
            <div className="user-account job-user-account">
              <h2>Create An Account</h2>
              <ul className="nav nav-tabs text-center" role="tablist">
                <li role="presentation">
                  <a
                    className="active"
                    href="#find-job"
                    aria-controls="find-job"
                    role="tab"
                    data-toggle="tab"
                  >
                    Find A Job
                  </a>
                </li>
                {/* <li role="presentation">
                  <a
                    href="#post-job"
                    aria-controls="post-job"
                    role="tab"
                    data-toggle="tab"
                  >
                    Post A Job
                  </a>
                </li> */}
              </ul>
              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane active show"
                  id="find-job"
                >
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Id"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                      />

                      {error.password ? (<span>{error.password}</span>) : ([])}

                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        required
                      />

                      {error.confirmPassword ? <span>{error.confirmPassword}</span> : []}

                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <select className="form-control"
                      name="city"
                      value={user.city}
                      onChange={handleChange}
                    >
                      <option value="#">Select City</option>
                      <option value="#">London UK</option>
                      <option value="#">Newyork, USA</option>
                      <option value="#">Seoul, Korea</option>
                      <option value="#">Beijing, China</option>
                    </select>
                    <div className="checkbox">
                      <label className="pull-left checked" for="signing">
                        <input type="checkbox" name="signing" id="signing" /> By
                        signing up for an account you agree to our Terms and
                        Conditions{" "}
                      </label>
                    </div>

                    <button className="btn" type="submit">
                      Registration
                    </button>
                  </form>
                </div>
                <br /><br />
                <button onClick={Alert}>Click me for sweet alert</button>
                <br /><br />
                <button onClick={Alert2}>Click me for react notif</button>



                <div role="tabpanel" className="tab-pane" id="post-job">
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Employer Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Id"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="checkbox">
                      <label className="pull-left checked" for="signing-2">
                        <input
                          type="checkbox"
                          name="signing-2"
                          id="signing-2"
                        />
                        By signing up for an account you agree to our Terms and
                        Conditions
                      </label>
                    </div>
                    <button type="submit" className="btn">
                      Registration
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Signup;
