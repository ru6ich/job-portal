import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from "../Header/Header"
import { Divider } from "@mantine/core"
import FindJobsPage from "./FindJobsPage"
import FindTalentPage from "./FindTalentPage"
import PostedJobPage from "./PostedJobPage"
import CompanyPage from "./CompanyPage"
import JobHistoryPage from "./JobHistoryPage"
import ApplyJobPage from "./ApplyJobPage"
import JobDescPage from "./JobDescPage"
import PostJobPage from "./PostJobPage"
import TalentProfilePage from "./TalentProfilePage"
import SignUpPage from "./SignUpPage"
import ProfilePage from "./ProfilePage"
import HomePage from "./HomePage"
import Footer from "../Footer/Footer"
import { useSelector } from "react-redux"


const AppRoutes = () => {
    const user = useSelector((state:any)=>state.user);
    return <BrowserRouter>
      <div className='relative'>
      <Header/>
      <Divider size="xs" mx="md"/>
      <Routes>
        <Route path='/find-jobs' element={<FindJobsPage/>}/>
        <Route path='/find-talent' element={<FindTalentPage/>}/>
        <Route path='/company' element={<CompanyPage/>}/>
        <Route path='/posted-job' element={<PostedJobPage/>}/>
        <Route path='/job-history' element={<JobHistoryPage/>}/>
        <Route path='/jobs' element={<JobDescPage/>}/>
        <Route path='/apply-job' element={<ApplyJobPage/>}/>
        <Route path='/post-job' element={<PostJobPage/>}/>
        <Route path='/talent-profile' element={<TalentProfilePage/>}/>
        <Route path='/signup' element={user?<Navigate to="/"/>:<SignUpPage/>}/>
        <Route path='/login' element={user?<Navigate to="/"/>:<SignUpPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
}

export default AppRoutes;