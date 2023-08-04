function Progressbar({ info: { id, label, value } }) {
  return (
    <div className="progressbar-wrapper">
      <label htmlFor={`bar${id}`}>{label}</label>
      <progress id={`bar${id}`} value={parseInt(value)} max="100">
        {' '}
        {value}{' '}
      </progress>
    </div>
  );
}

export default Progressbar;
