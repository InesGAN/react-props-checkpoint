import React from 'react';
import Bio from"./Bio";
import Profession from"./Profession";
import '../App.css';
import { render } from 'react-dom';

var resume=
  {
      Title1:"Software Engineer",
      Summary1:"I'm passionate about Computer Software development, looking always for different and most efficient solutions to daily problems of clients. Always growing as a person and as a co worker, looking always to give my best for the company I'm working with.",
      Experience1:"Software developer" ,
      CompanyName1:"ServiceRocket" ,
      ProfessionalExperience1:"Development of Application (bots, add-ons) that help simplify day-to-day work for companies using platforms such as Workplace or Atlassian products. To achieve this purpose, Serverless framework is being used taking advantage of AWS stack technologies."
  
  }
  class Profile extends React.Component {

    render() {
    return (
    <div>
      <Bio 
      Title={resume.Title1} 
     Summary= {resume.Summary1}
     /> 
       <Profession ClassName="Experience" 
        Experience={ resume.Experience1}
        CompanyName= { resume.CompanyName1}
        ProfessionalExperience={ resume.ProfessionalExperience1}/>
    </div>
    );
    }
}
// Profile.propTypes = {
//   ProfessionalExperience: PropTypes.string,
//   CompanyName: PropTypes.string,
//   Experience: PropTypes.string,
//   Summary: PropTypes.string,
//   Title: PropTypes.string,
// }

export default Profile;