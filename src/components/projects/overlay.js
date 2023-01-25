import { useRef, useEffect } from 'react';

function Overlay({ type }) {
  const overlayRef = useRef();
  let icon;

  if (type === 'pdf')
    icon = <i className="fa-regular fa-file-pdf"></i>;
  else if (type === 'vid')
    icon = <i className="fa-solid fa-video"></i>;
  else if (type === 'img')
    icon = <i className="fa-solid fa-image"></i>;
  else icon = <i className="fa-solid fa-file"></i>;

  useEffect(() => {
    const perElement = overlayRef.current.parentElement;
    perElement.style.position = 'relative';
  }, []);

  return (
    <div className="project-overlay" ref={overlayRef}>
      {icon}
    </div>
  );
}

export default Overlay;
