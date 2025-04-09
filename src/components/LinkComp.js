import {Link} from "react-router-dom";
import useStore from "../store/main";

const LinkComp = ({linkTo, name}) => {

    const {clickedPage,
        setClickedPage,
        mainLink
    } = useStore((state) => state);

    return (
        <Link to={`${mainLink}/${linkTo}`} className={clickedPage === `${name}` ? 'link link-clicked' : 'link'}
              onClick={() => setClickedPage(`${name}`)}
        >{name}</Link>
    );
};

export default LinkComp;