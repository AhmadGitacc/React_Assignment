import HeaderComp from "../Components/Header";
import FooterComp from "../Components/Footer";
import { useState } from "react";
import axios from "axios";
import { config } from "../Components/AxiosConfig";
import Notif from "../Components/Notif";

function JobPost() {

  const [newJob, setNewJob] = useState({
    category_code: "",
    company_code: "",
    job_type: "",
    location: "",
    closing_date: "",
    experience: "",
    description: "",
    fees: "",
    staff: "",
    min_salary: "",
    max_salary: "",
    title: ""
  })

  const handleChange = (event) => {
    let { name, value } = event.target;
    setNewJob({ ...newJob, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = 'http://solidrockschool.com.ng/api/job/add'

    const fd = new FormData();
    fd.append('title', newJob.title)
    fd.append('description', newJob.description)
    fd.append('max_salary', newJob.max_salary)
    fd.append('min_salary', newJob.min_salary)
    fd.append('experience', newJob.experience)
    fd.append('category_code', 'erd')
    fd.append('company_code', 'wsed')
    fd.append('job_type', 'ok')
    fd.append('location', 'Somewhere under the sea')
    fd.append('closing_date', '2024-09-19')

    axios.post(url, fd, config)
      .then(response => {
        if (response.data.status === 200) {
          Notif({
            title: 'New Job Saved',
            message: 'Job added successfully',
            type: 'success',
            duration: 4000
          })
        } else {
          Notif({
            title: 'Error',
            message: response.data.message,
            type: 'danger',
            duration: 4000
          })
        }
      })
      .catch(err => {
        let errorMessage = 'Something went wrong!';

        if (err.response) {
          errorMessage = `Error: ${err.response.data.message || 'Unknown server error'}`;
        } else if (err.request) {
          errorMessage = 'No response from the server. Please check your network.';
        } else {
          errorMessage = err.message;
        }

        Notif({
          title: 'Error',
          message: errorMessage,
          type: 'warning',
        });

        console.error('Error details:', err);
      })
  }

  return (
    <div>
      <HeaderComp page="post" />
      <section className=" job-bg ad-details-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Job Post </li>
            </ol>
            <h2 className="title">Post Your Job</h2>
          </div>
          <div className="job-postdetails">
            <div className="row">
              <div className="col-lg-8">
                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <div className="section postdetails">
                      <h4>
                        Post Your Job
                        <span className="pull-right">* Mandatory Fields</span>
                      </h4>
                      <div className="row form-group add-title">
                        <label className="col-sm-3 label-title">
                          Job Category
                        </label>
                        <div className="col-sm-9">
                          <div className="dropdown category-dropdown">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">
                                Select a category
                              </span>{" "}
                              <i className="fa fa-angle-down pull-right"></i>
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="">Select a category</a>
                              </li>
                              <li>
                                <a href="">Software Engineer</a>
                              </li>
                              <li>
                                <a href="#">Program Development</a>
                              </li>
                              <li>
                                <a href="#">Project Manager</a>
                              </li>
                              <li>
                                <a href="#">Graphics Designer</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3">
                          Job Type<span className="required">*</span>
                        </label>
                        <div className="col-sm-9 user-type">
                          <input
                            type="radio"
                            name="sellType"
                            value="full-time"
                            id="full-time"
                          />{" "}
                          <label for="full-time">Full Time</label>
                          <input
                            type="radio"
                            name="sellType"
                            value="part-time"
                            id="part-time"
                          />{" "}
                          <label for="part-time">Part Time</label>
                          <input
                            type="radio"
                            name="sellType"
                            value="freelance"
                            id="freelance"
                          />{" "}
                          <label for="freelance">Freelance</label>
                          <input
                            type="radio"
                            name="sellType"
                            value="contract"
                            id="contract"
                          />{" "}
                          <label for="contract">Contract</label>
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Title for your job<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ex, Human Resource Manager"
                            name="title"
                            value={newJob.title}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row form-group item-description">
                        <label className="col-sm-3 label-title">
                          Description<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <textarea
                            className="form-control"
                            id="textarea"
                            name="description"
                            value={newJob.description}
                            onChange={handleChange}
                            placeholder="Write few lines about your jobs"
                            rows="8"
                          ></textarea>
                        </div>
                      </div>
                      <div className="row characters">
                        <div className="col-sm-9 col-sm-offset-3">
                          <p>5000 characters left</p>
                        </div>
                      </div>
                      <div className="row form-group add-title location">
                        <label className="col-sm-3 label-title">
                          Location<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <div className="dropdown category-dropdown pull-left">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">Country</span>{" "}
                              <i className="fa fa-angle-down pull-right"></i>
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">Argentina</a>
                              </li>
                              <li>
                                <a href="#">Australia</a>
                              </li>
                              <li>
                                <a href="#">Belgium</a>
                              </li>
                              <li>
                                <a href="#">Brazil</a>
                              </li>
                              <li>
                                <a href="#">Cambodia</a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown category-dropdown pull-right">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">State</span>{" "}
                              <i className="fa fa-angle-down pull-right"></i>
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">State 1</a>
                              </li>
                              <li>
                                <a href="#">State 2</a>
                              </li>
                              <li>
                                <a href="#">State 3</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row form-group select-price">
                        <label className="col-sm-3 label-title">
                          Salary<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <label>$USD</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Min"
                            name="min_salary"
                            value={newJob.min_salary}
                            onChange={handleChange}
                          />
                          <span>-</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Max"
                            name="max_salary"
                            value={newJob.max_salary}
                            onChange={handleChange}
                          />
                          <input
                            type="radio"
                            name="price"
                            value="negotiable"
                            id="negotiable"
                          />
                          <label for="negotiable">Negotiable </label>
                        </div>
                      </div>
                      <div className="row form-group add-title">
                        <label className="col-sm-3 label-title">
                          Salary Type<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <div className="dropdown category-dropdown">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">Per Hour</span>{" "}
                              <i className="fa fa-angle-down pull-right"></i>
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">Per Hour</a>
                              </li>
                              <li>
                                <a href="#">Daily</a>
                              </li>
                              <li>
                                <a href="#">Monthly</a>
                              </li>
                              <li>
                                <a href="#">Yearly</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row form-group add-title">
                        <label className="col-sm-3 label-title">
                          Exprience<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <select className="dropdown category-dropdown"
                            required
                            name="experience"
                            value={newJob.experience}
                            onChange={handleChange}>
                            <option value="entry-level">Entry Level</option>
                            <option value="mid-level" selected>Mid Level</option>
                            <option value="mid-senior-level">Mid-Senior Level</option>
                            <option value="top-level">Top Level</option>
                          </select>
                        </div>
                      </div>
                      <div className="row form-group brand-name">
                        <label className="col-sm-3 label-title">
                          Job Function<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="human, reosurce, job, hrm"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="section company-information">
                      <h4>Company Information</h4>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Industry<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Marketing and Advertising"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Company Name<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="ex, Jhon Doe"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">Email ID</label>
                        <div className="col-sm-9">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="ex, jhondoe@mail.com"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Mobile Number<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="mobileNumber"
                            className="form-control"
                            placeholder="ex, +912457895"
                          />
                        </div>
                      </div>
                      <div className="row form-group address">
                        <label className="col-sm-3 label-title">
                          Address<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="ex, alekdera House, coprotec, usa"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="section">
                      <h4>Make Your Post Premium</h4>
                      <p>
                        More replies means more interested buyers. With lots of
                        interested buyers, you have a better chance of selling
                        for the price that you want.<a href="#">Learn more</a>
                      </p>
                      <ul className="premium-options">
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            value="day-one"
                            id="day-one"
                          />
                          <label for="day-one">Regular Post</label>
                          <span>$20.00</span>
                        </li>
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            value="day-two"
                            id="day-two"
                          />
                          <label for="day-two">Regular Post</label>
                          <span>$30.00</span>
                        </li>
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            value="day-three"
                            id="day-three"
                          />
                          <label for="day-three">Top Post for 7 days</label>
                          <span>$50.00</span>
                        </li>
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            value="day-four"
                            id="day-four"
                          />
                          <label for="day-four">Daily Bump Up for 7 days</label>
                          <span>$100.00</span>
                        </li>
                      </ul>
                    </div>
                    <div className="checkbox section agreement">
                      <label for="send">
                        <input type="checkbox" name="send" id="send" />
                        You agree to our <a href="#">Terms of Use</a> and{" "}
                        <a href="#">Privacy Policy</a> and acknowledge that you
                        are the rightful owner of this item and using Jobs to
                        find a genuine buyer.
                      </label>
                      <button type="submit" className="btn btn-primary">
                        Post Your Job
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>

              <div className="col-lg-4">
                <div className="section quick-rules">
                  <h4>Quick rules</h4>
                  <p className="lead">
                    Posting an ad on <a href="#">jobs.com</a> is free! However,
                    all ads must follow our rules:
                  </p>
                  <ul>
                    <li>Make sure you post in the correct category.</li>
                    <li>
                      Do not post the same ad more than once or repost an ad
                      within 48 hours.
                    </li>
                    <li>Do not upload pictures with watermarks.</li>
                    <li>
                      Do not post ads containing multiple items unless it's a
                      package deal.
                    </li>
                    <li>
                      Do not put your email or phone numbers in the title or
                      description.
                    </li>
                    <li>Make sure you post in the correct category.</li>
                    <li>
                      Do not post the same ad more than once or repost an ad
                      within 48 hours.
                    </li>
                    <li>Do not upload pictures with watermarks.</li>
                    <li>
                      Do not post ads containing multiple items unless it's a
                      package deal.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterComp />
    </div>
  );
}

export default JobPost;
