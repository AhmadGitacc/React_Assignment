import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Notif from "../Components/Notif";
import axios from "axios";
import cookies from 'js-cookies';
import { config } from "../Components/AxiosConfig";
import Swal from "sweetalert2";

function Signin() {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    let { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      imageUrl: "https://www.icegif.com/loading-13/",
      imageHeight: 200,
      showconfirmButton: true
    });

    const fd = new FormData()
    fd.append('email_address', user.email_address)
    fd.append('password', user.password)

    let url = 'http://solidrockschool.com.ng/api/people/applicant/login'

    axios.post(url, fd, config)
      .then(response => {
        if (response.data.status == 200) {
          Notif({
            title: 'Logged in',
            message: 'User login successfull',
            type: 'success',
            duration: 4000
          })
          cookies.setItem('token', response.data.token)
          cookies.setItem('code', response.data.code)

          window.location.replace('/profile')

        } else {
          Notif({
            title: 'Error ',
            message: response.data.message,
            type: 'danger',
            duration: 4000
          })
        }
      })
      .catch(() => {
        Notif({
          title: 'Error ',
          message: "Error Signing in",
          type: 'danger',
        })
      })

  }

  return (
    <div>
      <Header page={"signin"} />
      <section className="clearfix job-bg user-page">
        <div className="container text-center">
          <div className="user-account-content">
            <div className="user-account">
              <h2>User Login</h2>

              <form action="#" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                    name="email_address"
                    value={user.email_address}
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
                </div>
                <button type="submit" className="btn">
                  Login
                </button>
              </form>

              <div className="user-option">
                <div className="checkbox pull-left">
                  <label for="logged">
                    <input type="checkbox" name="logged" id="logged" /> Keep me
                    logged in{" "}
                  </label>
                </div>
                <div className="pull-right forgot-password">
                  <a href="#">Forgot password</a>
                </div>
              </div>
            </div>
            <a href="#" className="btn-primary">
              Create a New Account
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Signin;
