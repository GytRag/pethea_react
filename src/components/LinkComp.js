import {Link} from "react-router-dom";
import useStore from "../store/main";

const LinkComp = ({linkTo, name}) => {

    const {clickedPage,
        setClickedPage} = useStore((state) => state);

    return (
        <Link to={`/${linkTo}`} className={clickedPage === `${name}` ? 'link link-clicked' : 'link'}
              onClick={() => setClickedPage(`${name}`)}
        >{name}</Link>
    );
};

export default LinkComp;