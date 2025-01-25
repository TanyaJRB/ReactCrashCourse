import jobs from '../jobs.json';
import JobListing from './JobListing';

const JobListings = ({isHome = false}) => {

    const recentJobs = isHome ? jobs.jobs.slice(0, 3) : jobs.jobs; //loop over 3 jobs only if home page 

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    { isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    { recentJobs.map((job)=>(
                        <JobListing job={job} key={job.id}/>
                    ))} 
                </div>
            </div>
        </section>
    )
}

export default JobListings