import { Link } from "react-router-dom";
import styles from './tags.module.css'
const Tags = ({ tags }) => {
    return (
        tags?.map(tag => {
            return (
                < Link className={styles.tag} to={`/search/${tag}`}> {tag}</Link >
            )
        })
    );
}

export default Tags;