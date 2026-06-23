import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {

 const [projects,setProjects] = useState([]);

 useEffect(()=>{
   axios
   .get("http://localhost:5000/api/projects")
   .then(res => setProjects(res.data));
 },[]);

 return (
  <>
   <h2>My Projects</h2>

   {projects.map(project=>(
    <div key={project._id}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
   ))}
  </>
 );
}

export default Projects;