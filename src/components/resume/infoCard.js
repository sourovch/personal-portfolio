function InfoCard({ data: { year, institute, head, disc } }) {
  return (
    <div className="resume-card">
      <div className="resume-card-info">
        <div className="resume-year">{year}</div>
        <div className="resume-institute">{institute}</div>
      </div>
      <div className="resume-card-sep"></div>
      <div className="resume-card-disc">
        <h3 className="resume-disc-head">{head}</h3>
        <p className="resume-main-disc">{disc}</p>
      </div>
    </div>
  );
}

export default InfoCard;
