import { Button } from "../../ui";
import { FaChevronUp } from "react-icons/fa";
import styles from './scrollToTop.module.css';

const ScrollToTop = ({ scrolly, changeScrollY }) => {

    return (
        <span className={`${styles.scroll__to__top} ${scrolly > 100 ? styles.active : ''}`}>
            <Button
                type={"icon__btn icon__btn__primary"}
                icon={<FaChevronUp size={'1.8rem'} />}
                clickHandlerFn={changeScrollY}
            />
        </span>
    );
}

export default ScrollToTop;