import React, {useState} from "react";
import face_rec from "../logos/fr-icon.png";
import cc from "../logos/cc.png";
import posturify from "../logos/posture.png";
import chess from "../logos/verbal_chess.png";
import othello from "../logos/othello.png";
import pentago from "../logos/pentago.png";
import twitter from "../logos/twit_dash.svg";
import ad_hoc from "../logos/ad-hoc.png";

const Work = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const projects_one = [
    {
      id: 1,
      name: "Twitter Dashboard",
      image: twitter,
      desription: "Information to show on hover, Information to show on hover, Information to show on hover"
    },
     {
      id: 2,
      name: "Compiler Construction",
      image: cc, 
      desription: "Information to show on hover"
    },
      {
      id: 3,
      name: "Pentago board game",
      image: pentago,
      desription: "Information to show on hover"
       // Replace with the actual image path
    },
    {
      id: 4,
      name: "Ad-Hoc Chat",
      image: ad_hoc,
      desription: "Information to show on hover"
       // Replace with the actual image path
    },
    
  ];

  const projects_two = [
    {
      id: 4,
      name: "Verbal Chess",
      image: chess, // Replace with the actual image path
      desription: "Information to show on hoveriuglugiuyf"
    },
      {
      id: 5,
      name: "Othello board game",
      image: othello, // Replace with the actual image path
      desription: "Information to show on hover"
    },
    {
      id: 6,
      name: "Posture Recognition",
      image: posturify, // Replace with the actual image path
      desription: "Information to show on hover"
    },
    {
      id: 7,
      name: "Face_Recognition",
      image: face_rec,// Replace with the actual image path
      desription: "Information to show on hover"
    },
  ];
    return (
      <div className='work'>
        <div className='projects'>
        {projects_one.map((project) => (
          <div key={project.id} className="project_one-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={project.image} alt={project.name} />
                  {project.name}
                  {isHovered && (
              <div className="overlay">
                {project.desription}
              </div>
          )}
          </div>
          ))}
        </div>  
        <div className='projects'>
        {projects_two.map((project) => (
          <div key={project.id} className="project_two-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={project.image} alt={project.name} />
                  {project.name}
                  {isHovered && (
              <div className="overlay">
                {project.desription}
              </div>
          )}
          </div>
          ))}
        </div>  
      </div>
    );
  };
  
  export default Work;