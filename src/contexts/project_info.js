import { createContext, useState, useContext } from 'react';

const OpenProjInfo = createContext();
const ProjectInfoRef = createContext();
const ProjInfo = createContext();

export function useProjInfo() {
  const setProjInfoRef = useContext(ProjectInfoRef);
  const projInfo = useContext(ProjInfo);
  const infoFuncs = useContext(OpenProjInfo);

  return [setProjInfoRef, projInfo, infoFuncs];
}

const initialInfo = {
  type: '',
  src: '',
  disc: '',
  liveUrl: '',
  title: '',
  file: '',
  embedId: '',
};

export default function ProjectInfo({ children }) {
  const [projInfoRef, setProjInfoRef] = useState();
  const [projInfo, setProjInfo] = useState(initialInfo);

  function openInfo(projInfoValues) {
    const newValueObj = {};
    const allowedKeys = [
      'type',
      'src',
      'disc',
      'liveUrl',
      'title',
      'file',
      'embedId',
      'alt',
      'techs',
    ];

    for (let key in projInfoValues) {
      if (
        projInfoValues[key] !== null &&
        projInfoValues[key] !== undefined &&
        allowedKeys.indexOf(key) !== -1
      ) {
        newValueObj[key] = projInfoValues[key];
      }
    }

    setProjInfo((v) => ({ ...v, ...newValueObj }));

    projInfoRef.current.classList.add('activate');
  }

  function closeInfo() {
    projInfoRef.current.classList.remove('activate');

    projInfoRef.current.ontransitionend = () => {
      setProjInfo(initialInfo);
      projInfoRef.current.ontransitionend = null;
    };
  }

  return (
    <ProjectInfoRef.Provider value={setProjInfoRef}>
      <ProjInfo.Provider value={projInfo}>
        <OpenProjInfo.Provider value={{ openInfo, closeInfo }}>
          {children}
        </OpenProjInfo.Provider>
      </ProjInfo.Provider>
    </ProjectInfoRef.Provider>
  );
}
