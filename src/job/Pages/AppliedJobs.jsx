import React, { useEffect, useState } from "react";
import UserInfoCardComp from "../Components/UserCard";
import Template from "../Components/Template";
import axios from "axios";
import { config } from "../Components/AxiosConfig";

function AppliedJob() {

  const [jobs, setJobs] = useState([])

  const fetchJobs = ()=>{
    const url = "http://solidrockschool.com.ng/api/job/index";

    axios.get(url, config)
    .then(response => {
        setJobs(response.data.data)
        // console.log(jobs)
    })
  }

  useEffect(()=>{
    fetchJobs() 
  }, [])

  return (
    <div>
      <Template>

        <section className="job-bg page ad-profile-page">
          <div className="container">
            <div className="breadcrumb-section">
              <ol className="breadcrumb">
                <li>
                  <a href="home">Home</a>
                </li>
                <li>Applied Job</li>
              </ol>
              <h2 className="title">Applied Job</h2>
            </div>
            <UserInfoCardComp page={"appliedJob"} />
            <div className="section trending-ads latest-jobs-ads">
              <h4>Applied Jobs</h4>
            {/* // TODO: Fetch all jobs */}
              {jobs.map((job) => (
                <div className="job-ad-item" key={job.id}>
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="job-details.html">
                        <img
                          src="images/job/4.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span>
                      <a href="/job-details" className="title">
                        {job.title}
                      </a>{" "}
                      @ <a href="#">{job.company_name}</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>
                            {job.location}{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                            {job.employment_type}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-money" aria-hidden="true"></i>
                            ${job.min_salary} - ${job.max_salary}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-tags" aria-hidden="true"></i>
                            {job.category}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="close-icon">
                    <i className="fa fa-window-close" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              ))}
              
            </div>
          </div>
        </section>

      </Template>
    </div>
  );
}

export default AppliedJob;
