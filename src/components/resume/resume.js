import '../../styles/resume.css';
import Heading from '../heading';
import InfoCard from './infoCard';
import Progressbar from './progressbar';
import Certificate from './certificate';

// import nothing from '../../resorces/images/nothing.png';
import cir1Banner from '../../resorces/images/cir_1.png';
import cir2Banner from '../../resorces/images/cir_2.jpg';

import cir1pdf from '../../resorces/images/cir_1.pdf';

function Resume() {
  const educationInfo = [
    {
      id: 1,
      year: '2012-2018',
      institute: 'Dutta High School',
      head: 'Secondary School Certificate',
      disc: 'Passed SSC from Science department of Dutta High School with a GPA of 4.78',
    },
    {
      id: 2,
      year: '2018-present',
      institute: 'Kishoreganj Polytecnic Institute',
      head: 'Deploma in Computer Engineering',
      disc: 'I am currently studing at Computer department of Kishoreganj Polytecnic Institute And learning about Core of Computer Science.',
    },
  ];

  const experienceInfo = [
    {
      id: 1,
      year: 'present',
      institute: 'European It Solution',
      head: 'ReactJs Developer',
      disc: 'Doing industrial attachment as a ReactJs developer.',
    },
  ];

  const designSkillsInfo = [
    {
      id: 1,
      label: 'web design',
      value: 70,
    },
  ];

  const codingSkillsInfo = [
    {
      id: 1,
      label: 'javascript',
      value: 60,
    },
    {
      id: 2,
      label: 'ReactJs',
      value: 40,
    },
    {
      id: 3,
      label: 'ExpressJs',
      value: 70,
    },
    {
      id: 4,
      label: 'Mongoose',
      value: 60,
    },
    {
      id: 5,
      label: 'HTML/CSS',
      value: 80,
    },
  ];

  const certificates = [
    {
      id: 1,
      img: cir1Banner,
      label: 'Intro to computer science - Cs50',
      disc: 'Certificate of Haverd univercity CS50x',
      type: 'img',
      file: cir1pdf,
      alt: 'Intro to computer science - Cs50',
    },
    {
      id: 2,
      img: cir2Banner,
      label: 'Reactjs - European IT Solutions',
      disc: 'This certificate provided by european it institute as I completed Euit ReactJs course',
      type: 'img',
      file: cir2Banner,
      alt: 'Reactjs - European IT Solutions',
    },
  ];

  return (
    <div className="page-fade resume-container">
      <h1 className="big-heading">Resume</h1>
      <div className="resume-content-wrapper">
        <div className="resume-all-cards">
          <div className="resume-card-wrapper">
            <h2>Education</h2>
            {educationInfo.map((info) => (
              <InfoCard data={info} key={info.id} />
            ))}
          </div>
          <div className="resume-card-wrapper">
            <h2>Experience</h2>
            {experienceInfo.map((info) => (
              <InfoCard data={info} key={info.id} />
            ))}
          </div>
        </div>
        <div className="resume-all-skills">
          <div className="resume-skill-wrapper">
            <Heading
              mainText={'Design'}
              coloredText={'Skills'}
              size={'mid'}
            />
            {designSkillsInfo.map((info) => (
              <Progressbar info={info} key={info.id} />
            ))}
          </div>
          <div className="resume-skill-wrapper">
            <Heading
              mainText={'Coding'}
              coloredText={'Skills'}
              size={'mid'}
            />
            {codingSkillsInfo.map((info) => (
              <Progressbar info={info} key={info.id} />
            ))}
          </div>
        </div>
      </div>
      <h2>Certificates</h2>
      <div className="resume-all-certificates">
        {certificates.map((info) => (
          <Certificate info={info} key={info.id} />
        ))}
      </div>
    </div>
  );
}

export default Resume;
