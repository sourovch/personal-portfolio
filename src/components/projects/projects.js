import Project from './project';
import '../../styles/projects.css';

// import nothing from '../../resorces/images/nothing.png';
import proj1Banner from '../../resorces/images/proj_1.jpg';
import proj2Banner from '../../resorces/images/proj_2.png';
import proj3Banner from '../../resorces/images/proj_3.jpg';
import proj4Banner from '../../resorces/images/proj_4.jpg';
import proj5Banner from '../../resorces/images/proj_5.jpg';
import proj6Banner from '../../resorces/images/proj_6.jpg';

import proj1Pdf from '../../resorces/images/proj_1.pdf';

function Projects() {
  const projectInfo = [
    {
      id: 1,
      title: 'Education For All',
      img: proj1Banner,
      alt: 'Education For All',
      type: 'pdf',
      disc: 'This Website made with only HTML & CSS & some simple Js no libraries included. This is A Education Website can be used for some school. This is one of my erly day projects.',
      liveUrl:
        'https://github.com/sourovch/small-projects/tree/master/educationWebsite2',
      techs: ['html', 'css', 'Js'],
      file: proj1Pdf,
    },
    {
      id: 2,
      title: 'Cs50 Final Project',
      img: proj2Banner,
      alt: 'Cs50 Final Project',
      type: 'vid',
      disc: 'This is my cs50 final project "Notes". With this web app you can add notes daily as many as you need, you can find notes of a spacific day also edit and delete them. Every note you write is of "Unlisted" visibility so you can share them with your friends if you want. You can also add, remove and check todos to keep track of your doings.',
      liveUrl: 'https://github.com/sourovch/cs50-final-project',
      techs: ['Python', 'Flask', 'Sqlite3', 'BootStrap'],
      embedId: 'YpOgBwHMkUU',
    },
    {
      id: 3,
      title: 'Messages',
      img: proj3Banner,
      alt: 'Messages',
      type: 'img',
      disc: 'This is a simple messaging app made with only ReactJs. You can message from both(sender & reciver) end.',
      liveUrl: 'https://github.com/sourovch/Messages',
      techs: ['ReactJs', 'Css'],
    },
    {
      id: 4,
      title: 'Color Genaretor',
      img: proj4Banner,
      alt: 'Color Genaretor',
      type: 'vid',
      disc: 'This is A color genaretor app. that genarets random colors you can use in your projects',
      liveUrl:
        'https://github.com/sourovch/Reactjs/tree/main/color-geraretor',
      techs: ['ReactJs', 'Css'],
      embedId: '8y254J6i4nU',
    },
    {
      id: 5,
      title: 'React CRUD',
      img: proj5Banner,
      alt: 'React CRUD',
      type: 'img',
      disc: 'This is A CRUD made with ReactJs(no backend)',
      liveUrl: 'https://github.com/sourovch/Reactjs/tree/main/crud',
      techs: ['ReactJs', 'Css'],
    },
    {
      id: 6,
      title: 'Travel Logger',
      img: proj6Banner,
      alt: 'Travel Logger',
      type: 'vid',
      disc: 'This is a logger app where you can store your memorys of good travels.',
      liveUrl: 'https://github.com/sourovch/Travel-logs',
      techs: ['ReactJs', 'ExpressJs', 'MongoDB'],
      embedId: 'UTp2U-N1ibA',
    },
  ];

  return (
    <div className="page-fade projects-cont">
      <h1 className="big-heading">Portfolio</h1>
      <div className="all-projects">
        {projectInfo.map((info) => (
          <Project info={info} key={info.id} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
