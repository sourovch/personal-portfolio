import avatar from '../../resorces/images/avatar.jpg';
import '../../styles/info.css';

function Info({ children }) {
  return (
    <>
      <div className="avatar-wrapper">
        <img src={avatar} alt="sourov avatar" height="100px" />
      </div>
      <div className="info-text">
        <div className="big-text">Sourov Chowdhruy</div>
        <div className="small-text">Web developer</div>
      </div>
      {children && children}
      <div className="contect-links">
        <a href="https://www.facebook.com/sourov.hz/">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/in/sourov-chowdhury-070514257/">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com/sourovch">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
      <a
        href={process.env.PUBLIC_URL + 'sourov chowdhury cv.pdf'}
        download="sourov chowdhury cv"
        className="btn p-btn cv-btn"
      >
        download CV
      </a>
    </>
  );
}

export default Info;
