import React, { useEffect, useRef } from 'react';
import '../../styles/home.css';

function Home() {
  const dynTextRef = useRef();

  const changeText = (workList) => {
    let index = 0;
    let timeOut;

    const textChanger = () => {
      const { current: dynText } = dynTextRef;

      if (dynText)
        dynText.innerHTML = `<div class="home-dynamic-text">${workList[index]}</div>`;

      index++;
      if (index >= workList.length) index = 0;

      timeOut = setTimeout(() => {
        textChanger();
      }, 2990);
    };

    textChanger();

    return {
      timeOut,
    };
  };

  useEffect(() => {
    const workList = [
      'Web Developer',
      'React Developer',
      'Web Designer',
    ];

    const timeOut = changeText(workList);

    return () => {
      clearTimeout(timeOut);
    };
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
