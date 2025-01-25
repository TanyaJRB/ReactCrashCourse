import HomePage from './pages/HomePage';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import { Job } from './classes/Job';


const App = () => {

  // Add new job
  async function addJob(job: Job) {
    console.log(job);
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }

  // Delete Job
  async function deleteJob(id: string | number) {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/jobs" element={<JobsPage/>}/>
          <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
          <Route path="/jobs/add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
      </Route>
    )
  )
  return <RouterProvider router={router}/>
};

export default App;
