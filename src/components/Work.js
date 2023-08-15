// import "./WorkCardStyles.css"

// import WorkCard from "./WorkCard";

// import WorkCardData from "./WorkCardData";

// import React from 'react'


// const Work = () => {
//   return (
//         <div className="work-container">
//         <h1 className="project-heading">Projects</h1>
//         <div className="project-container">
//         {WorkCardData.map((val, ind) => {
//             return(
//                 <WorkCard 
//                 key={ind}
//                 imgsrc={val.imgsrc}
//                 title={val.title}
//                 text={val.text}
//                 view={val.view}
//                 />
//             )
//         })}
//          </div>
//         </div>
   

//   );
// }


// export default Work;


//2d tym

// import "./WorkCardStyles.css"

// import React from 'react'


// import { NavLink } from "react-router-dom"

// const WorkCard = (props) => {
//   <div className="project-card">
//   <img src={props.imgsrc} alt="" />
//   <h2 className="project-title">
//    {props.title}</h2> 
//   <div className="pro-details">
//   <p>{props.text}</p>
//   <div className="pro-btns">
//    <NavLink to={props.view}
//     className="btn">View</NavLink>
//    <NavLink to="url.com"
//     className="btn">Source</NavLink>

//   </div>
// </div>
// </div>
// }

// export default WorkCard;

import "./WorkCardStyles.css"
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"

import React from 'react'

// import pro1 from "../assests/project1.jpg"

// import { NavLink } from "react-router-dom"

const Work = () => {
  return <div className="work-container">
    <h1 className="project-heading">Projects</h1>    
     <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard 
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.source}
            />
          )
        })}
      </div>
    </div>
   
};

export default Work


