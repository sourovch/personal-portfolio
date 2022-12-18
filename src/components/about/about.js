import Heading from '../heading';
import '../../styles/about.css';

function About() {
  return (
    <div className="page-fade">
      <section className="about-container">
        <Heading mainText={'About'} coloredText={'Me'} size="big" />
        <div className="about-info-wrapper">
          <p className="about-text">
            Hi, I'm Sourov. I have been doing Web Development for the
            past 2 years. I have expertise working with Web releted
            tecs like HTML, CSS, JS and ReactJs. I also create backend
            services using technologies like NodeJs and ExpressJs.
            With regard to the future, I have high ambitions. I am
            very passionate about my work, I do it because I like my
            work.
          </p>
          <div className="about-info">
            <div className="about-info-text-wrapper">
              <span className="about-point-text">Age </span>
              <span className="about-info-text"> 22</span>
            </div>
            <div className="about-info-text-wrapper">
              <span className="about-point-text">Residence </span>
              <span className="about-info-text"> Bangladesh</span>
            </div>
            <div className="about-info-text-wrapper">
              <span className="about-point-text">Address </span>
              <span className="about-info-text">
                Netrakona, Bangladesh
              </span>
            </div>
            <div className="about-info-text-wrapper">
              <span className="about-point-text">e-mail </span>
              <span className="about-info-text">
                sourovch@gmail.com
              </span>
            </div>
            <div className="about-info-text-wrapper">
              <span className="about-point-text">Phone </span>
              <span className="about-info-text"> +8801919171958</span>
            </div>
          </div>
        </div>
      </section>
      <section className="about-container">
        <Heading mainText={'What '} coloredText={'I Do'} size="mid" />
        <div className="about-do-wrapper">
          <div className="about-do">
            <div className="about-do-icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <div className="about-do-heading">Development</div>
            <div className="about-do-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugiat alias exercitationem quia, voluptatem, enim omnis
              molestiae quod veritatis obcaecati
            </div>
          </div>
          <div className="about-do">
            <div className="about-do-icon">
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className="about-do-heading">Scalability</div>
            <div className="about-do-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugiat alias exercitationem quia, voluptatem, enim omnis
              molestiae quod veritatis
            </div>
          </div>
          <div className="about-do">
            <div className="about-do-icon">
              <i className="fa-brands fa-accessible-icon"></i>
            </div>
            <div className="about-do-heading">Accessibility</div>
            <div className="about-do-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugiat alias exercitationem quia, voluptatem, enim omnis
              molestiae quod veritatis
            </div>
          </div>
          <div className="about-do">
            <div className="about-do-icon">
              <i className="fa-solid fa-list-check"></i>
            </div>
            <div className="about-do-heading">Management</div>
            <div className="about-do-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugiat alias exercitationem quia, voluptatem, enim omnis
              molestiae quod veritatis
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
