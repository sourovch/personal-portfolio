import { useProjInfo } from '../../contexts/project_info';

function Certificate({
  info: { img, label, type, disc, alt, file },
}) {
  const [, , { openInfo }] = useProjInfo();

  return (
    <div
      className="resume-certificate-card"
      onClick={() => {
        openInfo({ src: img, type, disc, title: label, alt, file });
      }}
    >
      <div className="img-wrapper">
        <img src={img} alt="nothing" />
      </div>
      <div className="resume-cir-text">{label}</div>
    </div>
  );
}

export default Certificate;
