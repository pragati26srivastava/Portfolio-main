import React from 'react';
import ProjectBox from './ProjectBox';
import InstaCloneImage from '../images/InstaCloneImage.png';
import ToDoListImage from '../images/ToDoListImage.png';
import BlogBlitzImage from '../images/BlogBlitzImage.png';
import FoodieImage from '../images/FoodieImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={FoodieImage} projectName="Foodie" />
        <ProjectBox projectPhoto={InstaCloneImage} projectName="InstaClone" />
        <ProjectBox projectPhoto={ToDoListImage} projectName="ToDoList" />
        <ProjectBox projectPhoto={BlogBlitzImage} projectName="BlogBlitz" />
      </div>

    </div>
  )
}

export default Projects