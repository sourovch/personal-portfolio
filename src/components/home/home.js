import '../../styles/home.css';

function Home() {
  let index = 0;

  const workList = [
    'Web Developer',
    'React Developer',
    'Web Designer',
  ];

  const animationEndHandler = (e) => {
    index === workList.length - 1 ? (index = 0) : index++;

    console.log(e.target);
    e.target.parentNode.innerHTML = `<div class='home-dynamic-text'>${workList[index]}</div>`;
  };

  return (
    <div className="home-container page-fade">
      <h1 className="home-main-text">Sourov Chowdhury</h1>
      <div
        className="home-sec-text"
        onAnimationEnd={animationEndHandler}
      >
        <div className="home-dynamic-text">{workList[index]}</div>
      </div>
    </div>
  );
}

export default Home;
