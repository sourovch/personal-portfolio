import st from './heading.module.css';

function Heading({ mainText, coloredText, size }) {
  return (
    <h1 className={st[`h1-${size}`]}>
      {mainText}
      <span className={st.color}> {coloredText && coloredText}</span>
    </h1>
  );
}

export default Heading;
