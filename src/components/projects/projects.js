import nothing from '../../resorces/images/nothing.png';
import Project from './project';
import '../../styles/projects.css';

function Projects() {
  const projectInfo = [
    {
      id: 1,
      title: 'project one',
      img: nothing,
      alt: 'nothing',
    },
    {
      id: 2,
      title: 'project two',
      img: nothing,
      alt: 'nothing',
    },
    {
      id: 3,
      title: 'project three',
      img: nothing,
      alt: 'nothing',
    },
    {
      id: 4,
      title: 'project four',
      img: nothing,
      alt: 'nothing',
    },
    {
      id: 5,
      title: 'project five',
      img: nothing,
      alt: 'nothing',
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
