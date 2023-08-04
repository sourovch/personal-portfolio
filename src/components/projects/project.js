import React from 'react';
import { useProjInfo } from '../../contexts/project_info';
import Overlay from './overlay';

function Project({
  info: {
    img,
    alt,
    title,
    type,
    disc,
    liveUrl,
    file,
    embedId,
    techs,
  },
}) {
  const [, , { openInfo }] = useProjInfo();

  return (
    <div
      className="project-card"
      onClick={() => {
        openInfo({
          src: img,
          type,
          disc,
          liveUrl,
          title,
          file,
          alt,
          embedId,
          techs,
        });
      }}
    >
      <div className="project-image-wrapper">
        <Overlay type={type} />
        <img src={img} alt={alt} />
      </div>
      <h3 className="project-title">{title}</h3>
    </div>
  );
}

export default Project;
