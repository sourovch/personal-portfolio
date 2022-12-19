import React, { useEffect, useRef } from 'react';
import '../../styles/home.css';

function Home() {
  const dynTextRef = useRef();

  const changeText = (workList, elm) => {
    let index = 0;

    const animationEndHandler = () => {
      index === workList.length - 1 ? (index = 0) : index++;

      elm.innerHTML = `<div class='home-dynamic-text'>${workList[index]}</div>`;
    };

    const textChanger = () => {
      if (elm) {
        elm.innerHTML = `<div class='home-dynamic-text'>${workList[index]}</div>`;

        elm.addEventListener('animationend', animationEndHandler);
      }
    };

    textChanger();
  };

  useEffect(() => {
    const workList = [
      'Web Developer',
      'React Developer',
      'Web Designer',
    ];
    changeText(workList, dynTextRef.current);
  }, []);

  return (
    <div className="home-container page-fade">
      <h1 className="home-main-text">Sourov Chowdhury</h1>
      <div ref={dynTextRef} className="home-sec-text">
        {/*dynamic text */}
      </div>
    </div>
  );
}

export default Home;
