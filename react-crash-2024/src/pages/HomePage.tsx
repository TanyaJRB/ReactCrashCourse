import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
        <Hero title="React Jobs" subtitle="Find React Jobs for your Skillset"/>
        <HomeCards />
        <JobListings isHome/>
        <ViewAllJobs />
    </>
  )
}

export default HomePage