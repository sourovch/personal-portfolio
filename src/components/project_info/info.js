import '../../styles/project_info.css';
import { useProjInfo } from '../../contexts/project_info';
import { useEffect, useRef } from 'react';

function ProjectInfo() {
  const ref = useRef();
  const imgWrapperRef = useRef();
  const [
    setRef,
    { src, title, disc, liveUrl, type, file, embedId, techs },
    { closeInfo },
  ] = useProjInfo();

  useEffect(() => {
    setRef(ref);
  }, [setRef]);

  useEffect(() => {
    const imageWrapper = imgWrapperRef.current;

    if (imageWrapper?.childNodes[0]?.nodeName === 'IFRAME') {
      imageWrapper.style.width = '45%';
    } else if (imageWrapper?.childNodes[0]?.nodeName === 'IMG') {
      imageWrapper.style.width = '35%';
    } else {
      imageWrapper.style.width = '';
    }
  }, [type]);

  const otherOptionsCondition1 =
    (type === 'img' || type === 'pdf') && file;

  return (
    <div className="project-info-cont" ref={ref}>
      <div className="i-cancel" onClick={closeInfo}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="project-info-content">
        <div className="project-info-img-wrapper" ref={imgWrapperRef}>
          {src && type !== 'vid' && <img src={src} alt="featured" />}
          {type === 'vid' && embedId && (
            <iframe
              src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="project-info-content-wrapper">
          <h1 className="project-info-title">{title}</h1>
          <p className="project-info-disc">{disc}</p>
          {techs && Array.isArray(techs) && (
            <div className="project-info-techs-wrapper">
              <h4 className="project-info-heading-s">Technologies</h4>
              <div className="project-info-techs">
                {techs.join(', ')}
              </div>
            </div>
          )}
          {(otherOptionsCondition1 || liveUrl) && (
            <div className="project-info-other-options">
              <h4 className="project-info-heading-s">
                Other Options
              </h4>
              <div className="project-info-btn-wrepper">
                {otherOptionsCondition1 && (
                  <a
                    href={file}
                    download={title}
                    className="btn project-info-btn"
                  >
                    Download
                  </a>
                )}
                {liveUrl && (
                  <a
                    href={liveUrl}
                    className="btn project-info-btn"
                    target="_blink"
                  >
                    See Live/Github
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
