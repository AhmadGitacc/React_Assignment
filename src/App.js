import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './movies/list';
import Trial from './movies/trial';
import Lib from './Library/Lib';
import PreviewBook from './Library/preview';

import Home from "./job/Pages/Home.jsx";
import JobList from "./job/Pages/JobList.jsx";
import JobDetails from "./job/Pages/JobDetail.jsx";
import Resume from "./job/Pages/Resume.jsx";
import Profile from "./job/Pages/Profile.jsx";
import PostResume from "./job/Pages/PostResume.jsx";
import JobPost from "./job/Pages/JobPost.jsx";
import EditResume from "./job/Pages/EditResume.jsx";
import ProfileDetails from "./job/Pages/ProfileDetails.jsx";
import BookMark from "./job/Pages/BookMarks.jsx";
import AppliedJob from "./job/Pages/AppliedJobs.jsx";
import DeleteAccount from "./job/Pages/DeleteAccount";
import Signup from "./job/Pages/Signup.jsx";
import Signin from "./job/Pages/Signin.jsx";
import 'react-notifications-component/dist/theme.css'



function App() {
  return(
  <div>
    <Router>
      <Routes>

          <Route path='/'  element={<List />} />
          <Route path='/trial'  element={<Trial />} />

          {/* Library routes */}
          <Route path='/library'  element={<Lib />} />
          {/* <Route path='/book-preview'  element={<PreviewBook />} /> */}
          <Route path='/book-preview/:isbn13'  element={<PreviewBook />} />

          {/* Jobs routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/job-details/:id" element={<JobDetails />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post-resume" element={<PostResume />} />
          <Route path="/job-post" element={<JobPost />} />
          <Route path="/edit-resume" element={<EditResume />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="/applied-job" element={<AppliedJob />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
      </Routes>

    </Router>
  </div>
  );
}

export default App;
