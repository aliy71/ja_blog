import { ImBlog } from "react-icons/im";
import { Link } from "react-router-dom";

import stl from './otherBlogs.module.css'

const OtherBlogs = ({ blog }) => {
    return (
        <ul className={stl.other__blog__list}>
            {
                blog.map(data => {
                    return (
                        <li className={stl.other__blog__list__item} key={blog.id}>
                            <span>{<ImBlog />}</span>
                            <Link to={`/blog-detail/${data?.id}`} >{data.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default OtherBlogs;