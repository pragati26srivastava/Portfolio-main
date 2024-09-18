import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    // Foodie - Food Ordering Web Application
    FoodieDesc: "Foodie is an online food ordering app leveraging Swiggy's APIs for dynamic data rendering. It showcases React components and efficient state management.",
    FoodieGithub: "https://github.com/pragati26srivastava/namaste-react",
    FoodieWebsite: "https://foodie-co.netlify.app/",

    // Insta Clone Website
    InstaCloneDesc: "A React-based Instagram clone with user authentication, post creation, and a smooth social media experience.",
    InstaCloneGithub: "https://github.com/pragati26srivastava/InstaClone-",
    InstaCloneWebsite: "https://vustron-react-instagram-clone.vercel.app/auth",

    // To-Do List
    ToDoListDesc: "A simple to-do list app built using React, enabling users to efficiently add, delete, and track tasks.",
    ToDoListGithub: "https://github.com/pragati26srivastava/Todo_list_react",
    ToDoListWebsite: "https://wc-react-todo-app.netlify.app/",

    // BlogBlitz - Blogging Website
    BlogBlitzDesc: "BlogBlitz is a full-stack blogging platform where users can create, edit, and delete blog posts. It is built using the MERN stack and includes user authentication, post management, and a sleek UI.",
    BlogBlitzGithub: "https://github.com/pragati26srivastava/BlogBlitz",
    BlogBlitzWebsite: "https://blog-blitz-iefe.vercel.app/",
  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank' rel='noopener noreferrer'>
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a href={desc[projectName + 'Website']} target='_blank' rel='noopener noreferrer'>
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
