import { useContext } from 'react';
import { blogData } from '../../constants/blogData';
import BlogItem from '../blogItem/blogItem';

import blogStyle from './blog.module.css'
import { BlogDataContext } from '../../context/mainContext';

const Blog = () => {
    const { data } = useContext(BlogDataContext)

    return (
        <div className={blogStyle.blog__field}>
            <div className={`field ${blogStyle.field}`}>
                {
                    data.map(blog => {
                        return (
                            <BlogItem key={blog.id} data={blog} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Blog;