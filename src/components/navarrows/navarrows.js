import { Link } from 'react-router-dom';
import '../../styles/navarrows.css';

function NavArrows({ paths, currPageIndex }) {
  const beforeIndex =
    currPageIndex === 0 ? paths.length - 1 : currPageIndex - 1;
  const afterIndex =
    currPageIndex === paths.length - 1 ? 0 : currPageIndex + 1;

  return (
    <>
      <Link className="nav-arrow" to={paths[afterIndex]}>
        <i className="fa-solid fa-angle-right"></i>
      </Link>
      <Link className="nav-arrow" to={paths[beforeIndex]}>
        <i className="fa-solid fa-angle-left"></i>
      </Link>
    </>
  );
}

export default NavArrows;
