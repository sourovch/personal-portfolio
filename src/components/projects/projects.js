import '../../styles/projects.css';
import Project from './project';

// import nothing from '../../resorces/images/nothing.png';
import proj1Img from '../../resorces/images/proj_1.jpg';
import proj1Banner from '../../resorces/images/proj_1_b.jpg';
import proj2Banner from '../../resorces/images/proj_2.png';
import proj3Banner from '../../resorces/images/proj_3.jpg';
import proj4Banner from '../../resorces/images/proj_4.jpg';
import proj5Banner from '../../resorces/images/proj_5.jpg';
import proj6Banner from '../../resorces/images/proj_6.jpg';

import { useRef, useState } from 'react';
import proj1Pdf from '../../resorces/images/proj_1.pdf';

const projectInfo = [
    {
      id: 1,
      title: 'Education For All',
      img: proj1Img,
      banner: proj1Banner,
      alt: 'Education For All',
      type: 'pdf',
      disc: 'This Website made with only HTML & CSS & some simple Js no libraries included. This is A Education Website can be used for some school. This is one of my early day projects.',
      liveUrl:
        'https://github.com/sourovch/small-projects/tree/master/educationWebsite2',
      techs: ['HTML', 'CSS', 'Js'],
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
      techs: ['ReactJs', 'CSS'],
    },
    {
      id: 4,
      title: 'Color Generator',
      img: proj4Banner,
      alt: 'Color Generator',
      type: 'vid',
      disc: 'This is A color generator app. that generates random colors you can use in your projects',
      liveUrl:
        'https://github.com/sourovch/Reactjs/tree/main/color-geraretor',
      techs: ['ReactJs', 'CSS'],
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
      techs: ['ReactJs', 'CSS'],
    },
    {
      id: 6,
      title: 'Travel Logger',
      img: proj6Banner,
      alt: 'Travel Logger',
      type: 'vid',
      disc: 'This is a logger app where you can store your memory of good travels.',
      liveUrl: 'https://github.com/sourovch/Travel-logs',
      techs: ['ReactJs', 'ExpressJs', 'MongoDB'],
      embedId: 'UTp2U-N1ibA',
    },
  ];

  const categoriesSet = new Set();
  projectInfo.forEach(el => {
    el.techs.forEach(techs => {
      categoriesSet.add(techs)
    })
  })

function haveSameValues(arr1, arr2) {
  if (arr1?.length !== arr2?.length) return false;

  const ids1 = arr1.map(obj => obj.id).sort();
  const ids2 = arr2.map(obj => obj.id).sort();

  return ids1.every((id, index) => id === ids2[index]);
}

const categories = Array.from(categoriesSet);

let selectedCateV = "all";
let prevFilteredProjInfo = null;

function Projects() {
  const [selectedCate, setSelectedCate] = useState("all");
  /** @type {React.MutableRefObject<HTMLDivElement> || null} */
  const projRef = useRef(null);

  const filteredProjectInfo = projectInfo.filter((info) => selectedCate === 'all' ? true : info.techs.includes(selectedCate));

  const cateClickHandler = (cate) => {
      return () => { 
        if(cate === selectedCate) return;

        if(!haveSameValues(projectInfo.filter((info) => cate === 'all' ? true : info.techs.includes(cate)), prevFilteredProjInfo)){
          projRef.current.classList.add("fade");
        } else {
          prevFilteredProjInfo = filteredProjectInfo;
          setSelectedCate(() => selectedCateV)
        }
        selectedCateV = cate;
      }
  }

  const transitionEndHandler = (e) => {
        prevFilteredProjInfo = filteredProjectInfo;
        if(!e.currentTarget.classList.contains("fade")) 
            return;
        e.currentTarget.classList.remove("fade");
        prevFilteredProjInfo = filteredProjectInfo;
        setSelectedCate(() => {
          return selectedCateV;
        });
  } 
  
  return (
    <div className="page-fade projects-cont">
      <h1 className="big-heading">Portfolio</h1>
      <div className="category-list">
        <button className={`category ${selectedCate === "all" && "active"}`} onClick={cateClickHandler("all")}>All</button>
        {categories.map(e => <button key={e} className={`category ${e === selectedCate && "active"}`} onClick={cateClickHandler(e)}>{e}</button>)}
      </div>
      <div className="all-projects" ref={projRef} onTransitionEnd={transitionEndHandler}>
        {filteredProjectInfo
          .map((info) => (
            <Project info={info} key={info.id} />
          ))}
      </div>
    </div>
  );
}

export default Projects;
